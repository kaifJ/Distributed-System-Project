import { useState } from "react";
import ScreenSelection from "../ScreenSelection/ScreenSelection";
import SeatSelection from "../SeatSelection/SeatSelection";
import { Container } from "./MainContainer.style";

const MainContainer = () => {
  const [screenId, setScreenId] = useState("");

  const myComponentStyle = {
    textAlign: 'center',
 }
 
  return (
    <div>
      <h2 style={myComponentStyle}>CINEMA BOOKING APPLICATION</h2>
      <h4 style={myComponentStyle}> Watch New Exciting Movies! </h4>
    <Container>
      {screenId ? (
        <SeatSelection screenId={screenId} goBack={() => setScreenId("")} />
      ) : (
        <ScreenSelection selectScreen={(id) => setScreenId(id)} />
      )}
    </Container>
    </div>
  );
};

export default MainContainer;
