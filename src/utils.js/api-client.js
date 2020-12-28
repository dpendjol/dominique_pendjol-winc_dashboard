/** Content API INFO */
// const API_KEY = "" //Api key got from google cloud
// const API_URL = "" // URL of document
// const API_ARG = "" // values/[sheet]/[range]

// export default API_URL + API_ARG + "?key=" + API_KEY

/*********************************************************** */

/*** Commented this out to prevent errors
import API_ENDPOINT from './api-info';
*/
import { responseGoogle } from '../response/responseSpreadsheet';

/** 
 * Get the values from the sheet. For testing purposes saved the response to a file 
 * called responseSpreadsheet.
 */
//Code only used when getting live data
//export const getData = () => {
//    fetch(API_ENDPOINT)
//        .then(data => data.json())
//        .then(data => {
//            return data.values
//        })
//        .catch(err => console.log(err));
//}

export const getMockData = () => {
    return responseGoogle;
}
