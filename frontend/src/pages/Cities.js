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
        const response = await axios('http://localhost:4000/api/ciudades')
        const lista = response.data.cities
        console.log(lista)
        this.setState({
            ciudades: lista,
            ciudadesFiltrados: lista
        })
    }
    capturarPais = e => {
        const valorIngresado = e.target.value.trim()
        const filtrado = this.state.ciudades.filter(pais => pais.name.indexOf((valorIngresado.charAt(0).toUpperCase() +
            valorIngresado.slice(1).toLowerCase()).trim()) === 0)

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
                    <div>
                        <label >Enter the city:</label>
                        <input type="text" placeholder="e.g. France" name="capital" id="capital" onChange={this.capturarPais}></input>
                    </div>
                    <ul className=" ml-0 mr-d-flex align-items-center row">
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