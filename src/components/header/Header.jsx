import { useState } from "react"
import avatar from "../../images/image-avatar.png"
import "./header.css"
import { Link } from "react-router-dom"
import Modal from "../modal/Modal"
const Header = ({quantitycart,setquantitycart}) => {
    const [OpenModal, setOpenModal] =useState(false);
    const [list,setlist] = useState(false)
return (
    <div className="container-wrapper-header">
        <header className='container'>
            <nav className='navgitonbar'>
            <div onClick={() => setlist(prev => !prev)} className="list-item">
            {
                list? <i className="fa-solid fa-xmark"></i> :<i className="fa-sharp fa-solid fa-bars"></i>
            }   
            </div>
            <h2 className='logo'><Link className='navbar-link' to="/">Sneaker</Link></h2>
            <ul className="nav-link-list"style={{ left:list && "0"}} >
                <Link onClick={()=>setlist(false)} className='navbar-link' to="/">Home</Link>    
                <Link onClick={()=>setlist(false)} className='navbar-link' to="/man"> Man</Link>
                <Link onClick={()=>setlist(false)} className='navbar-link' to="/Women">Women</Link>
                <Link onClick={()=>setlist(false)} className='navbar-link' to="/Abut">Abut</Link>
                <Link onClick={()=>setlist(false)} className='navbar-link' to="/ContactUs">Register</Link>
            </ul>
            <div className='cart' >
            <i onClick={()=>{setOpenModal(true)}} className="fa-sharp fa-solid fa-cart-shopping"></i>
            <img src={avatar} alt="" />
            </div>
        </nav>
        {OpenModal && <Modal 
        setOpenModal={setOpenModal} 
        quantitycart={quantitycart} 
        setquantitycart={setquantitycart}/>}
    </header>
    </div>
)
}

export default Header