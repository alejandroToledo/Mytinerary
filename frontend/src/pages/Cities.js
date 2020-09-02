import React from 'react';
import Bar from "../components/Bar.js"
import Capitales from "../components/Capitales.js"
import axios from 'axios'
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions.js';

class Cities extends React.Component {

    state = {
        ciudades: [],
        ciudadesFiltrados: [],
    }
    async componentDidMount() {
        this.props.getInfo()
        const response = await axios('http://localhost:4000/api/cities')
        const lista = response.data.cities
        this.setState({
            ciudades: lista,
            ciudadesFiltrados: lista,

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
        console.log(this.props)
        const noCities = () => {
            if (this.state.ciudadesFiltrados.length === 0) {
                return (
                    <section style={{ minHeight: '400px' }}>
                        <div className=" d-flex justify-content-center" >
                            <div className=" bs-example mt-5 col-8 card pl-0 pr-0">
                                <div className="card bg-info p-3">
                                    <p className="text-dark font-weight-bold display-3 text-center align-middle col-12" >
                                        We can't find that city :( </p>
                                </div>
                            </div>
                        </div>
                    </section>
                )
            }
        }
        return (
            <>
                <header  >
                    <Bar />
                    <div id="fondoCities"></div>
                </header>

                <section className="container-fluid d-md-flex flex-column justify-content-center text-center pt-5 ">
                    <h1>Choose your destiny</h1>
                    <div className="mb-3 mt-1">
                        <input className="mx-auto w-50 form-control" type="text" placeholder="e.g. Paris" name="capital" id="inputCity" onChange={this.capturarPais}></input>
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

const mapStateToProps = state => {
    return {
        ciudades: state.cities.ciudades,
        ciudadesFiltrados: state.cities.ciudadesFiltrados
    }
}

const mapDispatchToProps =
{
    getInfo: citiesActions.getInfo
}



export default connect(mapStateToProps, mapDispatchToProps)(Cities);