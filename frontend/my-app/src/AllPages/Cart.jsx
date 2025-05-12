import { useEffect, useState } from "react"
import { Box , SimpleGrid, Text,Image, Button} from "@chakra-ui/react"
import { Card2 } from "../Component/Card2";
import { ChakraProvider } from "@chakra-ui/react"; 
import { Link } from "react-router-dom";
import {Footer} from "../Component/Footer"

 export const Cart=()=>{
   let cartdata=  JSON.parse(localStorage.getItem("cart"))||[];
   const [data,setData]=useState(cartdata)
// handel Remove functionality
 const handelClick=(ind)=>{
    let newData=cartdata.filter((e,i)=>i!==ind)
  localStorage.setItem("cart",JSON.stringify(newData));
  setData(newData)
 }

 useEffect(()=>{},[data ])
 

   return <ChakraProvider> 
      <Box>
      <Box pt="10px" display={"flex"}  
      flexDir={{ base: "column-reverse", md: "row" }} 
      fontFamily={"'Poppins', sans-serif;"}   >
   
           <Box 
           w={{base:"100%",md:"80%",lg:"50%"}} bg="white" 
           pt="10px"  backgroundColor={"blue.200"}  
           boxShadow='dark-lg'> 
            <SimpleGrid  columns={[1, 1, 2]} spacing={10} 
            w="80%" m="auto"  >
                            
         {/* cart item render here */}
        {data.length===0?<Image src="https://assets.materialup.com/uploads/16e7d0ed-140b-4f86-9b7e-d9d1c04edb2b/preview.png"/>:null}
         {data?.map((e,i)=>{
         return   <Box  boxShadow='dark-lg'  bg="white" p="10px"  key={Date.now()+i} > <Card2 data={e} index={i} handelClick={handelClick}/ > </Box>  
         })}
   
        </SimpleGrid>
        </Box> 
      
      <Box  w={{base:"95%",md:"80%",lg:"48%"}} ml="5px"
        h="300px" bg="#f0f0f0" pt="10px"   
        padding={"5%"}
        boxShadow='dark-lg'
        borderRadius={"10%"}
        backgroundImage="url('https://img.freepik.com/free-photo/book-composition-with-open-book_23-2147690555.jpg')"
      >
         {/* Cart DETAILS */}
    <Text> orderId :{Date.now()}</Text>
    <Text>Total Item : {data?.length}</Text>
    {/* cart total Reducer function */}
    <Text> Total price: {data.reduce((acc,e)=>{
      return acc+=+e.saleInfo.listPrice.amount},0)}
     </Text>
     {/* Checkout Button link to checkout page */}
     <Link to="/checkout"> <Button bg="black" color="white">Checkout</Button></Link>
 </Box>
  
</Box>
<Footer/>
</Box>
</ChakraProvider>
}