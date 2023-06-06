import dynamic from "next/dynamic";
const CountUp = dynamic(() => import("react-countup"), {
  ssr: false, // Disable server-side rendering
});

const NumberDisplay = ({ targetNumber, duration }) => {
  return (
    <CountUp start={0} end={targetNumber} duration={duration} separator=".">
      {({ countUpRef }) => <span ref={countUpRef} />}
    </CountUp>
  );
};

export default NumberDisplay;
