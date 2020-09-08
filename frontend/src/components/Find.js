import React from 'react';
import Capitales from "../components/Capitales.js"
import axios from 'axios'

class Find extends React.Component {

    state = {
        ciudades: [],
        ciudadesFiltrados: []
    }
    async componentDidMount() {
        const response = await axios('http://localhost:4000/api/cities')
        const lista = response.data.cities
        console.log(lista)
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
                <div className="row">
                    <div class="col-md-10 col-md-offset-1">
                        <h3>Descubre todos nuestros distintos destinos</h3>
                        <h4>en todo el mundo</h4>

                        <div className="mb-3 mt-1">
                            <label >Enter the city:</label>
                            <input className="ml-2 w-25" type="text" placeholder="e.g. Paris" name="capital" id="capital" onChange={this.capturarPais}></input>
                        </div>

                        <div className="row d-flex justify-content-center align-items-center">
                            {this.state.ciudadesFiltrados.map(ciudad => {
                                return <Capitales ciudad={ciudad} />
                            })}
                        </div>
                    </div>
                </div>
            </>
        )
    }

}

export default Find;