# 🚀 Node Telegram Connector

**Welcome to the Node Telegram Connector!** This application bridges the Telegram Bot API with a Python-based Bot Application. 🎉

🔗 **Bot Application Repository**
You can find the Bot Application developed in Python in the following link:
[Telegram Expenses Chatbox](https://www.github.com/cotixmol/telegram_expenses_chatbox)

## 📜 Overview

This connector adapts messages from Telegram, enabling seamless communication between the Telegram Bot and the LLM Bot Application. Below is the structure of a typical message received from Telegram:

```json
{
    "message_id": int,
    "from": {
        "id": int,
        "is_bot": bool,
        "first_name": str,
        "last_name": str,
        "language_code": str
    },
    "chat": {
        "id": int,
        "first_name": str,
        "last_name": str,
        "type": str
    },
    "date": int,
    "text": str,
    "entities": [
        {
            "offset": int,
            "length": int,
            "type": str
        }
    ]
}
```

### 🛠️ Features

- **Message Adaptation**: Converts Telegram messages to a format suitable for the Bot Application.
  
  Adapted message format:
  ```json
  {
      "user_id": int,
      "first_name": str,
      "last_name": str,
      "text": str
  }
  ```

- **Seamless Integration**: Ensures smooth communication between different platforms.

- **Response Handling**: Receives processed responses from the Python Bot Application and sends them back to the Telegram Bot. Response format:
  ```json
  {
      "status": 200,
      "message": {
          "user_id": int,
          "content": str
      }
  }
  ```

### 📦 Installation

1. **Clone the Repository**
    ```sh
    git clone https://www.github.com/cotixmol/telegram_expenses_chatbox
    ```

2. **Install Dependencies**
    ```sh
    npm install
    ```

3. **Set the Environment Variables in a `.env` File**
    ```sh
    # Production
    PYTHON_BOT_SERVICE_URL=
    TELEGRAM_BOT_TOKEN=
    # Local
    # PYTHON_BOT_SERVICE_URL="http://localhost:8000"
    ```

4. **Run the Connector**
    ```sh
    npm start
    ```

### 🛠️ Testing

You can test the reception and response of the application by using ngrok in your local setup. Use the input request (a Telegram fake message) to connect with the local environment in the Python Bot App and verify the end-to-end interaction.