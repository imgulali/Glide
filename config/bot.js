import whatsapp from "whatsapp-web.js";
import qrcode from "qrcode-terminal";
import { chromePath, sendVideos } from "./constants.js";

const { Client, LocalAuth } = whatsapp;

const baseConfig = {
  authStrategy: new LocalAuth(),
  webVersionCache: {
    type: 'remote',
    remotePath: 'https://raw.githubusercontent.com/wppconnect-team/wa-version/main/html/2.2410.1.html',
  },
};

if (sendVideos) {
  baseConfig.puppeteer = {
    executablePath: `${chromePath}`,
  };
};

export const bot = new Client(baseConfig);

bot.on("ready", () => {
  console.log("Connected Successfuly");
});

bot.on("qr", async(qr) => {
  qrcode.generate(qr, { small: true });
  console.log("⬆️  Scan this Qr Code using your WhatsApp");
  console.log("Or use this code to generate qr");
  console.log(qr);
});