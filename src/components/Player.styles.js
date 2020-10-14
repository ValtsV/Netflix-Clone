import styled from "styled-components/macro";

export const Container = styled.div``;

export const Overlay = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  margin: 0 20px;
  z-index: 15;
`;

export const Inner = styled.div`
  position: relative;
  width: 100%;
  max-width: 900px;
  margin: auto;
  video {
    height: 100%;
    width: 100%;
  }
`;

export const Close = styled.button`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 22px;
  height: 22px;
  background-color: transparent;
  border: 0;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  &:before,
  &:after {
    position: absolute;
    left: 10px;
    top: 0;
    content: " ";
    height: 22px;
    width: 2px;
    background-color: #333;
  }
  &:before {
    transform: rotate(45deg);
  }
  &:after {
    transform: rotate(-45deg);
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #fff;
  color: #000;
  border-width: 0;
  padding: 10px 24px 10px 20px;
  border-radius: 5px;
  max-width: 2000px;
  font-size: 20px;
  margin-top: 30px;
  font-weight: bold;
  cursor: pointer;
  transition: transfrom 0.5 ease;

  &:hover {
    opacity: 0.9;
  }

  svg {
    width: 28px;
    height: 28px;
    margin-right: 10px;
  }
`;
