import React from 'react'
import { Link } from 'react-router-dom'
import PagesItem from '../components/PagesItem'
import useFetch from '../hooks/useFetch'

interface PagesProps {
    page: string
}

const Pages: React.FC<PagesProps> = ({ page }) => {
    const { somePages, loading } = useFetch(`${page}`)

    return (
        <div className='w-full'>
            <Link to={'/'}>
                <button className='py-1 px-2 text-sm bg-slate-400 rounded-lg text-start'>Back</button>
            </Link>
            <h1 className='text-2xl font-bold text-center'>Welcome to {page}!</h1>
            {
                loading
                    ? <div className='w-full text-center'><h1 className='text-xl'>Loading...</h1></div>
                    : somePages.map((obj: any, i) => (
                        <PagesItem {...obj} key={i} page={page} i={i} />
                    ))
            }
        </div>
    )
}

export default Pages