/* eslint-disable react/prop-types */

const VehiclePanel = (props) => {

    const{setVehiclePanelOpen, setConfirmRidePanel} = props;

  return (
    <div>
        <h5 className="p-1 text-center absolute top-0  w-full"><i onClick={() => {setVehiclePanelOpen(false)}} className="ri-arrow-down-wide-line text-3xl text-gray-400"></i></h5>
        <h3 className="text-2xl font-semibold mb-5">Choose a vehicle</h3>
        <div onClick={() => setConfirmRidePanel(true)} className="flex w-full active:border-black mb-3 p-3 border-2 rounded-xl items-center justify-between">
          <img
            className="h-10"
            src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
            alt=""
          />
          <div className=" w-1/2 ">
            <h4 className="font-medium text-base">
              UberGo{" "}
              <span>
                <i className="ri-user-3-fill"></i>4
              </span>
            </h4>
            <h5 className="font-medium text-sm">2 mins away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable, compact rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹193.20</h2>
        </div>
        <div onClick={() => setConfirmRidePanel(true)} className="flex w-full active:border-black mb-3 p-3 border-2 rounded-xl items-center justify-between">
          <img
            className="h-12"
            src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_368,w_552/v1649231091/assets/2c/7fa194-c954-49b2-9c6d-a3b8601370f5/original/Uber_Moto_Orange_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" w-1/2 ">
            <h4 className="font-medium text-base">
              Moto{" "}
              <span>
                <i className="ri-user-3-fill"></i>1
              </span>
            </h4>
            <h5 className="font-medium text-sm">3 mins away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable, motorcycle rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹60.20</h2>
        </div>
        <div onClick={() => setConfirmRidePanel(true)} className="flex w-full active:border-black mb-3 p-3 border-2 rounded-xl items-center justify-between">
          <img
            className="h-12"
            src="https://clipart-library.com/2023/Uber_Auto_312x208_pixels_Mobile.png"
            alt=""
          />
          <div className=" w-1/2 ">
            <h4 className="font-medium text-base">
              UberAuto{" "}
              <span>
                <i className="ri-user-3-fill"></i>3
              </span>
            </h4>
            <h5 className="font-medium text-sm">1 min away</h5>
            <p className="font-normal text-xs text-gray-500">
              Affordable, auto rides
            </p>
          </div>
          <h2 className="text-lg font-semibold">₹90.20</h2>
        </div>
    </div>
  )
}

export default VehiclePanel