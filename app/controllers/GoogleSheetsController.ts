// Libraries.
import { google } from "googleapis";
import { Request, Response } from "express";

// Config.
import config from "../config";
const { serviceAccountEmail, serviceAccountPrivateKey, spreadSheetsID } =
  config;

class GoogleSheetsController {
  getClientValues() {
    const JwtClient = new google.auth.JWT(
      serviceAccountEmail,
      null,
      serviceAccountPrivateKey,
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
      range: "Sheet1!A2:A1000",
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
      range: "Sheet1!A2",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[userUUID]],
      },
    };

    await this.getClientValues().append(clientData);

    res.status(200).json({
      status: 200,
      message: "Użytkownik został dodany do bazy danych",
      uuid: userUUID,
    });
  }

  async addFilters(req: Request, res: Response) {
    const { filters, userUUID }: { filters: any; userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: spreadSheetsID,
      range: "Sheet1!B" + row,
      valueInputOption: "RAW",
      resource: {
        values: [[JSON.stringify(filters)]],
      },
    };

    await this.getClientValues().update(clientData);

    res.status(200).json({
      status: 200,
      message: "Typy filtrów zostały dodane do bazy danych",
    });
  }

  async getFilters(req: Request, res: Response) {
    const { userUUID }: { userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: spreadSheetsID,
      majorDimension: "ROWS",
      range: "Sheet1!B" + row,
    };

    const filters = await this.getClientValues().get(clientData);
    const filtersValues = filters.data.values;

    res.status(200).json({
      status: 200,
      filters: filtersValues ? filters.data.values[0][0] : {},
    });
  }

  async addHistoricPlace(req: Request, res: Response) {
    const { places, userUUID }: { places: any; userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: spreadSheetsID,
      range: "Sheet1!C" + row,
      valueInputOption: "RAW",
      resource: {
        values: [[JSON.stringify(places)]],
      },
    };

    await this.getClientValues().update(clientData);

    res.status(200).json({
      status: 200,
      message: "Historyczne miejsce dodane do bazy danych",
    });
  }

  async getHistoricPlaces(req: Request, res: Response) {
    const { userUUID }: { userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: spreadSheetsID,
      majorDimension: "ROWS",
      range: "Sheet1!C" + row,
    };

    const historicPlaces = await this.getClientValues().get(clientData);
    const historicPlacesValues = historicPlaces.data.values;

    console.log("@@@@", historicPlacesValues);

    res.status(200).json({
      status: 200,
      historicPlaces: historicPlacesValues ? historicPlacesValues[0] : [],
    });
  }
}

export default new GoogleSheetsController();
