import { motion } from "framer-motion";
import { fadeIn } from "../../utils/motion";
import { staggerContainer } from "../../utils/motion";

const Title = () =>{
    return(
        <motion.section
          variants={staggerContainer()}
          initial='hidden'
          whileInView='show'
          viewport={{ once: true, amount: 0.25 }}
          id="about">
            <motion.div variants={fadeIn('up','tween', 0.2,1)} className="content">
              <h2 className="heading">
                <span>Revolutionizing Healthcare: </span>
              </h2>
              <h2 className="heading">Virtual Consultations for All Your Medical Needs</h2>
            </motion.div>
        </motion.section>
    )
}

export default Title;