import { settings } from "./settings.js";

export const PORT = settings.PORT || 4500;
export const chromePath = settings.chromePath || "C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe";
export const sendVideos = settings.sendVideos || false;
export const unsafeMime = settings.unsafeMime || false;