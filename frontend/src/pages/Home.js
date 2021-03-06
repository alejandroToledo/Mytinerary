import React from 'react';
import Bar from "../components/Bar.js"
import Jumbo from "../components/Jumbo.js"
import Cards from "../components/Cards.js"
import Carousel from "../components/Carousel.js"

class Home extends React.Component {

    render() {
        return (
            <>
                <header >
                    <Bar />
                    <Jumbo />
                </header>
                <main>
                    <Cards />
                    <Carousel />
                </main>
            </>
        )
    }
}
export default Home;