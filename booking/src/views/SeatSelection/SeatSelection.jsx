import { useEffect, useState } from "react";
import { AxiosInstance } from "../../utils/api";
import { GET_SEATS } from "../../utils/endpoints";
import Loader from "./Loader";
import {
  Button,
  Seats,
  SeatsContainer,
  Main,
  BackButton,
} from "./SeatSelection.style";
import { MdEventSeat } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";

const SeatSelection = (props) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Get Seats
    AxiosInstance.get(GET_SEATS.replace("{id}", props.screenId)).then(
      (res) => {
        setSeats(res.data.seats);
      },
      () => console.error("Failed to fetch seats")
    );
  }, []);

  const selectSeat = (seat) => {
    const newSeats = [...selectedSeats];
    selectedSeats.includes(seat)
      ? newSeats.splice(newSeats.indexOf(seat), 1)
      : newSeats.push(seat);
    setSelectedSeats(newSeats);
  };

  const confirmBooking = () => {
    console.log(selectedSeats);
  };

  return loading ? (
    <Loader loading={loading} />
  ) : (
    <Main>
      <BackButton onClick={() => props.goBack()}>
        <BiArrowBack className="back-btn" />
        <span>Back</span>
      </BackButton>
      <SeatsContainer>
        {seats.map((s, i) => (
          <Seats
            key={s.id}
            isAvailable={s.status === "available"}
            selected={selectedSeats.includes(s)}
            onClick={() => selectSeat(s)}
          >
            <MdEventSeat />
          </Seats>
        ))}
      </SeatsContainer>
      <Button disabled={!selectedSeats.length} onClick={() => confirmBooking()}>
        Confirm Booking
      </Button>
    </Main>
  );
};

export default SeatSelection;
