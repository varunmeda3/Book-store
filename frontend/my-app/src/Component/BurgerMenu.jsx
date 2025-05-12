import { Button, Box, ChakraProvider} from '@chakra-ui/react'
  import { FiAlignJustify } from "react-icons/fi";
  import { IoClose } from "react-icons/io5";
import React, {   useState } from 'react'
import {NavLink } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux';
import { LOGOUT } from '../Redux/AuthRedux/Auth.Action.Types';

export function BurgerMenu() {
     const [state,setState]=useState(false)
     const  {token} =useSelector(state=>state.AuthReducer  );
     const dispatch=useDispatch()
    const handelClose=(e)=>{
      console.log("close")
        setState(false);
    }

    const handelOpen=(event)=>{   
      event.stopPropagation();
        setState(true)
    }
 
    return (
    <ChakraProvider>
      {/* code for burger menue */}
         {!state?<Button onClick={handelOpen} zIndex={100}    position={"fixed" }top="10px" right="10px"><FiAlignJustify size="30"/></Button>:<Button   onClick={handelClose} zIndex={3} position={"fixed" }top="7px" right="10px"><IoClose  size="25"/></Button>  }
          <Box fontSize={"1.4rem"} position={"fixed"} zIndex={1} w="100%" h="100vh"   onClick={handelClose} display={state?"block":"none"} >
                 <Box onClick={handelOpen} display={"flex"} flexDirection={"column"} gap="10px" zIndex={20}  w="45%" h="100vh" backgroundColor="rgba(64,123,255,0.5)" float="right"   textAlign={"center"} pt="15%">
                 <NavLink  to="/book" > <Button     >Book</Button></NavLink>
                 <NavLink  to="/cart"  >  <Button  >Cart</Button></NavLink>
              {!token?  <NavLink  to="/"  > <Button   >Signup</Button></NavLink>:null} 
              {!token?  <NavLink  to="/login"  > <Button   >Login</Button></NavLink>:null}
                 {token? <NavLink  > <Button onClick={()=>dispatch({type:LOGOUT})}>
    Logout
  </Button></NavLink>:null }
       </Box>         
      </Box>
      
      </ChakraProvider>
    )
  }