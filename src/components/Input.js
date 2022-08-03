import React, { useEffect, useState } from 'react'
import Yes from "../images/icon-arrow.svg"
import { upDateSearchQuery } from '../features/fetchIpData/fetchIpData'
import { useDispatch } from 'react-redux'

const Input = () => {
  const [searchValue, setSearchValue] = useState("")
  const dispatch = useDispatch()
  //
  const handleSearchInput = (e) => {
    e.preventDefault()
    dispatch(upDateSearchQuery(searchValue))
  }
  //
  return (
    <form className="input-container">
      <input type="text" placeholder='Search for any IP address or domain' className="input__search input" onChange={(e) => {
        return setSearchValue(e.target.value)
      }} value={searchValue}/>
      <button className="input__button input" onClick={handleSearchInput}>
        <img src={Yes} alt="" />
      </button>
    </form>
  );
}

export default Input