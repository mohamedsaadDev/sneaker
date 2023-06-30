import React,{useContext} from 'react'
import "./man.css"
import {productsMan} from "../../Data/dataman"
import CartContext from '../../context/creatcontext'
const Man = () => {
    const {addtocart, removefromcart} = useContext(CartContext)
    function handlleimgsmil (e){
        e.currentTarget.parentElement.previousElementSibling.src = e.currentTarget.src
        }
return (
<>
<div className='wrapper-container-man'>
    <div className='container-man'>
        {
            productsMan.map(product =>
                <div key={product.id} className='man-prodect'>
                <img  className='bigimg-man bigimg1' src={product.img1} alt="" />
                <div className='container-man-imgsmil' >
                    <img onClick={handlleimgsmil} className='man-imgsmil' src={product.img1} alt="" />
                    <img onClick={handlleimgsmil} className='man-imgsmil' src={product.img2} alt="" />
                    <img onClick={handlleimgsmil} className='man-imgsmil' src={product.img3} alt="" />
                    <img onClick={handlleimgsmil} className='man-imgsmil' src={product.img4} alt="" />
                </div>
                <h3 className='title-prodect' >black Sneaker</h3>
                <span className='price-man'>{product.price}$</span>
                <button className='btn-addcart-man' onClick={()=>addtocart({...product,quantity: 1})}> <i className="fa-solid fa-cart-plus"></i> Add To Cart</button>  
                <i className="fa-solid fa-trash-can trsh-prodect-man" onClick={()=>removefromcart(product.id)}></i>
            </div>
            
        )}
    </div>
</div> 
</>
)  
}
export default Man
