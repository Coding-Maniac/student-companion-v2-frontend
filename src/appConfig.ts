/**
 * Returns the host url for the API
 * */

export const getApiHostUrl = (): string => {
  if (process.env.NODE_ENV === 'development') {
    return 'http://192.168.1.10:8000'; // Runs in local machine
  }
  return 'http://192.168.1.10:8000';
};
