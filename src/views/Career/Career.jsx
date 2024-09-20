import React from "react";
import { motion } from "framer-motion"; // Import Framer Motion
import bgimage from "../../components/Navbar/images/background1.jpg"; // Adjust the path to your background image
import TeamCard from "../../components/TeamCard/TeamCard";

function Career() {
  return (
    <div
      className="h-full pt-14 pb-8 px-4 md:px-10 flex flex-col items-center justify-center text-white"
      style={{
        backgroundImage: `url(${bgimage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <motion.div
        className="bg-transparent container mx-auto mt-14 py-4 rounded-lg shadow-lg px-4 sm:px-6 md:px-10 w-full max-w-[900px]"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.1)",
          WebkitBackdropFilter: "blur(20px)",
          opacity: "1",
          transition: "opacity 0.3s ease",
        }}
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        {/* Page Header */}
        <motion.div
          className="text-center mb-7"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-white py-4 md:py-6">
            Careers at Our Company
          </h1>
          <p className="border-b-2 border-white mt-2 w-3/4 md:w-1/2 mx-auto">
            Join us and help build the future of innovative products!
          </p>
        </motion.div>

        {/* Product Information */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            About Our Product
          </h2>
          <p className="mt-4 text-sm md:text-base text-white">
            Our product revolutionizes the way people manage their tasks and
            time. By integrating smart technology with intuitive design, we aim
            to enhance productivity and make life simpler. We’re looking for
            passionate individuals to join our team and contribute to our
            mission of creating impactful solutions.
          </p>
        </motion.section>

        {/* Job Openings */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Open Positions
          </h2>
          <motion.div className="mt-6 space-y-6">
            {/* Job Card 1 */}
            <motion.div
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-black">
                Frontend Developer
              </h3>
              <p className="mt-2 text-sm md:text-base text-black">
                We are looking for a talented frontend developer with experience
                in React and Tailwind CSS to help us build a seamless user
                experience for our customers.
              </p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg mx-auto block">
                Apply Now
              </button>
            </motion.div>

            {/* Job Card 2 */}
            <motion.div
              className="bg-white p-4 md:p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <h3 className="text-lg md:text-xl font-semibold text-black">
                Backend Developer
              </h3>
              <p className="mt-2 text-sm md:text-base text-black">
                Join our backend team and work on scalable systems using
                Node.js, Express, and MongoDB to build high-performance APIs.
              </p>
              <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg mx-auto block">
                Apply Now
              </button>
            </motion.div>
          </motion.div>
        </motion.section>

        {/* Apply Section */}
        <motion.section
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
        >
          <h2 className="text-xl md:text-2xl font-semibold text-white">
            Interested in Joining Us?
          </h2>
          <p className="mt-4 text-sm md:text-base text-white">
            Even if your perfect role isn’t listed, feel free to drop your
            resume. We’re always looking for talented people to join our growing
            team.
          </p>

          {/* Application Form */}
          <div className="bg-white mt-4 p-4 md:p-8 rounded-lg shadow-lg">
            <form className="space-y-4 mx-auto max-w-xl text-center">
              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <label
                  className="block text-black font-bold w-full md:w-32"
                  htmlFor="name"
                >
                  Full Name:
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full md:flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Your Name"
                />
              </div>

              <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                <label
                  className="block text-black font-bold w-full md:w-32"
                  htmlFor="email"
                >
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full md:flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="you@example.com"
                />
              </div>

              <div className="flex flex-col md:flex-row items-start space-y-4 md:space-y-0 md:space-x-4">
                <label
                  className="block text-black font-bold w-full md:w-32"
                  htmlFor="message"
                >
                  Message:
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full md:flex-grow px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
                  placeholder="Tell us why you're a great fit!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full md:w-auto bg-black text-white px-4 py-2 rounded-lg mx-auto block"
              >
                Submit Application
              </button>
            </form>
          </div>
        </motion.section>
      </motion.div>
      <TeamCard/>
    </div>
  );
}

export default Career;
