import { 
  Box,
  Flex,
  IconButton 
} from "@chakra-ui/react"
import { ArrowLeftIcon,ArrowRightIcon } from "@chakra-ui/icons";
export default function ContentNavigation(props){
    return(
        <>
        <Flex className='navigation'  p='2' justifyContent='space-around' display={['none','none','flex']} alignItems='center' mt='3' mb='3'>
            <IconButton
                colorScheme='telegram'
                aria-label='prev'
                size='lg'
                className={props.prevClassName}
                padding='9'
                mr='3'
                icon={<ArrowLeftIcon />} />
            <IconButton
                colorScheme='telegram'
                aria-label='next'
                padding='9'
                size='lg'
                className={props.nextClassName}
                icon={<ArrowRightIcon />} />
        </Flex><Box as='div' display={['flex','flex','none']}  mb='3'  borderRadius='20px' className={props.scrollClassName} padding='2' width='100%'>
         <Box className={props.drag} p='6' width='80%' borderRadius='12px' bg='brand.700'></Box>
        </Box>
     </>
    )
}