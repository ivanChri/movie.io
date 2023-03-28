import { useState,lazy,Suspense,useEffect } from "react";
import { Link } from "react-router-dom";
import LinkComponent from "./link/link";
import { Flex,Text,Box} from "@chakra-ui/react";
import SeacrhComponent from "./searchComponent/search";
const Drawer = lazy(()=>import("./drawer/drawer"))
export default function Navbar(){
  const breakpoint = {base:'none',lg:'inline-block',md:'none',sm:'none',xl:'inline-block'}
  const [value, setValue] = useState('')
  const handleChange = (event) => {
    setValue(event.target.value)
  }
  const clearValue = () =>{
    setValue('')
  }
  const [width,setWidth] = useState(window.innerWidth)
  window.addEventListener('resize',()=>{
    setWidth(window.innerWidth)
  })
  const [visible,setVisible] = useState(false)
  useEffect(()=>{
    const updateWindowSize = () =>{
      if(width < 1000){
        setVisible(true)
      }else{
        setVisible(false)
      }
    }
    updateWindowSize()
    return () => {
      setVisible(false)
    }
  },[width])
  return(
    <Box as='header' p='6' className='header'  width={window.innerWidth} bg='brand.100' position='fixed' top='0' zIndex='999' boxShadow='dark-lg'>
    <Flex as='nav'  justify='space-between' align='center' w='100%'>
       <Text as='h1' fontSize='1.8rem'><Link to={'/'}>Movies.io</Link></Text>
       <LinkComponent direction='row' view={breakpoint}/>
       <SeacrhComponent event={handleChange} value={value} clearValue={clearValue} view={breakpoint}/>
      {visible && <Suspense><Drawer event={handleChange} clearValue={clearValue} value={value}/></Suspense>}
    </Flex>
    </Box>
  )
}