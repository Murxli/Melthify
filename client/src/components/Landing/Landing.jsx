import "./Landing.css";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";
import { staggerContainer } from "../../utils/motion";


import Navbar from "../Navigation/Navbar";
import About from "./About";
import Services from './services'
import { Link } from "react-router-dom";
import logo from '../../assets/logo.png';

import img1 from '../../assets/bg1.png';
import img2 from '../../assets/1.png';
const Landing = () => {
  return (
    <>
      <Navbar />
      <div className="App">
        <div id="landing">
          <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }}
           className="hero">
            <motion.div variants={slideIn('down', 'spring',0.2,2)} className="content">
              <h1>Health infrastructre in the internet</h1>
              <p>
                AI Chatbot System and Teleconsultation Platform for mental and emotional
                well-being
              </p>
              <Link to='/login'>
                <button className="text-white">Get Started</button>
              </Link>
            </motion.div>
            <motion.div variants={slideIn('up', 'spring',0.2,2)} className="hero-img">
              <img src={img2} alt="img" />
            </motion.div>
          </motion.section>
          
          <About />
          
          <Services />
          <motion.section
           variants={staggerContainer()}
           initial='hidden'
           whileInView='show'
           viewport={{ once: true, amount: 0.25 }} 
           id="why-us">
            <motion.div variants={fadeIn('left', 'tween', 0.2, 1.5)}>
            <h2 className="heading">Why Melthify?</h2>
            <p>
              Our AI chatbot uses advanced technology to understand your unique
              needs and provide personalized guidance. Our licensed mental
              health professionals offer compassionate and evidence-based care
              to help you achieve your mental health goals. We take your privacy
              seriously and use industry-standard encryption and strict privacy
              policies to protect your data. And our goal is to help you live a
              happier, healthier life, with thousands of satisfied users who
              have improved their mental health with Melthify.
            </p>
            </motion.div>
          </motion.section>
          <footer>
            <div>
              <a href="/" className="logo flex items-center">
                <img src={logo} alt="logo" className="h-12"/>
                melthify
              </a>
            </div>
            <div className="flex gap-10 justify-end">
              <p>Made by: </p>
              <p>
                <a href="https://www.linkedin.com/in/paari1263/" target="_blank">Paari</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/mona-abishek-a-28035b214/" target="_blank"> Mona Abishek</a>
              </p>
              <p>
                <a href="https://www.linkedin.com/in/murxli/" target="_blank">Muralikrishna</a>
              </p>
            </div>
          </footer>
        </div>
      </div>
    </>
  );
};

export default Landing;
