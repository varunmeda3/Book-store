import { Box, Button, ChakraProvider, FormControl, FormLabel, Input,   Select, VStack } from "@chakra-ui/react"
import { useState } from "react"
import { Footer } from "../Component/Footer"

let details={
    name:"",
    pincode:"",
    email:"",
    address:"",
}

export const Checkout=()=>{
   const [data,setDate]=useState(details)
//  console.log(data)
    //  Input onChange event
    const handelChange=(e)=>{
       const {name,value}=e.target;
       setDate({...data,[name]:value})
    }
    const handelSubmit=()=>{
      // Condition if user not fiels the Input
          for(let k in data){
            if(data[k]==""){
               alert("PLease fill all details")
                return 
            }
          }
         
        alert(`Hey your order is sucessfull`)
    } 
    return <ChakraProvider>
             <Box>
            <Box maxWidth="500px" mx="auto" boxShadow={"lg"}>
      <VStack spacing={4} p={4}>
        {/* Form to get the user Details */}
        <FormControl id="name">
          <FormLabel >Name</FormLabel>
          <Input name="name" type="text" onChange={handelChange} />
        </FormControl>
        
        <FormControl id="email">
          <FormLabel>Email</FormLabel>
          <Input name="email" type="email" onChange={handelChange} />
        </FormControl>
        
        <FormControl id="address">
          <FormLabel>Address</FormLabel>
          <Input name="address" type="text" onChange={handelChange} />
        </FormControl>
        
        <FormControl id="pincode">
          <FormLabel>Pincode</FormLabel>
          <Input name="pincode" type="text" onChange={handelChange} />
        </FormControl>
        <FormControl id="paymentMethod">
          <FormLabel>Payment Method</FormLabel>
          <Select>
            <option value="cash">Cash on Delivery</option>
          </Select>
        </FormControl>
        {/* Submit Butoon  */}
        <Button colorScheme="teal" onClick={handelSubmit}>Submit</Button>
      </VStack>
    </Box>
    <Footer/>
    </Box>
    </ChakraProvider>
}