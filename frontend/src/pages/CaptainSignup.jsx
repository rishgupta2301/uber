/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link } from "react-router-dom";

const CaptainSignup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [userData, setUserData] = useState({});

  const submitHandler = (e) =>{
    e.preventDefault();
    setUserData({
      fullName:{
        firstName,
        lastName,
      },
      email,
      password,
    })
    // console.log(userData)
    setFirstName('');
    setLastName('');
    setEmail('');
    setPassword('');
  }

  return (
    <div className="py-5 px-5 h-screen flex flex-col justify-between">
      <div>
      <img
          className="w-20 mb-3"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg" 
          alt=""
        />

        <form onSubmit={(e) => submitHandler(e)} >
          <h3 className="text-lg w-full font-medium mb-2">What&apos;s our Captain&apos;s name ?</h3>
          <div className="flex gap-4 mb-6">
          <input
            required
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            className="bg-[#eeeeee] rounded w-1/2 px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            placeholder="John"
          />
          <input
            required
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            className="bg-[#eeeeee] rounded w-1/2  px-4 py-2 border text-lg placeholder:text-base"
            type="text"
            placeholder="Doe"
          />
          </div>
          <h3 className="text-lg font-medium mb-2">What&apos;s your Captain&apos;s email ?</h3>
          <input
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            type="email"
            placeholder="abc@example.com"
          />

          <h3 className="text-lg font-medium mb-2">Enter password</h3>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="bg-[#eeeeee] mb-6 rounded px-4 py-2 border w-full text-lg placeholder:text-base"
            placeholder="Password"
          />
          <button className="bg-[#111] text-white font-semibold mb-3 rounded px-4 py-2 w-full text-lg placeholder:text-base">
            Sign up
          </button>
        </form>
          <p className="text-center">Already have an account? <Link className="text-gray-500 "  to='/captain-login'>Login here</Link></p>
      </div>
      <div>
      <p className='text-[10px] leading-tight'>This site is protected by reCAPTCHA and the <span className='underline'>Google Privacy
      Policy</span> and <span className='underline'>Terms of Service apply</span>.</p>      </div>
    </div>
  )
}

export default CaptainSignup