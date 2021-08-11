/**
 * Returns the host url for the API
 * */

export const getApiHostUrl = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://a2bfc03ee619.ngrok.io'; // Runs in local machine
  }
  return 'http://a2bfc03ee619.ngrok.io';
};
