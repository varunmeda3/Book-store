import { useState } from "react"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { Box,Image,Text,Heading, Button } from '@chakra-ui/react'
import { useSelector } from "react-redux"

const DetailPage=()=>{
const  {token} =useSelector(state=>state.AuthReducer  )
 const cartdata=JSON.parse(  localStorage.getItem("cart"))||[] 
 const {id}=useParams()
 const [data,setData]=useState()
 const [load,setLoad]=useState(false)
 useEffect(()=>{
  setLoad(true)
    fetch(`https://www.googleapis.com/books/v1/volumes/${id}
    `).then((res)=>res.json()).then((res)=>{
setData(res);
setLoad(false)
    }).catch((e)=>{
      console.log(e);
      setLoad(false)
    })
    window.scrollTo(0, 0);
 },[id])
 

 const handelClick=(data)=>{
  cartdata.push(data)
    localStorage.setItem("cart",JSON.stringify(cartdata));
   alert("Item added to cart  sucessfully")
  }
 
 if(load){
  return <Box value={80} mt="20%" ml="45%" >Loading...</Box>
 }

 if(data){
  return <Box w="100%"   bg="#f0f0f0" pt="20px" pl="10%"  fontFamily={"'Poppins', sans-serif;"} fontSize={{
    base:"16px",
    sm: '16px',
    md: '16px',
    lg: '16px',
    xl: '20px',
    
  }} > 
  <Box display={"flex"}  flexDir={{ base: "column", md: "row" }}    w={{ base:"90%", md:" 80%" }}   >  
  {/* image of book and details about book */}
    <Box boxShadow='lg' bg="white"   p="1%"><Image w={{ base:"100%", sm:"70%", md:"100%",lg:"100%" }} height={"250px"} src={data?.volumeInfo.imageLinks.thumbnail}/>  </Box>
          <Box boxShadow='lg' bg="white"  p="1%" >
          <Heading as='h1' size='4xl'>Title : {data?.volumeInfo.title}</Heading>
         <Text>Author : {data?.volumeInfo.authors.map((e)=>e+" ")}</Text>
         <Text>Rs {data?.saleInfo.listPrice.amount}</Text>
         <Text>Pages {data?.volumeInfo.pageCount}</Text>
         <Text>Publish Date :{data?.volumeInfo.publishedDate}</Text>
         <Button w="80%" bg="blue.100" onClick={()=>handelClick(data)} >Add to Cart</Button>
           </Box>
  </Box>
  <Box w={{
    base:'100%',
    sm: '95%',
    md: '75%',
    lg: '68%',
    xl: '60%',
    
  }} mt="4%">
    {/* small description about book */}
  <Text textAlign={"center"} color="blue">  Small Description</Text>
  <Text noOfLines={[25, 13, 15]} dangerouslySetInnerHTML={{ __html: data?.volumeInfo.description }} >
   </Text>
</Box>
</Box>
 }

 
}

export default DetailPage