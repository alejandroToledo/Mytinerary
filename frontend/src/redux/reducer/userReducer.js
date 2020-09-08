const initialState = {
    username: ' ',
    urlPic: '',
    token: '',
    success: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGUSER':
            console.log(action)
            return {
                ...state,
                username: action.payload.username,
                urlPic: action.payload.urlPic,
                token: action.payload.token,
                success: action.payload.success
            }
        case 'LOGOUTUSER':

            return {
                ...state,
                ...initialState
            }

        default:
            return state
    }
}

export default userReducer