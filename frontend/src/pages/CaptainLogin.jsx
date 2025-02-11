/* eslint-disable no-unused-vars */
import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import {CaptainDataContext} from "../context/CaptainContext";


const CaptainLogin = () => {

  const navigate = useNavigate();

  const {captain, setCaptain} = useContext(CaptainDataContext);

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');

  const submitHandler = async(e) =>{
    e.preventDefault();
    const captain = {
      email,
      password,
    }

    const response = await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, captain);

    if(response.status === 200){
      const data = response.data;
      setCaptain(data.captain);

      localStorage.setItem('token', data.token);
      navigate('/captain-home');
    }

    setEmail('');
    setPassword('');
  }

  return (
    <div className="p-7 h-screen flex flex-col justify-between">
      <div>
        <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg" 
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
          <p className="text-center">Join a fleet? <Link className="text-gray-500 "  to='/captain-signup'>Register as a captain</Link></p>
      </div>
      <div>
        <Link to='/login' className="bg-[#111] flex items-center justify-center text-white font-semibold mb-5 rounded px-4 py-2 w-full text-lg placeholder:text-base">Sign in as User</Link>
      </div>
    </div>
  )
}

export default CaptainLogin