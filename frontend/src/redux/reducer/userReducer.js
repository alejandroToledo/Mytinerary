const initialState = {
    firstName: ' ',
    lastName: ' ',
    urlPic: '',
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LOGUSER':

            return {
                ...state,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
                urlPic: action.payload.urlPic
            }
        case 'LOGOUTUSER':

            return {
                ...state,
                firstName: ' ',
                lastName: ' ',
                urlPic: '',
            }

        default:
            return state
    }
}

export default userReducer