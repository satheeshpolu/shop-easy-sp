import React, { useEffect, useRef, useState } from "react";
import "./AnimatedClock.css";

const pad = (n: number) => String(n).padStart(2, "0");

const Digit: React.FC<{ value: string }> = ({ value }) => {
  const spanRef = useRef<HTMLSpanElement>(null);
  const [prevValue, setPrevValue] = useState(value);

  useEffect(() => {
    const el = spanRef.current;
    if (!el) return;

    if (prevValue !== value) {
      el.classList.remove("animate");
      void el.offsetWidth; // force reflow
      el.textContent = value;
      el.classList.add("animate");
      setPrevValue(value);
    } else {
      el.textContent = value;
    }
  }, [value, prevValue]);

  return (
    <div className="digit">
      <span ref={spanRef}>{value}</span>
    </div>
  );
};

const AnimatedClock: React.FC = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(interval);
  }, []);

  const hours = pad(time.getHours());
  const minutes = pad(time.getMinutes());
  const seconds = pad(time.getSeconds());

  return (
    <div className="clock">
      <Digit value={hours[0]} />
      <Digit value={hours[1]} />
      <div>:</div>
      <Digit value={minutes[0]} />
      <Digit value={minutes[1]} />
      <div>:</div>
      <Digit value={seconds[0]} />
      <Digit value={seconds[1]} />
    </div>
  );
};

export default AnimatedClock;
