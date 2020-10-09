import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 8px solid #222;
  text-align: center;
  padding: 165px 45px;
  color: white;

  @media (max-width: 550px) {
    padding: 165px 0;
  }
`;

export const Title = styled.h1`
  max-width: 640px;
  font-size: 49px;
  font-weight: 400px;
  margin: auto;

  @media (max-width: 1000px) {
    font-size: 49px;
  }

  @media (max-width: 550px) {
    font-size: 28px;
    padding: 0 5%;
  }
`;

export const Subtitle = styled.div`
  font-size: 26px;
  font-weight: 400px;
  margin: 16px auto;

  @media (max-width: 1000px) {
    font-size: 26px;
  }

  @media (max-width: 550px) {
    padding: 0 5%;
    font-size: 18px;
  }
`;

export const Text = styled.p`
  font-size: 19px;
  // padding-top: 5px;

  @media (max-width: 1000px) {
    font-size: 16px;
  }

  @media (max-width: 550px) {
    font-size: 14px;
    padding: 0 5%;
  }
`;
