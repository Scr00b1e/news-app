import React from 'react'
import { Link } from 'react-router-dom'
import Items from './Items'

type RoutingType = {
    text: string
}

const Routing: React.FC<RoutingType> = ({ text }) => {
    return (
        <div className='w-full my-5'>
            <Link to={'/pages'}>
                <p className='text-2xl font-bold'>{text}</p>
            </Link>
            <div className='mt-3 w-full flex justify-between items-center'>
                <Items />
                <Items />
                <Items />
            </div>
        </div>
    )
}

export default Routing