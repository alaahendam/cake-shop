import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
const Favourite = ({ callbackF }) => {
  const [favourite, setFavourite] = useState(false);
  const favFunction = () => {
    callbackF();
    setFavourite(!favourite);
  };
  return (
    <div
      className="bg-slate-50 rounded-full w-10 h-10 flex justify-center items-center absolute top-1 right-1 cursor-pointer"
      onClick={favFunction}
    >
      <FavoriteBorderIcon sx={{ color: favourite ? "red" : "gray" }} />
    </div>
  );
};
export default Favourite;
