import React from 'react'
import { Link } from 'react-router-dom'

type HeaderProp = {
    user: any
}

const Header: React.FC<HeaderProp> = ({ user }) => {
    return (
        <div className='w-full h-10 py-5 px-7 bg-slate-500 flex justify-between items-center fixed top-0 left-0 z-20'>
            <Link to={'/'}>
                <p className='text-white text-3xl'>News</p>
            </Link>
            {
                user
                    ? <Link to={'/login'}>
                        <button className='py-1 px-3 bg-sky-600 text-slate-50'>Profile</button>
                    </Link>
                    : <Link to={'/login'}>
                        <button className='py-1 px-3 bg-orange-400 text-slate-50'>Login</button>
                    </Link>
            }
        </div>
    )
}

export default Header