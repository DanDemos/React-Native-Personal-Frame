import axios from 'axios';
import {API_URLs} from './endpoints';
import {em} from '@mantine/core';
import {store} from 'redux/store/configureStore';

// Determine the base URL based on the current environment
const baseUrl =
  API_URLs[
    window?.location?.hostname === "localhost" ? "production" : "production"
  ];

function splitStringWithParams(inputString) {
  const regex = /(\{:.*?\})/g; // Regular expression to match the {:something} pattern
  const splitArr = inputString.split(regex);
  return splitArr.filter(Boolean); // Filter out empty strings from the result
}

// Function to make the API call using Axios
const callAxios = async payload => {
  function replacePlaceholders(splitArr, obj) {
    try {
      const replacedArr = splitArr.map(item => {
        const match = item.match(/\{:(.*?)\}/); // Use regex to extract the key from {:key}
        if (match) {
          const key = match[1];
          if (!obj.hasOwnProperty(key)) {
            throw new Error(
              `${key} is missing in ${baseUrl}/${payload.endpoint.endpoint}`,
            );
          }
          return obj[key];
        }
        return item;
      });
      return replacedArr;
    } catch (e) {
      return e;
    }
  }
  try {
    // Create a config object with the URL and method
    const config = {
      method: payload.endpoint.method,
    };
    if (payload.segment) {
      config.url = `${baseUrl}/${payload.endpoint.endpoint}/${payload.segment}`;
    } else {
      config.url = `${baseUrl}/${payload.endpoint.endpoint}`;
    }

    if (payload.keyparameter) {
      let keyparameterUrlArr = replacePlaceholders(
        splitStringWithParams(config.url),
        payload?.keyparameter,
      );
      if (keyparameterUrlArr instanceof Error) {
        throw Error(keyparameterUrlArr.message);
      } else {
        config.url = keyparameterUrlArr.join('');
      }
    }

    // Conditionally assign params if provided
    if (payload.params) {
      config.params = payload.params;
    }

    // Conditionally assign headers if provided
    if (payload.headers) {
      config.headers = payload.headers;
    }

    // Conditionally assign body if provided
    if (payload.body) {
      config.data = payload.body;
    }

    return axios(config)
      .then(response => {
        return response.data;
      })
      .catch(error => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // console.log(error.response.status);
          // console.log(error.response.data);
          // throw new Error(JSON.stringify(error.response.data));
          return error.response.data;
        } else if (error.request) {
          // The request was made but no response was received
          // console.log(error.request);
          throw new Error('No response received from the server.');
        } else {
          // Something happened in setting up the request that triggered an Error
          // console.log('Error:', error.message);
          throw new Error('Error occurred while making the request.');
        }
      });
  } catch (e) {
    console.error(e.message);
  }
};

export default callAxios;
