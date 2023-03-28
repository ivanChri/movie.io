import { Input,Button,Box } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
export default function SeacrhComponent(props){
    const navigate = useNavigate()
    const search = (query) =>{
      if(query){
        return navigate(`/search/${query}`)
      }else{
        alert('false')
      }
    }
    return (
        <Box bg='inherit' display={props.view || 'block'}>
            <Input
            placeholder='search'
            focusBorderColor='rgb(37, 37, 224)'
            size='lg'
            border="none"
            value={props.value}
            borderRadius='32px'
            bg='#192642' 
            width={['100%','60%']}
            onChange={props.event}
            />
        <Button colorScheme='telegram' p='1.5rem' m={{base:'2',sm:'1.5',md:'1',lg:'1.5',xl:'1.5'}}  borderRadius='10px' onClick={()=>{
            search(props.value)
            props.clearValue()
        }}>Search</Button>
    </Box>
    )
}