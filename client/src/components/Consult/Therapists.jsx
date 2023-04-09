import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import Card from "./card";
import th1 from './../../assets/th1.jpg'
import th2 from './../../assets/th2.jpg'
import th3 from './../../assets/th3.jpg'

const Threapists = () =>{
    return(

            <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }} 
            id="therapists">
                <div className="title-quote">
                    <h2>
                    Revolutionizing Healthcare: Virtual Consultations for All Your Medical Needs
                    </h2>
                </div>
                <div className="w-full">
                    <ul>
                    <li>
                    <a href="https://calendly.com/programmator898/30min">
                    <Card
                        coverImage={th1}
                        title="juliane J Kowski"
                        text="child Mental Health, Anxiety, Depression, Learning Disabilities, Adolescent mental Health"
                        animation = "up"
                    />
                    </a>
                    </li>
                    <li>
                    <a href="https://calendly.com/programmator898/30min">
                    <Card
                        animation = "down"
                        coverImage={th2}
                        title="Danny EI Hassan"
                        text="Anxiety, Career Counselling, Aging related concerns, Depressions - LGBTQIA, gender and sexulity topics, Life transitions"
                    />
                    </a>
                    </li>
                    <li>
                    <a href="https://calendly.com/programmator898/30min">
                    <Card
                        coverImage={th3}
                        title="Supriya Blair"
                        text="Womens issues, Racr & Cultural Identity, Parenting, Life Transitions, Self-Esteem, Life Coaching"
                        animation = "up"
                    />
                    </a>
                    </li>
                </ul>
                </div>
            </motion.section>
    )
}

export default Threapists;