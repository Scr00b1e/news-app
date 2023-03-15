import React from 'react'
import { Link } from 'react-router-dom'
import Intro from '../components/Intro'
import Routing from '../components/Routing'
import { pages } from "../data/pages"

const Home = () => {
    return (
        <>
            <Intro />
            {
                pages.map((obj, i) => (
                    <Link to={`/pages/${i}`}>
                        <Routing {...obj} key={i} />
                    </Link>
                ))
            }
        </>
    )
}

export default Home