import axios from 'axios'

const citiesActions = {
    getInfo: () => {
        return async (dispatch, getState) => {
            console.log('hola')
            const response = await axios.get('http://localhost:4000/api/cities')
            const info = response.data.cities
            dispatch({
                type: 'GETCITIES',
                payload: info,
            })
        }
    }
}

export default citiesActions