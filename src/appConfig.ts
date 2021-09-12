/**
 * Returns the host url for the API
 * */

export const getApiHostUrl = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://localhost:3030'; // Runs in local machine
  }
  return 'https://student-companion-4t4wh.ondigitalocean.app/';
};
