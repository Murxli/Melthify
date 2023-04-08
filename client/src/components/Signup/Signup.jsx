import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from 'react-router-dom';

import { slideIn } from "../../utils/motion";
import { staggerContainer } from "../../utils/motion";
import Navbar from "../Navigation/Navbar";


import { useAuth } from "../../contexts/AuthContext";

const Signup = () => {
  const {signupWithEP, signInWithGoogle, currentUser} = useAuth();
  const Navigate = useNavigate();
  const [error, setError] = useState("")
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(()=>{
    console.log(currentUser);
      if(currentUser){
        Navigate('/app');
      }
  }, [])

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { target } = e;
    const { name, value } = target;

    setForm({
      ...form,
      [name]: value,
    });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setLoading(true);
    console.log(e);
    try {
      await signupWithEP(form.email, form.password);
      setForm({
        name: "",
        email: "",
        password: "",
      });
      Navigate('/login')

    ;
    } catch (error) {
      setError('failed to create account')
      console.log(error);
    }
    
  };

  const handleSignupWithGoogle = async(event) =>{
    console.log(event);
    event.preventDefault();
    await signInWithGoogle();
    Navigate('/app')

    
  }

  return (

    <div>
      <Navbar page={'auth'}/>
      <motion.section
      variants={staggerContainer()}
      initial='hidden'
      whileInView='show'
      viewport={{ once: true, amount: 0.25 }}
      className={`"sm:px-16 px-20 sm:py-16 py-10" max-w-7xl mx-auto relative z-0 justify-center`}
      >
    
        <div
          className={`xl: flex justify-center overflow-hidden`} style={{width:'60%'}}
        >
          <motion.div
            variants={slideIn("down", "tween", 0.2, 0.7)}
            className=' bg-black-100 p-8 rounded-2xl'
            style={{width:'70%'}}
          >
            {error && <p className='text-white' >{error}</p>}
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className='flex flex-col w-full gap-8 mb-4'
            >   
                <div className="flex flex-col w-full gap-6">
                    <div className="flex items-center">
                        <label htmlFor="name" className="text-white text-right text-base font-medium px-4 w-1/5">Name</label>
                        <input 
                            type="name" 
                            id="name" 
                            name="name" 
                            value={form.name}
                            onChange={handleChange}
                            placeholder="Your full name"
                            className="w-4/5 h-8 py-2 px-6 rounded-lg"
                        />
                    </div>

                    <div className="flex items-stretch">
                        <label htmlFor="email" className="text-white text-right text-base font-medium px-4 w-1/5">Email</label>
                        <input 
                            type="email" 
                            id="email" 
                            name="email" 
                            value={form.email}
                            onChange={handleChange}
                            placeholder="Your email id"
                            className="w-4/5 h-8 py-2 px-6 rounded-lg"
                        />
                    </div>

                    <div className="flex items-stretch">
                        <label htmlFor="password" className="text-white text-base font-medium pr-6 w-1/5">Password</label>
                        <input 
                            type="password" 
                            id="password" 
                            name="password" 
                            value={form.password}
                            onChange={handleChange}
                            placeholder="enter your password"
                            className="w-4/5 h-8 py-2 px-6 rounded-lg"
                        />
                    </div>
                    <button className="rounded">Signup</button>
                </div>

                
                
            </form>
            <div className="socialProfiles">
                    <form onSubmit={handleSignupWithGoogle}>
                      <button className="bg-transparent w-full rounded"><i className="fa-brands fa-google"></i> signup with google</button>
                    </form>
            </div>
            <p className="text-sm p-4">Have an account? <span><a href="/login"> login instead</a></span> </p>
          </motion.div>
        </div>
      </motion.section>
    </div>
    
    
  );
};

export default Signup;