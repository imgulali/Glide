import { configDotenv } from "dotenv";
configDotenv();

export const PORT = process.env.PORT || 4500;
export const Chrome_Path = process.env.Chrome_Path || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
