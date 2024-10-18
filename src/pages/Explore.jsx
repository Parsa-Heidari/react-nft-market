import React, { useState } from 'react'

import ExploreSearch from '../components/explore/ExploreSearch'
import Cards from '../components/explore/Cards'

const Explore = () => {

  let [searchParams, setSearchParams] = useState("")
  let [inputValue, setInputValue] = useState("")




  return (
    <div className='explore' onKeyDown={(e) => {
      if (e.key === "Enter") {
        setSearchParams(inputValue)
      }
    }} >
      <ExploreSearch searchParams={searchParams} setSearchParams={setSearchParams} inputValue={inputValue} setInputValue={setInputValue} />
      <Cards searchParams={searchParams} setSearchParams={setSearchParams} />
    </div>
  )
}

export default Explore
