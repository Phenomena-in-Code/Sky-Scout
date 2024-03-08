import { useEffect, useRef } from "react";

export default function JumpIntoViewCell({ highlightedDate, weatherData, i }) {
  const ref1 = useRef(null);

  useEffect(() => {
    if (highlightedDate === i) {
      ref1.current.scrollIntoView({ inline: "center" });
    }
  }, [highlightedDate, i]);

  return (
    <td
      className={highlightedDate === i ? "highlighted" : undefined}
      ref={ref1}
    >
      {weatherData.daily.temperature_2m_max[i]} °C
    </td>
  );
}
