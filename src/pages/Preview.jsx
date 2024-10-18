import React, { useState } from 'react'
import items from "../data/Items.json"
import { useParams } from 'react-router-dom'

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import CloseIcon from '@mui/icons-material/Close';

const Preview = () => {

    let params = useParams()
    let item = items.find(i => i.id === params.id)

    const [imageOpen, setImageOpen] = useState(false)

    const imageStyle = {
        display: imageOpen === true ? "flex" : "none"
    }


    return (
        <section className='preview b-black mt-20 h-lvh'>
            <div className="con h-full">
                <div className='grid grid-cols-12 h-full w-full gap-8 text-white'>
                    <figure className='col-span-12 md:col-span-6  md:h-full p-0 m-0 overflow-hidden rounded-lg' onClick={()=>{setImageOpen(true)}}>
                        <img src={item.image} alt={item.name} title={item.name} className='object-cover w-full h-full m-0 p-0 max-h-full hover:scale-125 cursor-pointer hover:opacity-75 ' />
                    </figure>
                    <div className='col-span-12 md:col-span-6 flex flex-col justify-around h-full'>
                        <div>
                            <h2>{item.name}</h2>
                            <p className='paragraph'>
                                {item.desc}
                            </p>
                            <hr className='my-6 md:block hidden' />
                            <h3 className='text-xl mb-1'>price : {item.price} $</h3>
                            <h3 className='text-xl mb-1 md:block hidden'>by <span className='underline cursor-pointer'>{item.authorName}</span></h3>
                            <h3 className='text-xl mb-1 md:block hidden'>NFT BNB : {item.bnb} </h3>
                        </div>
                        <button className='w-full b-purple rounded-lg p-4 capitalize hover:brightness-125'>
                            add to cart <ShoppingCartIcon />
                        </button>
                    </div>
                </div>
            </div>
            <div className='image-pop-up absolute right-1/2 top-1/2 translate-x-1/2 -translate-y-1/2 z-50 w-full h-full flex flex-col justify-center items-center b-brown backdrop-opacity-5' style={imageStyle}>
                <button className='bg-slate-600 hover:brightness-150 p-4 rounded-full text-white mb-8' onClick={()=>{setImageOpen(false)}}>
                    <CloseIcon />
                </button>
                <img src={item.image} alt={item.name} className='rounded-xl z-50 h-4/6 drop-shadow-2xl' />
            </div>
        </section>
    )
}

export default Preview
