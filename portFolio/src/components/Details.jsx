
import Avatar from "./Avatar";
import Tabs from "./Tabs";
import { IoIosAdd,IoIosAddCircle, IoIosCreate } from "react-icons/io";

const ProfilInfo = () => {
  const tabsData = [
    {
      label: "About",
      content: (
        <div>
          <div className="text-gray-500">
          <p >
          A message is a discrete unit of communication intended by the source for consumption by some recipient or group of recipients. A message may be delivered by various means, including courier, telegraphy, carrier pigeon and electronic bus. A message can be the content of a broadcast. An interactive exchange of messages forms a conversation.          </p>
          </div>
         
          {/* Work Experience */}
          <div className="py-4">
      <h3 className="text-lg font-semibold text-black-500">Work Experience</h3>
      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg shadow-md flex flex-col md:flex-row md:items-center md:justify-between">
          <div>
            <h4 className="text-xl font-semibold">SDE</h4>
            <span>
            <p className="text-gray-400">Jul 2021 - May 2022</p>
            <p className="text-gray-400 mb-3">UP, India</p>
            </span>
            <p className="text-gray-500">As a full stack developer I worked there and gained exp</p>
            
          </div>
          <div className="flex items-center space-x-2 mb-2">
              <a href="#add">
                <IoIosAddCircle className="w-8 h-8 text-blue-500 hover:cursor-pointer" />
              </a>
              <a href="#edit">
                <IoIosCreate className="w-8 h-8 text-blue-500 hover:cursor-pointer" />
              </a>
            </div>
        </div>
      </div>
    </div>
          {/* Education */}
          <div className="py-4">
              <h3 className="text-lg font-semibold">Education</h3>
              <div className="space-y-4">
                <div className="bg-white p-4 rounded-lg shadow-md flex items-center justify-between">
                    <div>
                      <h4 className="text-xl font-semibold mb-2">BE-Bachelor of Engineering</h4>
                      <span>
                        <p className="text-gray-400">Aug 2001 - May-2019</p>
                        <p className="text-gray-400 mb-2">UP, India</p>
                        </span>
                      <p className="text-gray-500 ">Bachelor of Engineering</p>
                    </div>
                    <div className="flex items-center space-x-2 mb-2">
                      <a href="#add">
                        <IoIosAddCircle className="w-8 h-8 text-blue-500 hover:cursor-pointer" />
                      </a>
                      <a href="#edit">
                        <IoIosCreate className="w-8 h-8 text-blue-500 hover:cursor-pointer" />
                      </a>
                  </div>
                </div>
              </div>
            </div>
        </div>
      ),
    },
    {
      label: "Skills & Certificate",
      content: (
        <p>
          About Skills" is a section commonly found on personal or professional websites that provides information about the skills and expertise of the individual. It is a way to showcase what the person is capable of and what they have to offer in their field. This section typically includes a list of technical skills, programming languages, software proficiency, and other relevant abilities
        </p>
      ),
    },
    {
      label: "Posts",
      content: (
        <p>
          About Posts" typically refers to a section on a website or blog that provides information about the posts or articles published by the author or the contributors. This section is commonly found on blogs, news websites, or content-driven platforms. The purpose of the "About Posts" section is to give readers an overview of the content they can expect to find on the website and to showcase the diversity and relevance of the articles or posts available        </p>
      ),
    },
    {
      label: "Spaces",
      content: (
        <p>
          About Posts" typically refers to a section on a website or blog that provides information about the posts or articles published by the author or the contributors. This section is commonly found on blogs, news websites, or content-driven platforms. The purpose of the "About Posts" section is to give readers an overview of the content they can expect to find on the website and to showcase the diversity and relevance of the articles or posts available      </p>
      ),
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row">

      <Avatar className="h-screen" />
      <Tabs tabsData={tabsData} className="h-screen" />
    </div>
  );
};

export default ProfilInfo;
