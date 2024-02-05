import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function BAHMNI() {
  const tasks = [
    {
      text: "Improved layoutLM deep learning model with FUNSD dataset and achieved an accuracy of 80%.",
      keywords: ["layoutLM","FUNSD dataset","80%"],
    },
    {
      text: "Developing a tool to extract key entity recognition from a document/form using SimpleDLM as a pre-trained model.",
      keywords: ["key entity recognition","SimpleDLM"],
    },
    {
      text: "Using Simple Document Language Modelling instead of LayoutLM, the F1 score is improved by 14.4%.",
      keywords: ["F1 score","14.4%"],
    },
  ];
  return (
    <>
      <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
        <div className="flex flex-col spacey-y-2">
          {/* Title */}
          <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
            DL Internship <span className="text-AAsecondary">@ LayoutLM</span>
          </span>
          {/* Date */}
          <span className="font-mono text-xs text-gray-500">June 2022 - November 2022</span>
        </div>
        <div className="flex flex-col space-y-4 sm:text-sm text-xs">
            {/* Tasks Description 1 */}
            {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
                <ArrowIcon className={"h-5 w-4 text-AAsecondary flex-none"} />
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
