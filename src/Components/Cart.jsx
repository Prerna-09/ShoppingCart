import { MdDelete } from "react-icons/md";
import { useEffect } from "react";


import "../styles/cart.scss";
import { useSelector, useDispatch } from "react-redux";
import { getCartTotal, removeItem ,increaseItemQuantity,  decreaseItemQuantity } from "../Features/cartSlice";



const Cart = () => {

  const{cart,totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  )

  const dispatch = useDispatch();
  

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  

  return (
    <div className='cart'>

      
<main>

<div className="cartItem">

  <h3>Cart :  {cart.length}</h3>


  {cart.map((data)=>(
    <div className="cartDetails">
     <img src={data.imgSrc} alt="Item" />
     <article>
       <h3>{data.name}</h3>
       <p>${data.price}</p>
     </article>
 
     <div>
     <button onClick={()=> dispatch(increaseItemQuantity(data.id))}>+</button>
       <p>{data.quantity}</p>
       <button  onClick={()=> dispatch(decreaseItemQuantity(data.id))}>-</button>

      
      
     </div>
 
    <div className="delete"
    onClick={()=> dispatch(removeItem(data.id))}
    
    > <MdDelete/></div>
  
     </div>
  ))}
  
   </div>
     

</main>

        <aside>
          <h2>TotalQuantity : {totalQuantity}</h2>
          <h2>TotalPrice : ${totalPrice}</h2>
          <h2>Shipping : ${200}</h2>
          <h2>Tax : ${20}</h2>
          <h2>Total : ${totalPrice + 200 + 20}</h2>

        </aside>
      
    </div>
  )
}


  
export default Cart
