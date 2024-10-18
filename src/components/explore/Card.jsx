import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = (props) => {
    const navigate = useNavigate()
    return (
        <div className='col-span-12 sm:col-span-6 lg:col-span-4 xl:col-span-3 explore-section-card p-6 rounded-xl flex flex-col justify-between b-brown cursor-pointer hover:shadow-xl hover:shadow-white' key={props.id} onClick={() => {
            navigate(`../${props.id}`)
        }}>
            <figure className='w-full h-3/5 rounded-xl overflow-hidden'>
                <img src={props.image} alt={props.name} title={props.name} className='w-full h-full object-cover' />
            </figure>
            <div className='flex flex-col gap-4'>
                <h3 className='text-xl'>{props.name}</h3>
                <h3 style={{ color: "rgba(249, 249, 249, 0.7555)" }}>owned by <span className='t-white'>{props.authorName}</span></h3>
                <div className='flex w-full justify-between items-center'>
                    <h3>{props.price} $</h3>
                    <h3>1 of 1</h3>
                </div>
            </div>
        </div>
    )
}

export default Card
