// import dotenv from "dotenv"
import axios from "axios";
import {
  LOGIN_FAILED,
  LOGIN_REQUEST,
  LOGIN_SUCESS,
  SIGNUP_FAILED,
  SIGNUP_REQUEST,
  SIGNUP_SUCESS,
} from "./Auth.Action.Types";
// dotenv.config()

let url = "http://localhost:8080";
export const login = (info) => async (dispatch) => {
  console.log(info);
  try {
    dispatch({ type: LOGIN_REQUEST });
    let data = await axios.post(`${url}/api/login`, info);
    dispatch({ type: LOGIN_SUCESS, payload: data.data.token });
//     console.log(data);
    alert(data.data.message);
  } catch (e) {
    alert(e.response.data.message);
    dispatch({ type: LOGIN_FAILED });
  }
};

export const signup = (info) => async (dispatch) => {
  try {
    dispatch({ type: SIGNUP_REQUEST });
    let data = await axios.post(`${url}/api/register`, info);
    dispatch({ type: SIGNUP_SUCESS });
    alert(data.data.message);
    // console.log(data,"D")
  } catch (e) {
    dispatch({ type: SIGNUP_FAILED });
    alert(e.response.data.message);
    // console.log(e);
  }
};
