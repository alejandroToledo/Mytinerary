import React from 'react';
import Bar from "../components/Bar.js"
import axios from 'axios'
import Itinerary from '../components/Itinerary.js';
import { connect } from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions.js';

class Itineraries extends React.Component {
    state = {
        city: [],
        itineraries: []
    }

    async componentDidMount() {
        const idAbuscar = this.props.match.params.id
        this.props.getItineraries(idAbuscar)
        const city = this.props.cities.filter(ciudad => ciudad._id === idAbuscar)
        this.setState({
            city: city[0]
        }
        )
    }


    render() {
        console.log(this.props)
        console.log(this.state.itineraries)
        if (this.state.itineraries.lenght === 0) {
            return (
                <>

                    <header >
                        <Bar />

                        <div id={`${this.state.city.country}`} style={{ backgroundImage: `url(${this.state.city.imageFondo})`, backgroundSize: 'cover', height: '60vh', backgroundColor: "rgba(253, 246, 246, 0.199)" }}  >
                            <div id="gradiente">
                                <p id="cityHeader" className="text-light font-weight-bold text-center ml-5 ">{this.state.city.name}</p>
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

                    <div id={`${this.state.city.country}`} style={{ backgroundImage: `url(${this.state.city.imageFondo})`, backgroundSize: 'cover', height: '60vh', backgroundColor: "rgba(253, 246, 246, 0.199)" }}  >
                        <div className="gradiente">
                            <p id="cityHeader" className="text-light font-weight-bold text-center ml-5 ">{this.state.city.name}</p>
                        </div>
                    </div>
                </header>
                <section style={{ minHeight: '400px' }}>
                    {this.props.itineraries.map(itinerary => {
                        return (<Itinerary itinerary={itinerary} />)
                    })}
                </section >
            </>
        )
    }

}
const mapStateToProps = state => {
    return {
        cities: state.cities.cities,
        itineraries: state.itinerary.itinerarios
    }
}
const mapDispatchToProps = {
    getItineraries: itineraryActions.getItineraries
}
export default connect(mapStateToProps, mapDispatchToProps)(Itineraries);