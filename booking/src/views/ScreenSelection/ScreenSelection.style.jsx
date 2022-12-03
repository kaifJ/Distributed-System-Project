import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;
export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
  cursor: pointer;
  .name {
    font-family: "Inter";
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 15px;
    color: #000000;
    text-align: center;
    padding-bottom: 5px;
  }
  .thumbnail {
    display: flex;
    align-items: center;
    margin-top: 20px;
    justify-content: center;
    background-color: #c42525;
    width: 152px;
    height: 145px;
  }
`;
