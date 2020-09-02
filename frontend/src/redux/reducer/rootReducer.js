import citiesReducer from './citiesReducer'

const { combineReducers } = require('redux')

const rootReducer = combineReducers({
    cities: citiesReducer
})

export default rootReducer