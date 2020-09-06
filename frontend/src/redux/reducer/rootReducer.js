import citiesReducer from './citiesReducer'
import userReducer from './userReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers({
    cities: citiesReducer,
    user: userReducer
})

export default rootReducer