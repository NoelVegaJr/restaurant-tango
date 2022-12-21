import { faStar, faPlus, faMinus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import * as React from "react";
import Image from "next/image";
interface IExlusiveDishProps {
  starsCount: number;
}

const ExlusiveDish: React.FunctionComponent<IExlusiveDishProps> = ({
  starsCount,
}) => {
  const stars = [];
  for (let i = 0; i < starsCount; i++) {
    stars.push(
      <FontAwesomeIcon icon={faStar} className="text-orange-300 text-sm" />
    );
  }
  return (
    <div>
      <div className="flex flex-col">
        <div className="flex gap-8">
          <div className="w-60 h-32 relative rounded-lg overflow-hidden">
            <Image src="/tacos.jfif" fill alt="tacos" />
          </div>

          <div>
            <p className="font-semibold text-white">Spicy Tacos</p>
            <p className="text-zinc-400">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quia
              omnis voluptatibus asperiores eos sunt fuga.
            </p>
            <div>
              {stars.map((star) => {
                return star;
              })}
            </div>
          </div>

          <div className="w-fit">
            <p className="text-white text-center mb-2">$10</p>
            <div className="flex mb-2">
              <button
                className=" px-1 flex items-center justify-center rounded-l-lg"
                style={{ backgroundColor: "#e9c275" }}
              >
                <FontAwesomeIcon icon={faMinus} className="text-xs" />
              </button>
              <div className="text-white px-6 border-y border-y-slate-700">
                0
              </div>
              <button
                style={{ backgroundColor: "#e9c275" }}
                className=" px-1 rounded-r-lg flex items-center"
              >
                <FontAwesomeIcon className="text-xs" icon={faPlus} />
              </button>
            </div>
            <button
              style={{ backgroundColor: "#e9c275" }}
              className="w-full text-sm  text-black font-semibold rounded"
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExlusiveDish;
