// Libraries.
import { google } from "googleapis";
import { Request, Response } from "express";

// Config.
import config from "../config";
const { serviceAccountEmail, serviceAccountPrivateKey, spreadSheetsID } =
  config;

class GoogleSheetsController {
  private idsColumn: string;
  private filtersColumn: string;
  private historicPlacesColumn: string;

  constructor() {
    this.idsColumn = "Sheet1!A2:A1000";
    this.filtersColumn = "Sheet1!B";
    this.historicPlacesColumn = "Sheet1!C";
  }

  getClientValues() {
    const JwtClient = new google.auth.JWT(
      serviceAccountEmail,
      null,
      serviceAccountPrivateKey.replace(/\\n/gm, "\n"),
      ["https://www.googleapis.com/auth/spreadsheets"],
      null
    );

    const client = google.sheets({ version: "v4", auth: JwtClient });

    return client.spreadsheets.values;
  }

  async getUserRowById(userUUID: string): Promise<number> {
    const spreadsheetIds = await this.getClientValues().get({
      spreadsheetId: spreadSheetsID,
      majorDimension: "ROWS",
      range: this.idsColumn,
    });

    const ids = spreadsheetIds.data.values;
    const row = ids.findIndex((id) => id[0] === userUUID);
    const rowInitialIndex = 2;

    return row + rowInitialIndex;
  }

  async addUser(req: Request, res: Response): Promise<void> {
    const { userUUID }: { userUUID: string } = req.body;
    const clientData = {
      spreadsheetId: spreadSheetsID,
      range: this.idsColumn,
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[userUUID]],
      },
    };

    await this.getClientValues().append(clientData);

    res.json({
      status: "OK",
      message: "Użytkownik został dodany do bazy danych",
      uuid: userUUID,
    });
  }

  async addFilters(req: Request, res: Response) {
    const { filters, userUUID }: { filters: any; userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: spreadSheetsID,
      range: this.filtersColumn + row,
      valueInputOption: "RAW",
      resource: {
        values: [[JSON.stringify(filters)]],
      },
    };

    await this.getClientValues().update(clientData);

    res.json({
      status: "OK",
      message: "Typy filtrów zostały dodane do bazy danych",
    });
  }

  async getFilters(req: Request, res: Response) {
    const { userUUID }: { userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: spreadSheetsID,
      majorDimension: "ROWS",
      range: this.filtersColumn + row,
    };

    const filters = await this.getClientValues().get(clientData);
    const filtersValues = filters.data.values;

    res.json({
      status: "OK",
      filters: filtersValues ? filters.data.values[0][0] : {},
    });
  }

  async addHistoricPlace(req: Request, res: Response) {
    const { places, userUUID }: { places: any; userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: spreadSheetsID,
      range: this.historicPlacesColumn + row,
      valueInputOption: "RAW",
      resource: {
        values: [[JSON.stringify(places)]],
      },
    };

    await this.getClientValues().update(clientData);

    res.json({
      status: "OK",
      message: "Historyczne miejsce dodane do bazy danych",
    });
  }

  async getHistoricPlaces(req: Request, res: Response) {
    const { userUUID }: { userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);

    const clientData = {
      spreadsheetId: spreadSheetsID,
      majorDimension: "ROWS",
      range: this.historicPlacesColumn + row,
    };

    const historicPlaces = await this.getClientValues().get(clientData);
    const historicPlacesValues = historicPlaces.data.values;

    res.json({
      status: "OK",
      historicPlaces: historicPlacesValues ? historicPlacesValues[0] : [],
    });
  }
}

export default new GoogleSheetsController();
