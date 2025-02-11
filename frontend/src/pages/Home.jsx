import { useState, useRef } from "react";
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import 'remixicon/fonts/remixicon.css'

const Home = () => {

  const [ pickup, setPickup ] = useState('')
    const [ destination, setDestination ] = useState('')
    const [ panelOpen, setPanelOpen ] = useState(false)
    const panelRef = useRef(null)

  const submitHandler = (e) => {
    e.preventDefault();
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height:'70%',
      })
    } else{
      gsap.to(panelRef.current,{
        height:'0%',
      })
    }
  }, [panelOpen])

  return (
    <div className="h-screen relative">
      <img
        className="w-16 absolute left-5 top-5"
        src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png"
        alt=""
      />
      <div className="h-screen w-screen">
        <img className="h-full w-full object-cover" src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif" alt="" />
      </div>
      <div className="absolute h-screen flex flex-col justify-end top-0 w-full">
        <div className="h-[30%] p-6 bg-white relative">
          {panelOpen && <h5 className="absolute top-6 right-6 text-2xl font-extrabold">
            <i onClick={() => setPanelOpen(false)} className='ri-arrow-down-wide-line'></i>
          </h5>}
          <h4 className="text-2xl font-semibold">Find a trip</h4>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className="line absolute h-16 w-1 top-[45%] left-10 bg-gray-900 rounded-full "></div>
            <input onClick={() => setPanelOpen(true)} value={pickup} onChange={(e) => setPickup(e.target.value)} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-5" type="text" placeholder="Add a pick-up loaction"/>
            <input onClick={() => setPanelOpen(true)} value={destination} onChange={(e) => setDestination(e.target.value)} className="bg-[#eee] px-12 py-2 text-base rounded-lg w-full mt-3" type="text" placeholder="Enter your destination"/>
          </form>
        </div>
        <div ref={panelRef} className="bg-red-500 h-0">

        </div>
      </div>
    </div>
  );
};

export default Home;
