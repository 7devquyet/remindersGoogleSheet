# Telegram Notification Script with Google Apps Script

This script automates the process of checking expiration dates in a Google Spreadsheet and sending notifications to a Telegram group when products expire. 

---

## Features

- **Automated Expiration Checking:** The script scans a Google Spreadsheet for expiration dates and compares them to the current date.
- **Scheduled Notification:** Sends notifications to a specified Telegram chat at a predefined time (e.g., 17:00 daily).
- **Dynamic Messaging:** Constructs detailed messages with product and package information, along with custom notes.

---

## Setup Instructions

### 1. **Google Spreadsheet Requirements**
Prepare a Google Spreadsheet with the following structure:
| **Name**  | **Product** | **Package** | **Buy** | **Expire**    | **Channel**   | **Infor**        |
|-----------|-------------|-------------|---------|---------------|---------------|------------------|
| Customer1 | ProductA    | Package1    | Date1   | ExpireDate1   | ChannelInfo1  | Additional Info1 |

- **Name (Column A):** Customer name.  
- **Expire (Column E):** Expiration date in `YYYY-MM-DD` format.  
- **Channel (Column F):** Optional channel-specific information.  
- **Infor (Column G):** Additional information for notifications.

---

### 2. **Update the Script**
Replace placeholders in the script with your specific details:

- `TELEGRAM_TOKEN`: The bot token from your Telegram Bot.
- `CHAT_ID`: The chat ID of your Telegram group/channel.

### 3. **Set Up Triggers**
1. Open **Extensions > Apps Script** in your Google Spreadsheet.  
2. Copy and paste the script into the editor.  
3. Save the script and authorize the required permissions.  
4. Go to **Triggers** and set up a time-based trigger to run the `checkExpiration` function daily (e.g., at 17:00).

---

## Script Overview

### **Core Functions**

1. **`checkExpiration()`**  
   - Scans the spreadsheet for expiration dates.  
   - Compares each date to the current date and time.  
   - Sends notifications for expired items.

2. **`sendTelegramMessage(message)`**  
   - Sends a message to the specified Telegram chat using the bot's API.

### **Sample Notification Message**
```
Thông báo: Customer1 (ChannelInfo1) đã hết hạn ProductA gói Package1
Additional Info1
```

---

## Dependencies
- **Google Apps Script:** Integrated within Google Workspace.  
- **Telegram Bot API:** Ensure your bot is added to the specified chat/channel and has permission to send messages.

---

## Example Use Case
This script is ideal for small businesses managing subscriptions or services. Automate customer reminders and improve efficiency with instant Telegram notifications.
