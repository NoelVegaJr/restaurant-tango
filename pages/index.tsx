import { useRef, useEffect, useState } from "react";
import Image from "next/image";
import { Diplomata_SC } from "@next/font/google";
import Navbar from "../components/Navbar";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
const diplo = Diplomata_SC({
  subsets: ["latin"],
  weight: "400",
});

import { faStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ExlusiveDish from "../components/ExlusiveDish";
import SpecialDeal from "../components/SpecialDeal";

export default function Home() {
  const myRef = useRef<HTMLImageElement>(null);
  const turnipRef = useRef<HTMLImageElement>(null);
  const [isVisible, setIsVisible] = useState<boolean>();
  const [reservationDate, setReservationDate] = useState(new Date());
  useEffect(() => {
    console.log("myRef", myRef.current);
    const observer = new IntersectionObserver((entries) => {
      const entry = entries[0];
      setIsVisible((prev) => entry.isIntersecting);
    });
    observer.observe(myRef.current!);
    observer.observe(turnipRef.current!);
  }, []);
  return (
    <>
      <div
        style={{ backgroundImage: `url("slate-bg.webp")` }}
        className="h-full -z-50"
      >
        <Navbar />
        <section className="h-screen   mx-auto flex justify-center items-center overflow-hidden ">
          <div className="w-1/2 h-full  px-8 pt-24">
            <div
              ref={myRef}
              className={` ${
                isVisible
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-20 opacity-0"
              } transition-all duration-2000 `}
            >
              <div className="pl-24 flex flex-col gap-10">
                <h1
                  className={`font-bold text-orange-100 text-7xl ${diplo.className}`}
                >
                  Tango
                </h1>
                <p className="text-zinc-100 w-full">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. At,
                  commodi. At reprehenderit cum, voluptate maxime esse!
                </p>
                <button className="text-white text-sm bg-orange-500 transition-all duration-300 hover:bg-orange-600 w-fit py-2 px-4 rounded-3xl">
                  Explore Menu
                </button>
              </div>
              <div className="relative">
                <div
                  ref={turnipRef}
                  className={`absolute  -rotate-12 -translate-x-52 -z-10`}
                  style={{
                    height: "500px",
                    width: "500px",
                    objectFit: "contain",
                  }}
                >
                  <Image src={"/turnip.png"} alt="" fill className="absolute" />
                </div>
              </div>
            </div>
          </div>

          <div className="w-1/2 h-full relative">
            <div
              className=" -rotate-180"
              style={{
                height: "800px",
                width: "1550px",
                objectFit: "contain",
              }}
            >
              <Image
                ref={myRef}
                src="/Chicken-Enchilada-Skillet-05042017.png"
                alt=""
                fill
                className={` ${
                  isVisible
                    ? " translate-x-72 opacity-100"
                    : "-translate-x-52 opacity-0"
                } transition-all translate-y-8  absolute right-0 duration-2000`}
              />
            </div>
          </div>
        </section>

        <section className="mt-32">
          <div className="max-w-3xl mx-auto ">
            <p className="text-white text-center text-3xl mb-20">
              Explore our <span className="text-orange-600">exclusive</span>{" "}
              dishes
            </p>
            <div className="flex gap-16">
              <ul className="text-zinc-400 cursor-pointer">
                <li className="border-l hover:border-l-yellow-300 border-l-yellow-100 hover:border-l-2 pl-4 py-4 hover:text-yellow-300">
                  Breakfast
                </li>
                <li className="border-l hover:border-l-yellow-300 border-l-yellow-100 hover:border-l-2 pl-4 py-4 hover:text-yellow-300">
                  Lunch
                </li>
                <li className="border-l hover:border-l-yellow-300 border-l-yellow-100 hover:border-l-2 pl-4 py-4 hover:text-yellow-300">
                  Dinner
                </li>
                <li className="border-l hover:border-l-yellow-300 border-l-yellow-100 hover:border-l-2 pl-4 py-4 hover:text-yellow-300">
                  Desserts
                </li>
                <li className="border-l hover:border-l-yellow-300 border-l-yellow-100 hover:border-l-2 pl-4 py-4 hover:text-yellow-300">
                  Appetizers
                </li>
              </ul>

              <div className=" flex flex-col gap-6 mb-16">
                <ExlusiveDish starsCount={5} />
                <ExlusiveDish starsCount={5} />
                <ExlusiveDish starsCount={5} />
              </div>
            </div>
            <div className="text-center">
              <button className=" text-white font-semibold bg-orange-500 transition-all duration-300 hover:bg-orange-600 w-fit py-2 px-4 rounded-3xl">
                Coninue Exploring
              </button>
            </div>
          </div>
        </section>

        <section className="mt-52">
          <div className="max-w-4xl mx-auto">
            <p className="text-white text-center text-3xl mb-14">
              <span>T</span>oday&apos;s{" "}
              <span className="text-orange-600">special</span> deals
            </p>
            <div className="flex flex-col gap-6">
              <div className="flex gap-6">
                <SpecialDeal row={1} rating={4.5} image="rice-seafood.jfif" />
                <SpecialDeal row={1} rating={5} image="shrimp.jfif" />
              </div>
              <div className="flex gap-6">
                <SpecialDeal row={2} rating={4} image="empanadas.jfif" />
                <SpecialDeal row={2} rating={5} image="meatball-rice.jfif" />
                <SpecialDeal row={2} rating={4.5} image="tacos.jfif" />
              </div>
            </div>
          </div>
        </section>

        <section className="mt-52 h-screen relative w-full overflow-hidden">
          <div className="max-w-4xl mx-auto flex">
            <div className="w-2/5">
              <div className="mb-8">
                <p className="text-4xl text-white mb-4">
                  Book a <span className="text-orange-500">Table</span>
                </p>
                <p className="text-white">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
                  nesciunt natus ullam cumque inventore incidunt perspiciatis,
                </p>
              </div>
              <div>
                <div className="flex gap-2">
                  <div>
                    <p className="mb-1 text-white">Time</p>
                    <select className="rounded text-lg mb-4">
                      <option>11:00 am</option>
                      <option>11:30 am</option>
                      <option>12:00 pm</option>
                      <option>12:30 pm</option>
                      <option>1:00 pm</option>
                      <option>1:30 pm</option>
                      <option>2:00 pm</option>
                      <option>2:30 pm</option>
                      <option>3:00 pm</option>
                      <option>3:30 pm</option>
                      <option>4:00 pm</option>
                      <option>4:30 pm</option>
                      <option>5:00 pm</option>
                      <option>5:30 pm</option>
                      <option>6:00 pm</option>
                      <option>6:30 pm</option>
                      <option>7:00 pm</option>
                      <option>7:30 pm</option>
                    </select>
                  </div>
                  <div>
                    <p className="mb-1 text-white">Seats</p>
                    <select className="rounded text-lg mb-4">
                      <option>1 - 2</option>
                      <option>3 - 4</option>
                      <option>4 - 6</option>
                      <option>6+</option>
                    </select>
                  </div>
                </div>

                <Calendar
                  onChange={setReservationDate}
                  value={reservationDate}
                  className="rounded-lg "
                />
              </div>
            </div>
            <div
              ref={turnipRef}
              className={`absolute  z-10 -top-6 -right-80`}
              style={{
                height: "500px",
                width: "1000px",
                objectFit: "contain",
              }}
            >
              <Image
                src={"/table.png"}
                alt=""
                fill
                className={` ${
                  isVisible
                    ? " -translate-x-0 opacity-100"
                    : "translate-x-52 opacity-0"
                } transition-all translate-y-8  absolute right-0 duration-2000`}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
