import React, { useEffect, useRef } from "react";
import dynamic from "next/dynamic";

const CountUp = dynamic(() => import("react-countup"), {
  ssr: false, // Disable server-side rendering
});

const NumberDisplay = ({ targetNumber, duration }) => {
  const countUpRef = useRef(null);

  useEffect(() => {
    if (countUpRef.current) {
      countUpRef.current.start();
    }
  }, [targetNumber]);

  return (
    <CountUp start={0} end={500} duration={duration} separator=".">
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
};

export default NumberDisplay;
