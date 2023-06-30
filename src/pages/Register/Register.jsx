import React,{useState} from 'react'
import "./Register.css"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Register = () => {
    const [emil, setemil] = useState("")
    const [password, setpasswoed] = useState("")
    const formsubmitHandler = (e) =>{
        e.preventDefault();
        if(emil.trim()=== "") return toast.error("Email is reaquired");
        if(password.trim()=== "")return toast.error("password is reaquired"); 
        }
return (
    <div>
        <div className="contact-conatiner">
            <ToastContainer/>
        <form onSubmit={formsubmitHandler} className='form-contactus'>
            <div className="form-group">
                <h2>Register</h2>
            </div>
            <div className="form-group">
                <input type="text" className="form-control" placeholder="Name" />
            </div>
            <div className="form-group">
                <input onChange={(e)=>{setemil(e.target.value)}} type="email" className="form-control" placeholder="Email" />
            </div>
            <div className="form-group">
                <input value={password} onChange={e=>setpasswoed(e.target.value)} type="password" className="form-control" placeholder="Password" />
            </div>
            <div className="form-group">
                <button className='btn-form'>Submit</button>
            </div>
        </form>
    </div>
    </div>
)
}

export default Register