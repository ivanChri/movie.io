import { Flex,Menu,Button,MenuList,Text,MenuButton} from "@chakra-ui/react"
import { useState } from "react"
export default function ContentHeader(props){
  const [btnText,setBtnText] = useState(props.keyword[0].name)
    return(
        <Flex className="control" mt='5' p='5' mb='5' justifyContent='space-between' alignItems='center'>
     <Text as='h1' fontSize='1.5rem' textAlign='center'>{props.title}</Text>
     <Menu>
       <Button as={MenuButton} size='md' colorScheme='telegram' textAlign='center' borderRadius='12px' padding='8'>
         <Text fontSize='1.2rem' m='auto'>{btnText}</Text>
       </Button>
       <MenuList bg='brand.100' padding='4'>
         {props.keyword.map((el,index)=>{
          return <Button colorScheme='inherit'  p='6' ml='1'  bg='inherit' key={index} onClick={()=>{
            setBtnText(el.name)
            props.setParam(el.param)
          }}>
          <Text fontSize='1rem'>{el.name}</Text>
          </Button>
         })}
       </MenuList>
     </Menu>
   </Flex>
    )
}