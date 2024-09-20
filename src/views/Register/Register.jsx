import React from "react";
import "./Register.css";
import image0 from "./images/image0.png";
import image1 from "./images/image1.png";
import image2 from "./images/image2.png";
import image3 from "./images/image3.png";
import image4 from "./images/image4.png";

const Register = () => {
  return (
    <div className="h-[100vh] w-[100vw] bg-gradient-to-b from-[#111435] to-blue-900 flex justify-center items-center">
      <div className="relative w-full h-full max-w-[100%] max-h-[100vh] bg-white rounded-lg shadow-lg overflow-hidden">
        <div className="frame-1-194252 absolute w-full h-full flex">

          {/* Frame 21 */}
          <section className="frame-2-194253 w-[70%] relative">
            <div className="astronautspacew-194250  absolute inset-0">
              <img
                src={image0}
                className="absolute inset-0 object-cover w-full h-full"
                alt="astronaut-space-with-planet-background"
              />
            </div>

            <div className=" h-20 w-64 mt-[50%] rounded-tr-xl rounded-br-xl bg-black flex items-center justify-center sticky">
              <img
                src={image1}
                className="absolute"
                alt="SPACE LABS Logo"
              />
            </div>
           
          </section>

          {/* Frame 31 */}
          <section className=" w-1/3 rounded-3xl bg-black  absolute mt-16 ml-[65%] flex flex-col justify-center p-8" >
            <div className="login-194265 mb-6 text-4xl font-bold text-white">
              Register
            </div>
            <div className=" mb-4 text-white">
              Get your start here
            </div>

            {/* Form fields */}
            <div className="flex flex-col space-y-4">
              <input
                type="text"
                className="p-3 bg-white outline-none rounded-lg text-black"
                placeholder="Firstname"
              />
              <input
                type="text"
                className="p-3 bg-white outline-none rounded-lg text-black"
                placeholder="Lastname"
              />
              <input
                type="email"
                className="p-3 bg-white outline-none rounded-lg text-black"
                placeholder="Email"
              />
              <input
                type="text"
                className="p-3 bg-white outline-none rounded-lg text-black"
                placeholder="Organization Name"
              />
              <input
                type="password"
                className="p-3 bg-white outline-none rounded-lg text-black"
                placeholder="Password"
              />
            </div>

            <div className=" mt-6">
              <button className="w-full p-3 bg-blue-600 outline-none text-white rounded-lg hover:bg-blue-700">
                Register
              </button>
            </div>
            <div className="bottom-text mt-4 text-center text-white">
              Already have an account?{" "}
              <span
                className="text-blue-500 cursor-pointer hover:text-blue-700"
                onClick={() => (window.location.href = "/login")}
              >
                Login
              </span>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Register;
