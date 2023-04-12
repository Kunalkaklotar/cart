import React from 'react'

const Total = (props) => {
   return (
      <div>
         <div className="total-box">
            <h2>Total</h2>
            <span>
               ₹{props.total}
            </span>
            <div className="center"></div>
         </div>
      </div>
   )
}

export default Total
