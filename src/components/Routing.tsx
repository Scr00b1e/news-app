import React from 'react'
import Items from './Items'

type RoutingType = {
    text: string
}

const Routing: React.FC<RoutingType> = ({ text }) => {
    return (
        <div className='w-full my-5'>
            <p className='text-2xl font-bold'>{text}</p>
            <div className='mt-3 w-full flex justify-between items-center'>
                <Items />
                <Items />
                <Items />
            </div>
        </div>
    )
}

export default Routing