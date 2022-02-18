import './App.css';
import "../src/styles/home.scss";
import {images} from "../src/constants";
import { motion, AnimatePresence } from "framer-motion";

// Animation  Styling //////////////////////////////////////////////////////////
const easing = [.7, -.07, .01, .97]
const fadeInRight = {
    initial: {
        x:-200,
        opacity:0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition:{
            duration: 2,
            ease: easing
        }
    }
}
// End of Animation  Styling //////////////////////////////////////////////////////////


function App() {
  return (
    <motion.div animate={'animate'} initial={'initial'}>
      <div className="social--links-container">
          <div className="social-img">
              <div className="yellow--box" />
              <img src= {images.nft}  alt="nft"/>
              <p className="social--name"> Mr. Wallace</p>
          </div>
          <div className="social--header">
              <h2>Social Links</h2>
          </div>
          <motion.div className="links-container" >
              <motion.ul style={{padding: "0"}} >
                <li>
                  <motion.div className="social-links" initial={{x:-200 , opacity:0 }} transition={{duration:1 ,ease:easing}}  animate={{x:0 , opacity:1 }}>
                    <img src={images.github} alt="github"/>
                    <p>Github</p>
                    <motion.button onClick={event =>  window.location.href='https://github.com/matthewowallace'} initial={{x:250 , opacity:0 }} transition={{duration:1 ,ease:easing}} animate={{x:0 , opacity:1 }}>Explore</motion.button>
                  </motion.div>
                </li>
                <hr/>
                <li>
                  <motion.div className="social-links" initial={{x:-200 , opacity:0 }} transition={{duration:2 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                    <img src={images.behance} alt="behance"/>
                    <p>Behance</p>
                    <motion.button onClick={event =>  window.location.href='https://www.behance.net/matthewwallace4'} initial={{x:250 , opacity:0 }} transition={{duration:2 ,ease:easing}} animate={{x:0 , opacity:1 }}>Explore</motion.button>
                  </motion.div>
                </li>
                <hr/>
                <li>
                  <motion.div className="social-links" initial={{x:-200 , opacity:0 }} transition={{duration:3 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                    <img src={images.linkedln} alt="linkedln"/>
                    <p>Linkedln</p>
                    <motion.button onClick={event =>  window.location.href='https://www.linkedin.com/in/matthew-w-8748b0196/'} initial={{x:250 , opacity:0 }} transition={{duration:3 ,ease:easing}} animate={{x:0 , opacity:1 }}>Explore</motion.button>
                  </motion.div>
                </li>
                <hr/>
                <li>
                  <motion.div className="social-links" initial={{x:-200 , opacity:0 }} transition={{duration:4 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                    <img src={images.instagram} alt="instagram"/>
                    <p>Instagram</p>
                    <motion.button onClick={event =>  window.location.href='https://www.instagram.com/matthewowallace/'} initial={{x:250 , opacity:0 }} transition={{duration:4 ,ease:easing}} animate={{x:0 , opacity:1 }}>Explore</motion.button>
                  </motion.div>
                </li>
                <hr/>
                <li>
                  <motion.div className="social-links" initial={{x:-200 , opacity:0 }} transition={{duration:5 ,ease:easing}} animate={{x:0 , opacity:1 }}>
                    <img src={images.mix} alt="mix"/>
                    <p>Mix.io</p>
                    <motion.button className="special"  onClick={event =>  window.location.href='https://www.behance.net/matthewwallace4'} initial={{x:250 , opacity:0 }} transition={{duration:5 ,ease:easing}} animate={{x:0 , opacity:1 }}>Explore</motion.button>
                  </motion.div>
                </li>
              </motion.ul>
          </motion.div>
      </div>
  </motion.div>
  );
}

export default App;
