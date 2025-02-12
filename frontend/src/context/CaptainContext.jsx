/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {useState, createContext} from 'react'

export const CaptainDataContext = createContext();

const CaptainContext = ({children}) => {
    const [captain, setCaptain] = useState(null);
    const [isloading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const updateCaptain = (captainData) => {
        setCaptain(captainData);
    }

    const value = {
        captain,
        setCaptain,
        isloading,
        setIsLoading,
        error,
        setError
    }

  return (
    <div>
      <CaptainDataContext.Provider value={value}>
        {children}
        </CaptainDataContext.Provider>
    </div>
  );
};

export default CaptainContext;
