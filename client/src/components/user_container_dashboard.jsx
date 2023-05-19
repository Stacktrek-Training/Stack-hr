import React from "react";
import CircleProgressbar from "../components/user_circle_progressbar";
import EditLimitButton from "./user_edit_limit_button";

function ContainerDashboard({ employee }) {
  return (
    <div className="mx-0.5 BoxMonth">
      <div className="md:flex">
        <div>
          <div className="flex-1 mx-10 relative align-middle text-center p-1 shadow-2xl">
            <span className="font-bold">
              {new Date().toLocaleString("default", { month: "long" })}
            </span>
            {/* Right side: container */}
            <div className=" Box md:flex align-middle text-center">
              <div class="flex justify-center items-center">
                <CircleProgressbar employee={employee.employee_id} />
              </div>{" "}
              {/* Top 3 */}
              <div className="my-div p-10 mt-5">
                <div className="flex items-center">
                  <span className="mr-4 text-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    1. Food
                  </span>
                  <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="mr-4 text-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    2. Transportation
                  </span>
                  <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-orange-400 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <div className="flex items-center mt-4">
                  <span className="mr-4 text-left transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300">
                    3. Others
                  </span>
                  <div className="w-24 h-4 bg-gray-300 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 rounded-full animate-pulse"></div>
                  </div>
                </div>
                <EditLimitButton employee={employee.employee_id} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContainerDashboard;
