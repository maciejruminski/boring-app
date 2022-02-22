import Email from "./SignUp/Email.json";
import Password from "./SignUp/Password.json";
import Filters from "./Dashboard/Filters.json";
import Places from "./Dashboard/Places.json";

const PL = { ...Email, ...Password, ...Filters, ...Places };

export default PL;
