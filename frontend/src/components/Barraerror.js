import React from "react"
import logo from "../images/logo.png"
import user from "../images/profile-user.png"

class Barraerror extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-dark navbar-expand-sm" id="barraError" >

                    <a className="navbar-brand d-flex " href="#" id="logo">
                        <img src={logo} width="80" height="80" id="icono" className="d-inline-block align-top" alt="" />
                        <p className="text-dark d-flex mt-auto mb-auto">Mytinerary</p>
                    </a>

                </nav>
            </>
        )
    }
}

export default Barraerror