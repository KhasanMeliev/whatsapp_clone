import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  font-family: cursive;
`;

export const MyStatus = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  h3 {
    margin-left: 20px;
    font-weight: 400;
  }
`;

export const Box = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
`;
export const Profile = styled.div`
  width: 30%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0px 30px 0px 10px;

  img {
    width: 55px;
    border-radius: 50%;
  }

  svg {
    width: 20px;
    height: 20px;
    background-color: #0a5d52;
    border-radius: 50%;
    font-size: 15px;
    border: 2px solid white;
    color: white;
    position: absolute;
    margin-top: 22px;
    margin-left: 18px;
  }
`;

export const Texts = styled.div`
  display: flex;
  flex-direction: column;
  h1 {
    margin: 0;
    font-size: 22px;
    font-weight: 500;
  }
  p {
    margin: 0;
  }
`;

export const OtherStatus = styled.div`
  width: 100%;
  height: 70px;
  padding: 0px 20px;
  display: flex;
  align-items: center;
  gap: 12px;

  p {
    color: green;
    font-size: 22px;
  }
`;
export const Icon = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #00ff1f;
  color: white;
  border: 3px dashed #5e665e;
  border-radius: 50%;
  padding: 0px 10px;
  cursor: pointer;
  svg {
    font-size: 25px;
  }
`;

export const TickIcon = styled.div`
  width: 17px;
  height: 17px;
  background-color: #00ff1f;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px dashed white;
  margin: 0px -5px;
`;

export const Camera = styled.div`
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

export const CameraIcon = styled.div`
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
