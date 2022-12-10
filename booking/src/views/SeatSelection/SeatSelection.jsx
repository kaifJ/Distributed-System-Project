import { useEffect, useState } from "react";
import { AxiosInstance, config } from "../../utils/api";
import { GET_SEATS, BOOK_SEATS } from "../../utils/endpoints";
import Loader from "./Loader";
import Footer from "./Footer";
import {
  Button,
  Seats,
  SeatsContainer,
  Main,
  BackButton,
} from "./SeatSelection.style";
import { MdEventSeat } from "react-icons/md";
import { BiArrowBack } from "react-icons/bi";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const SeatSelection = (props) => {
  const [seats, setSeats] = useState([]);
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [loading, setLoading] = useState(false);
  const [booked, setBooked] = useState(false);

  useEffect(() => {
    // Get Seats
    fetch();
  }, []);

  const fetch = () => {
    AxiosInstance.get(GET_SEATS.replace("{id}", props.screenId))
      .then((res) => {
        setSeats(res.data.seats);
      })
      .catch((err) => {
        console.log(err);

        //Network Error Code -> "ERR_NETWORK"
        // If server rejects a request -> err.response.status should be checked
      });
  };

  const selectSeat = (seat) => {
    const newSeats = [...selectedSeats];
    selectedSeats.includes(seat)
      ? newSeats.splice(newSeats.indexOf(seat), 1)
      : newSeats.push(seat);
    setSelectedSeats(newSeats);
  };

  const confirmBooking = () => {
    setLoading(true);

    let _selectedSeats = selectedSeats.map((seat) => seat.id);
    let body = JSON.stringify({ selectedSeats: _selectedSeats });

    AxiosInstance.post(BOOK_SEATS, body, config)
      .then((result) => {
        fetch();

        setSelectedSeats([]);
        setBooked(true);
        setLoading(false);
        toast.success(result.data.message);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
        fetch();
        toast.error(err.response.data.message);
      });
  };

  return loading ? (
    <Loader loading={loading} booked={booked} />
  ) : (
    <Main>
      <div
        style={{
          display: "flex",
          alignSelf: "flex-start",
          justifyContent: "space-around",
          alignItems: "center",
          cursor: "pointer",
          width: "inherit",
        }}
      >
        <BackButton onClick={() => props.goBack()}>
          <div style={{ display: "flex", alignItems: "center" }}>
            <BiArrowBack className="back-btn" />
            <span>Back</span>
          </div>
        </BackButton>
        <Button
          disabled={!selectedSeats.length}
          onClick={() => confirmBooking()}
        >
          Confirm Booking
        </Button>
      </div>
      <div style={{ textAlign: "center" }}>
        <h5>All Eyes this way please </h5>
        <h2>------------Screen------------</h2>
      </div>
      <SeatsContainer>
        {seats.map((s, i) => (
          <Seats
            key={s.id}
            isAvailable={s.status === "available"}
            selected={selectedSeats.includes(s)}
            onClick={() => selectSeat(s)}
          >
            <span className="seat-number">{i + 1}</span>
            <MdEventSeat />
          </Seats>
        ))}
      </SeatsContainer>
      <Footer />
      <ToastContainer draggable={false} hideProgressBar theme="colored" />
    </Main>
  );
};

export default SeatSelection;
