import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 80vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  padding: 0px 15px;
`;

export const ShareIcon = styled.div`
  width: 55px;
  height: 55px;
  background-color: #0a5d52;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  cursor: pointer;

  svg {
    font-size: 25px;
    color: white;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px 12px;

  h3 {
    font-weight: 450;
    font-size: 20px;
    margin: 0;
  }
  p {
    margin: 0;
    font-size: 15px;
  }
`;

export const Calls = styled.div`
  width: 100%;
  height: 80vh;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    width: 80%;
    text-align: center;
  }
`;