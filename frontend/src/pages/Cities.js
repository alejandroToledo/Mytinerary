import React from 'react';
import Barra from "../components/Barra.js"

function Cities() {
    return (
        <>
            <header id="fondoCities" >
                <Barra />
            </header>

            <section className="container-fluid d-md-flex flex-column justify-content-center text-center pt-5 ">
                <h1>Choose your destiny</h1>
                <div>
                    <label>Enter the city:</label>
                    <input type="text"></input>
                </div>
            </section>
        </>
    )
}

export default Cities;