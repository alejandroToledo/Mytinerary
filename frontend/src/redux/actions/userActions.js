import axios from 'axios'

const userActions = {

    createAccount: (newUser) => {
        return async (dispatch, getState) => {
            //Enviar Usuario a la Api
            const response = await axios.post('http://localhost:4000/api/user', newUser)
            console.log(response.data)
            if (!response.data.success) {
                alert('algo salio mal')
            } else {
                dispatch({
                    type: 'LOGUSER',
                    payload: response.data.user
                })
            }
        }
    },
    logUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/login', user)
            if (!response.data.success) {
                alert(response.data.message)
            } else {
                dispatch({
                    type: 'LOGUSER',
                    payload: response.data.user
                })
            }
        }
    },
    logOut: () => {
        return (dispatch, getState) => {
            dispatch({
                type: 'LOGOUTUSER'
            })
        }
    }
}

export default userActions