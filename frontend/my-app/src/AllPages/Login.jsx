import { Box, CircularProgress} from '@chakra-ui/react'
import {
    FormControl,
    FormLabel,Input  ,Button,Heading
   
  } from '@chakra-ui/react'
import {useNavigate} from "react-router-dom" 
import { Image } from '@chakra-ui/react'
import { ChakraProvider,   } from "@chakra-ui/react";
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/AuthRedux/Auth.Action';

const init={
   email:"",password:"",
}
export const Login=()=>{

const [state,setState]=useState(init)
const { login_loading,isAuth,token}=useSelector(state=>state.AuthReducer )

console.log( login_loading,isAuth,token)
const navigate=useNavigate()
const dispatch=useDispatch() 
const handelChange=(e)=>{
  const {name,value}=e.target; 
setState({...state,[name]:value})
}

const handelSubmit=(e)=>{
    dispatch(login(state))
}

if(token){
  navigate("/book")
  return
}
 
return  <ChakraProvider >
    <Box display={"flex"}  >
    <Box p='4' w={"50%"} h={"100vh"} display={{ base: "none", md: "block" }}   bg='#f0f0f0' >
    <Image w={"100%"} h={"100vh"} 
    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_KgTEeNlUjKGQd2Pq3o5q8Jt8RRYge8Tuvw&usqp=CAU' alt='Dan Abramov' />
    </Box>
    
    <Box  w={{ base: "100%", md: "50%" }} h={"100vh"}  bg='#f0f0f0'>
        {/* Form For Login */}
    <FormControl isRequired  p={"10px"} m="auto" w="80%" mt="25%" backgroundColor={"white"} >
    <Heading textAlign={"center"}>Login</Heading>
      
       <FormLabel>Email</FormLabel>
       <Input name="email" onChange={handelChange} placeholder='email' />
       <FormLabel>Password</FormLabel>
       <Input name="password" onChange={handelChange} placeholder='password' />
        
       <Button    mt="1rem" w="100%" onClick={handelSubmit}>{login_loading?<CircularProgress isIndeterminate size='2rem'
        color='red.300' />:"Submit"}
       </Button>
</FormControl>
    </Box>
  </Box>
  </ChakraProvider>
}