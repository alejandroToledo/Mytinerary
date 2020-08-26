import React from 'react';
import Barra from "../components/Barra.js"
import Capitales from "../components/Capitales.js"
import axios from 'axios'

class Cities extends React.Component {

    state = {
        ciudades: [],
        ciudadesFiltrados: []
    }
    async componentDidMount() {
        const response = await axios('http://localhost:4000/api/cities')
        const lista = response.data.cities
        this.setState({
            ciudades: lista,
            ciudadesFiltrados: lista
        })
    }
    capturarPais = e => {
        const valorIngresado = e.target.value.trim()

        const filtrado = this.state.ciudades.filter(ciudad => ciudad.name.toLowerCase().indexOf(valorIngresado.toLowerCase()) === 0)

        this.setState({
            ciudadesFiltrados: filtrado
        })
    }

    render() {
        return (
            <>
                <header id="fondoCities" >
                    <Barra />
                </header>

                <section className="container-fluid d-md-flex flex-column justify-content-center text-center pt-5 ">
                    <h1>Choose your destiny</h1>
                    <div className="mb-3 mt-1">
                        <label >Enter the city:</label>
                        <input className="ml-2 w-25" type="text" placeholder="e.g. Paris" name="capital" id="capital" onChange={this.capturarPais}></input>
                    </div>

                    <ul className=" ml-sm-5 mr-sm-5 d-flex align-items-center row">
                        {this.state.ciudadesFiltrados.map(ciudad => {
                            return <Capitales ciudad={ciudad} />
                        })}
                    </ul>
                </section>
            </>
        )
    }

}

export default Cities;