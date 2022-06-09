import { motion } from 'framer-motion';
import classes from './NothingFound.module.css'

const NothingFound = (props)=>{
return <motion.div className={classes.NothingFound}
initial={{ x: window.innerWidth}}
animate={{ x: 0 }}
exit={{x:window.innerWidth,transition:{duration:0.1}}}
>
    <p>no Image found</p>
</motion.div>
}


export default NothingFound;