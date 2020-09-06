import React from 'react';
import Bar from "../components/Bar.js"
import axios from 'axios'
import Itinerary from '../components/Itinerary.js';

class Itineraries extends React.Component {
    state = {
        ciudad: [],
        itinerarios: [],
    }

    async componentDidMount() {
        const idAbuscar = this.props.match.params.id
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/itineraries/${idAbuscar}`)
        const ciudad = respuesta.data.city
        const itinerarios = respuesta.data.itineraries
        console.log(itinerarios)
        this.setState({
            ciudad,
            itinerarios
        }
        )
    }



    render() {

        console.log(this.state.itinerarios)
        if (this.state.itinerarios.lenght === 0) {
            return (
                <>

                    <header >
                        <Bar />

                        <div id={`${this.state.ciudad.country}`} style={{ backgroundImage: `url(${this.state.ciudad.imageFondo})`, backgroundSize: 'cover', height: '60vh', backgroundColor: "rgba(253, 246, 246, 0.199)" }}  >
                            <div id="gradiente">
                                <p id="ciudadHeader" className="text-light font-weight-bold text-center ml-5 ">{this.state.ciudad.name}</p>
                            </div>
                        </div>

                    </header>
                    <section style={{ minHeight: '400px' }}>
                        <div className=" d-flex justify-content-center" >
                            <div className=" bs-example mt-5 col-8 card pl-0 pr-0">
                                <div className="card bg-info p-3">
                                    <p className="text-dark font-weight-bold display-3 text-center align-middle col-12" >No itineraries yet :( </p>
                                </div>
                            </div>
                        </div>
                    </section>
                </>
            )
        }

        return (
            <>
                <header >
                    <Bar />

                    <div id={`${this.state.ciudad.country}`} style={{ backgroundImage: `url(${this.state.ciudad.imageFondo})`, backgroundSize: 'cover', height: '60vh', backgroundColor: "rgba(253, 246, 246, 0.199)" }}  >
                        <div className="gradiente">
                            <p id="ciudadHeader" className="text-light font-weight-bold text-center ml-5 ">{this.state.ciudad.name}</p>
                        </div>
                    </div>
                </header>
                <section style={{ minHeight: '400px' }}>
                    {this.state.itinerarios.map(itinerario => {
                        return (<Itinerary itinerario={itinerario} />)
                    })}
                </section >
            </>
        )
    }

}

export default Itineraries;