import { combineReducers } from 'redux'
import incrementCount from './incrementCount'

//defines global store state
const store = combineReducers({
    count: incrementCount
})

export default store