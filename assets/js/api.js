"use strict";

const api_key = "ac0f88edf47ce244186eea0bb5b713b1";
const imageBaseURL = "https://image.tmdb.org/t/p/";

/**
 * fetch data from a server using 'url' and passes the
 * result in JSON data to 'callback' function, along
 *  with an optional parameter if has 'optionalParam'
 */

const fetchDataFromServer = function (url, callback, optionalParam) {
  fetch(url)
    .then((Response) => Response.json())
    .then((data) => callback(data, optionalParam));
};

export { imageBaseURL, api_key, fetchDataFromServer };
