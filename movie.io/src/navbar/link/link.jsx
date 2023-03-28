import { Stack,Link} from "@chakra-ui/react"
import { Link as ReactLink } from "react-router-dom"
export default function LinkComponent(props){
  const link = [
     {
      route:'/Movie',
      name:'Movies'
     },
     {
      route:'/TV',
      name:'TV Show'
     },{
      route:'/about',
      name:'About'
     }
]
    return(
        <Stack direction={props.direction} spacing='34px' text-align='center' bg='inherit' display={props.view}>
          {link.map((el,index)=>{
            return <Link
            as={ReactLink}
            padding='.5rem'
            fontSize='1.4rem'
            display='inline-block'
            color='rgb(230, 230, 230)'
            key={index}
            _hover={{
              color:'lightBlue',
              borderBottom:'1.5px solid blue'
            }}
            to={`${el.route}`}>
            {el.name}</Link>
          })}
        </Stack>
    )
}