import styled from "styled-components";

export const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Seats = styled.div`
  display: flex;
  flex-direction: column;
  cursor: pointer;
  pointer-events: ${(props) => (!props.isAvailable ? "none" : "initial")};
  height: fit-content;
  border-radius: 10px;
  .name {
    margin-top: 10px;
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 15px;
    color: #000000;
  }
  svg {
    width: 54px;
    height: 49px;
    color: ${(props) =>
      props.selected ? "#f39e32" : props.isAvailable ? "#4d4a4a" : "#e22222"};
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const BackButton = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  cursor: pointer;
  svg {
    font-size: 20px;
    margin-right: 10px;
    margin-top: 2px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 75px;
  align-self: center;
`;

export const Loader = styled.div`
  display: flex;
  flex: 1;
  width: 90vw;
  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .message{
    padding-top: 50px;
    font-weight: bold;
  }
`