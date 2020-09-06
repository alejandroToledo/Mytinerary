import React from 'react'
import Activities from './Activities.js';
import '../styles/stylesComments.css'
import { connect } from 'react-redux';

class Itinerary extends React.Component {
    state = {
        Itinerary: {},
        viewMore: false,
        likeado: false,
        likes: 0
    }
    async componentDidMount() {
        console.log(this.props.itinerario)
    }

    render() {
        const changeViewMore = () => {
            this.setState({ viewMore: !this.state.viewMore })
        }
        const like = (e) => {
            this.setState({ likeado: !this.state.likeado })
        }
        return (
            <>
                <div className=" d-flex justify-content-center">
                    <div className=" bs-example mt-5 col-8 card pl-0 pr-0">
                        <div className=" d-flex px-4 py-2">
                            <div className="col-4">
                                <div style={{ backgroundImage: `url(${this.props.itinerario.profilePic})`, backgroundSize: 'cover', width: '12vw', height: '26vh', borderRadius: '100px', backgroundPosition: '0 15%' }}></div>

                            </div>
                            <div className=" d-flex flex-column col-8">
                                <h5 className="text-center display-4 w-100">{this.props.itinerario.title}</h5>
                                <div className="d-flex pl-2 ">
                                    {this.props.newPic ? <input type="checkbox" className="checkbox mr-3 like" id="checkbox" value="likeIt" onChange={like} /> : ''}
                                    <label for="checkbox" className="mr-3 like">
                                        <svg id="heart-svg" viewBox="467 392 58 57" xmlns="http://www.w3.org/2000/svg">
                                            <g id="Group" fill="none" fill-rule="evenodd" transform="translate(467 392)">
                                                <path d="M29.144 20.773c-.063-.13-4.227-8.67-11.44-2.59C7.63 28.795 28.94 43.256 29.143 43.394c.204-.138 21.513-14.6 11.44-25.213-7.214-6.08-11.377 2.46-11.44 2.59z" id="heart" fill="#AAB8C2" />
                                                <circle id="main-circ" fill="#E2264D" opacity="0" cx="29.5" cy="29.5" r="1.5" />

                                                <g id="grp7" opacity="0" transform="translate(7 6)">
                                                    <circle id="oval1" fill="#9CD8C3" cx="2" cy="6" r="2" />
                                                    <circle id="oval2" fill="#8CE8C3" cx="5" cy="2" r="2" />
                                                </g>

                                                <g id="grp6" opacity="0" transform="translate(0 28)">
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="7" r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="3" cy="2" r="2" />
                                                </g>

                                                <g id="grp3" opacity="0" transform="translate(52 28)">
                                                    <circle id="oval2" fill="#9CD8C3" cx="2" cy="7" r="2" />
                                                    <circle id="oval1" fill="#8CE8C3" cx="4" cy="2" r="2" />
                                                </g>

                                                <g id="grp2" opacity="0" transform="translate(44 6)">
                                                    <circle id="oval2" fill="#CC8EF5" cx="5" cy="6" r="2" />
                                                    <circle id="oval1" fill="#CC8EF5" cx="2" cy="2" r="2" />
                                                </g>

                                                <g id="grp5" opacity="0" transform="translate(14 50)">
                                                    <circle id="oval1" fill="#91D2FA" cx="6" cy="5" r="2" />
                                                    <circle id="oval2" fill="#91D2FA" cx="2" cy="2" r="2" />
                                                </g>

                                                <g id="grp4" opacity="0" transform="translate(35 50)">
                                                    <circle id="oval1" fill="#F48EA7" cx="6" cy="5" r="2" />
                                                    <circle id="oval2" fill="#F48EA7" cx="2" cy="2" r="2" />
                                                </g>

                                                <g id="grp1" opacity="0" transform="translate(24)">
                                                    <circle id="oval1" fill="#9FC7FA" cx="2.5" cy="3" r="2" />
                                                    <circle id="oval2" fill="#9FC7FA" cx="7.5" cy="2" r="2" />
                                                </g>
                                            </g>
                                        </svg>
                                        {this.state.likeado ? this.props.itinerario.rating + 1 : this.props.itinerario.rating} </label>
                                    <p className="card-text pr-3">
                                        {
                                            this.props.itinerario.price === 1 ? <p class='colorPrice'><span className="text-bold">$</span>$$$$</p> :
                                                this.props.itinerario.price === 2 ? <p class='colorPrice'><span className="text-bold">$$</span>$$$</p> :
                                                    this.props.itinerario.price === 3 ? <p class='colorPrice'><span className="text-bold">$$$</span>$$</p> :
                                                        this.props.itinerario.price === 4 ? <p class='colorPrice'><span className="text-bold">$$$$</span>$</p> :
                                                            this.props.itinerario.price === 5 ? <p class='colorPrice'><span className="text-bold">$$$$$</span></p> :
                                                                this.props.itinerario.price
                                        }
                                    </p>
                                    <p className="card-text pr-3 ">{this.props.itinerario.duration} hours</p>
                                </div>

                                <div className=" d-flex ">{this.props.itinerario.hashtag.map((hashtag) => (
                                    <p className="card-text pr-3">#{hashtag}</p>
                                ))}
                                </div>
                            </div>
                        </div>
                        <div>
                            {this.state.viewMore && <Activities id={this.props.itinerario._id} />}
                        </div>

                        {this.state.viewMore &&
                            <>
                                <h3 className="ml-5 pl-5">Comments</h3>
                                <div class="container mx-auto col-10 border mb-5" id="containerComments">

                                    <div class="row mx-auto">
                                        <div class="col-md-12">
                                            <div class="post-content col-12">
                                                <div class="post-container col-12">
                                                    <div class="post-detail">
                                                        <div class="line-divider"></div>
                                                        <div class="post-comment" style={{ minHeight: '250px', maxHeight: '350px' }}>

                                                        </div>

                                                        {this.props.newPic ? <div class="post-comment">
                                                            <img src={this.props.newPic} alt="" class="profile-photo-sm" />
                                                            <input type="text" class="form-control" placeholder="Post a comment" />
                                                        </div> : ''}
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </>}

                        <button onClick={changeViewMore} className="text-light font-weight-bold bg-info text-center align-middle col-12" style={{ minHeight: '30px', border: 'none' }}>View Activities</button>
                    </div>
                </div>



            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newUser: state.user.firstName,
        newPic: state.user.urlPic
    }
}


export default connect(mapStateToProps)(Itinerary)