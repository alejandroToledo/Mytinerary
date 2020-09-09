import axios from 'axios'
import swal from 'sweetalert'

const userActions = {

    createAccount: (newUser) => {
        return async (dispatch, getState) => {
            //Enviar Usuario a la Api
            const response = await axios.post('http://localhost:4000/api/user', newUser)
            console.log(response.data.favItineraries)
            if (!response.data.success) {
                console.log('algo salio mal')
            } else {
                console.log()
                dispatch({
                    type: 'LOGUSER',
                    payload: { urlPic: response.data.urlPic, username: response.data.username, success: response.data.success, token: response.data.token, favItineraries: response.data.favItineraries },
                })
            }
        }
    },
    logUser: (user) => {
        return async (dispatch, getState) => {
            const response = await axios.post('http://localhost:4000/api/login', user)
            console.log(response.data.favItineraries)
            if (!response.data.success) {
                swal(response.data.message)
            } else {
                dispatch({
                    type: 'LOGUSER',
                    payload: { urlPic: response.data.urlPic, username: response.data.username, success: response.data.success, token: response.data.token, favItineraries: response.data.favItineraries },
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