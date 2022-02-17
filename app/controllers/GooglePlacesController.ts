// Libraries.
import fetch from "node-fetch";
import { Request, Response } from "express";

// Config.
import config from "../config";

class GooglePlacesController {
  private createGetPlacesUrl(filters): string {
    const { distance, keyword, type, maxPrice, minPrice, openNow } = filters;
    const url = "https://maps.googleapis.com/maps/api/place/search/json?";
    const loc = "53.4813444,18.7613652";
    const maxP = maxPrice === "_" ? "" : `&maxprice=${maxPrice}`;
    const minP = minPrice === "_" ? "" : `&minprice=${minPrice}`;
    const isOpen = openNow ? "&opennow" : "";

    return `${url}location=${loc}&radius=${distance}&keyword=${keyword}&type=${type}${maxP}${minP}${isOpen}&key=${config.googleApiKey}`;
  }

  private createGetPlaceDetailsUrl(placeID: string): string {
    const url = "https://maps.googleapis.com/maps/api/place/details/json?";

    return `${url}place_id=${placeID}&key=${config.googleApiKey}`;
  }

  async getPlaces(req: Request, res: Response, next) {
    try {
      const url = this.createGetPlacesUrl(req.body.filters);

      await fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response: any) => {
          const places = response?.results.map((res) => {
            return {
              id: res.place_id,
              name: res.name,
              rating: res.rating,
              geometry: res.geometry,
              openNow: res?.opening_hours?.open_now,
            };
          });
          res.json({ status: response.status, places });
        });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }

  async getPlaceDetails(req: Request, res: Response, next) {
    const { placeID } = req.body;

    try {
      const url = this.createGetPlaceDetailsUrl(placeID);

      await fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          res.json({ status: response.status, placeDetails: response.result });
        });
    } catch (err) {
      console.log(err);
      next(err);
    }
  }
}

export default new GooglePlacesController();
