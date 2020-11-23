import API_ENDPOINT from './api-info';
import { responseGoogle } from '../response/responseSpreadsheet';

/**
 * Get the values from the sheet. For testing purposes saved the response to a file 
 * called responseSpreadsheet.
 */
export const getData = () => {
    fetch(API_ENDPOINT)
        .then(data => data.json())
        .then(data => {
            return data.values
        })
        .catch(err => console.log(err));
}

export const getMockData = () => {
    return responseGoogle;
}