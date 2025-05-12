import { SimpleGrid,Box,Text, Button,H6,P,HStack, Spacer ,Wrap,WrapItem,Stack, Heading, ChakraProvider} from '@chakra-ui/react'
 
import { Insta,Linked,Face,Twitter, Phone, Delivery, Return,Help, Track, Visa, Master, Card, PhonePay, Paytm, GPay, Paypal } from './Icon'
export  function Footer(){

 return <Box mt="20px">
 
 <SimpleGrid fontSize={"13px"} borderTop="1px solid black" columns={{base:1,sm:1,md:2,lg:2,'xl':2}} spacing={{base:1,sm:1,md:2,lg:2,'xl':2}}>
  <Box  height='80px' pt={2} h={"120px"}>
    <Text mb={"20px"} fontSize={"13px"}>Sign up to our email list and receive 20% off your next order</Text>
    <Button ml="2px" bg="black" color={"white"} size={{base:"xs",sm:"sm", md:"md" ,lg:"md"}} >Sign Up</Button>
  </Box>

  <Box  h={"120px"}  >
   <Text mt="7px"> Connect with us </Text> 
   <Stack direction='column' style={{cursor:"pointer"}} > 
{/* connect with icon */}
  <Wrap spacing={4} >
    <WrapItem>
    <Insta  />
     </WrapItem>
    <WrapItem>
     <Linked/>
    </WrapItem>
  </Wrap>
</Stack>
  </Box>

</SimpleGrid>
<SimpleGrid  fontSize={"13px"} row={{base:1,sm:1,md:2,lg:2,'xl':4}} columns={{base:1,sm:1,md:2,lg:4,'xl':4}} spacing={{base:1,sm:1,md:2,lg:2,'xl':2}} >
  <Box   >
  <Stack direction='column' spacing={4} borderTop="1px solid black">
    <HStack>
        < Phone />  <Text>Customer Service </Text>  
   </HStack>
   <HStack>
        <Delivery  />  <Text>Delivery </Text>  
   </HStack>
   <HStack>
        <Return  />  <Text>Return Refund </Text>  
   </HStack>
   <HStack>
        <Help  />  <Text>Help Center </Text>  
   </HStack>
   <HStack>
        <Track  />  <Text>Track Order </Text>  
   </HStack>
</Stack>
  </Box>
  <Box >
  <Stack direction='column' spacing={4} borderTop="1px solid black">
    <HStack>
          <Heading mt="3px" size="xm">About Bookstore </Heading>   
   </HStack>
   <HStack>
   <Text>About Us </Text> 
   </HStack>
   <HStack>
   <Text>Affiliate Programing </Text> 
   </HStack>
   <HStack>
   <Text> Brand Directory </Text>  
   </HStack>
   <HStack>
   <Text>Coupnes Code </Text> 
   </HStack>
   <HStack>
   <Text>Refer A Friend </Text> 
   </HStack>
   <HStack>
   <Text>Student Discount </Text>  
   </HStack>
</Stack>
  </Box>
  <Box >
  <Stack direction='column' spacing={4} borderTop="1px solid black">
    <HStack>
      <Heading mt="3px" size="xm">Legal </Heading>  
   </HStack>
   <HStack>
          <Text> Cookies Information </Text>  
   </HStack>
   <HStack>
        <Text>Privacy Policy </Text>  
   </HStack>
   <HStack>
         <Text>Terms & Condition  </Text>  
   </HStack>
   <HStack>
        <Text>Mordern Slavery Statement </Text>  
   </HStack>
</Stack>
  </Box>
  <Box >
  <Stack direction='column' spacing={4} borderTop="1px solid black">
    <HStack>
         <Heading size="xm" mt="3px">Help </Heading>  
   </HStack>
   <HStack>
       <Text>Contact Us </Text>  
   </HStack>
   
</Stack>
  </Box>
</SimpleGrid>
<SimpleGrid  flex-direction="row-reverse" columns={{base:1,sm:2,md:2,lg:2,'xl':2}} spacingX='10px' spacingY='20px'  borderTop="1px solid black">
  <Box  ml="10px">
    <Heading>Furation tech</Heading>
    <Text>2023 The bookstore app  Ltd</Text>
  </Box>
  <Box >
    <Heading size="sm" mb="8px">Pay Securely with ?</Heading>
    <SimpleGrid columns={{base:3,sm:4,md:4,lg:5,'xl':5}} spacing='3px'>
   <Visa />
  <Master/>
<Card/>
<Master/>
<PhonePay/>
<Paytm/>
<GPay/>
<Paypal/>
  
</SimpleGrid>
  </Box>

</SimpleGrid>
 </Box>

}