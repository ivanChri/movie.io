import {Box} from "@chakra-ui/react"
import { lazy,Suspense } from "react"
import ContentHeader from "../contentHeader/contentHeader"
import LoadingSpiner from "../../../../componentAsset/spiner/spiner"
const SwiperComponent = lazy(()=>import('../../../../componentAsset/swiper/swiper'))
const ErrorComponent = lazy(()=>import('../../../../componentAsset/error/error'))
const Navigation = lazy(()=>import('../contentNavigation/contentNavigation'))
export default function ContentSection(props){
 return(
   <><ContentHeader title={props.title} keyword={props.keyword} setParam={props.event} parentClass='home-content'/>
   <Box  p='1'  height={['633px', '750px','800px']} bg='#192642'>
      {props.isLoading ? 
      <LoadingSpiner/> : 
      props.movie.length ? 
          <Suspense>
             <SwiperComponent classNext={props.classNext} classPrev={props.classPrev} classScroll={props.classScroll} data={props.movie} drag={props.classDrag} />
             <Navigation nextClassName={props.classNext} prevClassName={props.classPrev} scrollClassName={props.classScroll} drag={props.classDrag} />
          </Suspense>
         :<Suspense><ErrorComponent message='Opps something Went Wrong'/></Suspense>
        }
    </Box></>
       )
 }