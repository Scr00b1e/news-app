import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-10 py-4 mt-3 bg-slate-500 flex justify-center items-center'>
            <a href="https://github.com/Scr00b1e/news-app" target='_blank'>
                <img src="https://cdn-icons-png.flaticon.com/512/2111/2111432.png" alt=""
                    className='w-7 h-7 cursor-pointer mx-1' />
            </a>
            <a href="https://twitter.com/scr00b1e" target='_blank'>
                <img src="https://cdn-icons-png.flaticon.com/512/3669/3669691.png" alt=""
                    className='w-7 h-7 cursor-pointer mx-1' />
            </a>
        </div>
    )
}

export default Footer