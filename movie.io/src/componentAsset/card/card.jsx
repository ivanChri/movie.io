import { Image,Text,Box,LinkBox,LinkOverlay} from "@chakra-ui/react"
import { motion } from "framer-motion"
import { Link as ReactLink } from "react-router-dom"
export default function MovieCard(props){
  return (
    <motion.div
     className="motion-card-wrapper"
     initial={{
      x:-10,
      opacity:0
     }}
     animate={{
      x:0,
      opacity:1
    }}
     transition={{
      duration:1,
       delay:0.3,
       transition:{
        duration:0.5,
        type:'spring', 
         damping: 17 
      }
     }}
    >
    <LinkBox as='div' maxW='sm' bg='brand.100' padding='1rem' textAlign='center' borderRadius='18px' mt={['3.5rem','3.5rem']} mb={['2rem','3.5rem']}>
     <LinkOverlay  as={ReactLink} to={`/detail/${props.data.first_air_date ? 'tv' : 'movie'}/${props.data.id}`} >
     <Image 
     src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} 
     alt={props.data.name || props.data.title} 
     loading='lazy' 
     bg='black' 
     boxSize={props.data.poster_path ? ['sm','md'] : '300px'}
     objectFit='cover' 
     borderRadius='12px' 
     m='auto'/>
    <Text  fontSize={['20','23']} mt='3' mb='2' padding='2' height='auto'>{props.data.title || props.data.name}</Text>
     </LinkOverlay>
     </LinkBox>
    </motion.div>
   )
}