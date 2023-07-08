import { useEffect } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
const Counter = ({ count, callbackF }) => {
  const [counter, setCounter] = useState();
  const handleCounter = (flag) => {
    if (flag === "add") {
      if (callbackF) {
        callbackF(counter + 1);
      }
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };
  useEffect(() => {
    setCounter(count ?? 1);
  }, [count]);
  return (
    <div className=" border border-gray-400 py-1.5 rounded-md flex items-center justify-between w-full">
      <RemoveIcon
        onClick={() => handleCounter("remove")}
        className="cursor-pointer "
        sx={{
          color: "gray",
        }}
      />
      <input
        type="text"
        value={counter}
        style={{ textAlign: "center", width: "40px" }}
        className="focus:outline-0"
        onChange={(e) => setCounter(e.target.value)}
      />
      <AddIcon
        onClick={() => handleCounter("add")}
        className="cursor-pointer "
        sx={{
          color: "gray",
        }}
      />
    </div>
  );
};
export default Counter;
