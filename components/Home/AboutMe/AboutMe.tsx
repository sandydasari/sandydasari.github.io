import React from "react";
import Img from "../../../components/smallComp/image/Img";
import ArrowIcon from "../../../components/Icons/ArrowIcon";
export default function AboutMe(props) {
  const technologies = [
    ["Pega", ".NET (ASP.NET, C#)", "React.js", "Apache Spark", "MongoDB","SQLite"],
    ["Jenkins", "Docker", "Kubernetes", "GitLab CI", "GCP DevOps", "SQL"],
  ];
  return (
    <div id="aboutSection" data-aos="fade-up" className="snap-start flex flex-col  items-center py-20 bg-AAprimary">
      {/* // ? 0.1 About Me */}
      <div
        className="flex flex-col space-y-8 px-4 sm:px-0 w-full sm:w-[500px] 
        md:w-[700px] lg:w-[900px] "
      >
        <div className="flex flex-row items-center ">
          <div className="flex flex-row  items-center mr-4">
            <ArrowIcon className={"flex-none h-4 md:h-6 w-4 md:w-5 translate-y-[0.5px] text-AAsecondary"} />
            <span className="text-AAsecondary font-Header text-sm  sm:text-xl"> 01.</span>
            <span className="flex-none text-gray-200 opacity-85 font-bold tracking-wider text-lg sm:text-2xl pl-4">
              About Me
            </span>
          </div>
          <div className="bg-gray-400 h-[0.2px] w-full sm:w-72 ml-4"></div>
        </div>
        {/* // ? Paragraphs */}

        <div className="w-full flex flex-col md:flex-row space-y-8 md:space-y-0  md:space-x-8 sm:space-x-2 ">
          <div className="w-full md:w-7/12 space-y-4 sm:text-base text-sm ">
            <div className="font-Header ">
              <span className="text-gray-400 ">
                Hello! My name is <span className="text-AAsecondary">Dasari Sandhya Rani</span>, and I am a passionate software engineer and problem solver. My journey in computer science began in 2020 when
                I delved into the world of <span className="text-AAsecondary">DataScience</span> through my internship at <span className="text-AAsecondary">Thoughtworks Pvt Limited</span>. Little did I know that programming skills
                would become essential in pursuing this interest, marking the start of my programming journey.
              </span>
            </div>
            <div className="font-Header ">
              <span className="text-gray-400 ">
              In my role at ANZ Operations and Technology, I bring proficiency as a <span className="text-AAsecondary">Golang developer</span> in microservices architecture and Kafka integration. 
              Adept in developing robust, scalable, and efficient solutions. Proven expertise 
              as a <span className="text-AAsecondary">Pega</span> developer with extensive 
              knowledge in <span className="text-AAsecondary">.NET</span> solutions, delivering 
              high-quality software to meet diverse client requirements. Currently working on 
              optimizing business processes and delivering robust web applications at ANZ 
              Operations and Technology. Certified as a Pega Robotics System Architect. As a 
              <span className="text-AAsecondary">DevOps Engineer</span>, I automate software 
              delivery through <span className="text-AAsecondary">CI/CD pipelines</span> and 
              orchestrate <span className="text-AAsecondary">Docker</span> and 
              <span className="text-AAsecondary">Kubernetes</span>. In my 
              <span className="text-AAsecondary">ML & Big Data Analytics Internship</span> 
              at ThoughtWorks, I excelled in medical data extraction through OCR and developed 
              a Label Studio API. Collaborating with KCDH, IITB, during my DL Internship at 
              BAHMNI Open Source EMR, I enhanced the <span className="text-AAsecondary">
              layoutLM model</span> and achieved an 80% accuracy with the FUNSD dataset. My 
              ongoing research aims for paper publication at the 
              <span className="text-AAsecondary">17th ACM International Conference, WSDM’24</span> 
              and continuous learning drives me to make a positive impact and advance technology. 
              Additionally, I developed a scalable e-commerce platform using Golang and microservices 
              architecture, implemented Kafka for asynchronous communication between services, 
              and deployed services using Docker and Kubernetes on AWS.
{/*               
              
              bring proficiency in <span className="text-AAsecondary">Pega</span> and 
              <span className="text-AAsecondary">.NET</span>, specializing in optimizing business processes and delivering robust web applications. 
              Certified as a Pega Robotics System Architect. As a <span className="text-AAsecondary">DevOps Engineer</span>, 
              I automate software delivery through <span className="text-AAsecondary">CI/CD pipelines</span> and orchestrate <span className="text-AAsecondary">Docker</span> and <span className="text-AAsecondary">Kubernetes</span>. 
              In my <span className="text-AAsecondary">ML & Big Data Analytics Internship</span>  at ThoughtWorks, I excelled in medical data extraction through OCR and developed a Label Studio API. 
              Collaborating with KCDH, IITB, during my DL Internship at BAHMNI Open Source EMR, I enhanced the <span className="text-AAsecondary">layoutLM model</span> and achieved an 80% accuracy with FUNSD dataset. 
              My ongoing research aims for paper publication at the <span className="text-AAsecondary">16th ACM International Conference, WSDM’23</span>
               and continuous learning drives me to make a positive impact and advance technology. */}
              </span>
            </div>
            {/* <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Fast-forward to today, I&apos;ve had the privilege of working at
                <span className="text-AAsecondary"> a huge manufacturing company</span>,
                <span className="text-AAsecondary"> a start-up</span>,{" "}
                <span className="text-AAsecondary">export-import companies</span>, also
                <span className="text-AAsecondary"> freelancing</span> and recently as Lead for the{" "}
                <span className="text-AAsecondary">Google Developer Student club</span>. Experienced in Desktop & Web
                Development, lately with Arduino Development. My main focus these days is creating and testing{" "}
                <span className="text-AAsecondary">Smart Contracts</span> with Hardhat.
              </span>
            </div> */}

            <div className="font-Header tracking-wide">
              <span className="text-gray-400  ">
                Here are a few technologies I&apos;ve been working with recently :
              </span>
            </div>
            <div className="font-Header tracking-wide flex flex-row space-x-16">
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[0].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="flex flex-row space-x-2 items-center">
                <div className="flex flex-col space-y-4 sm:text-base text-sm">
                  {technologies[1].map((tech, index) => {
                    return (
                      <div key={index} className="flex flex-row items-center space-x-2">
                        <ArrowIcon className={"h-3 w-3 text-AAsecondary"} />
                        <span className="text-gray-400 sm:text-sm text-xs">{tech}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
          {/* // ? Image in Desktop and Tablet */}
          <div className="group relative lg:w-96 lg:h-96 md:w-72 md:h-72 md:block hidden ">
            <div
              className="group-hover:translate-x-3 group-hover:translate-y-3
               duration-300 absolute w-5/6 h-5/6 border-2 border-AAsecondary translate-x-5 
               translate-y-5 rounded"
            ></div>

            <div className="absolute w-5/6 h-5/6  rounded overflow-hidden">
              <div className="absolute w-full h-full group-hover:opacity-0 bg-yellow opacity-10 duration-300 rounded overflow-hidden"></div>
              <Img
                src={"https://raw.githubusercontent.com/sandydasari/sandydasari.github.io/main/public/img/passport_size.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
          </div>
          {/* // ?Image in Mobile */}
          <div className=" relative w-full h-48 md:hidden  flex justify-center items-center">
            <div className="absolute w-48 h-full  rounded  translate-x-5 translate-y-5 border-2 border-AAsecondary"></div>
            <div className="absolute w-48 h-full rounded overflow-hidden">
              <Img
                src={"https://raw.githubusercontent.com/sandydasari/sandydasari.github.io/main/public/img/passport_size.jpg"}
                className={"object-contain rounded-lg"}
                alt="My Image Not Found"
              />
            </div>
            <div className="absolute w-48 h-full  bg-yellow opacity-10 md:opacity-60  rounded overflow-hidden"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
