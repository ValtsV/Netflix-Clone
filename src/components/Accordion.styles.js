import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  border-bottom: 8px solid #222;
`;

export const Inner = styled.div`
  display: flex;
  padding: 70px 45px;
  flex-direction: column;
  width: 905px;
  margin: auto;

  @media (max-width: 550px) {
    padding: 70px 0;
  }
`;

export const Item = styled.div`
  color: white;
  margin-bottom: 10px;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  margin-bottom: 1px;
  font-size: 26px;
  font-weight: normal;
  background: #303030;
  padding: 21px 31px;
  user-select: none;
  align-items: center;

  img {
    filter: brightness(0) invert(1);
    width: 24px;
  }

  @media (max-width: 1000px) {
    img {
      width: 16px;
    }

    font-size: 18px;
  }
`;

export const Body = styled.div`
  transition: max-height 0.25s cubic-bezier(0.5, 0, 0.1, 1);
  font-size: 26px;
  font-weight: normal;
  line-height: normal;
  background: #303030;
  padding: 31px;
  white-space: pre-wrap;
  user-select: none;

  @media (max-width: 1000px) {
    font-size: 16px;
    line-height: 22px;
  }
`;

export const Title = styled.h1`
  font-size: 50px;
  line-height: 1.1;
  margin-top: 0;
  margin-bottom: 8px;
  color: white;
  text-align: center;

  @media (max-width: 1000px) {
    font-size: 35px;
  }
`;

export const Frame = styled.div`
  margin: 30px 0;
`;
