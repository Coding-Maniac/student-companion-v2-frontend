/**
 * Returns the host url for the API
 * */

export const getApiHostUrl = () => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3030'; // Runs in local machine
  }
  return 'http://localhost:3030';
};
