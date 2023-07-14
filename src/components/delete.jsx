import CloseIcon from "@mui/icons-material/Close";
import { useState } from "react";
const Delete = ({ callbackF }) => {
  return (
    <div
      className="bg-slate-50 rounded-full w-10 h-10 flex justify-center items-center absolute top-1 right-1 cursor-pointer"
      onClick={callbackF}
    >
      <CloseIcon sx={{ color: "red" }} />
    </div>
  );
};
export default Delete;
