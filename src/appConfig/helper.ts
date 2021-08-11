import { getApiHostUrl } from 'appConfig';

/**
 * Gives be base API URL
 * */

export const BASEURL = getApiHostUrl();

/**
 * Centralized function to fetch APIs
 * */

export const triggerSimpleAjax = (endpoint: string, method = 'POST', data = {}): Promise<null | Response> => {
  const URL = `${BASEURL}/${endpoint}`;
  return new Promise((resolve, reject) => {
    fetch(URL, {
      method,
      headers: { Accept: 'application/json', 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
