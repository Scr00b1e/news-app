import React from 'react'
import Intro from '../components/Intro'
import Routing from '../components/Routing'
import { pages } from "../data/pages"

const Home = () => {
    return (
        <>
            <Intro />
            {
                pages.map((obj, i) => (
                    <Routing text={obj.text} key={i} />
                ))
            }
        </>
    )
}

export default Home