import { useState } from "react";
import ScreenSelection from "../ScreenSelection/ScreenSelection";
import SeatSelection from "../SeatSelection/SeatSelection";
import { Container } from "./MainContainer.style";

const MainContainer = () => {
  const [screenId, setScreenId] = useState("");

  return (
    <Container>
      {screenId ? (
        <SeatSelection screenId={screenId} goBack={() => setScreenId("")} />
      ) : (
        <ScreenSelection selectScreen={(id) => setScreenId(id)} />
      )}
    </Container>
  );
};

export default MainContainer;
