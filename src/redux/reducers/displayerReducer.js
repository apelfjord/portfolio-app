import { DISPLAYERSELECTOR } from "../actions/types";

const initialState = '';

export default function (state = initialState, action) {
    switch (action.type) {
        case DISPLAYERSELECTOR:
            return action.payload;
        default: 
            return state; 
    }
}