import React, { useEffect, useState } from 'react'
import arrow from "../images/icon-arrow.svg"
import { upDateSearchQuery } from '../features/fetchIpData/fetchIpData'
import { useDispatch } from 'react-redux'
import { getInitialIp, getIpFromSearch } from '../features/fetchIpData/fetchIpData'
import { useSelector } from 'react-redux/es/hooks/useSelector'

const Input = () => {
  const [searchValue, setSearchValue] = useState("")
  const ip = useSelector((store) => store.ip)
  const dispatch = useDispatch()
  //
  const handleSearchInput = (e) => {
    e.preventDefault()
    dispatch(upDateSearchQuery(searchValue))
    dispatch(getIpFromSearch(searchValue))
  }
  //
  useEffect(() => {
    if (ip) {
      // dispatch(getInitialIp())
    }
    // eslint-disable-next-line
  }, [])
  //
  return (
    <form className="input-container">
      <input type="text" placeholder='Search for any IP address or domain' className="input__search input" onChange={(e) => {
        return setSearchValue(e.target.value)
      }} value={searchValue}/>
      <button className="input__button input" onClick={handleSearchInput}>
        <img src={arrow} alt="" />
      </button>
    </form>
  );
}

export default Input