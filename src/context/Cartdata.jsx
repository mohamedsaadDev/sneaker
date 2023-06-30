import { useState } from 'react'
import Cartcontext from './creatcontext'
const Cartdata = ({children}) => {
    const [cartitems,setcatitems] = useState([])
    const addtocart = (item) =>{
        const checkid = cartitems.find((cart) => cart.id === item.id)
        if(checkid){
            setcatitems(cartitems.map((cartitem) => cartitem.id === item.id ? item : cartitem)
            ) 
        }else {setcatitems((prev) => [...prev, item])}
    }
    const removefromcart = (id) =>{                                                         
        const cart = cartitems.filter((c) => c.id !== id)
        setcatitems(cart)
    }
return (
    <Cartcontext.Provider value={{cartitems,addtocart,removefromcart, cartlength: cartitems.length}}>  
        {children}
    </Cartcontext.Provider>
)
}

export default Cartdata