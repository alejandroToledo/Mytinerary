import React from 'react'
import axios from 'axios'

class Activities extends React.Component {
    state = {
        activities: []
    }
    async componentDidMount() {
        const response = await axios.get(`http://127.0.0.1:4000/api/activity/${this.props.id}`)
        const info = response.data
        const activities = info.activities
        this.setState({
            activities
        })
    }

    render() {
        return (
            <>
                {this.state.activities.map(Activity => {
                    return (
                        <>
                            <div className='row mb-5'>
                                <div id="carouselExampleControls" className="carousel slide col-10 mx-auto" data-ride="carousel">
                                    <div className="carousel-inner embed-responsive embed-responsive-21by9">
                                        {Activity.activity.map((arrays, index) =>
                                            <div className={`carousel-item embed-responsive-item col-12 ${index === 0 ? "active" : ""} `} style={{ backgroundImage: `url(${arrays.img})`, width: "100vw", backgroundSize: 'cover', backgroundRepeat: 'none', backgroundPosition: 'center' }}>
                                            </div>
                                        )}
                                    </div>
                                    <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Previous</span>
                                    </a>
                                    <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span className="sr-only">Next</span>
                                    </a>
                                </div>
                            </div>
                        </>
                    )

                })}
            </>
        )
    }
}

export default Activities