import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const CardWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  width: 350px;
  height: 500px;
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
  font-size: 28px;
  font-weight: bold;
  margin: 10px 0;
`;

const CardDivider = styled.hr`
  border: 0.5px solid lightgray;
  margin: 10px 0;
`;

const CardSubtitle = styled.h3`
  font-size: 22px;
  font-weight: bold;
  margin: 10px 0;
`;

const CardText = styled.p`
  font-size: 18px;
  line-height: 1.5;
  margin: 10px 0;
`;

const CardAuthorWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: auto;
`;

const CardAuthorAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 10px;
`;

const CardAuthorName = styled.span`
  font-size: 16px;
  font-weight: bold;
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
        rotateX: [0, 5, 0, -5, 0],
        rotateY: [0, 5, 0, -5, 0],
        rotateZ: [0, 3, 0, -3, 0],
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
    <CardWrapper whileHover={hoverAnimation}>
      <CardImage src={coverImage} alt={title} />
      <CardTitle>{title}</CardTitle>
      <CardDivider />
      {/* <CardSubtitle>{subtitle}</CardSubtitle> */}
      <CardText>{text}</CardText>
      {/* <CardAuthorWrapper>
        <CardAuthorAvatar src={authorAvatar} alt={authorName} />
        <CardAuthorName>{authorName}</CardAuthorName>
      </CardAuthorWrapper> */}
    </CardWrapper>
  );
};

export default Card;
