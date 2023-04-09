import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {Tilt} from "react-tilt";
import { zoomIn } from "../../utils/motion";
import { slideIn } from "../../utils/motion";

const CardWrapper = styled(motion.div)`
  padding:1rem;
  display: flex;
  flex-direction: column;
  width: 300px;
  height: 100%;
  margin:0 auto;
  background: linear-gradient(to top right, #bdc3c7, rgba(43,36,83,1));
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
  margin: 0px 0;
`;

const CardDivider = styled.hr`
  border: 0.5px solid lightgray;
  margin: 10px 0;
`;


const CardText = styled.p`
  font-size: 0.8rem;
  line-height: 1.5;
  margin: 10px 0;
`;


const Card = ({
  coverImage,
  title,
  text,
  animation
}) => {
  return (

      <motion.div variants={slideIn(`${animation}`, 'spring', 0.2, 2)}>
        <CardWrapper >
        <Tilt>
          <div style={{backdropFilter:'blur(10px)', backgroundColor:'black', height:'100%', color:'white', borderRadius:'10px'}}>
            <CardImage src={coverImage} alt={title} />
            <div style={{padding:"1rem"}}>
              <CardTitle>{title}</CardTitle>
              <CardDivider />
              <CardText>{text}</CardText>
            </div>
          </div>
          </Tilt>
        </CardWrapper>
      </motion.div>

    
    
     
  );
};

export default Card;
