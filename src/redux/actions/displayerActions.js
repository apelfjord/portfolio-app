import {DISPLAYERSELECTOR} from './types';

export const selectToDisplay = (section) => dispatch => {
    dispatch({
        type: DISPLAYERSELECTOR,
        payload: section
    })
}