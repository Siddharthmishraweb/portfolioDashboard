import { useState } from "react";
import Details from './components/Details'
import Avtar1 from '../src/assets/avtar1.jpeg'
import Avatar2 from '../src/assets/avtar2.jpeg'
const CommunityFeedItem = ({ avatarSrc, title, members }) => (
<div className="flex gap-x-2 items-center mt-4">
   <img src={avatarSrc} className="w-8 h-8 rounded-full" />
   <div>
      <p className="text-blue-700 text-sm font-medium">{title}</p>
      <p className="text-gray-500 text-xs">{members} members</p>
   </div>
</div>
);
const App = () => {
const [open, setOpen] = useState(true);
const [selectedMenu, setSelectedMenu] = useState(null);
return (
<div className="flex">
   {/* Sidebar */}
   <div
   className={`${
   open ? "w-72" : "w-20"
   } bg-slate-50 h-screen p-5 pt-8 relative duration-300 transition-all md:w-60 lg:w-72`}
   >
   <div className="flex gap-x-2 items-center">
      <img
      style={{ height: '30px', width: '30px', marginLeft: '5px' }}
      src="./src/assets/logo.png"
      className={`cursor-pointer duration-500 ${open && "rotate-[360deg]"}`}
      />
      <h1
      className={`text-blue origin-left font-medium text-xl duration-200 ${
      !open && "scale-0"
      }`}
      >
      Spehre
      </h1>
   </div>
   <div style={{ width: '80%', margin: '0 auto' }}>
   <hr className="border-gray-300 my-2" style={{ borderTop: '5px solid rgb(242, 241, 246)', marginLeft: '-40px', width: '143%' }} />
</div>
<ul >
   {/* Home */}
   <li
   className={`flex rounded-md p-4 cursor-pointer text-blue-700 text-sm items-center gap-x-2 mt-4 ${
   selectedMenu === 0 ? "bg-light-blue" : "bg-white hover:bg-gray-200"
   }`}
   onClick={() => setSelectedMenu(0)}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512"
   className={`${
   !open && "hidden"
   } origin-left duration-200 ${
   selectedMenu === 0 ? "font-semibold text-black" : "rgb(184, 178, 254)"
   }`}
   >
   <path fill={selectedMenu === 0 ? "rgb(126, 119, 232)" : "currentColor"} d="M0 32h214.6v214.6H0V32zm233.4 0H448v214.6H233.4V32zM0 265.4h214.6V480H0V265.4zm233.4 0H448V480H233.4V265.4z" />
   </svg>
   <span
   className={`${
   !open && "hidden"
   } origin-left duration-200 ${
   selectedMenu === 0 ? "font-semibold text-black" : "text-gray-500"
   }`}
   style={{ color: selectedMenu === 0 ? "black" : "" }}
   >
   Home
   </span>
   </li>
   {/* Job Invites */}
   <li
   className={`flex rounded-md p-4 cursor-pointer text-blue-700 text-sm items-center gap-x-2 mt-4 ${
   selectedMenu === 1 ? "bg-light-blue" : "bg-white hover:bg-gray-200"
   }`}
   onClick={() => setSelectedMenu(1)}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path fill={selectedMenu === 1 ? "rgb(126, 119, 232)" : "rgb(184, 178, 254)"} d="M215.4 96H144 107.8 96v8.8V144v40.4 89L.2 202.5c1.6-18.1 10.9-34.9 25.7-45.8L48 140.3V96c0-26.5 21.5-48 48-48h76.6l49.9-36.9C232.2 3.9 243.9 0 256 0s23.8 3.9 33.5 11L339.4 48H416c26.5 0 48 21.5 48 48v44.3l22.1 16.4c14.8 10.9 24.1 27.7 25.7 45.8L416 273.4v-89V144 104.8 96H404.2 368 296.6 215.4zM0 448V242.1L217.6 403.3c11.1 8.2 24.6 12.7 38.4 12.7s27.3-4.4 38.4-12.7L512 242.1V448v0c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64v0zM176 160H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16zm0 64H336c8.8 0 16 7.2 16 16s-7.2 16-16 16H176c-8.8 0-16-7.2-16-16s7.2-16 16-16z" />
   </svg>
   <span
   className={`${
   !open && "hidden"
   } origin-left duration-200 ${
   selectedMenu === 1 ? "font-semibold text-black" : "text-gray-500"
   }`}
   style={{ color: selectedMenu === 1 ? "black" : "" }}
   >
   Job Invites
   </span>
   </li>
   <li
   className={`flex rounded-md p-4 cursor-pointer text-blue-700 text-sm items-center gap-x-2 mt-4 ${
   selectedMenu === 2 ? "bg-light-blue" : "bg-white hover:bg-gray-200"
   }`}
   onClick={() => setSelectedMenu(2)}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path fill={selectedMenu === 2 ? "rgb(126, 119, 232)" : "rgb(184, 178, 254)"} d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zM337 209L209 337c-9.4 9.4-24.6 9.4-33.9 0l-64-64c-9.4-9.4-9.4-24.6 0-33.9s24.6-9.4 33.9 0l47 47L303 175c9.4-9.4 24.6-9.4 33.9 0s9.4 24.6 0 33.9z" />
   </svg>
   <span
   className={`${
   !open && "hidden"
   } origin-left duration-200 ${
   selectedMenu === 2 ? "font-semibold text-black" : "text-gray-500"
   }`}
   style={{ color: selectedMenu === 2 ? "black" : "" }}
   >
   Analytics
   </span>
   </li>
   <li
   className={`flex rounded-md p-4 cursor-pointer text-blue-700 text-sm items-center gap-x-2 mt-4 ${
   selectedMenu === 3 ? "bg-light-blue" : "bg-white hover:bg-gray-200"
   }`}
   onClick={() => setSelectedMenu(3)}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
      <path fill={selectedMenu === 3 ? "rgb(126, 119, 232)" : "rgb(184, 178, 254)"} d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z" />
   </svg>
   <span
   className={`${
   !open && "hidden"
   } origin-left duration-200 ${
   selectedMenu === 3 ? "font-semibold text-black" : "text-gray-500"
   }`}
   style={{ color: selectedMenu === 3 ? "black" : "" }}
   >
   My Profile
   </span>
   </li>
   <li
   className={`flex rounded-md p-4 cursor-pointer text-blue-700 text-sm items-center gap-x-2 mt-4 ${
   selectedMenu === 4 ? "bg-light-blue" : "bg-white hover:bg-gray-200"
   }`}
   onClick={() => setSelectedMenu(4)}
   >
   <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
      <path fill={selectedMenu === 4 ? "rgb(126, 119, 232)" : "rgb(184, 178, 254)"} d="M352 256c0 22.2-1.2 43.6-3.3 64H163.3c-2.2-20.4-3.3-41.8-3.3-64s1.2-43.6 3.3-64H348.7c2.2 20.4 3.3 41.8 3.3 64zm28.8-64H503.9c5.3 20.5 8.1 41.9 8.1 64s-2.8 43.5-8.1 64H380.8c2.1-20.6 3.2-42 3.2-64s-1.1-43.4-3.2-64zm112.6-32H376.7c-10-63.9-29.8-117.4-55.3-151.6c78.3 20.7 142 77.5 171.9 151.6zm-149.1 0H167.7c6.1-36.4 15.5-68.6 27-94.7c10.5-23.6 22.2-40.7 33.5-51.5C239.4 3.2 248.7 0 256 0s16.6 3.2 27.8 13.8c11.3 10.8 23 27.9 33.5 51.5c11.6 26 20.9 58.2 27 94.7zm-209 0H18.6C48.6 85.9 112.2 29.1 190.6 8.4C165.1 42.6 145.3 96.1 135.3 160zM8.1 192H131.2c-2.1 20.6-3.2 42-3.2 64s1.1 43.4 3.2 64H8.1C2.8 299.5 0 278.1 0 256s2.8-43.5 8.1-64zM194.7 446.6c-11.6-26-20.9-58.2-27-94.6H344.3c-6.1 36.4-15.5 68.6-27 94.6c-10.5 23.6-22.2 40.7-33.5 51.5C272.6 508.8 263.3 512 256 512s-16.6-3.2-27.8-13.8c-11.3-10.8-23-27.9-33.5-51.5zM135.3 352c10 63.9 29.8 117.4 55.3 151.6C112.2 482.9 48.6 426.1 18.6 352H135.3zm358.1 0c-30 74.1-93.6 130.9-171.9 151.6c25.5-34.2 45.2-87.7 55.3-151.6H493.4z" />
   </svg>
   <span
   className={`${
   !open && "hidden"
   } origin-left duration-200 ${
   selectedMenu === 4 ? "font-semibold text-black" : "text-gray-500"
   }`}
   style={{ color: selectedMenu === 4 ? "black" : "" }}
   >
   Explore
   </span>
   </li>
</ul>
<hr className="border-gray-300 my-2" style={{marginLeft: "-20px", height: '5px', width: '116%' }} />
{/* Vertical line on the right side */}
<div className="h-full w-1 absolute top-0 right-0" style={{ height: '350vh', width: '0.015rem', backgroundColor: 'rgb(242, 241, 246)' }} />
{/* //         {/* Communities Feed */}
<div className="pt-10">
   <h2 className={`text-black-700 font-medium text-sm duration-200 ${!open && "scale-0"}`}>
   Communities Feed
   </h2>
   <div className={`${!open && "hidden"} origin-left duration-200 text-gray-500`}>
   <CommunityFeedItem avatarSrc={Avtar1} title="Indonesia UI Designer" members={734} />
   <CommunityFeedItem avatarSrc={Avatar2} title="Indonesia USX  Designer" members={125} />
   <CommunityFeedItem avatarSrc={Avatar2} title="Prototype Club" members={124} />
   <CommunityFeedItem avatarSrc={Avtar1} title="Indonesia UI Designer" members={663} />
</div>
<div className="mt-4">
   <a><span className="text-blue-500 text-sm cursor-pointer">show 5 more&gt;</span>
   </a>
</div>
</div>
<div className={`absolute left-0 w-full p-5`}>
   <div className="flex justify-between text-blue-500 text-sm mb-2">
      <span>About</span>
      <span>Accessibility</span>
      <span>Help</span>
   </div>
   <div className="flex justify-between text-blue-500 text-sm">
      <span>Privacy & Terms</span>
      <span>Advertise</span>
      <span className="hidden md:block">More</span>
   </div>
   <p className="text-blue-500 text-xs pt-2">&copy; spehre.io @2023</p>
</div>
</div>
<div className="h-screen flex-1 p-7">
   <Details />
</div>
</div>
);
};
export default App;