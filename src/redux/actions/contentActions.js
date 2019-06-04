import { FETCH_DB } from "./types";

import path from "../../config";

export const getContent = () => dispatch => {
  fetch(path + "/mongo")
    .then(jsonData => jsonData.json())
    .then(response => {
      dispatch({
        type: FETCH_DB,
        payload: response.content
      });
    })
    .catch(err => console.log(err));
};
