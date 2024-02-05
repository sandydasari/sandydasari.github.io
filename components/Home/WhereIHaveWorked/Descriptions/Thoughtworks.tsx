import React from "react";
import ArrowIcon from "../../../Icons/ArrowIcon";
import { getTasksTextWithHighlightedKeyword } from "./taskAndType";

export default function Thoughtworks() {
  const tasks = [
    {
      text: "Medical Data from the documents is extracted and converted through OCR using docTR deep learning model.",
      keywords: ["Medical Data","OCR","docTR"],
    },
    {
      text: "Recorded as observation/indicators against the patient’s medical history using spacy and medcat libraries.",
      keywords: ["spacy","medcat"],
    },
    {
      text: "Developed Label Studio API with docTR deep learning model to extract the text for multiple data reports.",
      keywords: ["Label Studio API", "docTR","multiple data reports"],
    },
    {
      text: "Extracted unlabeled data is trained using semi-supervised learning which shows accuracy improvements of 3-5% compared to supervised learning with small labeled data.",
      keywords: ["semi-supervised learning", "docTR","multiple data reports"],
    },
    {
      text: "Ongoing research to publish a paper for upcoming 16th ACM International Conference,WSDM’23",
      keywords: ["16th ACM International Conference", "WSDM’23"],
    },
  ];
  return (
    <div className="flex flex-col space-y-5 max-w-xl px-4 md:px-0">
      <div className="flex flex-col spacey-y-2">
        {/* Title */}
        <span className="text-gray-100 sm:text-lg text-sm font-Arimo tracking-wide">
        ML & Big Data Analytics Internship  <span className="text-AAsecondary">@ AI Internship</span>
        </span>
        {/* Date */}
        <span className="font-mono text-xs text-gray-500">Dec 2021 - May 2022</span>
      </div>
      <div className="flex flex-col space-y-4 sm:text-sm text-xs">
      {tasks.map((item, index) => {
            return (
              <div key={index} className="flex flex-row space-x-2">
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
  );
}
