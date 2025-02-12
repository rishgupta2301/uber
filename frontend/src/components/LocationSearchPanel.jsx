/* eslint-disable react/prop-types */
const LocationSearchPanel = (props) => {

    const { setPanelOpen, setVehiclePanelOpen } = props 

  const locations = [
    "24B, near Khan Academy, Khan Market, New Delhi",
    "24B, near Khan Academy, Khan Market, New Delhi",
    "24B, near Khan Academy, Khan Market, New Delhi",
    "24B, near Khan Academy, Khan Market, New Delhi",
  ];

  return (
    // sample data
    <>
      {locations.map((location, index) => {
        return (
          <>
            <div onClick={() => {
                setVehiclePanelOpen(true)
                setPanelOpen(false)
            }}
                key={index} className="flex border-2 border-gray-50 active:border-black p-3 items-center gap-4 my-2 rounded-xl justify-start">
              <h2 className="bg-[#eee] h-8 w-12 flex items-center justify-center rounded-full">
                <i className="ri-map-pin-fill"></i>
              </h2>
              <h4 className="text-lg ">{location}</h4>
            </div>
          </>
        );
      })}
    </>
  );
};

export default LocationSearchPanel;
