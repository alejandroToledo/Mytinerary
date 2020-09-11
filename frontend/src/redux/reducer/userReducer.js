const initialState = {
    username: ' ',
    urlPic: '',
    token: '',
    success: '',
    favItineraries: []
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGUSER':
            localStorage.setItem('token', action.payload.token)
            return {
                ...state,
                username: action.payload.username,
                urlPic: action.payload.urlPic,
                token: action.payload.token,
                success: action.payload.success,
                favItineraries: action.payload.favItineraries
            }
        case 'CARGARUSUARIO':
            return {
                ...state,
                favItineraries: action.payload.favItineraries
            }
        case 'LOGOUTUSER':
            localStorage.clear()
            return {
                ...state,
                ...initialState
            }

        default:
            return state
    }
}

export default userReducer