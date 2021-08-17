/**
 * Returns the host url for the API
 * */

export const getApiHostUrl = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3030'; // Runs in local machine
  }
  return 'https://3a33988c73a9.ngrok.io';
};
