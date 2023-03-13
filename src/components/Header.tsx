import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className='w-full h-10 py-5 bg-slate-500 flex justify-center items-center fixed top-0 left-0 z-20'>
            <Link to={'/'}>
                <p className='text-white text-2xl'>News</p>
            </Link>
        </div>
    )
}

export default Header