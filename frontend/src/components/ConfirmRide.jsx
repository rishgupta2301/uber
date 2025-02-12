/* eslint-disable react/prop-types */
const ConfirmRide = (props) => {

    const {setConfirmRidePanel, setVehicleFound} = props;

  return (
    <div>
      <h5 className='p-1 text-center w-[93%] absolute top-0'>
        <i
        // for closing the confirm ride panel and select the type of ride
          onClick={() => {
            setConfirmRidePanel(false);
          }}
          className="ri-arrow-down-wide-line text-3xl text-gray-400"
        ></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">Confirm your ride</h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-20"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
      </div>
      <div className="w-full mt-5">
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="ri-map-pin-user-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-500">
              Kakariya Talab, Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3 border-b-2">
          <i className="text-lg ri-map-pin-2-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A</h3>
            <p className="text-sm -mt-1 text-gray-500">
              Kakariya Talab, Bhopal
            </p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="ri-currency-line"></i>
          <div>
            <h3 className="text-lg font-medium">₹193.20</h3>
            <p className="text-sm -mt-1 text-gray-600">Cash Cash</p>
          </div>
        </div>
      </div>
      <button 
      // for confirming the type of ride and going to the next page where we will be looking for the driver
       onClick={() => {
        setConfirmRidePanel(false); // as this will close this panel and go on the next page that is looking for the driver
        setVehicleFound(true);
      }}
      className='w-full mt-5 bg-green-600 text-white font-semibold p-2 rounded-lg'>Confirm</button>
    </div>
  );
};

export default ConfirmRide;
