import { useState } from "react";
import ScreenSelection from "../ScreenSelection/ScreenSelection";
import SeatSelection from "../SeatSelection/SeatSelection";
import { Container } from "./MainContainer.style";
import Header from "./Header";

const MainContainer = () => {
  const [screenId, setScreenId] = useState("");
 
  return (
    <div>
    <Header />
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
