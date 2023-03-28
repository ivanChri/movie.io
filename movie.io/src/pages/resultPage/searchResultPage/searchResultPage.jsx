import { useParams } from "react-router-dom"
import {  searchMovie } from "../../../utils/fetch"
import ContentHeader from "../../home/homeContent/contentHeader/contentHeader"
import { Box } from "@chakra-ui/react"
import { useState,useEffect,lazy,Suspense} from "react"
import Footer from "../../../footer/footer"
import Fallback from "../../../componentAsset/fallback/fallback"
import SearchNavigation from "./searchNavigation/searchNavigation"
import AnimationWrapper from "../../../componentAsset/animationWrapper/animationWrapper"
const ContentCard = lazy(()=>import("../../../componentAsset/cardList/cardLIst"))
const ErrorComponent = lazy(()=>import("../../../componentAsset/error/error"))
export default function SearchResultPage(){
 const param = useParams()
 let searchQuery=param.query.replaceAll(' ','+')
 const [data,setData] = useState([])
const [show,setShow] = useState([])
 const [load,setLoad] = useState(true)
 useEffect(()=>{
   const getData = async (query) => {
     try{
    const datas = await searchMovie(query)
    setData(datas)
    changeData('movie',datas)
   }catch(err){
     console.log(err)
   }finally{
    setLoad(false)
   }
   }
   getData(searchQuery)
   return () =>{
    setLoad(true)
    setShow([])
   }
 },[])
 const changeData = (type,data) =>{
  const filter = data.filter((el)=>{
    return el.media_type === type
 })
  setShow(filter)
}
 return(
  <AnimationWrapper>
     <Box as='section' mt='6rem' width='100%' height='100%' bg='#192642' padding={['1','1rem']} className="seacrh-result-page">
         {load ? <Fallback /> :
         data.length ?
         <><SearchNavigation query={param.query} event={changeData} data={data} />
         <Suspense><ContentCard data={show} message='no result found for this media type'/></Suspense></>
        :<Suspense><ErrorComponent message={`cannot find ${param.query}`}/></Suspense>
        }
      </Box>
      <Footer />
  </AnimationWrapper>
 )
}