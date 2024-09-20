import React from "react";
import { LuBellRing } from "react-icons/lu";

// Path for the job icon
import jobIconPath from "./images/synodicspace.png"; 

const Jobs = () => {
  return (
    <section className="p-6 sm:p-8 bg-white rounded-3xl w-full">
      {/* Jobs Header */}
      <div className="flex flex-col sm:flex-row justify-between items-center">
        <h1 className="text-3xl sm:text-4xl font-bold">Jobs</h1>

        {/* Job Filters */}
        <div className="mt-4 sm:mt-0 flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 gap-4 sm:gap-6">
          <label className="flex items-center">
            <input
              type="radio"
              name="jobType"
              className="form-radio text-blue-600"
              defaultChecked
            />
            <span className="ml-2">Full time</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="jobType"
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Part time</span>
          </label>
          <label className="flex items-center">
            <input
              type="radio"
              name="jobType"
              className="form-radio text-blue-600"
            />
            <span className="ml-2">Internship</span>
          </label>
        </div>

        <button className="mt-4 sm:mt-0 bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition flex items-center space-x-2">
          <LuBellRing />
          <span className="hidden sm:inline">Notify me</span>
        </button>
      </div>

      <p className="mt-2 text-black">(30 full-time jobs available)</p>

      {/* Job List */}
      <div className="mt-6 border-t border-gray-500 pt-4">
        {Array(30)
          .fill()
          .map((_, idx) => (
            <div
              key={idx}
              className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 mt-5 space-y-4 sm:space-y-0"
            >
              {/* Job Details */}
              <div className="flex items-center">
                <img
                  src={jobIconPath}
                  alt="job-icon"
                  className="h-10"
                />
                <div className="ml-4 text-black">
                  <h2 className="text-lg font-bold">Senior Developer</h2>
                </div>
              </div>

              {/* Experience and Location */}
              <div className="flex flex-col sm:flex-row sm:items-center w-full sm:w-auto text-black font-normal text-sm sm:space-x-48">
                {/* Experience */}
                <div>Experience - 1-2 years</div>

                {/* Location */}
                <div className="mt-2 sm:mt-0 sm:ml-4">
                  Remote, India, Bangalore
                </div>
              </div>

              {/* Details Button */}
              <div className="flex justify-end w-full sm:w-auto">
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition">
                  Details
                </button>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Jobs;
