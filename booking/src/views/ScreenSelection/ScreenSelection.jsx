import { useEffect, useState } from "react";
import { AxiosInstance } from "../../utils/api";
import { GET_SCREENS } from "../../utils/endpoints";
import { Screen, ScreenContainer } from "./ScreenSelection.style";

const ScreenSelection = (props) => {
  const [screens, setScreens] = useState([]);

  useEffect(() => {
    //Get Screen Data when page is initialised
    AxiosInstance.get(GET_SCREENS).then(
      (res) => {
        setScreens(res.data);
      },
      () => {
        console.error("Failed to fetch screens");
      }
    );
  }, []);

  return (
    <ScreenContainer>
      {screens.map((screen, i) => (
        <Screen key={screen.id} onClick={() => props.selectScreen(screen.id)}>
          <span className="name">{`Screen ${i + 1}`}</span>
          <img src={screen.imageURL} alt={screen.movie} />
        </Screen>
      ))}
    </ScreenContainer>
  );
};

export default ScreenSelection;
