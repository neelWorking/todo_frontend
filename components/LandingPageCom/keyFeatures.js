import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";
import { IoIosSearch } from "react-icons/io";
import { TfiLayoutMediaLeft } from "react-icons/tfi";
import { FaBusinessTime } from "react-icons/fa";
import { MdOutlineNotificationsActive } from "react-icons/md";
import { TbGitBranch } from "react-icons/tb";
import searchImg from "../../public/assets/keyFeatureImgs/searchImg.jpg";

const KeyFeatureSection = () => {
  return (
    <>
      <div className="bg-white rounded-md my-5 p-4">
        <div className="md:grid md:grid-cols-[40%,1fr] gap-4">
          <div className="">
            <h2 className="text-black text-3xl font-semibold mb-2 ">
              Key features
            </h2>
            <div className="px-2 grid grid-rows-3 gap-3">
              <div className="p-2 border-b-[1px] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <IoIosSearch fontSize={26} />
                  <div className="text-left">
                    <p className="text-black font-semibold">Search</p>
                    <p className="text-sm">Powerful search capabilities</p>
                  </div>
                </div>
                <IoIosArrowForward />
              </div>
              <div className="p-2 border-b-[1px] flex items-center justify-between gap-3">
                <div className="flex items-center gap-2">
                  <TfiLayoutMediaLeft fontSize={26} fontWeight={1} />
                  <div className="text-left">
                    <p className="text-black font-semibold">Operations</p>
                    <p className="text-sm">Structure UI design</p>
                  </div>
                </div>
                <IoIosArrowForward />
              </div>
            </div>
          </div>
          <div className="bg-gray-300 rounded-md p-3">
            <h2 className="text-black text-2xl font-semibold">Collaboration</h2>
            <div>
              <div className="flex items-center gap-3 ">
                <FaBusinessTime fontSize={24} />
                <p className="text-sm font-semibold">
                  Work together in real-time on tasks
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <MdOutlineNotificationsActive fontSize={24} />
                <p className="text-sm font-semibold">
                  Stay updated with notifications & reminders
                </p>
              </div>
              <div className="flex items-center gap-3 ">
                <TbGitBranch fontSize={24} />
                <p className="text-sm font-semibold">
                  Integrate with your favorite tools for enhanced productivity
                </p>
                {/* <Image srv={logo} height={100} width={100} /> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default KeyFeatureSection;

{
  /* <div className="rounded-full -ml-2 inline-block relative z-10 overflow-hidden h-9 w-9">
                <Image
                  src={searchImg}
                  height={36}
                  width={36}
                  alt="Member Image"
                />
              </div> */
}
