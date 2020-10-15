import styled from "styled-components/macro";
import { Title } from "./Card.styles";

export const Feature = styled.div`
  display: flex;
  flex-direction: row;
  background: url(${({ src }) => src});
  background-size: contain;
  position: relative;
  height: 360px;
  background-position-x: right;
  background-repeat: no-repeat;
  background-color: black;

  @media (max-width: 1000px) {
    background: none;
    height: auto;

    ${Title} {
      font-size: 20px;
      line-height: 20px;
      margin-bottom: 10px;
    }
  }
`;

export const FeatureTitle = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin: 20px 0;
`;

export const FeatureText = styled.p`
  font-size: 18px;
  color: white;
  margin: 0;
  @media (max-width: 600px) {
    line-height: 22px;
  }
`;

export const FeatureClose = styled.button`
  color: #fff;
  position: absolute;
  right: 20px;
  top: 20px;
  cursor: pointer;
  background-color: transparent;
  border: 0;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }

  @media (max-width: 999px) {
    right: 0;
    top: 24px;
  }
`;

export const FeatureGroup = styled.div`
   {
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-top: 30px;
  }
`;

export const Maturity = styled.div`
  border: 1px solid #fff;
  border-radius: 5px;
  width: 40px;
  padding: 3px 5px;
  text-align: center;
  color: #fff;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  margin-right: 10px;
  font-size: 12px;
`;

export const Content = styled.div`
  max-width: 500px;
  line-height: normal;
  @media (max-width: 1000px) {
    // margin: 30px;
    max-width: none;
  }
`;
