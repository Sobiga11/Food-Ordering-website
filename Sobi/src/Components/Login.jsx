import React,{useState} from 'react';
import axios from "axios";
import "./Login.css";
const Login = () => {
    const [email, setEmail] = useState('');
    const [password,setPassword]= useState('');

    const handlesubmit = async (e)=>{
        e.preventDefault();
        try{
            const response = await axios.post('http://localhost:5000/users/login',{
                email,password
            });
            alert("successfully logged in !");
        } catch (error) {
            console.log(error);
            alert("Failed to login");
        }
    };

    return (
        <div className="auth-container">
            <h2>Login</h2>
            <form onSubmit={handlesubmit}>
                <div className="input-group">
                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Enter your email"  value={email} onChange={(e)=>setEmail(e.target.value)} required />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" placeholder="Enter your password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
                </div>
                <button type="submit" className="primary-btn">Login</button>
            </form>
        </div>
    );
};

export default Login;