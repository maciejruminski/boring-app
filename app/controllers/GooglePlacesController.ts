// Libraries.
import fetch from "node-fetch";

class GooglePlacesController {
  async getPlaces(req, res, next) {
    const { distance, keyword, type, maxprice, minprice, opennow } =
      req.body.filters;

    const location = "53.4813444,18.7613652";

    try {
      const url = `https://maps.googleapis.com/maps/api/place/search/json?location=${location}&radius=${distance}&keyword=${keyword}${
        opennow ? "&opennow" : ""
      }&type=${type}&maxprice=${maxprice}&minprice=${minprice}&key=${
        process.env.GOOGLE_API_KEY
      }`;

      await fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data: any) => {
          const places = data?.results.map((data) => {
            return {
              id: data.place_id,
              name: data.name,
              rating: data.rating,
              geometry: data.geometry,
              openNow: data?.opening_hours?.open_now,
            };
          });

          res.status(200).json({ status: 200, places });
        });
    } catch (err) {
      next(err);
    }
  }

  async getPlaceDetails(req, res, next) {
    const { placeID } = req.body;

    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeID}&key=${process.env.GOOGLE_API_KEY}`;

      await fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((response) => {
          res.status(200).json({ status: 200, placeDetails: response.result });
        });
    } catch (err) {
      next(err);
    }
  }
}

export default new GooglePlacesController();
