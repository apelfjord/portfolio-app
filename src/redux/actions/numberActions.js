import {
  HANDLEINCREASE,
  HANDLEDECREASE,
  FETCH_DATA_FROM_SERVER

} from "./types";
import path from '../../config'

export const fetchNumber = () => dispatch => {
    console.log('numberActions reached ...')
        fetch(path + '/number')
            .then((response) => response.json())
            .then((num) => dispatch({
                type: FETCH_DATA_FROM_SERVER,
                payload: num.number,
            }))
            .catch((err) => console.log(err))
        }