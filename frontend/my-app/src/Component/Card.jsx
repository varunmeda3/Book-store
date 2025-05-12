import React from 'react'
import { Button, Image,Text,Box } from '@chakra-ui/react'
import { css } from "@emotion/react";
import { Link } from 'react-router-dom';
function Card({data}) {
   
    const {volumeInfo,saleInfo,id} = data
    let thumbnail= volumeInfo.imageLinks &&  volumeInfo.imageLinks.smallThumbnail;

    const hoverStyles = css`
    &:hover {  
      background-color: green;
      color: white;
    }
  `;
    let amount=  saleInfo.listPrice && saleInfo.listPrice.amount;
    
    
 
  const handelClick=()=>{
    
  }

   if(thumbnail!==undefined){
    return (
        <  >
        {/* Making card for display Books */}
           <Link to={`/book/${id}`}>
            <Image   src={thumbnail} w="100%"  h="280px" alt="" />
            <Text>Rs {amount||1999}</Text>
            <Text>Author :{volumeInfo.authors?.map((e,i)=>i==0?e:null)}</Text>
            <Button  zIndex={0} css={hoverStyles} w="100%" bg="black" color="white" onClick={handelClick}>View Detail</Button>
            </Link>
        </>
      )
   }
   
}

 

export default Card
