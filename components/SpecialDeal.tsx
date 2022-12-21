import * as React from "react";
import Image from "next/image";
import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ISpecialDealProps {
  image: string;
  row: number;
  rating: number;
}

const SpecialDeal: React.FunctionComponent<ISpecialDealProps> = ({
  image,
  row,
  rating,
}) => {
  return (
    <div
      className={`relative ${
        row === 1 ? "w-1/2" : "w-1/3"
      } h-52 rounded overflow-hidden`}
    >
      <Image src={`/${image}`} alt="" fill className="z-10" />
      <div
        className=" z-30 absolute top-5 right-5 p-1 rounded"
        style={{ backgroundColor: "#e9c275" }}
      >
        <FontAwesomeIcon icon={faStar} />
      </div>
      <div className="text-white text-lg font-bold z-30 absolute bottom-0 px-6 py-4 w-full bg-gradient-to-t from-black">
        <div className="flex justify-between items-center ">
          <p className="text-white text-lg font-bold  ">Breakfast</p>
          <p className=" line-through">$10</p>
        </div>
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <p className=" font-semibold text-zinc-300">{rating}</p>
            <FontAwesomeIcon
              icon={faStar}
              className="text-orange-400 text-sm"
            />
          </div>
          <p className="text-orange-300">$8</p>
        </div>
      </div>
    </div>
  );
};

export default SpecialDeal;
