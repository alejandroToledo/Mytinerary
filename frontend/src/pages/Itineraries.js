import React from 'react';
import Barra from "../components/Barra.js"
import axios from 'axios'
import { NavLink } from 'react-router-dom'

class Itineraries extends React.Component {
    state = {
        ciudad: [],
        itinerarios: []
    }

    async componentDidMount() {
        const idAbuscar = this.props.match.params.id
        const respuesta = await axios.get(`http://127.0.0.1:4000/api/itineraries/${idAbuscar}`)
        const ciudad = respuesta.data.buscado
        const itinerarios = respuesta.data.buscadoit
        this.setState({
            ciudad: ciudad,
            itinerarios: itinerarios
        }
        )

    }
    render() {
        const noCities = () => {
            const precio = this.state.itinerarios.duration
            console.log(precio)
            switch (precio) {
                case 1:
                    console.log('$')
                    break;
                case 2:
                    console.log('$$')
                    break;
                case 3:
                    console.log('$$$')
                    break;
                case 4:
                    console.log('$$$$')
                    break;
                case 5:
                    console.log('$$$$$')
                    break;

                default:
                    console.log('chau')
                    break;
            }
        }

        if (this.state.itinerarios.length === 0) {
            return (
                <>
                    <header >
                        <Barra />

                        <div id={`${this.state.ciudad.country}`} style={{ backgroundImage: `url(${this.state.ciudad.imageFondo})`, backgroundSize: 'cover', height: '60vh', backgroundColor: "rgba(253, 246, 246, 0.199)" }}  >
                            <div id="gradiente">
                                <p className="display-2 text-light text-bold  mb-5 font-weight-bold col-4">{this.state.ciudad.country}</p>
                                <p className="display-4 text-light text-bold mb-5 font-weight-bold col-4">{this.state.ciudad.name}</p>

                            </div>
                        </div>
                    </header>
                    <div className=" d-flex justify-content-center">
                        <div className=" bs-example mt-5 col-8 card pl-0 pr-0">
                            <div className="card">
                                <p className="text-dark font-weight-bold bg-info text-center align-middle col-12" >No hay itinerarios :(</p>
                            </div>
                        </div>
                    </div>
                </>
            )
        }



        return (
            <>
                {noCities()}
                <header >
                    <Barra />

                    <div id={`${this.state.ciudad.country}`} style={{ backgroundImage: `url(${this.state.ciudad.imageFondo})`, backgroundSize: 'cover', height: '60vh', backgroundColor: "rgba(253, 246, 246, 0.199)" }}  >
                        <div id="gradiente">
                            <p className=" text-light text-bold ml-5 font-weight-bold col-1 text-center  bg-info">{this.state.ciudad.country}</p>
                            <p className=" text-light text-bold ml-5 mb-5 mt-0 font-weight-bold col-4">{this.state.ciudad.name}</p>
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
                                            <img src={`${itinerario.profilePic}`} className="imgProfile mr-3 " alt="..." id="" />
                                        </div>
                                        <div className=" d-flex flex-column col-8">
                                            <h5 className="text-center display-4 w-100">{itinerario.title}</h5>
                                            <div className="d-flex pl-2">
                                                <p className="card-text pr-1">likes:10</p>
                                                <p className="card-text pr-1">{itinerario.price}$</p>
                                                <p className="card-text pr-1 ">{itinerario.duration} hours</p>
                                            </div>

                                            <div className=" d-flex ">{itinerario.hashtag.map((hashtag) => (
                                                <p className="card-text pr-1">#{hashtag}</p>
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