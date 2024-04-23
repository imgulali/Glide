import fs from "fs";

const getSettings = async () => {
  try {
    const data = await fs.promises.readFile("settings.json", "utf-8");
    const settings = JSON.parse(data);
    return { 
      PORT: settings.config.PORT,
      chromePath: settings.config.chromePath,
      sendVideos: settings.features.sendVideos,
      unsafeMime: settings.features.unsafeMime
    };
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

export const settings = await getSettings();