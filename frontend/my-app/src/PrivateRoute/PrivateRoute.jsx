import { useEffect } from 'react';
import {useSelector} from 'react-redux'
import {useNavigate ,Navigate} from "react-router-dom";

export const PrivateRoute=({children})=>{
const {token,isAuth}=useSelector(state=>state.AuthReducer)
console.log(isAuth,token)
const navigate=useNavigate()
  useEffect(() => {
    if (token=='null'||token==null) {
      navigate('/');
      alert("Please login first to visit...")
    }
  }, [token, navigate]);

  return token ? children : <Navigate to="/login" replace />;

}