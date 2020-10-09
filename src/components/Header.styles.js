import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;
`;

export const Frame = styled.div``;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 92px;
  justify-content: space-between;
  align-items: center;

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    margin: 0 30px;
    height: 84px;
  }

  @media (max-width: 550px) {
    margin: 0 20px;
    padding-bottom: 10px;
  }
`;

export const Logo = styled.img`
  height: 44px;
  width: 134px;
  margin: 0 20px;

  @media (min-width: 1449px) {
    height: 45px;
    width: 167px;
  }

  @media (max-width: 1000px) {
    height: 32px;
    width: 108px;
  }

  @media (max-width: 550px) {
    height: 24px;
    width: 88px;
    margin: 0;
  }
`;

export const ButtonLink = styled(ReactRouterLink)`
  display: block;
  background-color: #e50914;
  height: fit-content;
  color: white;
  border: 0;
  font-size: 15px;
  border-radius: 3px;
  padding: 8px 17px;
  cursor: pointer;
  text-decoration: none;
  box-sizing: border-box;

  &:hover {
    background-color: #f40612;
  }

  @media (max-width: 550px) {
    padding: 4px 8px;
  }
`;
