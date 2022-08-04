import React from 'react'
import { useSelector } from "react-redux/es/exports";

const Display = () => {
    const {ipAddress, timezone, isp, location} = useSelector((store) => store.ip)
  return (
    <div className="display">
      <div className="display-ip display-item">
        <h4>IP ADDRESS</h4>
        <p>{ipAddress || "0.8.0.8"}</p>
      </div>

      <div className="display-location display-item">
        <h4>LOCATION</h4>
        <p>
          {location.city || "london"}, {location.postalCode === "" ? location.country : location.postalCode || "N5"}
        </p>
      </div>

      <div className="display-timezone display-item">
        <h4>TIMEZONE</h4>
        {/* Have to work out BST/GMT ETC */}
        <p>BST{timezone}</p>
      </div>

      <div className="display-isp display-item">
        <h4>ISP</h4>
        <p>{isp || "SpaceX starlink"}</p>
      </div>
    </div>
  );
}

export default Display