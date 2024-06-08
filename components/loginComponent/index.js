import { FcGoogle } from "react-icons/fc";

const LoginComponent = () => {
  return (
    <div className="max-w-sm mx-auto rounded-lg">
      <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
        Login
      </h2>
      <form onSubmit={""} className="space-y-4">
        <div>
          <label
            htmlFor="user-name"
            className="block text-sm font-medium text-black m-2"
          >
            User Name
          </label>
          <input
            className="w-full h-10 px-3 placeholder:text-black outline-none bg-transparent border-b-[1px] border-b-black"
            type="text"
            id="user-name"
            placeholder="Enter user name"
          />
        </div>
        <div>
          <label
            htmlFor="user-password"
            className="block text-sm font-medium text-black m-2"
          >
            Password
          </label>
          <input
            className="w-full h-10 px-3 placeholder:text-black outline-none bg-transparent border-b-[1px] border-b-black"
            type="text"
            id="user-password"
            placeholder="Enter password"
          />
        </div>
        <button
          type="submit"
          className="w-full h-10 bg-black text-white font-semibold rounded-mdx transition duration-300"
        >
          Login
        </button>
      </form>
      <div className="flex items-center justify-center my-4">
        <div className="flex-1 h-0.5 bg-gray-300"></div>
        <p className="mx-3 text-gray-600 text-sm">or</p>
        <div className="flex-1 h-0.5 bg-gray-300"></div>
      </div>
      <button
        className="w-full h-10 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
        onClick={"handleGoogleLogin"}
      >
        <FcGoogle fontSize={22} />
        <span className="text-gray-700 font-semibold">Sign in with Google</span>
      </button>
    </div>
  );
};

export default LoginComponent;
