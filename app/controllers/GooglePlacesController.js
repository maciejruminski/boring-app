import fetch from "node-fetch";

const key = "AIzaSyCixmDfK8z2O0674_cXwl_IlqY17UAnGT4";

class GooglePlacesController {
  async getPlaces(req, res, next) {
    const { distance, keyword, type, maxprice, minprice, opennow } = req.body;

    const location = "53.47638527583563,18.762058310853494";
    console.log(req.body);
    try {
      const url = `https://maps.googleapis.com/maps/api/place/search/json?location=${location}&radius=${
        distance ? distance : 5000
      }&keyword=${keyword}${
        opennow ? "&opennow" : ""
      }&type=${type}&maxprice=${maxprice}&minprice=${minprice}&key=AIzaSyCixmDfK8z2O0674_cXwl_IlqY17UAnGT4`;
      // console.log(url);
      await fetch(url, {
        method: "GET",
      })
        .then((response) => response.json())
        .then((data) => {
          const names = data.results.map((data) => data.name);
  
          console.log(names);
          res.json(names);
        });
    } catch (err) {
      next(err);
    }
  }
}

export default new GooglePlacesController();
