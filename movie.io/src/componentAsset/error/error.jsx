import { Container,Text,Center } from "@chakra-ui/react";
export default function Error(props){
  return(
    <Container className='error-message' height='600px' width='100%' p='5' m='auto'>
         <Center m='auto' height='100%' p='2'>
            <Text as='h2' fontSize={['1.5rem','2rem','2.5rem']}>{props.message}</Text>
         </Center>
    </Container>
  )
}