import Header from "@/components/Header";
import LoginComponent from "@/components/loginComponent";
import Head from "next/head";

const TodoLogin = () => {
  return (
    <>
      <Head>
        <meta title="Todo-by || Track and Organize your track" />
      </Head>
      <Header />
      <div>
        <div className="md:relative w-full md:w-maxContainer mx-auto md:h-screen">
          <div className="md:absolute md:top-[45%] md:left-1/2 md:transform md:rounded-2xl m-6 rounded-md md:w-full md:h-[500px] px-4 py-5 md:p-10 md:-translate-x-1/2 md:-translate-y-1/2 bg-gray-300">
            <LoginComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLogin;
