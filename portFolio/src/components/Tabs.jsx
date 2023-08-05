import { useState } from "react";
import { IoIosNotifications } from "react-icons/io";
import userAv from '../assets/imagesProfile.jpeg';

const Tabs = ({ tabsData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  return (
    <div className="h-full lg:w-2/3 lg:pl-6 flex flex-col">

      <div className="flex items-center justify-between border-b mb-2">
        
        {/* Search Bar */}
        <div className="relative">
        <div className="relative">
  <span className="absolute inset-y-0 left-0 flex items-center pl-3">
    <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512" className="h-5 w-5 text-gray-300">
      <path fill="rgb(201, 201, 201)" d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/>
    </svg>
  </span>
  <input
    type="text"
    className="py-2 pl-10 pr-8 border rounded-lg focus:outline-none w-full mb-2"
    placeholder="Search..."
  />

</div>

</div>


        {/* Notification Icon */}
        <div className="flex items-center ml-3">
          <IoIosNotifications className="w-6 h-6 fill-current text-gray-600 cursor-pointer" />
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z"/></svg>
        </div>

        {/* User Icon */}
        <div className="flex items-center">
          <img
            src={userAv}
            alt="User Icon"
            className="w-8 h-8 rounded-full cursor-pointer"
          />
        </div>
      </div>

      {/* Tab Buttons */}
      <div className="flex space-x-3 border-b mb-2">
        {tabsData.map((tab, idx) => {
          return (
            <button
              key={idx}
              className={`px-4 py-2 cursor-pointer border-b-4 transition-colors duration-300 text-blue-500 ${
                idx === activeTabIndex
                  ? "border-teal-500"
                  : "border-transparent hover:border-gray-200"
              }`}
              onClick={() => setActiveTabIndex(idx)}
            >
              {tab.label}
            </button>
          );
        })}
      </div>

      {/* Tab Content */}
      <div className="flex-1 py-4">
        <div className="bg-white p-4 rounded-lg h-full">
          {tabsData.map((tab, idx) => (
            <div
              key={idx}
              className={` text-black-500 ${
                idx === activeTabIndex ? "block" : "hidden"
              } card-content`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tabs;
