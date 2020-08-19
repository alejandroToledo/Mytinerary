import React from 'react';
import Barra from "../components/Barra.js"
import Jumbo from "../components/Jumbo.js"
import Cards from "../components/Cards.js"
import Carousel from "../components/Carousel.js"

function Head() {
    return (
        <>
            <header >
                <Barra />
                <Jumbo />

            </header>
            <main>
                <Cards />
                <Carousel />
            </main>
        </>
    )
}

export default Head;