"use client";

import { useRouter } from "next/navigation";
import { FaTasks } from "react-icons/fa";

const Header = () => {
  const router = useRouter();

  return (
    <div className="bg-white w-full p-4 py-2 z-50">
      <div className="md:w-maxContainer grid mx-auto grid-cols-2 md:grid-cols-3 items-center justify-center">
        <a className="font-semibold flex items-center gap-2" href="/">
          <FaTasks style={{ fontSize: "24px", cursor: "pointer" }} />
          <span className="cursor-pointer">Tasks By</span>
        </a>
        <div className="hidden md:flex items-center justify-self-center gap-5">
          <a href="/" className="cursor-pointer">
            Home
          </a>
          <a href="" className="cursor-pointer">
            How to track
          </a>
          <a href="" className="cursor-pointer">
            Subscription
          </a>
        </div>
        <div className="justify-self-end">
          <button
            className="bg-black cursor-pointer px-4 py-2 rounded-md text-white"
            onClick={() => router.push("/login")}
          >
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
