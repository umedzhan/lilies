import { useState } from "react";

function Card({
  Rasm = "burger-meal.png",
  Click = "() => {}",
  Name = "Stir Fry Pasta",
  Description = "The in-house pasta and chicken by chef Moose",
  Price = "1,000",
  AddToCardClick = "() => {}",
}) {
  return (
    <div className="flex flex-col justify-center items-center border-[#00302E24] border-[1px] max-w-[240px] max-h-[307px] w-[240px] h-[307px] rounded">
      <img
        src={Rasm}
        alt="rasm"
        className="max-w-[90px] max-h-[90px] rounded-full"
      />
      <div
        className="flex flex-col items-center justify-center"
        onClick={Click}
      >
        <div className="font-semibold text-[17px] mt-[13px]">{Name}</div>
        <div className="text-[11px] max-w-[172px] text-[#000000B0] text-center mt-1">
          {Description}
        </div>
      </div>
      <div className="flex justify-between mt-[22px] w-full px-[29px]">
        <div className="font-bold text-[13px] text-[#00302E]">N {Price},00</div>
        <div
          className="font-medium text-[13px] text-[#06e775]"
          onClick={AddToCardClick}
        >
          Add to Card
        </div>
      </div>
    </div>
  );
}

export default Card;
