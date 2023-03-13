import React from 'react'
import { Link } from 'react-router-dom'

const PagesItem = () => {
    return (
        <div className='w-full my-5 p-5 flex justify-center items-center flex-col bg-slate-200'>
            <h1 className='text-2xl font-bold mb-3'>Some stuff is going on</h1>
            <p className='text-xl opacity-70 max-w-xl mb-3'>Some stuff Some stuff Some stuff Some stuff Some stuff Some stuff
                Some stuff Some stuff Some stuff Some stuff
            </p>
            <Link to={'/newspage'}>
                <button className='px-3 py-1 border-gray-700 border-2 rounded-lg hover:bg-slate-700
            hover:text-white duration-200'>Read more</button>
            </Link>
        </div>
    )
}

export default PagesItem