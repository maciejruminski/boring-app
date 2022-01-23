import fetch from "node-fetch";

class GooglePlacesController {
  async getPlaces(req, res, next) {
    const { distance, keyword, type, maxprice, minprice, opennow } =
      req.body.filters;

    const location = "53.47638527583563,18.762058310853494";

    try {
      const url = `https://maps.googleapis.com/maps/api/place/search/json?location=${location}&radius=${
        distance ? distance : 5000
      }&keyword=${keyword}${
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

          // console.log(data.results);

          res.status(200).json({ status: 200, places });
        });
    } catch (err) {
      next(err);
    }
  }

  async getPlaceDetails(req, res, next) {
    const { placeId } = req.body;

    try {
      const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${placeId}&key=${process.env.GOOGLE_API_KEY}`;

      // await fetch(url, {
      //   method: "GET",
      // })
      //   .then((response) => response.json())
      //   .then((placeDetails) => {
      //     res.status(200).json({ status: 200, placeDetails });
      //   });
    } catch (err) {
      next(err);
    }
  }
}

export default new GooglePlacesController();
