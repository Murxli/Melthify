import './Landing.css'
import Card from './card';

const Landing = () =>{
    return(
    <div id="landing">
        <section className="hero">
            <div className='content'>
                <h1>Health infrastructre in the internet</h1>
                <p>AI Chatbot System and Teleconsultation Platform for emotional well-being</p>
            </div>
            <div className='hero-img'>
                <img src="" alt="img" />
            </div>
        </section>
        <section className='about'>
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
        <section className='services'>
             <ul>
                <li>
                <Card
      coverImage="https://via.placeholder.com/300x200"
      title="The Power of Positive Thinking"
      subtitle="How optimism can improve your life"
      text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce vitae justo eu enim consectetur interdum vel ut purus. Aliquam condimentum bibendum est, sed venenatis massa vestibulum id. Nulla facilisi. Sed consequat purus id dapibus convallis."
      authorAvatar="https://images.unsplash.com/photo-1541544717335-5a810fda9665"
      authorName="John Doe"
    />
                    {/* <Card title="Chatbot" text="Our AI-powered chatbot is trained to understand your unique needs and preferences. It can offer tailored support, suggest resources, and provide tips and techniques to help you manage your mental health."/>
                    <h2>Chatbot</h2>
                    <p> </p> */}
                </li>
                <li>
                    <h2>Teleconsultation</h2>
                </li>
             </ul>
        </section>
    </div>
    )
}

export default Landing;