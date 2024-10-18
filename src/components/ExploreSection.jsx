import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import items from "../data/Items.json"
import Card from './explore/Card';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const ExploreSection = () => {
    let [slice, setSlice] = useState(4)

    return (
            <section className='explore-section text-white'>
            <div className="con">
                <div className='flex text-white w-full justify-between items-center mb-12'>
                    <h2>explore</h2>
                    <Link to="/explore" className='text-xl flex items-center'>view all <ArrowForwardIcon /></Link>
                </div>
                <div className="grid grid-cols-12 gap-8">
                    {
                        items.map((item) => {
                            return (
                                <Card image={item.image} name={item.name} authorName={item.authorName} authorImage={item.authorImage} price={item.price} id={item.id} />
                            )
                        }).slice(0, slice)
                    }
                </div>
                <div className='w-full text-center'>
                    <button className='mt-8 border-white border-2 px-8 py-2 rounded-full load-more' onClick={() => {
                        setSlice(slice + 4)
                    }}>Load More</button>
                </div>
            </div>
        </section>
    )
}

export default ExploreSection
