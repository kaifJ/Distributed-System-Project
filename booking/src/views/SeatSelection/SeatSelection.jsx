import { useEffect, useState } from "react";
import { AxiosInstance } from "../../utils/api";
import { GET_SEATS } from "../../utils/endpoints";
import { Button, Seats, SeatsContainer, Main } from "./SeatSelection.style";

const SeatSelection = (props) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeat, setSelectedSeat] = useState({});

  useEffect(() => {
    // Get Seats
    AxiosInstance.get(GET_SEATS.replace("{id}", props.screenId)).then(
      (res) => {
        setSeats(res.data.seats);
      },
      () => console.error("Failed to fetch seats")
    );
  }, []);

  return (
    <Main>
      <SeatsContainer>
        {seats.map((s, i) => (
          <Seats
            key={s.id}
            isAvailable={s.status === "available"}
            selected={s.id === selectedSeat.id}
            onClick={() => setSelectedSeat(s)}
          >
            <div className="seat"></div>
            <span className="name">{`Seat ${s.seat}`}</span>
          </Seats>
        ))}
      </SeatsContainer>
      <Button disabled={!selectedSeat || selectedSeat.status !== "available"}>
        Confirm Booking
      </Button>
    </Main>
  );
};

export default SeatSelection;
