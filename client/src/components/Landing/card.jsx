import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardWrapper = styled(motion.div)`
  padding:1rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 90%;
  margin:0 auto;
  background: linear-gradient(to bottom right, #bdc3c7, #ecf0f1);
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
  &:hover {
    cursor: pointer;
  }
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
`;

const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 10px 0;
`;

const CardDivider = styled.hr`
  border: 0.5px solid lightgray;
  margin: 10px 0;
`;


const CardText = styled.p`
  font-size: 0.8 rem;
  line-height: 1.5;
  margin: 10px 0;
`;


const Card = ({
  coverImage,
  title,
  subtitle,
  text,
  authorAvatar,
  authorName,
}) => {

    const hoverAnimation = {
        scale: 1.03,
        rotateX: 0,
        rotateY: 0,
        rotateZ: 0,
        transition: { duration: 0.3 },
        perspective: "1000px",
        whileHover: {
          scale: 1.03,
          transition: { duration: 0.2 },
        },
        whileTap: {
          scale: 0.98,
        },
        onMouseEnter: (event) => {
          const { pageX, pageY } = event;
          const centerX = window.innerWidth / 2;
          const centerY = window.innerHeight / 2;
          const deltaX = pageX - centerX;
          const deltaY = pageY - centerY;
          const x = deltaY / centerY;
          const y = deltaX / centerX;
          const rotateX = [0, -5 * x, 0, 5 * x, 0];
          const rotateY = [0, 5 * y, 0, -5 * y, 0];
          const rotateZ = [0, -3 * x, 0, 3 * y, 0];
    
          const variants = {
            animate: {
              rotateX,
              rotateY,
              rotateZ,
            },
          };
    
          const transition = {
            type: "spring",
            damping: 10,
            stiffness: 100,
          };
    
          const controls = animate(variants, transition);
    
          return () => controls.stop();
        },
      };
  return (
    <CardWrapper 
      whileHover={hoverAnimation}
      initial={{ opacity: 0, y: 50, perspective: "1000px", rotateX: 0, rotateY: 0, rotateZ: 0 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}>
        <div style={{backdropFilter:'blur(10px)', backgroundColor:'black', height:'100%', color:'white', borderRadius:'10px'}}>
          <CardImage src={coverImage} alt={title} />
          <div style={{padding:"1rem"}}>
            <CardTitle>{title}</CardTitle>
            <CardDivider />
            <CardText>{text}</CardText>
          </div>
        </div>
     
    </CardWrapper>
  );
};

export default Card;
