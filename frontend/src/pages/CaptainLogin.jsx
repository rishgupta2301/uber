/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainLogin = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [captainData, setCaptainData] = useState({});

  const submitHandler = (e) =>{
    e.preventDefault();
    setCaptainData({
      email,
      password,
    })
    // console.log(captainData)
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