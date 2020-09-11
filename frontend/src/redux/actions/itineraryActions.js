import axios from 'axios'

const itineraryActions = {
    getItineraries: (id) => {
        return async (dispatch, getState) => {
            console.log(id)
            const response = await axios.get(`http://127.0.0.1:4000/api/itineraries/${id}`)
            let respuesta = response.data

            dispatch({
                type: 'CARGARITINERARIOS',
                payload: respuesta.itineraries
            })
        }
    },

    putCommentary: (id, commentary, token, idComment) => {
        return async (dispatch, getState) => {
            console.log(id, token, commentary)
            const response = await axios.put(`http://localhost:4000/api/itineraries/comments`, { id, commentary, idComment }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            console.log(response.data)
            dispatch({
                type: 'CARGARITINERARIOS',
                payload: response.data.itineraries
            })
        }
    },
    deleteCommentary: (id, idItinerary) => {
        return async (dispatch, getState) => {
            console.log(id, idItinerary)
            const response = await axios.put(`http://localhost:4000/api/itineraries/commentsDelete`, { id, idItinerary })
            dispatch({
                type: 'CARGARITINERARIOS',
                payload: response.data.itineraries
            })
        }
    },
    modifyCommentary: (id, commentary, idItinerary) => {
        return async (dispatch, getState) => {
            console.log(id, commentary, idItinerary)
            const response = await axios.put(`http://localhost:4000/api/itineraries/commentsEdit`, { id, commentary, idItinerary })
            dispatch({
                type: 'CARGARITINERARIOS',
                payload: response.data.itineraries
            })

        }
    }

}

export default itineraryActions