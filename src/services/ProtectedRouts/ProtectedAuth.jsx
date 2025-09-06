import React from "react";
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthContext";

export default function ProtectedRout({ children }) {
  const { isLoggedIn} = useContext(AuthContext); 
  return !isLoggedIn ? children : <Navigate to={"/"} />;
}
