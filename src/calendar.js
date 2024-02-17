import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Calendar({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const currentDate = new Date();
  const maxDate = new Date(new Date().getTime() + 14 * 24 * 60 * 60 * 1000);
  return (
    <>
      <DatePicker
        placeholderText="First day of forecast..."
        selected={startDate || null}
        onChange={(date) => setStartDate(date)}
        selectsStart
        startDate={startDate}
        endDate={endDate}
        minDate={currentDate}
        className="calendar"
      />
      <DatePicker
        placeholderText="Last day of forecast..."
        selected={endDate || null}
        onChange={(date) => setEndDate(date)}
        selectsEnd
        startDate={startDate}
        endDate={endDate}
        minDate={startDate}
        maxDate={maxDate}
        className="calendar"
      />
    </>
  );
}
