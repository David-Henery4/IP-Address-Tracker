import React from 'react'
import { useSelector } from "react-redux/es/exports";

const Display = () => {
    const {ipAddress, timezone, isp, location, isLoading} = useSelector((store) => store.ip)
  return (
    <div className="display">
      <div className="display-ip display-item">
        <h4>IP ADDRESS</h4>
        <p>{isLoading ? "...Loading" : ipAddress || "0.8.0.8"}</p>
      </div>

      <div className="display-location display-item">
        <h4>LOCATION</h4>
        <p>
          {isLoading ? "...Loading" : location.city || "london"},
          {isLoading
            ? ""
            : location.postalCode === ""
            ? location.country
            : location.postalCode || " N5"}
        </p>
      </div>

      <div className="display-timezone display-item">
        <h4>TIMEZONE</h4>
        {/* Have to work out BST/GMT ETC */}
        <p>{isLoading ? "...Loading" : `BST${timezone}`}</p>
      </div>

      <div className="display-isp display-item">
        <h4>ISP</h4>
        <p>{isLoading ? "...Loading" : isp || "SpaceX starlink"}</p>
      </div>
    </div>
  );
}

export default Display