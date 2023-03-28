import { Box,Text,Stack,Image } from "@chakra-ui/react"
export default function DetailTemplate(props){
    return(
    <Stack className="content-container" mb='2rem' height={['100%','115vh']}  padding='1' width='100%' direction={['column','row']} spacing='12px'>
     <Box className='image-container' p='2' maxW='lg' width={['100%','450px','400px']} m={['auto','0']}>
        <Image src={`https://image.tmdb.org/t/p/w500/${props.data.poster_path}`} alt={props.data.name || props.data.title}  bg='black'   objectFit='cover' borderRadius='12px' m='auto' />
     </Box>
     <Box  className='content-info' width={['100%','100%','80%']}  m='auto'  padding='2'>
       <Box className='info-header'>
       <Text as='h1' className='title' fontSize={['1.5rem','2rem']} mb='1' mt='2'>{props.data.title || props.data.name}</Text>
        <Box  p='4' className="genre" mt='2' mb='2' bg='brand.100' borderRadius='12px'>
         <Text p='1' fontSize='1.2rem'>Genre</Text>
        {props.data.genres &&
        <>
          {props.data.genres.map((el, index) => {
             return <Text as='span' mr='2' padding='1' fontSize='1.1rem' display='inline-block' key={index}>{el.name}</Text>
          })}
        </>
        }
      </Box>
      </Box>
      <Box  p='4' className="release-year" mt='2' mb='2' bg='brand.100' borderRadius='12px'>
        <Text p='1' fontSize='1.2rem'>Release</Text>
        <Text as='span' mr='4' padding='1' fontSize='1.1rem' display='inline-block'>{props.data.first_air_date || props.data.release_date}</Text>
       </Box>
       <Box  p='4' className="score" mt='2' mb='2' bg='brand.100' borderRadius='12px'>
        <Text p='1' fontSize='1.2rem'>user score</Text>
        <Text as='span' mr='4' padding='1' fontSize='1.1rem' display='inline-block'>{props.data.vote_average}</Text>
       </Box>
       <Box className='info-body' mt='3' p='4'>
        <Text as='h3' fontSize='1.4rem' mt='1' mb='2'>overview</Text>
         <Text as='p' fontSize={['1.5rem','1.2rem','1.1rem']} lineHeight={['2.5rem','auto']}>{props.data.overview}</Text>
       </Box>
       <hr></hr>
       </Box>
     </Stack>
    )
}