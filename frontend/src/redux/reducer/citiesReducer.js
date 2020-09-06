const initialState = {
    ciudades: [],
    ciudadesFiltrados: []
}

const citiesReducer = (state = initialState, action) => {
    switch (action.type) {

        case 'GETCITIES':
            return {
                ...state,
                ciudades: action.payload,
                ciudadesFiltrados: action.payload
            }
        case 'FILTERCITIES':
            const filtrado = state.ciudades.filter(ciudad => ciudad.name.toLowerCase().indexOf(action.payload.toLowerCase()) === 0)
            return {
                ...state,
                ciudadesFiltrados: filtrado
            }

        default:
            return state
    }
}

export default citiesReducer