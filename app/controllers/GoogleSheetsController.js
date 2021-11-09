import { google } from "googleapis";

class GoogleSheetsController {
  async addUser(req, res) {
    const { userUUID } = req.body;

    const JwtClient = new google.auth.JWT(
      "boring-app-test-account@boring-app-331008.iam.gserviceaccount.com",
      null,
      "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQDhcGUt8QRJG/eJ\nd9ZBS7CyMAmJDl/BgCsVjct6TxSQ4sg0qfg3Ubcn90BYFz8WntsCqUZwHBb18Ue5\nP/MY/GvHsEynlTzs0hn72vLVyc1P8iyB0L2jNkIxUFZSZVF6v1Ybd+1jKVIdlm3P\nMZCFzDHH1WakF+J97338u7ZGB7GNLX9VPeBWqCyhiSiov+RYa+br6SWWnk3CrXbh\nyt50hOAdLJV36xCwzRjb5nHh31ea3UQhlRUlE6YMVl5X7mJq5zwi8EauhkUa73rC\n5WzXppO4qbbfltCb/ZFhE2dMATOzfErGPjon7l66O7Q3oVqYAH5k2tX91VYuVLOb\nAgKhgZLJAgMBAAECggEADNYih2gm2fwurx7UuKkU/usUpT+H8kkDAFovkN+kiHob\n85ZjXNBZVnw8p1zDfzKSaTy27GFHvr9QrzAAqUE46IjrBHZ58/N5U/RBSYJmdLvn\nDt6SPb3e16ypuE1ZQ10BC9VbU1R3VC9MQgpMyWGOysB69LMAzDJGgTfgXBfKDgNt\ngJFrs4Tdh7sBDWYi/7FicM6LjydP7BTAiK7GQmCpovs+7eH6scILTuAfwRjga84I\nMvubYRk8DaOw1L90Qb+cmKe+sdU24cswE3xhR36ZjEyUUUa0g5oyEr16VLinVMQA\nvrDYeR9YXpn+6A03Nx1wXYwkFAMFOEcVwulvYIbJZQKBgQDxZ+UPuvXpEsanI3G9\nLATRcjJiWHMO59K9bKNvXw+hvXwvnXPUWd82kEk3eUX7nuPLOZ7gKnh5i0GSWmVl\nPwszV12Cvjebi85ymylsqeL1MqZrkg7wXHL+UaOmkNfSmCXxHkToHXlTbhTsZwG3\n/iHNszn8/7zTeogjFwT8Uh+/6wKBgQDvEWQje82h+1fSX/kJTCl4Vzsd3SyoeZ80\nS0kfGzP6sB8gsZXQxEamho82h2GHBQWRn+uGorUp4hRIywwcKmHUl/YN5dcbx+0/\nCU/39IM4yyet9meUK5kYOKbETr+jGJfaX+a301v+VdhVYip3qAaPj1x0RjZtk0ie\nAe2jUei/GwKBgQCPatDsGn+z+2Kns2gEIh2urPB/+tpIVbOes+cY6FnqFh+sThed\nZdM1oFzPJy5LgacFenMH7FNsqi3HnAq3LtAhrVqxrP5uW43ICqR+mSNr1q6GI9za\nMaJjsu7Nqyl9RMTtzbTUTYZh6XlmxP+BZuqAQWVHCEwPO7GbXzaoDMYuBwKBgFn5\nSJ/WI1EYQDgr6JUoNd9VrSkTKZCKnXFX+EAdw9VQXZa3XzP/+rsHn3SdRQZEzJC/\nCCxWpioKLSosSPV8ue8B9hfK7cdF2jNENPWT76L7Soa9WsQ4GFk2UQVGwfcG9Xe5\naiK7CD9TXaTc2jDIaxeyk9Aq8KcSrFzTSvWRiTALAoGAeBERRpGQ/EGcsLZGvHL6\ngaLKJPi+PeHZYrq6zNCpCQoZThQpPYW28lEDz3bjPoljT7PPvVHm3Cfkn/BiHb74\nzOwcwmkNPXlNPgi/sbFdbptA4M8blKaZ45nScPaI/42RMSu4Y8CkUxhIgX3LPwZK\nPv4BBnrGUMma/kz1Kbc1bx4=\n-----END PRIVATE KEY-----\n",
      ["https://www.googleapis.com/auth/spreadsheets"]
    );

    const client = google.sheets({ version: "v4", auth: JwtClient });
    const spreadsheetId = "1b9v6SN6QIG564iHaZ4z1jeO2desK8f3GtYvXCjLzBnI";

    await client.spreadsheets.values.append({
      spreadsheetId,
      range: "Sheet1!A2:Z1000",
      valueInputOption: "USER_ENTERED",
      resource: {
        values: [[userUUID]],
      },
    });

    res.status(200).json({
      status: 200,
      message: "Użytkownik został dodany do bazy danych",
    });
  }
}

export default new GoogleSheetsController();