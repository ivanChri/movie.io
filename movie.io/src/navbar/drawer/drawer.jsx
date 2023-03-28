import {
    Drawer,
    DrawerBody,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    useDisclosure,
    IconButton,
    Text,
    Link,
    Stack,
  } from '@chakra-ui/react'
  import { HamburgerIcon} from '@chakra-ui/icons'
  import SeacrhComponent from '../searchComponent/search.jsx'
  import { Link as ReactLink } from 'react-router-dom'
  import { useRef } from 'react'
  export default function Drawers(props){
     const link = [
      {
        route:'/',
        name:'Home'
      },
      {
        route:'/about',
        name:'About'
      }
     ]
     const {isOpen,onClose,onOpen} = useDisclosure()
     const btnRef = useRef()
       return (
        <>
           <IconButton 
           ref={btnRef} 
           aria-label='navigation-button'
           colorScheme='inherit'
           size='lg'
           onClick={onOpen}
           icon={<HamburgerIcon />}
           fontSize='2rem'
           p='1'
           display={['block','block','block','none']}
           />
           <Drawer
            isOpen={isOpen}
            placement='top'
            onClose={onClose}
            finalFocusRef={btnRef}
            >
            <DrawerOverlay />
              <DrawerContent bg='#233458'>
                <DrawerCloseButton fontSize='1.5rem'/>
                  <DrawerHeader><Text fontSize='1.8rem'>Movies.io</Text></DrawerHeader>
                    <DrawerBody mb='4'>
                        <Stack direction='column' spacing='24px' text-align='center' mb='4' mt='2' bg='inherit'>
                         {link.map((el,index)=>{
                           return <Link
                           as={ReactLink}
                           padding='.5rem'
                           fontSize='1.4rem'
                           display='block'
                           color='rgb(230, 230, 230)'
                           key={index}
                           onClick={onClose}                          
                            to={`${el.route}`}>
                           {el.name}</Link>
                         })}
                         </Stack>
                         <SeacrhComponent event={props.event} clearValue={props.clearValue} value={props.value}/>
                    </DrawerBody>
                  </DrawerContent>
                </Drawer>
          </>
            )
  }