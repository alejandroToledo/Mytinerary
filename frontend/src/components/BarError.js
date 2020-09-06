import React from "react"
import logo from "../images/logo.png"
import { NavLink } from "react-router-dom"

class BarError extends React.Component {
    render() {
        return (
            <>
                <nav className="navbar navbar-dark navbar-expand-sm" id="BarraError" >

                    <NavLink to="/" className="navbar-brand d-flex " href="#" id="logo">
                        <img src={logo} width="80" height="80" id="icono" className="d-inline-block align-top" alt="" />
                        <p className="text-dark d-flex mt-auto mb-auto">Mytinerary</p>
                    </NavLink>

                </nav>
            </>
        )
    }
}

export default BarError