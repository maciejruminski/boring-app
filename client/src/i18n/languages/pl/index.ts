import Email from "./SignUp/Email.json";
import Password from "./SignUp/Password.json";
import Filters from "./Dashboard/Filters.json";
import Places from "./Dashboard/Places.json";
import FilterTypes from "./Objects/FilterTypes.json";
import Prices from "./Objects/Prices.json";

const PL = {
  ...Email,
  ...Password,
  ...Filters,
  ...Places,
  ...FilterTypes,
  ...Prices,
};

export default PL;
