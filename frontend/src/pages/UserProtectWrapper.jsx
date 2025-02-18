/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useEffect, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {UserDataContext} from "../context/UserContext"
import axios from "axios";

const UserProtectWrapper = ({ children }) => {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");
  const [isLoading, setIsLoading] = useState(false);
  const {user, setUser} = useContext(UserDataContext);

  useEffect(() => {

    if (!token) {
      navigate("/login");
    }

    axios.get(`${import.meta.env.VITE_BASE_URL}/users/profile`, {
      headers:{
        Authorization: `Bearer ${token}`
      }
    }).then((response) => {
      if(response.status === 200){
        setUser(response.data);
        setIsLoading(false)
      }
    }).catch(err => {
      console.log(err)
      localStorage.removeItem('token')
      navigate('/login')
    })

  }, [token]);

  if (isLoading) {
    return (
        <div>Loading...</div>
    )
}

  return <>{children}</>;
};

export default UserProtectWrapper;
