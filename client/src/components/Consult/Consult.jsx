import "./Consult.css";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "../../utils/motion";
import { staggerContainer } from "../../utils/motion";


import Navbar from "../Navigation/Navbar";
import Title from "./Title";
import Therapists from "./Therapists"




const Consult = () => {
  return (
    <>
        <div className="Consult">
            <div id="consulting">
                <Therapists/>
            </div>
        </div>
    </>
  );
};

export default Consult;
