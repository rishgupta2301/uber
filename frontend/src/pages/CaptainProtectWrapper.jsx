/* eslint-disable react/prop-types */
import { useEffect, useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import {CaptainDataContext} from "../context/CaptainContext";
import axios from "axios";

// as we have token for both users and captains so for protecting and making sure that we are at captains page that is why we are confirming it by getting it from the captains profile such that if it exists then setting the captain otherwise if we get any error then redirect it to the login page 
const CaptainProtectWrapper = ({children}) => {

    const navigate = useNavigate();
    const token = localStorage.getItem('token');
    const { captain, setCaptain } = useContext(CaptainDataContext)
    const [ isLoading, setIsLoading ] = useState(true)


    useEffect(() => {
        if (!token) {
            navigate('/captain-login')
        }

        axios.get(`${import.meta.env.VITE_BASE_URL}/captains/profile`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        }).then(response => {
            if (response.status === 200) {
                setCaptain(response.data.captain)
                setIsLoading(false)
            }
        })
            .catch(err => {

                localStorage.removeItem('token')
                navigate('/captain-login')
            })
    }, [ token ])

    if (isLoading) {
        return (
            <div>Loading...</div>
        )
    }


  return (
    <>
        {children}
    </>
  )
}

export default CaptainProtectWrapper