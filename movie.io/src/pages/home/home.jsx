import { Box } from "@chakra-ui/react"
import Footer from "../../footer/footer"
import Jumbotron from "./jumbotron/jumbotron"
import { useEffect } from "react"
import { TrendingSection,NewMovieSection,RecomendMovieSection} from "./template/template"
import AnimationWrapper from "../../componentAsset/animationWrapper/animationWrapper"
export default function Home(){
  useEffect(()=>{
    window.scrollTo('500','0')
  },[])
 return(
  <AnimationWrapper>
    <Box as='section' mt='4rem' className="home">
     <Jumbotron />
      <TrendingSection />
      <NewMovieSection />
      <RecomendMovieSection />
      <Footer />
   </Box>
   </AnimationWrapper>
 )
}