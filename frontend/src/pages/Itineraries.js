import React from 'react';
import Bar from "../components/Bar.js"
import axios from 'axios'
// import { NavLink } from 'react-router-dom'

class Itineraries extends React.Component {
    state = {
        ciudad: [],
        itinerarios: null
    }

    async componentDidMount() {
        const idAbuscar = this.props.match.params.id
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/itineraries/${idAbuscar}`)
        const ciudad = respuesta.data.buscado
        const itinerarios = respuesta.data.buscadoit
        this.setState({
            ciudad,
            itinerarios
        }
        )

    }


    render() {

        if (this.state.itinerarios === null) {
            return null
        }
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
                        <div id="gradiente">
                            <p id="ciudadHeader" className="text-light font-weight-bold text-center ml-5 ">{this.state.ciudad.name}</p>
                        </div>
                    </div>
                </header>


                <section style={{ minHeight: '400px' }}>
                    {this.state.itinerarios.map(itinerario => {
                        return (
                            <div className=" d-flex justify-content-center">
                                <div className=" bs-example mt-5 col-8 card pl-0 pr-0">
                                    <div className=" d-flex px-4 py-2" style={{}}>
                                        <div className="col-4">
                                            <div style={{ backgroundImage: `url(${itinerario.profilePic})`, backgroundSize: 'cover', width: '12vw', height: '26vh', borderRadius: '100px', backgroundPosition: '0 15%' }}></div>

                                        </div>
                                        <div className=" d-flex flex-column col-8">
                                            <h5 className="text-center display-4 w-100">{itinerario.title}</h5>
                                            <div className="d-flex pl-2 ">
                                                <p className="card-text pr-3"><img src={require('../images/heart.png')} style={{ width: '1.3em' }}></img>{itinerario.rating}</p>
                                                <p className="card-text pr-3">
                                                    {
                                                        itinerario.price === 1 ? <p class='colorPrice'><span className="text-bold">$</span>$$$$</p> :
                                                            itinerario.price === 2 ? <p class='colorPrice'><span className="text-bold">$$</span>$$$</p> :
                                                                itinerario.price === 3 ? <p class='colorPrice'><span className="text-bold">$$$</span>$$</p> :
                                                                    itinerario.price === 4 ? <p class='colorPrice'><span className="text-bold">$$$$</span>$</p> :
                                                                        itinerario.price === 5 ? <p class='colorPrice'><span className="text-bold">$$$$$</span></p> :
                                                                            itinerario.price
                                                    }
                                                </p>
                                                <p className="card-text pr-3 ">{itinerario.duration} hours</p>
                                            </div>

                                            <div className=" d-flex ">{itinerario.hashtag.map((hashtag) => (
                                                <p className="card-text pr-3">#{hashtag}</p>
                                            ))}
                                            </div>
                                        </div>
                                    </div>
                                    <a href="#" className="text-light font-weight-bold bg-info text-center align-middle col-12" style={{ minHeight: '30px' }}>View Activities</a>
                                </div>
                            </div>
                        )
                    })
                    }
                </section>
            </>
        )
    }

}

export default Itineraries;