const TELEGRAM_TOKEN = '<TOKEN_TELEGRAM_BOT>'; // Replace with your bot's token
const CHAT_ID = '<ID_CHAT>'; // Replace with your chat ID

function checkExpiration() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  
  // Set the time you want to check (e.g., 17:00)
  const targetHour = 17; // Hour (0-23)
  const targetMinute = 0; // Minute (0-59)

  // Set the time for today
  today.setHours(targetHour, targetMinute, 0, 0);
  
  for (let i = 1; i < data.length; i++) {
    const name = data[i][0]; // Customer name
    const expirationDate = new Date(data[i][4]); // Expiration date from the "Expire" column

    // Set the time for the expiration date
    expirationDate.setHours(targetHour, targetMinute, 0, 0);

    // Check if the expiration date is today or earlier
    if (expirationDate <= today) {
      const product = data[i][1]; // Product
      const package = data[i][2]; // Package
      const channel = data[i][5];
      const infor = data[i][6];
      const message = `Notification: ${name} (${channel}) has expired for ${product}, package ${package}\n${infor}`;
      sendTelegramMessage(message);
    }
  }
}

function sendTelegramMessage(message) {
  const url = `https://api.telegram.org/bot${TELEGRAM_TOKEN}/sendMessage`;
  const payload = {
    chat_id: CHAT_ID,
    text: message,
  };

  const options = {
    method: 'post',
    contentType: 'application/json',
    payload: JSON.stringify(payload),
  };

  UrlFetchApp.fetch(url, options);
}