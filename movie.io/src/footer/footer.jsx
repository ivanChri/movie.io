import { Box,Center } from "@chakra-ui/react";
export default function Footer(){
    return(
        <Box as='footer' mt='1.5rem' p='15' height='120px' width='100%'  bg='brand.100'>
            <Center m='5' fontSize='1.8rem'>Movie.io</Center>
        </Box>
    )
}