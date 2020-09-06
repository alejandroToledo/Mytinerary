import axios from 'axios'

const itineraryActions = {
    like: () => {
        return async (dispatch, getState) => {
            const response = await axios.put('http://localhost:4000/api/itinerary:id')
            dispatch({
                type: 'LIKE',
                payload: info,
            })
        }
    }
}

export default itineraryActions