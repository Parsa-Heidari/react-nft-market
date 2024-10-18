import React from 'react'
import Slider from "react-slick";
import { Link, useNavigate } from 'react-router-dom';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import items from "../data/Items.json"

const New = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        arrows: false,
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    const navigate = useNavigate()

    return (
            <section className='new b-black'>
                <div className="con flex justify-between h-full flex-col ">
                    <div className='flex text-white w-full justify-between items-center'>
                        <h2>new NFTs</h2>
                        <Link to="/explore" className='text-xl flex items-center'>view all <ArrowForwardIcon /></Link>
                    </div>
                    <div className='slider-container'>
                        <Slider {...settings}>
                            {
                                items.filter((item) => {
                                    let isNew = item.new
                                    return isNew === true
                                }).map((item) => {
                                    return (
                                        <div className='p-6 h-full b-brown rounded-xl text-white cursor-pointer' key={item.id} onClick={() => { navigate(`../${item.id}`) }}>
                                            <figure className='overflow-hidden rounded-xl w-full img-container h-3/5'>
                                                <img src={item.image} alt={item.name} title={item.name} className='w-full h-full object-cover' />
                                            </figure>
                                            <div className='w-full flex flex-col mt-4 gap-2'>
                                                <h3 className='text-xl'>{item.name}</h3>
                                                <div className='author w-full flex items-center gap-2'>
                                                    <figure className='w-12 h-12 rounded-full overflow-hidden'>
                                                        <img src={item.authorImage} alt={item.authorName} title={item.authorName} className='w-full h-full object-cover' />
                                                    </figure>
                                                    <h3 className='text-lg'>@{item.authorName}</h3>
                                                </div>
                                                <div className='flex justify-between w-full items-center'>
                                                    <p className='text-xl'>{item.price} $</p>
                                                    <p>1 of 1</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </Slider>
                    </div>
                </div>
            </section>
    )
}

export default New
