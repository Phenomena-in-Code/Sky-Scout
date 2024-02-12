import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import { useState } from "react";

export default function ToggleButtons() {
  const [checked1, setChecked1] = useState(false);

  return (
    <>
      <ButtonGroup className="mb-0 flex-dir-column">
        <ToggleButton
          id="toggle-today"
          type="checkbox"
          variant="secondary"
          checked={checked1}
          value="1"
          onChange={(e) => setChecked1(e.currentTarget.checked)}
        >
          Today
        </ToggleButton>
      </ButtonGroup>
    </>
  );
}
