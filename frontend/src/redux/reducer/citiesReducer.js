const initialState = {
    cities: [],
    filteredCities: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GETCITIES':
            return {
                ...state,
                cities: action.payload,
                filteredCities: action.payload
            }
        case 'FILTERCITIES':
            const filtered = state.cities.filter(ciudad => ciudad.name.toLowerCase().indexOf(action.payload.toLowerCase()) === 0)
            return {
                ...state,
                filteredCities: filtered
            }

        default:
            return state
    }
}

export default citiesReducer