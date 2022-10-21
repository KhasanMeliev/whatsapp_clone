import styled from "styled-components";

export const NavbarWrapper = styled.header`
  width: 100%;
  height: 90px;
  background-color: #0a5d52;
  color: white;
  display: flex;
  align-items: center;
  justify-content: space-around;
  flex-direction: column;
  font-family: cursive;
`;

export const Logo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 30px;

h1{
  font-size: 25px;
}
`;

export const Search = styled.div`
   display: flex;
   gap: 10px;

   svg{
    font-size: 22px;
   }
`;

export const Lists = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0px 20px 0px 10px;
  gap: 8px;
  p {
    margin: 0;
    font-size: 16px;
    cursor: pointer;
    &:hover {
      border-bottom: 2px solid white;
    }
  }
  svg {
    font-size: 20px;
  }
`;
