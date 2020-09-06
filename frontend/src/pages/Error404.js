import React from "react"
import BarError from "../components/BarError.js"
import ContentFailure from "../components/ContentFailure.js"
import "../styles/Styles.css"


class Error404 extends React.Component {
    render() {
        return (
            <>
                <header id="lost">
                    <BarError />
                    <ContentFailure />
                </header>
            </>
        )
    }
}

export default Error404