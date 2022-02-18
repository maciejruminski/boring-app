import app from ".";
import config from "./config";

app.listen(config.port, () => `App is live at ${config.port}`);
