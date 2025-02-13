import { useNavigate } from "react-router-dom";
function Hero() {

  const navigate = useNavigate(); // <-- Initialize navigate

  const handleSignUpClick = () => {
      // Navigate to the "Sign Up" page or any other page
      navigate('/ Get Started'); // Replace '/signup' with the actual route
  };

  return (
    <section className="container w-full  flex flex-col-reverse md:flex-row items-center justify-between gap-12 py-16 px-6 sm:px-12 md:px-16 lg:px-24">
      {/* Left Content */}
      <div className="flex w-full flex-1 flex-col  lg:items-start items-center gap-6 text-center md:text-left">
        <h1 className="text-4xl text-center lg:text-start font-bold max-w-lg leading-snug">
          Simply explained with illustrations
        </h1>

        <p className="text-gray-600 text-lg lg:text-xl max-w-md">
          There are a lot of different components that will help you create the perfect look for your project.
        </p>

        <div className="flex flex-wrap gap-3">
          <button onClick={handleSignUpClick} className="bg-[#5f62e2]  hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Get Started
          </button>
          <button onClick={handleSignUpClick} className="bg-indigo-100 text-[#5F62E2] font-semibold py-3 px-6 rounded-lg shadow-md transition duration-300">
            Learn More
          </button>
        </div>
      </div>

      {/* Right Image */}
      <div className="flex flex-1 justify-center">
        <img className="w-full md:max-w-lg h-auto" src="Component 1.png" alt="Illustration" />
      </div>
    </section>
  );
}

export default Hero;
