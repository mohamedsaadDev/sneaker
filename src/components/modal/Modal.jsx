import React, { useContext } from 'react'
import "./modal.css"
import ImageProductModal from "../../images/image-product-1.jpg"
import CartContext from '../../context/creatcontext'
const Modal = ({setOpenModal , quantitycart ,setquantitycart}) => {
    const totalprice= quantitycart* 125
    const {cartlength,cartitems,removefromcart}= useContext(CartContext)
return (
    <div className='container-modal'>
        <div className='modal'> 
            <div className='top-modal'>
                <h2>Cart</h2>
                <i onClick={()=> setOpenModal(false)} className="fa-sharp fa-solid fa-circle-xmark"></i> 
            </div>
            <>
            {cartlength > 0 ? cartitems.map(el => 
            <div className='wrapper-continer-cart' key={el.id}>
                <div className='continer-cart-prodect'>
                    <img className='img-prodect-cart' src={el.img1} alt="" />
                        <div className='info-prodect-cart'>
                            <h4 className='title-prodect-cart'>{el.name}</h4>
                            <b className='price-prodect-cart'>{el.price} x {el.quantity} $ {el.price * el.quantity}</b>
                        </div>
                        <i onClick={()=>removefromcart(el.id)} className="fa-solid fa-trash-can trash-prodect-cart"></i>
                </div>
            </div>)
            : quantitycart > 0 ?
            <div className='container-middle-modal'>
                <div className='middle-modal'>
                    <img className='img-home' src={ImageProductModal} alt="" />
                    <span>Fall Limited Editon Sneaker</span>
                    <i onClick={()=>setquantitycart(0)} className="fa-solid fa-trash-can"></i>
                </div>
                <span className='price-show'>$125.00 x {quantitycart} $ {totalprice}</span>
            </div> 
            :<span className='empty-cart'>Your Cart Is Empty.</span> }
            {cartlength > 0 || quantitycart > 0 ? <button className='btn-Checkout'>Checkout</button> :""}
            </>
        </div>
    </div>
)
}   

export default Modal