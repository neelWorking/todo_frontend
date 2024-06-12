"use client";

import { useForm } from "react-hook-form";
import { FcGoogle } from "react-icons/fc";
import { useState } from "react";
import { toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const LoginComponent = ({ formForLogin, setFormLogin }) => {
  const [submitLoading, setSubmitLoading] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });

  const onSubmit = async (data) => {
    setSubmitLoading(true);
    console.log("Login data", data);

    try {
      // Replace with your login request logic
      const response = await mockLoginRequest(data);
      if (response.status) {
        toast.success("Login successful.");
        reset();
      } else {
        toast.error("Login failed.");
      }
    } catch (error) {
      toast.error("Login failed.");
      console.log("Error logging in", error);
    } finally {
      setSubmitLoading(false);
    }
  };

  // Mock login request function (replace with actual request)
  const mockLoginRequest = async (data) => {
    return new Promise((resolve) => {
      setTimeout(() => resolve({ status: true }), 1000);
    });
  };

  const handleGoogleLogin = () => {
    // Google login logic here
    console.log("Google login");
  };

  return (
    <>
      <style>
        {`.spinner {
            animation: spin 1s infinite linear;
          }`}
      </style>
      {formForLogin ? (
        <div className="max-w-sm mx-auto rounded-lg">
          <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
            Login
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label
                htmlFor="user-name"
                className="block text-sm font-medium text-black m-2"
              >
                User Name
              </label>
              <input
                className={`w-full h-10 px-3 placeholder:text-gray-700 placeholder:text-sm outline-none bg-transparent border-b-[1px] ${
                  errors.username ? "border-red-500" : "border-b-black"
                }`}
                type="text"
                id="user-name"
                placeholder="Enter user name"
                {...register("username", {
                  required: " * Username is required",
                  pattern: {
                    value: /^[a-zA-Z0-9_.-]*$/,
                    message: " * Invalid username",
                  },
                })}
              />
              {errors.username && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.username.message}
                </p>
              )}
            </div>
            <div>
              <label
                htmlFor="user-password"
                className="block text-sm font-medium text-black m-2"
              >
                Password
              </label>
              <input
                className={`w-full h-10 px-3 placeholder:text-gray-700 placeholder:text-sm outline-none bg-transparent border-b-[1px] ${
                  errors.password ? "border-red-500" : "border-b-black"
                }`}
                type="password"
                id="user-password"
                placeholder="Enter password"
                {...register("password", {
                  required: " * Password is required",
                  minLength: {
                    value: 6,
                    message: " * Password must be at least 6 characters long",
                  },
                })}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password.message}
                </p>
              )}
            </div>
            <button
              type="submit"
              disabled={submitLoading}
              className="w-full h-10 bg-black text-white font-semibold rounded-md transition duration-300 flex items-center justify-center"
            >
              {submitLoading && <FaSpinner className="animate-spin mr-2" />}
              Login
            </button>
          </form>
          <p className="text-sm font-medium text-right py-2">
            Forget password?
          </p>
          <div className="flex items-center justify-center my-3">
            <div className="flex-1 h-[1px] bg-gray-700"></div>
            <p className="mx-3 text-gray-600 text-sm">or</p>
            <div className="flex-1 h-[1px] bg-gray-700"></div>
          </div>
          <button
            className="w-full h-10 flex items-center justify-center gap-2 bg-white border border-gray-300 rounded-md hover:bg-gray-100 focus:outline-none"
            onClick={handleGoogleLogin}
          >
            <FcGoogle fontSize={22} />
            <span className="text-gray-700 font-semibold">
              Sign in with Google
            </span>
          </button>
          <div className="pt-4 text-center">
            <p className="text-sm text-gray-700 font-medium">
              New to Tasks by?{" "}
              <span
                className="text-black font-medium underline"
                onClick={() => setFormLogin(false)}
              >
                Sign Up
              </span>
            </p>
          </div>
        </div>
      ) : (
        <div>
          <div className="max-w-sm mx-auto rounded-lg">
            <h2 className="text-2xl font-semibold text-center text-gray-800 mb-6">
              Sign up
            </h2>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
              <div>
                <label
                  htmlFor="create-user-name"
                  className="block text-sm font-medium text-black m-2"
                >
                  Create User Name
                </label>
                <input
                  className={`w-full h-10 px-3 placeholder:text-gray-700 placeholder:text-sm outline-none bg-transparent border-b-[1px] ${
                    errors.username ? "border-red-500" : "border-b-black"
                  }`}
                  type="text"
                  id="create-user-name"
                  placeholder="Enter user name"
                  {...register("username", {
                    required: " * Username is required",
                    pattern: {
                      value: /^[a-zA-Z0-9_.-]*$/,
                      message: " * Invalid username",
                    },
                  })}
                />
                {errors.username && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.username.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="create-user-password"
                  className="block text-sm font-medium text-black m-2"
                >
                  Create New Password
                </label>
                <input
                  className={`w-full h-10 px-3 placeholder:text-gray-700 placeholder:text-sm outline-none bg-transparent border-b-[1px] ${
                    errors.password ? "border-red-500" : "border-b-black"
                  }`}
                  type="password"
                  id="create-user-password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: " * Password is required",
                    minLength: {
                      value: 6,
                      message: " * Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <div>
                <label
                  htmlFor="confirm-user-password"
                  className="block text-sm font-medium text-black m-2"
                >
                  Confirm New Password
                </label>
                <input
                  className={`w-full h-10 px-3 placeholder:text-gray-700 placeholder:text-sm outline-none bg-transparent border-b-[1px] ${
                    errors.password ? "border-red-500" : "border-b-black"
                  }`}
                  type="password"
                  id="confirm-user-password"
                  placeholder="Enter password"
                  {...register("password", {
                    required: " * Password is required",
                    minLength: {
                      value: 6,
                      message: " * Password must be at least 6 characters long",
                    },
                  })}
                />
                {errors.password && (
                  <p className="text-red-500 text-sm mt-1">
                    {errors.password.message}
                  </p>
                )}
              </div>
              <button
                type="submit"
                disabled={submitLoading}
                className="w-full h-10 bg-black text-white font-semibold rounded-md transition duration-300 flex items-center justify-center"
              >
                {submitLoading && <FaSpinner className="animate-spin mr-2" />}
                Sign up
              </button>
            </form>
          </div>
          <p className="text-sm text-gray-700 font-medium mt-4 text-center">
            Already have account?,{" "}
            <span
              className="text-black font-medium underline"
              onClick={() => setFormLogin(true)}
            >
              {" "}
              Sign in
            </span>
          </p>
        </div>
      )}
    </>
  );
};

export default LoginComponent;
