import React from 'react';
import Barra from "../components/Barra.js"
import Capitales from "../components/Capitales.js"

class Cities extends React.Component {

    state = {
        paises: [],
        paisesFiltrados: []
    }
    async componentDidMount() {
        let respuesta = await fetch('https://restcountries.eu/rest/v2/all')
        let info = await respuesta.json()
        this.setState({
            paises: info,
            paisesFiltrados: info
        })
    }
    capturarPais = e => {
        const valorIngresado = e.target.value
        console.log(valorIngresado)
        const filtrado = this.state.paises.filter(pais => pais.name.indexOf(valorIngresado.charAt(0).toUpperCase() + valorIngresado.slice(1)) == 0)

        this.setState({
            paisesFiltrados: filtrado
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
                    <ul className=" ml-0 mr-d-flex align-items-center ">
                        {this.state.paisesFiltrados.map(pais => {
                            return <Capitales pais={pais} />
                        })}
                    </ul>
                </section>
            </>
        )
    }

}

export default Cities;