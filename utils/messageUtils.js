export const cleanPhoneNumber = (phone) => {
  let cleanedNumber = phone.replace(/\D/g, "");
  if (cleanedNumber.startsWith("0")) {
    cleanedNumber = "92" + cleanedNumber.substring(1);
  }
  return cleanedNumber;
};

export const validatePhoneNumber = (phoneNumber) => {
  const regex = /^(?:\+92|92)?\d{10}$/;
  return regex.test(phoneNumber);
};

export const isValidURL = (url) => {
  var urlRegex =
    /^(?:https?|ftp):\/\/(?:www\.)?[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,}(?:\/\S*)?$/;
  if (urlRegex.test(url)) {
    return true;
  } else {
    return false;
  }
};

export const validateAllURLs = (URLs, feature) => {
  let invalid = 0;
  let videos = 0;

  URLs.map((url) => {
    if (!isValidURL(url)) {
      invalid += 1;
    }
    if (!feature && isVideo(url)) {
      videos += 1;
    }
  });

  if (videos > 0) {
    if (invalid > 0) {
      return { success: false, error: "Invalid Url(s)" };
    } else {
      return { success: false, error: "Sending videos is disabled" };
    }
  } else return { success: true };
};

export const isVideo = (url) => {
  const videoRegex = /\.(mp4|avi|mov|wmv|flv|mkv|webm)$/i;
  return videoRegex.test(url);
};
