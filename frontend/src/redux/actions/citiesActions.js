import axios from 'axios'

const citiesActions = {
    getInfo: () => {
        return async (dispatch, getState) => {
            const response = await axios.get('http://localhost:4000/api/cities')
            const info = response.data.cities
            dispatch({
                type: 'GETCITIES',
                payload: info,
            })
        }
    },
    filterCities: (filter) => {
        return async (dispatch, getState) => {
            dispatch({
                type: 'FILTERCITIES',
                payload: filter
            })
        }
    }
}

export default citiesActions