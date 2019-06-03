import {
  HANDLEINCREASE,
  HANDLEDECREASE,
  FETCH_DATA_FROM_SERVER

} from "./types";
import path from '../../config'

export const fetchNumber = () => dispatch => {
    fetch(path + '/number')
        .then((response) => response.json())
        .then((num) => dispatch({
            type: FETCH_DATA_FROM_SERVER,
            payload: num.number,
        }))
        .catch((err) => console.log(err))
    }

export const increase = () => dispatch => {
    dispatch({
        type: HANDLEINCREASE,
        payload: 1,
    })
}

export const decrease = () => dispatch => {
    console.log('ACtions')
    dispatch({
        type: HANDLEDECREASE,
        payload: 1,
    })
}