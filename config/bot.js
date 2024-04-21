import whatsapp from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { Chrome_Path } from "./constants.js";

const { Client, LocalAuth } = whatsapp;

export const bot = new Client({
  authStrategy: new LocalAuth(),

  //  Comment "puppeteer" if you don't want to send Videos using the api.
  //  Sending videos require a Google Chrome Service so, The address to Chrome exeuctable is used
  puppeteer: {
    executablePath:
      `${Chrome_Path}`,
  },

  webVersionCache: {
    type: "remote",
    remotePath:
      "https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html",
  },
});

bot.on("ready", () => {
  console.log("Connected Successfuly");
});

bot.on("qr", (qr) => {
  qrcode.generate(qr, { small: true });
  console.log("⬆️  Scan this Qr Code using your WhatsApp");
  console.log("Or use this code to generate qr");
  console.log(qr);
});
