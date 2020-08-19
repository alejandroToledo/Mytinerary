import React from "react"
import "../styles/headerStyles.css"
import { NavLink } from "react-router-dom"

class ContenidoFallo extends React.Component {
    render() {
        return (
            <>
                <div className="container-fluid d-md-flex flex-column justify-content-center text-light mt-5 pt-5 " id="lostContent">
                    <h1 className="font-weight-bold text-center">Are you lost?</h1>
                    <p className="text-center">We can't find that page. You will find many cities to explore on the home page.</p>
                    <NavLink to="/" className="ml-auto mr-auto"> <button type="button" className="btn btn-light  font-weight-bold ">Back to home</button></NavLink>
                </div>

            </>
        )
    }
}

export default ContenidoFallo