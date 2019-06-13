import { AUTHENTICATION } from './types';

import path from "../../config";

export const authenticate = () => dispatch => {
    console.log('actions reached')
    fetch(path + '/admin')
        .then(jsonData => jsonData.json())
        .then(response => {
            dispatch({
                type: AUTHENTICATION,
                payload: response.authenticated,     
            })
        })
        .catch(err => console.log(err))
}