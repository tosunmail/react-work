import React from "react";
import {
  DetailContainer,
  DetailTitle,
  DetailImg,
  Description,
  InfoPart,
} from "./Detail.style";
import defaultImg from "../../assets/book.jpg"
import { useLocation, useParams } from "react-router-dom";
const Detail = () => {
  const { state } = useLocation();
  const { id } = useParams();
  

  return (
    <DetailContainer>
      <DetailTitle>{state.volumeInfo.title}</DetailTitle>
      <DetailImg>
        <img src={state.volumeInfo.ImageLinks?.smallThumbnail || defaultImg } alt={state.volumeInfo.title} />
      </DetailImg>
      <Description>{state.volumeInfo.description}</Description>

      <InfoPart>
        <p>{state.volumeInfo.authors?.map(item=><span key={item}>{item}</span>)}</p>
      </InfoPart>
    </DetailContainer>
  );
};

export default Detail;
