import citiesReducer from './citiesReducer'
import userReducer from './userReducer'
import itineraryReducer from './itineraryReducer'
const { combineReducers } = require('redux')

const rootReducer = combineReducers({
    cities: citiesReducer,
    user: userReducer,
    itinerary: itineraryReducer
})

export default rootReducer