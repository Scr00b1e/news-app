import React from 'react'

const Intro = () => {
    return (
        <div className='w-full py-3 px-5 bg-neutral-800 rounded-2xl'>
            <div className='text-center text-slate-100'>
                <h1 className='text-3xl'>Welcome to News!</h1>
                <p className='text-xl'>Here you got</p>
            </div>
            <div className='w-full flex items-center justify-center flex-col flex-wrap text-slate-200'>
                <div className='relative'>
                    <img src="https://img.freepik.com/free-photo/sports-tools_53876-138077.jpg?w=2000" alt=""
                        className='w-full h-25 rounded-lg my-5' />
                    <h1 className='absolute top-12 left-16 text-3xl font-bold'>Sport</h1>
                </div>
                <div className='relative'>
                    <img src="https://www.state.gov/wp-content/uploads/2020/11/shutterstock_186964970-scaled.jpg" alt=""
                        className='w-full h-25 rounded-lg my-5' />
                    <h1 className='absolute top-12 left-16 text-3xl font-bold'>Travel</h1>
                </div>
                <div className='relative'>
                    <img src="https://psych.ubc.ca/wp-content/uploads/sites/2/2021/09/Religion_culture_Feature.png" alt=""
                        className='w-full h-25 rounded-lg my-5' />
                    <h1 className='absolute top-12 left-16 text-3xl font-bold'>Culture</h1>
                </div>
                <div className='relative'>
                    <img src="https://cdn.cnn.com/cnnnext/dam/assets/180723132324-tomorrowland-future-city-super-169.jpg" alt=""
                        className='w-full h-25 rounded-lg my-5' />
                    <h1 className='absolute top-12 left-16 text-3xl font-bold'> Future</h1>
                </div>
                <div className='relative'>
                    <img src="https://inkforall.com/wp-content/uploads/2022/12/6ca2b16d-2d9e-f7ae-97ec-89ad71b90197.jpg" alt=""
                        className='w-full h-25 rounded-lg my-5' />
                    <h1 className='absolute top-12 left-16 text-3xl font-bold'>Others</h1>
                </div>
            </div>
        </div>
    )
}

export default Intro