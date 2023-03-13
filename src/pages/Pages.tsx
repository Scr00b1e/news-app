import React from 'react'
import PagesItem from '../components/PagesItem'

const Pages = () => {
    return (
        <div className='w-full'>
            <h1 className='text-2xl font-bold text-center'>Welcome to Pages!</h1>
            <PagesItem />
            <PagesItem />
            <PagesItem />
        </div>
    )
}

export default Pages