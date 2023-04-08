import './Landing.css'
import Card from './card';

const Landing = () =>{
    return(
    <div id="landing">
        <section className="hero">
            <div className='content'>
                <h1>Health infrastructre in the internet</h1>
                <p>AI Chatbot System and Teleconsultation Platform for emotional well-being</p>
                <button>Get Started</button>
            </div>
            <div className='hero-img'>
                <img src="" alt="img" />
            </div>
        </section>
        <section id='about'>
            <div className='content'>
            <h2>
                <span>The Future of Mental Health Support : </span>
                Combining AI, Teleconsultation, and Compassionate Care for Your Health Needs
            </h2>
            <p>
            Our vision is a world where everyone has access to affordable and effective mental health care. Our mission is to improve mental health care through innovation, compassionate care, and accessibility. We've created a comprehensive system that combines an AI-powered chatbot with a teleconsultation platform to provide personalized support and guidance from licensed mental health professionals. We believe everyone deserves to live a happy, healthy life, and we're committed to making mental health care accessible and affordable for all.
            </p>
            </div>
        </section>
        <section id='services'>
            <h2 className='heading'>Our Services</h2>
             <ul>
                <li>
                    <Card
                        coverImage="https://via.placeholder.com/300x200"
                        title="AI-powered chatbot"
                        text="Our AI-powered chatbot is trained to understand your unique needs and preferences. It can offer tailored support, suggest resources, and provide tips and techniques to help you manage your mental health."
                    />
                </li>
                <li>
                    <Card
                        coverImage="https://via.placeholder.com/300x200"
                        title=" Teleconsulting"
                        text="Connect with a licensed psychiatrist via video chat, or messaging. Teleconsulting is a convenient and accessible option for those with busy schedules or limited mobility. Book your appointment today and take the first step towards better mental health."
                    />
                </li>
             </ul>
        </section>
        <section id='why-us'>
            <h2>Why Melthify?</h2>
            <p>
            Our AI chatbot uses advanced technology to understand your unique needs and provide personalized guidance. Our licensed mental health professionals offer compassionate and evidence-based care to help you achieve your mental health goals. We take your privacy seriously and use industry-standard encryption and strict privacy policies to protect your data. And our goal is to help you live a happier, healthier life, with thousands of satisfied users who have improved their mental health with Melthify.
            </p>
        </section>
        <footer>
            <div>
                <a href="/" className='logo'>melthify</a>
            </div>
            <div>
                <p>Made by: </p>
                <p><a href="">Paari</a></p>
                <p><a href=""> Mona Abishek</a></p>
                <p><a href="">Muralikrishna</a></p>
            </div>

        </footer>
    </div>
    )
}

export default Landing;