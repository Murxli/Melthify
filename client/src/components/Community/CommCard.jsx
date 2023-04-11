import styled from "styled-components";
import { Link } from "react-router-dom";


const CardWrapper = styled.div`
  padding:1rem;
  display: grid;
  grid-template-columns:1fr 2fr 1fr;
  height: 100%;
  margin:0 auto;
  background: linear-gradient(to top right, #bdc3c7, rgba(43,36,83,1));
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);

`;

const CardImage = styled.img`
  width: 100px;
  height: 100px;
  object-fit: cover;
`;

const ContentWrapper = styled.div`
  display:flex;
  flex-direction:column;

`;


const CardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bold;
  margin: 0px 0;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.5;
  margin: 10px 0;
`;



const CommCard = (props) =>{
    return(
        <CardWrapper className="max-w-2xl">
            <CardImage src={props.imageURL} />
            <ContentWrapper>
                <CardTitle>{props.name}</CardTitle>
                <CardText>{props.description}</CardText>
            </ContentWrapper>
            {props.members.includes(props.user) ? 
                <Link to={`${props.id}`}>
                    <button className="w-full h-full text-white">Enter chat</button> 
                </Link>
                :
                <button onClick={props.join} className={props.id}>Join comm</button>
            }
        </CardWrapper>
    )
}

export default CommCard;