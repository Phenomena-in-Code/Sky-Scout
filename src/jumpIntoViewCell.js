import { useEffect, useRef } from "react";

export default function JumpIntoViewCell({
  highlightedDate,
  setHighlightedDate,
  weatherData,
  i,
}) {
  const ref1 = useRef(null);

  useEffect(() => {
    if (highlightedDate === i) {
      ref1.current.scrollIntoView({ inline: "end" });
    }
  }, [highlightedDate, i]);

  return (
    <td
      className={highlightedDate === i ? "highlighted" : undefined}
      ref={ref1}
      onClick={() => {
        setHighlightedDate(i);
      }}
    >
      {weatherData.daily.temperature_2m_max[i]} °C
    </td>
  );
}
