import styled from "styled-components";

export const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 50%;
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
  .seat-number{
    font-size: 12px;
    position: absolute;
    margin-left: 21px;
    margin-top: 10px;
  }
  svg {
    width: 58px;
    height: 52px;
    color: ${(props) =>
      props.selected ? "#f39e32" : props.isAvailable ? "#90EE90" : "#FF7F7F"};
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  height: 90vh;
  width: inherit;
  align-items: center;
`;

export const BackButton = styled.div`
  display: flex;
  align-self: flex-start;
  justify-content: space-around;
  align-items: center;
  cursor: pointer;
  margin-bottom: 10px;
  svg {
    font-size: 20px;
    margin-right: 10px;
    margin-top: 2px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  background-color: ${(props) =>(props.disabled ? "#808080" : "#F84364")};
  border-radius: 12px;
  cursor: pointer;
`;

export const Loader = styled.div`
  display: flex;
  flex: 1;
  width: inherit;
  height: 90vh;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  .message{
    padding-top: 50px;
    font-weight: bold;
  }
  svg{
    font-size: 50px;
  }
`

export const FooterContainer = styled.div`
  display: flex,
  flex-direction: row,
  position: absolute,
  bottom: 0,
  background-color: #F5F5FA,
  width: inherit,
  align-items: center,
  justify-content: center,
  text-align: center,
`

export const FooterColorBox = styled.div`
  height: 15px,
  width: 15px,
  border: 1px,
  borderRadius: 40%,
  backgroundColor: ${(props) => (props.color)},
  marginRight: 2
`