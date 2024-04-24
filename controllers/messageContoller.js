import whatsapp from "whatsapp-web.js";
import { bot } from "../config/bot.js";
import {
  cleanPhoneNumber,
  validateAllURLs,
  validatePhoneNumber,
} from "../utils/messageUtils.js";
import { sendVideos, unsafeMime } from "../config/constants.js";

export const sendMessage = async (req, res, next) => {
  try {
    const { number, message, medias } = req.body;

    if (!number) {
      return res.status(400).json({
        success: false,
        message: "Phone number is required",
      });
    }

    if (
      (!message || message.length === 0) &&
      (!medias || medias.length === 0)
    ) {
      return res.status(400).json({
        success: false,
        message: "Message can't be null",
      });
    }

    if (medias && medias.length !== 0) {
      const validateUrls = validateAllURLs(medias, sendVideos);
      if (!validateUrls.success) {
        return res.status(400).json({
          success: false,
          message: validateUrls.error,
        });
      }
    }

    let phone = await cleanPhoneNumber(number);

    const validate = validatePhoneNumber(phone);
    if (!validate) {
      return res.status(400).json({
        success: false,
        message: "Invalid Phone Number",
      });
    }

    phone += "@c.us";
    const exists = bot.getNumberId(phone);
    if (!exists) {
      return res.status(400).json({
        success: false,
        message: "User is not on WhatsApp",
      });
    }

    const sendMessagePromises = [];

    if (message) {
      sendMessagePromises.push(bot.sendMessage(`${phone}`, message));
    }

    if (medias) {
      for (const media of medias) {
        sendMessagePromises.push(
          whatsapp.MessageMedia.fromUrl(media, {
            unsafeMime: unsafeMime,
          })
            .then((mediaMessage) => bot.sendMessage(`${phone}`, mediaMessage))
            .catch((err) => {
              next(err);
            })
        );
      }
    }

    await Promise.all(sendMessagePromises);

    res.status(200).json({
      success: true,
      message: "Message sent successfully",
    });
  } catch (error) {
    next(error);
  }
};