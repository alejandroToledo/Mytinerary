const initialState = {
    ciudades: [],
    ciudadesFiltrados: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GETCITIES':
            console.log(1)
            return {
                ...state,
                ciudades: action.payload,
                ciudadesFiltrados: action.payload
            }

        default:
            return state
    }
}

export default citiesReducer