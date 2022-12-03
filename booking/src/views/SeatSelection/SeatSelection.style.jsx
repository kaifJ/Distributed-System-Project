import styled from "styled-components";

export const SeatsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

export const Seats = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
  padding: 8px;
  cursor: pointer;
  height: fit-content;
  border: ${(props) =>
    props.selected ? "2px solid #000" : "2px solid transparent"};
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
  .seat {
    width: 54px;
    height: 49px;
    background-color: ${(props) => (props.isAvailable ? "#5be45b" : "#e65353")};
  }
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Button = styled.button`
  width: 150px;
  height: 30px;
  margin-top: 75px;
  margin-left: 50px;
`;
