import React from 'react'

const Display = () => {
  return (
    <div className='display'>

        <div className='display-ip display-item'>
            <h4>IP ADDRESS</h4>
            <p>443.574.235.294</p>
        </div>

        <div className='display-location display-item'>
            <h4>LOCATION</h4>
            <p>Brooklyn, NY 65001</p>
        </div>

        <div className='display-timezone display-item'>
            <h4>TIMEZONE</h4>
            <p>UTC-05:00</p>
        </div>

        <div className='display-isp display-item'>
            <h4>ISP</h4>
            <p>SpaceX Starlink</p>
        </div>

    </div>
  )
}

export default Display