const initialState = {

}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'LIKE':
            return {
                ...state,

            }

        default:
            return state
    }
}

export default userReducer