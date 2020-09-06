import React from "react"
import logo from "../images/logo.png"
import user from "../images/profile-user.png"
import { NavLink } from "react-router-dom"
import { connect } from "react-redux"
import userActions from "../redux/actions/userActions"



class Bar extends React.Component {
    render() {
        const logOut = async e => {
            e.preventDefault()
            this.props.logOut()
        }
        return (
            <>
                <nav className="navbar navbar-dark navbar-expand-sm" id="Barra" >

                    <NavLink to="/" className="navbar-brand d-flex " id="logo">
                        <img src={logo} width="80" height="80" id="icono" className="d-inline-block align-top" alt="logo" />
                        <p className="text-dark d-flex mt-auto mb-auto">Mytinerary</p>
                    </NavLink>
                    <div className="d-flex justify-content-end ml-auto">
                        <button className="navbar-toggler navbar-toggler-left d-flex-sm justify-content-end" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"><svg width="1.5em" height="1.5em" viewBox="0 0 16 16" className="bi bi-list" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path fill-rule="evenodd" d="M2.5 11.5A.5.5 0 0 1 3 11h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 7h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4A.5.5 0 0 1 3 3h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                            </svg>
                            </span>
                        </button>
                        <div>
                            <div className="dropdown d-flex justify-content-end text-center ">
                                <button className="btn dropdown-toggle d-block d-sm-none" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <img src={this.props.newPic ? this.props.newPic : user} width="30" height="30" alt="user" ></img>
                                </button>
                                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                    <NavLink to={`${this.props.newPic ? '/account' : 'signin'}`} className="dropdown-item" >{this.props.newPic ? 'Your Account' : 'Create Account'}</NavLink>
                                    {this.props.newPic ? <a onClick={logOut} className="dropdown-item" >Log Out </a> : <NavLink to="/login" className="dropdown-item" >Log In </NavLink>}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="collapse navbar-collapse d-flex-sm justify-content-end text-center" id="navbarTogglerDemo01">
                        <div className="navbar-nav ">
                            <NavLink to="/#" className="nav-item nav-link text-dark">Home</NavLink>
                            <NavLink to="/cities" className="nav-item nav-link text-dark">Cities</NavLink>
                        </div>
                    </div>
                    <div>
                        <div className="dropdown">
                            <button className="btn dropdown-toggle d-none d-sm-block" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <img src={this.props.newPic ? this.props.newPic : user} width="30" height="30" alt="user"></img>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                                <NavLink to={`${this.props.newPic ? '/account' : 'signin'}`} className="dropdown-item" >{this.props.newPic ? 'Your Account' : 'Create Account'}</NavLink>
                                {this.props.newPic ? <a onClick={logOut} className="dropdown-item" >Log Out </a> : <NavLink to="/login" className="dropdown-item" >Log In </NavLink>}
                            </div>
                        </div>
                    </div>
                </nav>
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

const mapDispatchToProps =
{
    logOut: userActions.logOut
}

export default connect(mapStateToProps, mapDispatchToProps)(Bar)