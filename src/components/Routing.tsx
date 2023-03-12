import React from 'react'
import Items from './Items'

type RoutingType = {
    text: string
}

const Routing: React.FC<RoutingType> = ({ text }) => {
    return (
        <div className='w-full my-5'>
            <p>{text}</p>
            <div className='w-full'>
                <Items />
            </div>
        </div>
    )
}

export default Routing