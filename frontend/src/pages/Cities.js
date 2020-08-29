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
        const noCities = () => {
            if (this.state.ciudadesFiltrados.length === 0) {
                return (
                    <div className=" d-flex justify-content-center">
                        <div className=" bs-example mt-5 col-8 card pl-0 pr-0">
                            <div className="card">
                                <p className="text-dark font-weight-bold bg-info text-center align-middle col-12" >No hay ciudades :(</p>
                            </div>
                        </div>
                    </div>
                )
            }
        }
        return (
            <>
                <header  >
                    <Barra />
                    <div id="fondoCities"></div>
                </header>

                <section className="container-fluid d-md-flex flex-column justify-content-center text-center pt-5 ">
                    <h1>Choose your destiny</h1>
                    <div className="mb-3 mt-1">
                        <label >Enter the city:</label>
                        <input className="ml-2 w-25" type="text" placeholder="e.g. Paris" name="capital" id="capital" onChange={this.capturarPais}></input>
                    </div>
                    {noCities()}
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