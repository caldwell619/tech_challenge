// similar to the mutation in Vuex
import { INCREMENT_COUNT } from "../actions/types";

// Vuex getter?
export default (state = 0, action) => {
    switch (action.type){
        case INCREMENT_COUNT:
            return state + 1;
        default:
            return state
    }
}