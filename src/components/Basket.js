import React, { useContext } from 'react'
import { useOutletContext } from 'react-router-dom'
const Basket = () => {
const {cart}=useOutletContext();
    return (
    <div>
{cart.length}

    </div>
  )
}

export default Basket