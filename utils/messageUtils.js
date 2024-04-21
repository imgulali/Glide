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

export const validateAllURLs = (URLs) => {
  let count = 0;
  
  URLs.map((url) => {
    if (!isValidURL(url)) {
      count += 1;
    }
  });

  if (count > 0) return false;
  else return true;
};
