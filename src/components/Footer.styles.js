import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  padding: 50px 56px;
  margin: auto;
  max-width: 1000px;
  flex-direction: column;
  width: 90%;

  @media (max-width: 1000px) {
    padding: 50px 45px 50px 45px;
  }

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const Frame = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  text-align: left;
`;

export const Link = styled.a`
  width: 25%;
  color: #757575;
  margin-bottom: 20px;
  padding-right: 12px;
  font-size: 13px;
  text-decoration: none;

  @media (max-width: 740px) {
    width: 33%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }
`;

export const Title = styled.p`
  font-size: 16px;
  color: #757575;
  margin-bottom: 40px;
`;

export const Text = styled.p`
  font-size: 13px;
  color: #757575;
  margin-top: 20px;
`;

export const Break = styled.p`
  flex-basis: 100%;
  height: 0;
`;
