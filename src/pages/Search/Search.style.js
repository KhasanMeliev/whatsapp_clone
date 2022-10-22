import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
`;
export const SearchBox = styled.div`
  width: 100%;
  height: 220px;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 10px 15px -3px,
    rgba(0, 0, 0, 0.05) 0px 4px 6px -2px;
`;

export const SearchInput = styled.div`
  width: 100%;
  height: 60px;
  display: flex;
  align-items: center;
  padding: 0px 10px;
  gap: 20px;
  border-bottom: 1px solid;

  svg {
    font-size: 25px;
    cursor: pointer;
  }

  input {
    all: unset;
    font-size: 20px;
    width: 100%;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  height: 150px;
  padding: 10px 10px;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const Users = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h4 {
    font-weight: 500;
    font-size: 12px;
    width: 70%;
    text-align: center;
    margin-top: 10px;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;
  margin-top: 10px;

  img {
    width: 50px;
    border-radius: 50%;
  }

  h6 {
    font-size: 15px;
    font-weight: 400;
  }
`;
export const Message = styled.div`
  width: 60%;
  height: 100%;
  background-color: #fff;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  h2 {
    font-weight: 500;
    font-size: 22px;
  }
  p {
    margin: 0;
    font-size: 14px;
  }
`;
