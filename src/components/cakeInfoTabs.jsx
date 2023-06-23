import { useState } from "react";
const CakeInfoTabs = () => {
  const [active, setActive] = useState("Description");
  const tabs = ["Description", "Ingredients", "Comments"];
  const cakeInfo = {
    Description: "Description",
    Ingredients: "Ingredients",
    Comments: "Comments",
  };
  return (
    <div>
      <div className="grid grid-cols-3 border-b-pink-400 border-b-2 mb-3 h-10 mx-10">
        {tabs.map((tab, index) => (
          <div
            onClick={() => setActive(tab)}
            className={`${
              active == tab ? "border-b-2 border-b-pink-700" : ""
            } h-full cursor-pointer w-full md:w-1/2 `}
            key={index}
          >
            {tab}
          </div>
        ))}
      </div>
      <div className="mx-10 mb-2">{cakeInfo[`${active}`]}</div>
    </div>
  );
};
export default CakeInfoTabs;
