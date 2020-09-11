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
                console.log(response.data.message)
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
                swal(response.data.error)
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
    },
    forcedLogin: (tokenLS) => {
        return async (dispatch, getState) => {
            const response = await axios.get('http://localhost:4000/api/user/veriftoken', {
                headers: {
                    Authorization: `Bearer ${tokenLS}`
                }
            })
            console.log(response.data)
            if (response.data.success) {
                dispatch({
                    type: 'LOGUSER',
                    payload: { urlPic: response.data.urlPic, username: response.data.username, success: response.data.success, token: tokenLS, favItineraries: response.data.favItineraries },
                })
            }
        }
    },
    likeItinerary: (id, token) => {
        return async (dispatch, getState) => {
            console.log(id, token)
            const response = await axios.put(`http://localhost:4000/api/itineraries/like`, { id }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data.usuario.favItineraries)
            dispatch({
                type: 'CARGARUSUARIO',
                payload: response.data.usuario
            })
        }
    },
    dislikeItinerary: (id, token) => {
        return async (dispatch, getState) => {
            console.log(id, token)

            const response = await axios.put(`http://localhost:4000/api/itineraries/dislike`, { id }, {
                headers: {
                    Authorization: `Bearer ${token}`

                }

            })
            console.log(response.data.usuario)
            dispatch({
                type: 'CARGARUSUARIO',
                payload: response.data.usuario
            })
        }
    },
}


export default userActions