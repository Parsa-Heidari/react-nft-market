import React from 'react'
import items from "../data/Items.json"


const TopSellers = () => {
    return (
            <section className='sellers text-white'>
                <div className="h-full flex flex-col justify-between con">
                    <h2 className='w-full'>top sellers</h2>
                    <div className="grid grid-cols-12 gap-4 w-full">
                        {
                            items.map((item) => {
                                return (
                                    <div className='b-brown col-span-12 sm:col-span-6 lg:col-span-4 p-6 rounded-2xl flex gap-4 items-center' key={item.id}>
                                        <img src={item.authorImage} alt={item.authorName} title={item.authorName} className='w-16 h-16 rounded-full' />
                                        <div>
                                            <h4>@{item.authorName}</h4>
                                            <h5>{item.bnb} BNB</h5>
                                        </div>
                                    </div>
                                )
                            }).slice(0, 6)
                        }
                    </div>
                </div>
            </section>
    )
}

export default TopSellers
