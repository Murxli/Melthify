import styled from "styled-components";
import { motion } from 'framer-motion';

const CardWrapper = styled(motion.div)`
  padding:1rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
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

const Icon = ({ imageUrl, title }) => {
  return (
    <CardWrapper whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.4 }}>
      <CardImage src={imageUrl} alt={title} />
      <CardTitle className="text-primary500">
        {title}
      </CardTitle>
    </CardWrapper>)

};

export default Icon;