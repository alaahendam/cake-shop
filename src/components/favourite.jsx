import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useState } from "react";
const Favourite = () => {
  const [favourite, setFavourite] = useState(false);
  return (
    <div
      className="bg-slate-50 rounded-full w-10 h-10 flex justify-center items-center absolute top-1 right-1 cursor-pointer"
      onClick={() => setFavourite(!favourite)}
    >
      <FavoriteBorderIcon sx={{ color: favourite ? "red" : "gray" }} />
    </div>
  );
};
export default Favourite;
