import { Box } from "@chakra-ui/react"
import { Footer } from "./Footer"


export const Layout=({children})=>{
    return (
        <Box>
            <Box>{children}</Box>
            <Footer/>
        </Box>
    )
}