import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  font-family: sans-serif;

`;

export const Box = styled.div`
  width: 100%;
  height: 80px;
  background-color: white;
  border-bottom: 1px solid #212121;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 15px;

  img {
    width: 60px;
    border-radius: 50%;
  }

  h6 {
    font-size: 17px;
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
  }
  p {
    margin: 0;
  }
`;

export const SendMessage = styled.div`
  width: 100%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  p {
    width: 80%;
    text-align: center;
  }
`;

export const MessageIcon = styled.div`
  width: 60px;
  height: 60px;
  background-color: #0a5d52;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  position: fixed;
  bottom: 25px;
  right: 10px;
  cursor: pointer;

  svg {
    color: white;
    font-size: 25px;
  }
`;
