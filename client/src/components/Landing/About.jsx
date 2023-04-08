import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { staggerContainer } from "../../utils/motion";

const About = () =>{
    return(
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          id="about">
            <motion.div variants={fadeIn('up','tween', 0.2,1)} className="content">
              <h2 className="heading">
                <span>The Future of Mental Health Support : </span>
                Combining AI, Teleconsultation, and Compassionate Care for Your
                Health Needs
              </h2>
              <p>
                Our vision is a world where everyone has access to affordable
                and effective mental health care. Our mission is to improve
                mental health care through innovation, compassionate care, and
                accessibility. We've created a comprehensive system that
                combines an AI-powered chatbot with a teleconsultation platform
                to provide personalized support and guidance from licensed
                mental health professionals. We believe everyone deserves to
                live a happy, healthy life, and we're committed to making mental
                health care accessible and affordable for all.
              </p>
            </motion.div>
        </motion.section>
    )
}

export default About;