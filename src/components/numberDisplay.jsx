import { CountUp } from "use-count-up";

const NumberDisplay = ({ targetNumber, duration }) => {
  return (
    <CountUp
      isCounting
      start={0}
      end={targetNumber}
      duration={duration}
      thousandsSeparator="."
    >
      {({ value, reset }) => <span>{value}</span>}
    </CountUp>
  );
};

export default NumberDisplay;
