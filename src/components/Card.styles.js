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

  &:last-of-type {
    margin-bottom: 0;
  }

  @media (max-width: 1000px) {
    margin: 50px 30px 0;

    &:first-of-type {
      margin-top: 0;
    }
  }

  @media (max-width: 550px) {
    margin: 50px 20px 0;
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
  //   flex-wrap: wrap;
  //   justify-content: space-between;

  @media (max-width: 999px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(32.8%, 1fr));
  }

  @media (max-width: 600px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(50%, 1fr));
  }
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

  &:last-of-type {
    margin: 0;
  }

  @media (min-width: 1200px) {
    &:hover ${Meta}, &:hover ${Text}, &:hover ${Subtitle} {
      display: block;
      z-index: 100;
    }
  }

  @media (max-width: 999px) {
    margin-bottom: 5px;

    &:last-of-type {
      margin-right: 5px;
    }
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
