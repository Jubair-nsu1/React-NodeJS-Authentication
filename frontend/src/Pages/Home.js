import React,{ useContext } from 'react'
import { Navigate } from "react-router-dom"; 
import { AuthContext } from '../Utils/AuthContext';

//Components
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'

const Home = () => {
  
  const { token, loading } = useContext(AuthContext);
  if (loading) {
    return null;
  }

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return (
    <div>Home</div>
  )
}

export default Home