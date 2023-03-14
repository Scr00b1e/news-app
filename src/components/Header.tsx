import React from 'react'
import { Link } from 'react-router-dom'

const Header: React.FC = () => {
    return (
        <div className='w-full h-10 py-5 px-7 bg-slate-500 flex justify-between items-center fixed top-0 left-0 z-20'>
            <Link to={'/'}>
                <p className='text-white text-3xl'>News</p>
            </Link>
            <Link to={'/login'}>
                <button className='py-1 px-3 bg-orange-400 text-slate-50'>Login</button>
            </Link>
        </div>
    )
}

export default Header