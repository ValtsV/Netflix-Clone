import styled from "styled-components/macro";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: auto;
  max-width: 80%;
  color: white;
`;

export const Title = styled.h1`
  font-size: 48px;
  text-aling: center;
  font-weight: 500;
  padding: 30px 0;
`;

export const List = styled.ul`
  display: flex;
  flex-direction: row;
`;

export const Name = styled.p`
  color: #808080;
  text-overflow: ellipsis;
  font-size: 16px;
  padding: 10px 0;

  &:hover {
    font-weight: bold;
    color: #e5e5e5;
  }
`;

export const Picture = styled.img`
  width: 100%;
  max-width: 150px;
  height: auto;
  border: 3px solid black;
  border-radius: 3px;
  cursor: pointer;
`;

export const Item = styled.li`
  max-height: 200px;
  max-width: 200px;
  text-align: center;
  margin-right: 30px;
  list-style: none;

  &:hover > ${Picture} {
    border: 3px solid #fff;
  }

  &:hover ${Name} {
    font-weight: bold;
    color: #fff;
  }

  &:last-of-type {
    margin-right: 0;
  }
`;
