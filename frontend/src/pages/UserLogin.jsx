/* eslint-disable no-unused-vars */
import { Link, useNavigate} from "react-router-dom";
import { useContext, useState } from "react";
import {UserDataContext} from "../context/userContext"
import axios from "axios";


const UserLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [userData, setUserData] = useState({});

  const {user, setUser} = useContext(UserDataContext);
  const navigate = useNavigate();

  const submitHandler = async(e) =>{
    e.preventDefault();

    const userData = {
      email,
      password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData);
    
    if(response.status === 200){
      const data = response.data;
      setUser(data.user);

      navigate('/home');
    }


    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-16 mb-10"
          src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
          alt=""
        />

        <form onSubmit={(e) => submitHandler(e)} >
          <h3 className="text-lg font-medium mb-2">What&apos;s your email?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="abc@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Login
          </button>
        </form>
          <p className="text-center">New here? <Link className="text-gray-500 "  to='/signup'>Create new Account</Link></p>
      </div>
      <div>
        <Link to='/captain-login' className="bg-[#111] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as Captain</Link>
      </div>
    </div>
  );
};

export default UserLogin;
