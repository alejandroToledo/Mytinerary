import axios from 'axios'

const itineraryActions = {
    getItineraries: (id) => {
        return async (dispatch, getState) => {
            console.log(id)
            const response = await axios.get(`http://127.0.0.1:4000/api/itineraries/${id}`)
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
        }
    },
    putCommentary: (id, commentary, token) => {
        return async (dispatch, getState) => {
            console.log(id, token, commentary)
            const response = await axios.put(`http://localhost:4000/api/itineraries/commentsEdit`, { id, commentary }, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
        }
    },
    deleteCommentary: (id, commentary, token) => {
        return async (dispatch, getState) => {
            console.log(id, token, commentary)
            const response = await axios.delete(`http://localhost:4000/api/itineraries/commentsEdit`)
        }
    },
    modifyCommentary: (id, commentary, token) => {
        return async (dispatch, getState) => {
            console.log(id, token, commentary)
            const response = await axios.put(`http://localhost:4000/api/itineraries/commentsEdit`)

        }
    }

}

export default itineraryActions