import React from 'react'
import { Link } from 'react-router-dom'

type PagesItemProps = {
    title: string
    description: string
    page: string
    i: string
}

const PagesItem: React.FC<PagesItemProps> = ({ title, description, page, i }) => {
    return (
        <div className='w-full my-5 p-5 flex justify-center items-center flex-col bg-slate-200'>
            <h1 className='text-2xl font-bold mb-3'>{title}</h1>
            <p className='text-xl opacity-70 max-w-xl mb-3'>{description}
            </p>
            <Link to={`/${page}/${i}`}>
                <button className='px-3 py-1 border-gray-700 border-2 rounded-lg hover:bg-slate-700
            hover:text-white duration-200'>Read more</button>
            </Link>
        </div>
    )
}

export default PagesItem