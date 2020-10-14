import styled from "styled-components/macro";

export const Title = styled.p`
  font-size: 24px;
  color: #e5e5e5;
  font-weight: bold;
  margin-bottom: 20px;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 50px 56px 0;

  > ${Title} {
    @media (max-width: 1000px) {
      // margin-left: 30px;
    }
  }

  &:last-of-type {
    margin-bottom: 0;
  }
`;

export const Group = styled.div`
   {
    display: flex;
    flex-direction: column;
    margin: 30px 0;

    > ${Container}:first-of-type {
      @media (min-width: 1000px) {
        margin-top: -150px;
      }
    }
  }
`;

export const Subtitle = styled.p`
  font-size: 12px;
  color: #fff;
  font-weight: bold;
  margin-top: 0;
  margin-bottom: 0;
  user-select: none;
  display: none;
`;

export const Text = styled.p`
  margin-top: 5px;
  font-size: 10px;
  color: #fff;
  margin-bottom: 0;
  user-select: none;
  display: none;
  line-height: normal;
`;

//

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
`;

export const FeatureGroup = styled.div`
   {
    display: flex;
    flex-direction: row;
    margin: 30px 0;
  }
`;

export const Maturity = styled.div`
  border: 1px solid #fff;
  border-radius: 5px;
  width: 40px;
  padding: 5px;
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

export const Meta = styled.div`
  display: none;
  position: absolute;
  bottom: 0;
  padding: 10px;
  background: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.8));
`;

export const Entities = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Item = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 5px;
  position: relative;
  cursor: pointer;
  transition: transform 0.2s;
  z-index: 10;
  &:hover {
    transform: scale(1.3);
    z-index: 11;
  }
  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
      display: block;
      z-index: 100;
    }
  }

  &:last-of-type {
    margin: 0;
  }
`;

export const Image = styled.img`
  border: 0;
  border-radius: 5px;
  width: 100%;
  max-width: 305px;
  cursor: pointer;
  height: auto;
`;
