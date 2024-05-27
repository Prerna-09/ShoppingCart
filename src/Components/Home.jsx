import productList from "../data.js"
import "../styles/home.scss"
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux"
import { addtoCart } from "../Features/cartSlice.js";
import { Link } from "react-router-dom";



const Home = () => {


    
  const items= useSelector((state)=> state.allCart.items)
  const dispatch= useDispatch();


    // const addtocarthandler =(option)=>{
    //     console.log(option)
    //     toast.success("Added to Cart")
    // }


  return (
    <div className='home'>
        {items.map((item)=>(
 <div  key={item.id} className="productCard">
<img src={item.imgSrc} alt="image"/>
<p>{item.name}</p>
<h4>${item.price}</h4>

<button onClick={()=> dispatch(addtoCart(item))}
>Add to Cart</button>


</div>
             
        ))}
   
    </div>
  )
}




export default Home
