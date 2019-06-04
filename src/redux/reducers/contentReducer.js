import { FETCH_DB } from "../actions/types";

const initalState = [];

export default function(state = initalState, action) {
    switch (action.type) {
        case FETCH_DB:
            return {
                ...state,
                content: action.payload
            };
        default: 
            return state;
    }
}
