import {
  HANDLEDECREASE,
  HANDLEINCREASE,
  FETCH_DATA_FROM_SERVER
} from "../actions/types";

const initalState = {
  number: 1
};

export default function(state = initalState, action) {
  switch (action.type) {
    case FETCH_DATA_FROM_SERVER:
    console.log('reducer ...')
        return {
            ...state,
            number: action.payload,
        }
    default:
      return state;
  }
}
