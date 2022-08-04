import React from 'react'

const LoadingSpinner = () => {
  return (
    <div className="overlay">
      <div className="lds-ring">
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
}

export default LoadingSpinner