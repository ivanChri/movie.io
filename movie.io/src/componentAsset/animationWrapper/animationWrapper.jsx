import { motion } from "framer-motion"
export default function AnimationWrapper({children}){
    const variant = {
        visible:{
            opacity:1,
            transition:{
                duration:.8,
                delay:.4
            },
        },
        hidden:{
            opacity:0,
        },
        exit:{
            opacity:0,
        }
    }
  return(
    <motion.div
     variants={variant}
     animate='visible'
     initial='hidden'
     exit='exit'
     className='animation-wrapper'
    >
    {children}
    </motion.div>
  )
}