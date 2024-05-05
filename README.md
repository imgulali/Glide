
# Glide

Glide is WhatsApp api to send messages to users.

***Note:** This is an unofficial api. Use this responsibly*


## Setup Locally

Clone the project

```bash
  git clone https://github.com/imgulali/glide
```

Go to the project directory

```bash
  cd glide
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run start
```


## First Time

After running the project for first time you will need to **scan this QR Code** by the **WhatsApp** account you want to use.

![App Screenshot](https://i.ibb.co/jJTxXYy/first.png)

After scanning the code wait for a few seconds until you see **Connected Successfully!**

**Note:** A directory with following name will appear. It stores the session do not delete it unless you want to disconnect the account.
```bash
  .wwebjs_auth
```

## After That

After that the project will automaticaly connect using the session in ".wwebjs_auth" directory.

![App Screenshot](https://i.ibb.co/R36WvgQ/after.png)

## API Reference

### Send Message

```http
  POST /message/send
```

| Body | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `number` | `string` | **Required**. Phone Number |
| `message` | `string` | **Optional**. Text Message  |
| `media` | `array` | **Optional**. Url(s) of picture(s) or audio(s) or video(s)  |


### Response Format

#### Successful Request
```json
{
    success: true,
    message: "Message has been sent successfully",
}
```

#### Unsuccessful Request
```json
{
    success: false,
    message: "The error will be displayed here",
}
```

## Settings.json
You can edit settings related to the project here. You can change the PORT, and chrome executable path with respect to your computer. Features ar discussed later in the docs.

***Warning**: Donot remove any setting or delete this file. Just change the settings.*


#### File:
```bash
  settings.json
```


#### Code:
```json
{
    "config":{
        "PORT": 4500,
        "chromePath": "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe"
    },
    
    "features": {
        "sendVideos": true,
        "unsafeMime": true
    }
}
```


## Send Videos
If you want to send videos over the api you will need to enable it in the settings. **Enabled by default**


#### File:
```bash
  settings.js
```


#### Code:
```json
{
    "features": {
        "sendVideos": true
    }
}
```


***Note:** Also verify the path to the Chrome executable, which by default is:*

```bash
  C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe
```
## Run On Server
To run this on a server you will need to **disable video sharing** because that is not possible without Google Chrome.

### Disable Video Sharing

#### File
```bash
  settings.json
```

#### Code:
```json
{
    "features": {
        "sendVideos": false
    }
}
```
## FAQ

### Error: Unable to determine MIME type using URL

This error happens when there is URL which is not direct to the content or media. Dirct URLs contain the file type at the end like

#### For Example
```bash
https://i.ibb.co/LYjgyCs/hello.jpg
```

If anyway you want to send that content over the api. Enable it in the settings.

#### File:
```bash
settings.json
```


#### Code:
```json
{
    "features": {
        "unsafeMime": true
    }
}
```
## License

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)

