import { FETCH_DB } from "../actions/types";

const initialState = {};

export default function(state = initialState, action) {
    switch (action.type) {
        case FETCH_DB:
            return action.payload;
        default: 
            return state;
    }
}
