import { useEffect, useState } from "react";
import { AxiosInstance } from "../../utils/api";
import { GET_SCREENS } from "../../utils/endpoints";
import { Screen, ScreenContainer } from "./ScreenSelection.style";
import Toast from "../Notification/Toast";
import { toast } from 'react-toastify'
import ErrorView from '../Notification/Error'
import {NETWORK_ERROR} from '../../utils/locale'

const ScreenSelection = (props) => {
  const [screens, setScreens] = useState([]);
  const [error, setError] = useState("")

  useEffect(() => {
    //Get Screen Data when page is initialised
    AxiosInstance.get(GET_SCREENS).then((res) => {
      setScreens(res.data);
      setError("")
    },
    ).catch(err => {
      setError(error => err?.response?.data?.message || NETWORK_ERROR)
      toast.error(err?.response?.data?.message || NETWORK_ERROR)
    });
  }, []);

  return (
    error ? <ErrorView message={error}/> :
      <ScreenContainer>
        {screens.map((screen, i) => (
          <Screen key={screen.id} onClick={() => props.selectScreen(screen.id)}>
            <span className="name">{`Screen ${i + 1}`}</span>
            <img src={screen.imageURL} alt={screen.movie} />
          </Screen>
        ))}
        <Toast />
      </ScreenContainer>
  );
};

export default ScreenSelection;
