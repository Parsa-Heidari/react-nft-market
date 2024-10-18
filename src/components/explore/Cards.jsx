import React from 'react'
import Card from './Card'

import items from "../../data/Items.json"

const Cards = ({ searchParams, setSearchParams }) => {
    const filteredItems = items.filter((item) => {
        let name = item.name.toLocaleLowerCase()
        let authorName = item.authorName.toLocaleLowerCase()
        return name.includes(searchParams) || authorName.includes(searchParams)
    })

    return (
        <div className='cards'>
            <div className="con">
                <div className="grid grid-cols-12 gap-8 text-white">
                    {
                        filteredItems.length === 0 ? (
                            <h2 className='col-span-12 text-center notFound'>no results were found</h2>
                        ) : (
                            filteredItems.map((item) => {
                                return (
                                    <Card image={item.image} name={item.name} authorName={item.authorName} authorImage={item.authorImage} id={item.id} price={item.price} />
                                )
                            })
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Cards
