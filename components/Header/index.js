import { FaTasks } from "react-icons/fa";

const Header = () => {
  return (
    <div className="bg-white w-full p-4 py-2 z-50">
      <div className="w-maxContainer grid mx-auto grid-cols-3 items-center justify-center">
        <p className="font-semibold flex items-center gap-2">
          <FaTasks style={{ fontSize: "24px", cursor: "pointer" }} />
          <span className="cursor-pointer">Tasks</span>
        </p>
        <div className="flex items-center justify-self-center gap-5">
          <p className="cursor-pointer">Home</p>
          <p className="cursor-pointer">How to track</p>
          <p className="cursor-pointer">Subscription</p>
        </div>
        <div className="justify-self-end">
          <button className="bg-black cursor-pointer px-4 py-2 rounded-md text-white">
            Sign in
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
