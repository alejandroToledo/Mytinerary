import React from 'react';
import Barra from "../components/Barra.js"
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Itineraries extends React.Component {
    state = {
        pais: []
    }

    async componentDidMount() {
        const idAbuscar = this.props.match.params.id
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/itineraries/${idAbuscar}`)
        const ciudad = respuesta.data.buscado
        this.setState({
            pais: ciudad
        }
        )
        console.log(this.state.pais)
    }


    render() {

        return (
            <>
                <header id="fondoCities" style={{ backgroundImage: `url(${this.state.pais.image})`, backgroundSize: 'cover', width: '100vw', height: '50vh', backgroundPosition: 'center' }}>
                    <p className="display-3 text-light bg-dark text-bold text-center mx-auto mb-5 font-weight-bold col-4">{this.state.pais.name}</p>
                    <NavLink to='/cities' ><bottom className="text-center bg-info text-light p-3 mt-5">VOLVER</bottom></NavLink>
                </header>

            </>
        )
    }

}

export default Itineraries;