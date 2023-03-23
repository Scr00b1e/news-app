import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
    return (
        <div className='w-full text-center my-60'>
            <h1 className='text-3xl font-bold my-1'>404</h1>
            <h3 className='text-1xl'>Apparently, there is no page like this</h3>
            <Link to={'/'}>
                <button className='mt-5 py-1 px-2 text-sm bg-slate-400 rounded-lg'>Back</button>
            </Link>
        </div>
    )
}

export default NotFound