import React, { useEffect, useState } from 'react'
import items from "../../data/Items.json"

import Search from '@mui/icons-material/Search'

const ExploreSearch = ({ searchParams, setSearchParams, inputValue, setInputValue }) => {

    let [inputValueState, setInputValueState] = useState(false)

    useEffect(() => {
        if (inputValue === "") {
            setInputValueState(false)
        } else {
            setInputValueState(true)
        }
    }, [inputValue])

    const sugStyle = {
        display: inputValueState === true ? "block" : "none"
    }

    return (
        <div className='search w-full'>
            <div className="con flex items-center justify-between">
                <h2 className=' text-white'>search for NFTs</h2>
                <div className='w-1/3 flex h-12  rounded-lg relative'>
                    <input type="text" placeholder='Search...' className='px-4 py-2 w-5/6 h-full outline-none rounded-s-lg capitalize' value={inputValue} onChange={(e) => {
                        setInputValue(e.target.value.toLowerCase());}} />
                    <button className='w-1/6 flex justify-center items-center h-full b-purple text-xl text-white rounded-e-lg' onClick={() => {
                        setSearchParams(inputValue)
                    }}><Search />
                    </button>
                    <div className='w-5/6 absolute text-black recommend top-14 rounded-lg overflow-hidden' style={sugStyle}>
                        {
                            items.filter((item) => {
                                return item.name.toLowerCase().includes(inputValue) || item.name.includes(inputValue)
                            }).map((item) => {
                                if (inputValue === item.name.toLowerCase()) {
                                    return true
                                } else {
                                    return (
                                        <div className='px-2 pt-2 cursor-pointer bg-white  overflow-hidden' onClick={() => { setInputValue(item.name.toLowerCase()) ; setSearchParams(item.name.toLowerCase()) }}>
                                            <div className='hover:bg-slate-400 rounded-md p-2 w-full flex items-center justify-between'>
                                                {item.name.toLowerCase()}
                                                <Search />
                                            </div>
                                        </div>
                                    )
                                }
                            }).slice(0, 6)
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ExploreSearch
