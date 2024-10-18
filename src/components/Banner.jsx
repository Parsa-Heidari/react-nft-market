import React from 'react'
import { Link } from 'react-router-dom'

import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';


const Banner = () => {
    return (
        <section className='banner b-brown'>
            <div className='background b-purple'></div>
            <div className="con h-full">
                <div className="flex w-full h-full flex-col justify-between gap-6 sm:gap-0">
                    <h2 className='xl:w-2/4 lg:w-3/5 md:w-3/4 z-10'>Discover, collect, and sell extraordinary NFTs</h2>
                    <h3 className='z-10'>Explore on the world's best & largest NFT marketplace</h3>
                    <Link to="../explore" className='explore-button border-white border-2 rounded-full text-white w-40 py-3 flex justify-center items-center'>
                        <RocketLaunchIcon /> explore
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default Banner
