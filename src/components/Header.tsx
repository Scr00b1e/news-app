import React from 'react'

const Header: React.FC = () => {
    return (
        <div className='w-full h-10 py-5 bg-slate-500 flex justify-center items-center fixed top-0 left-0 z-20'>
            <p className='text-white text-2xl'>News</p>
        </div>
    )
}

export default Header