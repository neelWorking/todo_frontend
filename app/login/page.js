import Header from "@/components/Header";
import LoginComponent from "@/components/loginComponent";

const TodoLogin = () => {
  return (
    <>
      <Header />
      <div>
        <div className="md:relative w-full md:w-maxContainer mx-auto h-screen">
          <div className="md:absolute md:top-[45%] md:left-1/2 md:transform md:rounded-2xl w-screen md:w-full h-screen md:h-[500px] p-10 md:-translate-x-1/2 md:-translate-y-1/2 bg-gray-300">
            <LoginComponent />
          </div>
        </div>
      </div>
    </>
  );
};

export default TodoLogin;
