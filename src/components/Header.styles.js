import styled from "styled-components/macro";
import { Link as ReactRouterLink } from "react-router-dom";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background: url(${({ src }) =>
      src ? `../images/misc/${src}.jpg` : "../images/misc/home-bg.jpg"})
    top left / cover no-repeat;

  @media (max-width: 1000px) {
    ${({ noShowOnSmall }) => noShowOnSmall && "background: none;"};
  }
`;

export const Group = styled.div`
  display: flex;
  align-items: center;
`;

export const Container = styled.div`
  display: flex;
  padding: 0 56px;
  height: 92px;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(
    ${({ fadeDown }) =>
      fadeDown
        ? "rgba(0, 0, 0, 1), rgba(0, 0, 0, 0)"
        : "rgba(0, 0, 0, 0), rgba(0, 0, 0, 1)"}
  );

  a {
    display: flex;
  }

  @media (max-width: 1000px) {
    padding: 0 30px;
    height: 84px;
    display: ${({ fadeDown }) => (fadeDown ? "flex" : "none")};
  }

  @media (max-width: 550px) {
    padding: 0 20px;
    padding-bottom: 10px;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px;
  flex-direction: column;
  align-items: normal;
  width: 50%;
  background: none;
  margin: 0 56px;

  @media (max-width: 1000px) {
    display: none;
  }
`;

export const Logo = styled.img`
  height: 44px;
  width: 134px;

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

export const Text = styled.p`
  font-size: 22px;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  color: #fff;
  max-width: 600px;
`;

export const FeatureTitle = styled.h2`
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 20px 0;
`;

export const TextLink = styled.p`
  color: white;
  text-decoration: none;
  margin-left: 30px;
  font-weight: ${({ active }) => (active === "true" ? "700" : "normal")};
  cursor: pointer;
  padding: 0 5px;

  &:hover {
    color: #a8a8a8;
  }
`;

export const Dropdown = styled.div`
  display: none;
  background-color: #000;
  position: absolute;
  padding: 10px;
  // width: 100px;
  top: 32px;
  right: 0;
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  position: relative;

  button {
    cursor: pointer;
  }

  &:hover > ${Dropdown} {
    display: flex;
    flex-direction: column;
  }
`;

export const Picture = styled.button`
  background: url(${({ src }) => src});
  background-size: contain;
  border: 0;
  width: 32px;
  height: 32px;
  cursor: pointer;
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #fff;
  color: #000;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  max-width: 150px;
  font-size: 20px;
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: transfrom 0.5 ease;

  &:hover {
    opacity: 0.9;
  }
`;
