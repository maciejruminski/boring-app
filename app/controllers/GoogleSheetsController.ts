// Libraries.
import { google } from "googleapis";
import { Request, Response } from "express";

class GoogleSheetsController {
  getClientValues() {
    const JwtClient = new google.auth.JWT(
      process.env.SERVICEACCOUNT_EMAIL,
      null,
      process.env.SERVICEACCOUNT_PRIVATE_KEY,
      ["https://www.googleapis.com/auth/spreadsheets"],
      null
    );

    const client = google.sheets({ version: "v4", auth: JwtClient });

    return client.spreadsheets.values;
  }

  async getUserRowById(userUUID: string): Promise<number> {
    const spreadsheetIds = await this.getClientValues().get({
      spreadsheetId: process.env.SPREADSHEETS_ID,
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
      spreadsheetId: process.env.SPREADSHEETS_ID,
      range: "Sheet1!A2:Z1000",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[userUUID]],
      },
    };

    await this.getClientValues().append(clientData);

    res.status(200).json({
      status: 200,
      message: "Użytkownik został dodany do bazy danych",
    });
  }

  async addFilterTypes(req: Request, res: Response) {
    const { filterTypes, userUUID }: { filterTypes: any; userUUID: string } =
      req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: process.env.SPREADSHEETS_ID,
      range: "Sheet1!B" + row,
      valueInputOption: "RAW",
      resource: {
        values: [[JSON.stringify(filterTypes)]],
      },
    };

    await this.getClientValues().update(clientData);

    res.status(200).json({
      status: 200,
      message: "Typy filtrów zostały dodane do bazy danych",
    });
  }

  async addHistoricPlace(req: Request, res: Response) {
    const { places, userUUID }: { places: any; userUUID: string } = req.body;
    const row = await this.getUserRowById(userUUID);
    const clientData = {
      spreadsheetId: process.env.SPREADSHEETS_ID,
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
      spreadsheetId: process.env.SPREADSHEETS_ID,
      majorDimension: "ROWS",
      range: "Sheet1!C" + row,
    };

    const historicPlaces = await this.getClientValues().get(clientData);

    res.status(200).json({
      status: 200,
      historicPlaces: historicPlaces.data.values[0],
    });
  }
}

export default new GoogleSheetsController();
