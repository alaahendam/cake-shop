import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { useState } from "react";
const Counter = () => {
  const [counter, setCounter] = useState(1);
  const handleCounter = (flag) => {
    if (flag === "add") {
      setCounter(counter + 1);
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div className=" border border-gray-400 px-3 py-1 rounded-md flex items-center justify-between w-32">
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
        style={{ textAlign: "center", width: "60px" }}
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
