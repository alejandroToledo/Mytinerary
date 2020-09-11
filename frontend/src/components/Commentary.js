import React from 'react'
import Activities from './Activities.js';
import '../styles/stylesComments.css'
import { connect } from 'react-redux';
import itineraryActions from '../redux/actions/itineraryActions.js';
import { NavLink } from "react-router-dom"
import swal from 'sweetalert';

class Commentary extends React.Component {
    state = {
        Itinerary: {},
        viewMore: false,
        commentary: '',
        flag: false,
        checked: false,
        modify: false
    }
    async componentDidMount() {
    }

    render() {
        const readCommentary = (e) => {
            const commentary = e.target.value
            this.setState({
                commentary
            })
        }

        const sendCommentary = async (e) => {
            var commentary = this.state.commentary
            if (commentary === '') {
                swal("You can't send empty comments", "", "error");
            }
            await this.props.putCommentary(this.props.itinerary._id, commentary, this.props.newToken)
        }

        const deleteCommentary = async (e) => {
            alert('eliminar comentario')
            await this.props.deleteCommentary(this.props.itinerary._id, this.props.newToken)
        }

        const openCommentaryEdit = () => {
            this.setState({
                modify: !this.state.modify
            })
        }

        this.props.favItineraries.map(itinerarioFaveado => { console.log('este es un itinerario faveado: ' + itinerarioFaveado) })
        this.props.favItineraries.map(itinerarioFaveado => { return itinerarioFaveado === this.props.itinerary._id ? console.log(true) : console.log(false) })
        console.log(this.props.favItineraries)
        console.log('este es un itinerario de esta pagina: ' + this.props.itinerary._id)

        return (
            <>
                {this.props.itinerary.comments.map((commentary) => (<div className="post-comment">
                    <div className="post-comment align-items ">
                        <img src={commentary.userPic} alt="" className="profile-photo-sm" />
                        <div className="eliminarYmodificar ">
                            {!this.state.modify && <p className="pt-2">{commentary.content}</p>}

                            {this.state.modify && commentary.userPic === this.props.newPic ? <><input placeholder={commentary.content} onChange={readCommentary}></input><label className="sendComments" onClick={sendCommentary} >
                                <svg width="2em" height="2em" viewBox="0 0 16 16" className="bi bi-arrow-right-square" fill="currentColor" xmlns="http://www.w3.org/2000/svg" id={this.props.itinerary._id} >
                                    <path fill-rule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" id={this.props.itinerary._id} />
                                    <path fill-rule="evenodd" d="M4 8a.5.5 0 0 0 .5.5h5.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3a.5.5 0 0 0 0-.708l-3-3a.5.5 0 1 0-.708.708L10.293 7.5H4.5A.5.5 0 0 0 4 8z" id={this.props.itinerary._id} />
                                </svg>
                            </label> </> : ''}
                            {commentary.userPic === this.props.newPic && <div className="d-inline ml-5 pl-5 pt-2">
                                <img src={require(`../images/pencil.png`)} style={{ width: '1.2vw' }} alt="modify" className="mr-3 color" onClick={openCommentaryEdit}></img>
                                <img src={require(`../images/borrar.png`)} style={{ width: '1.2vw' }} alt="delete" className="mr-3 color" onClick={deleteCommentary}></img>
                            </div>}

                        </div>

                    </div>
                </div>))}

            </>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        newUser: state.user.username,
        newPic: state.user.urlPic,
        newToken: state.user.token,
        favItineraries: state.user.favItineraries
    }
}

const mapDispatchToProps = {
    putCommentary: itineraryActions.putCommentary,
    modifyCommentary: itineraryActions.modifyCommentary,
    deleteCommentary: itineraryActions.deleteCommentary
}


export default connect(mapStateToProps, mapDispatchToProps)(Commentary)