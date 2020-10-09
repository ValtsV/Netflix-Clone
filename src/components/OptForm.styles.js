import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  height: 100%;
  flex-wrap: wrap;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Frame = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 25px 30px;

  @media (max-width: 1000px) {
    flex-direction: column;
    align-items: center;
    padding: 20px 0;
  }

  @media (max-width: 550px) {
    padding: 20px 5%;
  }
`;

export const Input = styled.input`
  max-width: 450px;
  width: 100%;
  border: 0;
  padding: 10px;
  height: 60px;
  border-radius: 2px 0 0 2px;
  @media (max-width: 1000px) {
    border-radius: 2px;
    max-width: 500px;
    height: 48px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  background: #e50914;
  color: white;
  text-transform: uppercase;
  padding: 0 26px;
  font-size: 20px;
  border: 0;
  border-radius: 0 2px 2px 0;
  cursor: pointer;

  &:hover {
    background: #f40612;
  }

  img {
    margin-left: 10px;
    filter: brightness(0) invert(1);
    width: 15px;
  }

  @media (max-width: 1000px) {
    height: 40px;
    font-size: 16px;
    margin-top: 15px;
    border-radius: 2px;

    img {
      width: 15px;
    }
  }
`;

export const Text = styled.p`
  font-size: 19.2px;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    max-width: 450px;
    font-size: 18px;
    line-height: 25px;
  }

  @media (max-width: 550px) {
    padding: 0 5%;
  }
`;
