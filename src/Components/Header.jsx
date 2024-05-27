import React, { useEffect } from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { Link } from 'react-router-dom';
import "../styles/header.scss"
import logo from "../assets/logo.jpg"
import { useDispatch, useSelector } from 'react-redux';
import { getCartTotal } from '../Features/cartSlice';



const Header = () => {


  const{cart , totalQuantity } = useSelector(
    (state) => state.allCart
  )

  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getCartTotal())
  }, [cart])
  
  return (
    <div>
    <nav>
       <img className='logo' src={logo} slt="logo"/>

        <div>
            <Link to="/" >Home</Link>
           <a><Link to="/cart">
            <FaShoppingCart />
                <p className='amount'>{totalQuantity}</p>
            </Link></a>
        </div>
    </nav>
    </div>
  )
}

export default Header
