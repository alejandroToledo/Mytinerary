const initialState = {
    itinerarios: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIKE':
            return {
                ...state,
            }
        case 'CARGARITINERARIOS':
            return {
                ...state,
                itinerarios: action.payload
            }
        default:
            return state
    }
}

export default userReducer