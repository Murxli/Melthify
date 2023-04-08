import { motion } from "framer-motion";
import { staggerContainer } from "../../utils/motion";
import Card from "./card";
import cardimg1 from './../../assets/card1.jpg'
import cardimg2 from './../../assets/card2.jpg'

const Services = () =>{
    return(

            <motion.section
            variants={staggerContainer()}
            initial='hidden'
            whileInView='show'
            viewport={{ once: true, amount: 0.25 }} 
            id="services">
                <div className="w-full">
                    <ul>
                    <li>
                    <Card
                        coverImage={cardimg1}
                        title="AI-powered chatbot"
                        text="Our AI-powered chatbot is trained to understand your unique needs and preferences. It can offer tailored support, suggest resources, and provide tips and techniques to help you manage your mental health."
                        animation = "up"
                    />
                    </li>
                    <li>
                    <Card
                        animation = "down"
                        coverImage={cardimg2}
                        title=" Teleconsulting"
                        text="Connect with a licensed psychiatrist online. Teleconsulting is a convenient and accessible option for those with busy schedules or limited mobility. Book your appointment today and take the first step towards better mental health."
                    />
                    </li>
                </ul>
                </div>
            </motion.section>
    )
}

export default Services;