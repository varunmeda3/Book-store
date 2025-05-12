import { Link } from "react-router-dom";
import { Button, Image,Text,Box } from '@chakra-ui/react'
import { css } from "@emotion/react";
 export const Card2=({data,index,handelClick})=>{
    
    const {volumeInfo,saleInfo,id} = data
    let thumbnail= volumeInfo.imageLinks &&  volumeInfo.imageLinks.smallThumbnail;

    const hoverStyles = css`
    &:hover {  
      background-color: red;
      color: white;
    }
  `;
    let amount=  saleInfo.listPrice && saleInfo.listPrice.amount;
    
    
 
 

   if(thumbnail!==undefined){
    return (
        <  >  
        {/* Making card for Cart Display */}
            <Image   src={thumbnail} w="100%"  h="280px" alt="" />
            <Text>Rs {amount||1999}</Text>
            <Text>Author :{volumeInfo.authors?.map((e,i)=>i===0?e:null)}</Text>
            <Button  zIndex={0} css={hoverStyles} 
            w="100%" bg="black" color="white"
             onClick={()=>handelClick(index)}>Remove</Button>
            
        </>
      )
   }
}