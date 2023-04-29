import Intro from '../components/Intro'
import Routing from '../components/Routing'
import useFetch from '../hooks/useFetch'

const Home = () => {
    const { somePages, loading } = useFetch('pages')

    return (
        <>
            <Intro />
            {
                loading
                    ? <div className='w-full my-5 text-center'>
                        <h1 className='text-xl'>Loading...</h1>
                    </div>
                    : somePages.map((obj: any, i) => (
                        <Routing {...obj} key={i} />
                    ))
            }
        </>
    )
}

export default Home