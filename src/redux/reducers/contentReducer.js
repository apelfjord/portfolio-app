import { FETCH_DB } from "../actions/types";

const initalState = [
    {
      "portfolio": {
        "userName": "",
        "password": "",
        "content": {
          "title": "",
          "tags": [""],
          "logoUrl": "",
          "sections": [
            {
              "id": 0,
              "title": "",
              "content": "",
              "elements": [
                {
                    "id": 0,
                    "title": "",
                    "type": "",
                    "URL": "",
                    "content": ""
                  }
              ]
            }
          ]
        }
      }
    }
  ]
  ;

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
