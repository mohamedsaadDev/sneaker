import "./Home.css"
import smileimge1 from "../../images/image-product-1.jpg"
import smileimge2 from "../../images/image-product-2.jpg"
import smileimge3 from "../../images/image-product-3.jpg"
import smileimge4 from "../../images/image-product-4.jpg"
import { useState,useRef } from "react"
const Home = ({OpenModal, setOpenModal,quantity, setquantity, setquantitycart}) => {
    const RefSelector = useRef()
    function handleclick (event){
        RefSelector.current.src = event.currentTarget.src
    }
    const arryimg =[smileimge1,smileimge2,smileimge3,smileimge4]
    const [slider, setslider]= useState(0)
return (
    <>
    <div className="wrapper-contianer-home" >
        <div className='contianer-home'>
            <div className='continer-imge-home' >
                <img ref={RefSelector} src={smileimge1} alt="" className='big-img' />
                {slider >= 1 &&<i onClick={()=>setslider(slider - 1)} className="fa-solid fa-arrow-left arrow-left-slider-home"></i>}
                <div  className='smile-imges' style={{transform:`translateX(${slider * -440}px)`}}>
                {arryimg.map(g =>
                            <>
                                <img onClick={handleclick} src={g} alt="" className='smil-img' />
                            </>)}
                </div>
                {slider >= 3 ? "":<i onClick={()=>setslider(slider + 1)} className="fa-solid fa-arrow-right arrow-right-slider-home"></i>}
            </div>
            <div className=" continer-text-home">
                <h5 >SNEAKER COMPANY </h5>
                <h2>Fall Limited Edition <br /> Sneakers</h2> 
                <p>These low-prodile sneakers are your perfect casual wear <br />
                    companion. featuring a durable rubber. featuring a durable <br /> rubber outer sole,
                    they'll withstand everything the weather can offer</p>
                    <h3 className="price-home">$125.00 <span> 50%</span></h3>
                    <del>$250.00</del>
                    <button onClick={()=>setquantity(quantity + 1)} className="btn-positive" >+</button>
                    <span className="show-quantity-home" >{quantity}</span>
                    <button disabled={quantity <= 0} onClick={()=>setquantity(quantity - 1)} className="btn-negative" >-</button>
                    <button onClick={()=>setquantitycart(quantity)} className="btnadd"><i className="fa-sharp fa-solid fa-cart-shopping"></i> Add To Cart</button>
            </div>
        </div>
    </div>
    </>
)   
}


export default Home