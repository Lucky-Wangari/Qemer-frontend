import Bars from "../../components/RecoveredData";
import React from "react";

function LocationInfo() {

return (
<div>
            <div className=" ">
              <h2 className="mx-auto mt-8  text-lg font-medium leading-6 text-gray-900 sm:px-6 lg:px-8">
                Recent activity 
              </h2>
              <div className="shadow sm:hidden">
                <ul role="list" className="mt-2 divide-y divide-gray-200 overflow-hidden shadow sm:hidden">
                  <Bars />
                </ul>
                <nav className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3" aria-label="Pagination">
                  <div className="flex flex-1">
                    <a href="#" className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">
                      Previous
                    </a>
                    <a href="#" className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-500">
                      Next
                    </a>
                  </div>
                </nav>
              </div>
              <div className="hidden sm:block p-4">
                <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
                  <div className="mt-2 flex flex-col">
                    <div className="overflow-hidden overflow-x-auto align-middle shadow sm:rounded-lg">
                      <div className="grid grid-cols-1  h-[400px]">
                        <article>
                          <Bars />
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        </div>
    )
}
export default LocationInfo;
