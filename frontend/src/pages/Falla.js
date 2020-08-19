import React from "react"
import Barraerror from "../components/Barraerror.js"
import ContenidoFallo from "../components/ContenidoFallo.js"
import "../styles/headerStyles.css"


class Falla extends React.Component {
    render() {
        return (
            <>
                <header id="lost">
                    <Barraerror />
                    <ContenidoFallo />
                </header>
            </>
        )
    }
}

export default Falla