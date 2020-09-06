import React from 'react';
import Bar from "../components/Bar.js"
import CitiesComponent from "../components/CitiesComponent.js"
import { connect } from 'react-redux';
import citiesActions from '../redux/actions/citiesActions.js';

class Cities extends React.Component {


    componentDidMount() {
        this.props.getInfo()
    }
    capturarPais = e => {
        const enteredValue = e.target.value.trim()
        this.props.filterCities(enteredValue)
    }

    render() {
        console.log(this.props)
        const noCities = () => {
            if (this.props.filteredCities.length === 0) {
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
                        {this.props.filteredCities.map(city => {
                            return <CitiesComponent city={city} />
                        })}
                    </ul>
                </section>
            </>
        )
    }

}

const mapStateToProps = state => {
    return {
        cities: state.cities.cities,
        filteredCities: state.cities.filteredCities
    }
}

const mapDispatchToProps =
{
    getInfo: citiesActions.getInfo,
    filterCities: citiesActions.filterCities
}



export default connect(mapStateToProps, mapDispatchToProps)(Cities);