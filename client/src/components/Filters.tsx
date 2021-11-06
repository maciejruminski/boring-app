import React from "react";

export default function Filters() {
  const places = [
    "accounting",
    "airport",
    "amusement_park",
    "aquarium",
    "art_gallery",
    "atm",
    "bakery",
    "bank",
    "bar",
    "beauty_salon",
    "bicycle_store",
    "book_store",
    "bowling_alley",
    "bus_station",
    "cafe",
    "campground",
    "car_dealer",
    "car_rental",
    "car_repair",
    "car_wash",
    "casino",
    "cemetery",
    "church",
    "city_hall",
    "clothing_store",
    "convenience_store",
    "courthouse",
    "dentist",
    "department_store",
    "doctor",
    "drugstore",
    "electrician",
    "electronics_store",
    "embassy",
    "fire_station",
    "florist",
    "funeral_home",
    "furniture_store",
    "gas_station",
    "gym",
    "hair_care",
    "hardware_store",
    "hindu_temple",
    "home_goods_store",
    "hospital",
    "insurance_agency",
    "jewelry_store",
    "laundry",
    "lawyer",
    "library",
    "light_rail_station",
    "liquor_store",
    "local_government_office",
    "locksmith",
    "lodging",
    "meal_delivery",
    "meal_takeaway",
    "mosque",
    "movie_rental",
    "movie_theater",
    "moving_company",
    "museum",
    "night_club",
    "painter",
    "park",
    "parking",
    "pet_store",
    "pharmacy",
    "physiotherapist",
    "plumber",
    "police",
    "post_office",
    "primary_school",
    "real_estate_agency",
    "restaurant",
    "roofing_contractor",
    "rv_park",
    "school",
    "secondary_school",
    "shoe_store",
    "shopping_mall",
    "spa",
    "stadium",
    "storage",
    "store",
    "subway_station",
    "supermarket",
    "synagogue",
    "taxi_stand",
    "tourist_attraction",
    "train_station",
    "transit_station",
    "travel_agency",
    "university",
    "veter",
    "inary_care",
    "zoo",
  ];

  return (
    <form action="" method="POST">
      <div className="form-group">
        <label htmlFor="formGroupExampleInput">Distance</label>
        <input
          type="number"
          className="form-control"
          id="distance"
          name="distance"
          placeholder="distance"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Keyword</label>
        <input
          type="text"
          className="form-control"
          id="keyword"
          name="keyword"
          placeholder="keyword"
        />
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Type</label>
        <select
          className="form-control"
          id="type"
          name="type"
          placeholder="type"
        >
          <option value="">--Please choose an option--</option>
          {places.map((element) => {
            <option value="{element}">{element} </option>;
          })}
        </select>
      </div>
      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Min Price</label>
        <select
          className="form-control"
          id="minprice"
          name="minprice"
          placeholder="minprice"
        >
          <option value="">--Please choose a price</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Max Price</label>
        <select
          className="form-control"
          id="maxprice"
          name="maxprice"
          placeholder="maxprice"
        >
          <option value="">--Please choose a price</option>
          <option value="0">0</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
        </select>
      </div>

      <div className="form-group">
        <label htmlFor="formGroupExampleInput2">Show only open now items</label>
        <input
          type="checkbox"
          className="form-control"
          id="opennow"
          name="opennow"
          placeholder="opennow"
        />
      </div>

      <button type="submit" className="btn btn-primary btn-sm">
        Submit
      </button>
    </form>
  );
}
