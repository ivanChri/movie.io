import { useParams } from "react-router-dom"
import AnimationWrapper from "../../componentAsset/animationWrapper/animationWrapper"
import { Box} from "@chakra-ui/react"
import { useState,useEffect,lazy,Suspense} from "react"
import Footer from "../../footer/footer"
import { getDetailMovies } from "../../utils/fetch"
import Fallback from "../../componentAsset/fallback/fallback"
const DetailTemplate = lazy(()=>import('./detailTemplate/detailTemplate'))
const ErrorComponent = lazy(()=>import('../../componentAsset/error/error'))
export default function DetailPage(){
  const params = useParams()
  const [data,setData] = useState({})
  const [load,setLoad] = useState(true)
  useEffect(()=>{
    const getData = async () =>{
        try{
          const movieData = await getDetailMovies(params.id,params.media)
          setData(movieData)
        }catch(error){
          console.log(error)
        }finally{
          window.scrollTo(500, 0)
          setLoad(false)
        }
    }
    getData()
  },[])
  console.log(data)
  return(
    <AnimationWrapper>
   <Box className='detail-page' padding='2' width='100%' mt='6.3rem' bg='#192642'>
   {load ?  <Fallback /> :
      data ? <Suspense><DetailTemplate data={data}/></Suspense> : 
      <Suspense><ErrorComponent message='opps something went wrong'/></Suspense>
     }
    </Box>
    <Footer />
    </AnimationWrapper>
  )
}