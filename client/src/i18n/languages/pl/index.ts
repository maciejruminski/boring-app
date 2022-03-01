import Email from "./SignUp/Email.json";
import Password from "./SignUp/Password.json";
import Filters from "./Dashboard/Filters.json";
import Places from "./Dashboard/Places.json";
import FilterTypes from "./Objects/FilterTypes.json";

const PL = { ...Email, ...Password, ...Filters, ...Places, ...FilterTypes };

export default PL;
