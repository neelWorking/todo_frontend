"use client";

import { FaTasks } from "react-icons/fa";
import { IoPersonCircleOutline } from "react-icons/io5";
import { MdCheckCircle } from "react-icons/md";
import { BiSolidRightArrow } from "react-icons/bi";
import { useEffect, useState } from "react";

const LandingPageComponent = () => {
  const [renderedCards, setRenderedCards] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRenderedCards((prevCards) => prevCards + 1);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="mx-auto px-4 md:px-8 md:w-maxContainer">
      <div className="bg-gray-300 rounded-bl-3xl rounded-br-3xl h-60 md:h-96 flex items-center animate-top-to-bottom">
        <div className="md:grid grid-cols-[1fr,0.8fr] my-auto">
          <div className="p-6 md:p-12">
            <h1 className="text-black text-3xl md:text-[42px] md:leading-[42px] font-semibold">
              Organize your task
              <br />
              and monitor progress
              <br />
              effortlessly!
            </h1>
            <p className="mt-4 text-[15px]">
              Securely store tasks, ensuring easy access and tracking for each
              one.
            </p>
          </div>
          <div className="hidden md:flex justify-center items-center text-[200px]">
            <FaTasks />
          </div>
        </div>
      </div>
      <div className="grid grid-rows-4 md:grid-cols-4 items-center gap-4 mt-7">
        {renderedCards >= 1 && (
          <div className="task-card">
            <div className="bg-gray-300 rounded-md p-4 h-32 flex flex-col justify-end">
              <p className="text-sm"> Active task trackers</p>
              <div className="flex items-center text-black text-3xl font-semibold">
                <p className="">1M+</p>
                <div className="flex items-center">
                  <IoPersonCircleOutline />
                  <IoPersonCircleOutline />
                  <IoPersonCircleOutline />
                </div>
              </div>
            </div>
          </div>
        )}
        {renderedCards >= 2 && (
          <div className="task-card">
            <div className="bg-gray-300 rounded-md p-4 h-32 flex flex-col justify-end">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Task managed</p>
                  <p className="text-3xl font-semibold">5TB+ </p>
                </div>
                <FaTasks className="text-6xl" />
              </div>
            </div>
          </div>
        )}
        {renderedCards >= 3 && (
          <div className="task-card">
            <div className="bg-gray-300 rounded-md p-4 h-32 flex flex-col justify-end">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Tasks completed</p>
                  <p className="text-3xl font-semibold">6M+ </p>
                </div>
                <MdCheckCircle className="text-6xl" />
              </div>
            </div>
          </div>
        )}
        {renderedCards >= 4 && (
          <div className="task-card">
            <div className="bg-white rounded-md p-4 h-32 flex flex-col justify-end">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm">Request free access</p>
                  <p className="text-3xl font-semibold">Demo</p>
                </div>
                <BiSolidRightArrow className="text-2xl" />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPageComponent;
