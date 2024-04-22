import fs from "fs";

const getFeatures = () => {
  try {
    const data = fs.readFileSync("features.json", "utf-8");
    const features = JSON.parse(data);
    const sendVideos = features.sendVideos;
    return { sendVideos };
  } catch (error) {
    console.error("Error", error);
    return error;
  }
};

export const features = getFeatures();