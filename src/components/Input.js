import React from 'react'
import Yes from "../images/icon-arrow.svg"
const Input = () => {
  return (
    <div className="input-container">
      <input type="text" className="input__search input" />
      <button className="input__button input">
        <img src={Yes} alt="" />
      </button>
    </div>
  );
}

export default Input