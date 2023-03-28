import { Navigation,Scrollbar} from 'swiper';
import { lazy} from 'react';
import { Box } from '@chakra-ui/react';
import { Swiper,SwiperSlide} from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
const Card = lazy(()=>import('../card/card'))
export default function SwiperContent(props){
  return(
  <Box as={Swiper}
  padding='2rem'
  width='100%'
  height={['560px','650px','670px']}
  overflow='hidden'
  mb='2'
  modules={[Navigation, Scrollbar]}
  navigation={{
    nextEl: `.${props.classNext}`,
    prevEl: `.${props.classPrev}`
  }}
  breakpoints={{
    200: {
      slidesPerView: 1,
      spaceBetween: 20
    },
    400: {
      slidesPerView: 1.2,
      spaceBetween: 20
    },
    570: {
      slidesPerView: 1.8,
      spaceBetween: 30
    },
    
    750: {
      slidesPerView: 2.2,
      spaceBetween: 30
    },
    800: {
      slidesPerView: 2.3,
      spaceBetween: 30
    },
    1000: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    1200: {
      slidesPerView: 4,
      spaceBetween: 40
    }
  }}
  scrollbar={{
    draggable: false,
    el:`.${props.classScroll}`,
    dragClass:`${props.drag}`,
    dragSize:150
  }}
  className='swiper-container'
>
 { 
 props.data.map((el,index)=>{
   return <SwiperSlide key={index}>
     <Card data={el}></Card>
     <Box className="swiper-lazy-preloader  swiper-lazy-preloader-white"></Box>
   </SwiperSlide>
 })
 }
</Box>
  )
}