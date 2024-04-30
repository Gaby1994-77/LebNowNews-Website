import styled from "styled-components";

export const EachSlideEffect = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-size: cover;
  height: 350px;
`;

export const SlideSpan = styled.span`
  padding: 135px;
  font-size: 20px;
  background: #efefef;
  text-align: center;
`;

export const ArrowContainer = styled.div`
  .each-slide-arrow {
    top: 40%;
    margin: 5px; /* Add margin to the left and right of the arrows */
  }

  .each-slide-arrow svg {
    width: 30px; /* Adjust this value to change the width of the arrows */
    height: 30px; /* Adjust this value to change the height of the arrows */
  }
`;
