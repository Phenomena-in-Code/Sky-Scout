import ToggleButton from "react-bootstrap/ToggleButton";
import { useEffect, useState } from "react";

const date = new Date();

export default function TodayButton({
  startDate,
  endDate,
  setStartDate,
  setEndDate,
}) {
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    console.log("begin");
    if (startDate) {
      if (startDate.getDate() !== date.getDate()) {
        setChecked(false);
      }
    }
    if (endDate) {
      if (endDate.getDate() !== date.getDate()) {
        setChecked(false);
      }
    }
    if (startDate && endDate) {
      if (
        startDate.getDate() === date.getDate() &&
        endDate.getDate() === date.getDate()
      ) {
        console.log("werkt");
        setChecked(true);
      }
    }
  }, [startDate, endDate]);

  return (
    <ToggleButton
      id="toggle-today"
      type="checkbox"
      variant="outline-success"
      checked={checked}
      value="1"
      onChange={(e) => {
        setChecked(e.currentTarget.checked);
        if (startDate && endDate) {
          if (
            startDate.getDate() === date.getDate() &&
            endDate.getDate() === date.getDate()
          ) {
            setStartDate(null);
            setEndDate(null);
          } else {
            setStartDate(date);
            setEndDate(date);
          }
        } else {
          setStartDate(date);
          setEndDate(date);
        }
      }}
    >
      Today
    </ToggleButton>
  );
}
