import styled from "styled-components";

export const ScreenContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: inherit;
  align-self: flex-start;
`;
export const Screen = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 30px;
  cursor: pointer;
  .name {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif; 
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 15px;
    color: #000000;
    margin-bottom: 10px;
    text-align: center;
  }
`;
