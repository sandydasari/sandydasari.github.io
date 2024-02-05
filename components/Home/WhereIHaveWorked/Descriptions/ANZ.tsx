import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function ANZ () {
  const tasks = [
    {
      text: "Proficient in Pega and .NET, specializing in optimizing business processes and delivering robust web applications with ASP.NET, C#,and SQL Server",
      keywords: ["Pega", ".NET", "ASP.NET", "C#", "SQL Server"],
    },
    {
      text: "Certified Pega Robotics System Architect, validating expertise and commitment to excellence in Pega development.",
      keywords: ["Pega Robotics System Architect", "Pega development"],
    },
    {
      text: "Currently serving as a DevOps Engineer, automating and streamlining the software delivery process.",
      keywords: ["DevOps Engineer"],
    },
    {
      text: "Established and managed CI/CD pipelines with Jenkins, GitLab CI, and Azure DevOps, while orchestrating Docker and Kubernetes for scalable and efficient application deployment.",
      keywords: ["CI/CD pipelines", "Jenkins","Gitlab CI", "Azure DevOps","Docker","Kubernetes"],
    },
  ];

  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            Software Engineer <span className="text-AAsecondary">@ DevOps</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">Jun 2023 - Present</span>
          <span
            className="font-mono text-xs text-AAsecondary hover:cursor-pointer"
            style={{ fontSize: "0.6rem" }}
            // set on click to open the website
            onClick={() => window.open("https://www.anz.com.au/", "_blank")}
          >
            www.anz.com.au
          </span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
          {/* Tasks Description 1 */}
          {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-1">
                <ArrowIcon className={" h-5 w-4 text-AAsecondary flex-none"} />
                <span
                  className="text-gray-500 sm:text-sm text-xs"
                  dangerouslySetInnerHTML={{
                    __html: getTasksTextWithHighlightedKeyword(item.text, item.keywords),
                  }}
                ></span>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
}
