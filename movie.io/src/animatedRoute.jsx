import{
    Routes, 
    Route,
    useLocation
  } from "react-router-dom"
  import { AnimatePresence } from 'framer-motion'
  import { lazy,Suspense } from 'react'
  import Fallback from "./componentAsset/fallback/fallback"
  const Home = lazy(()=>import('./pages/home/home'))
  const Detail = lazy(()=>import('./pages/detail/detailPage'))
  const ResultPage = lazy(()=>import("./pages/resultPage/searchResultPage/searchResultPage"))
export default function AnimatedRoute(){
    const location = useLocation()
    return(
        <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path='/' element={<Suspense fallback={<Fallback/>}><Home/></Suspense>}></Route>
        <Route path='/detail/:media/:id' element={<Suspense fallback={<Fallback />}><Detail /></Suspense>}></Route>
        <Route path='/search/:query' element={<Suspense Fallback={<Fallback />}><ResultPage /></Suspense>}></Route>
      </Routes>
      </AnimatePresence>
    )
}