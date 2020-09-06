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
        console.log(this.state.activities)
        return (
            <>
                {this.state.activities.map(Activity => {
                    return (
                        <>
                            <div className='row mb-5'>
                                <div id="carouselExampleControls" class="carousel slide col-10 mx-auto" data-ride="carousel">
                                    <div class="carousel-inner embed-responsive embed-responsive-21by9">
                                        {Activity.activity.map((hola, index) =>

                                            <div class={`carousel-item embed-responsive-item col-12 ${index === 0 ? "active" : ""} `} style={{ backgroundImage: `url(${hola.img})`, width: "100vw", backgroundSize: 'cover', backgroundRepeat: 'none', backgroundPosition: 'center' }}>

                                            </div>
                                        )}
                                    </div>
                                    <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
                                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Previous</span>
                                    </a>
                                    <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
                                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                                        <span class="sr-only">Next</span>
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