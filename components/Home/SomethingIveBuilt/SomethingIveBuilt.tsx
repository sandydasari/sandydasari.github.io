import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import ArrowIcon from "../../Icons/ArrowIcon";
import Img from "../../smallComp/image/Img";
import GithubIcon from "../../Icons/GithubIconForSomethingIveBuild";
import ExternalLink from "../../Icons/ExternalLink";

export default function SomethingIveBuilt() {
  const router = useRouter();
  
  return (
    <div
      id="SomethingIveBuiltSection"
      className=" flex flex-col xl:space-y-28 space-y-12 bg-AAprimary w-full  
     2xl:px-72 lg:px-24 md:px-16 sm:px-16 py-32 px-4"
    >
      {/* Title */}
      <div data-aos="fade-up" className=" flex flex-row  items-center md:px-0">
        <ArrowIcon className={"flex-none h-5 md:h-6 w-5 md:w-5 translate-y-[2px] text-AAsecondary"} />
        <div className="flex-none flex-row space-x-2 items-center pr-2">
          <span className="text-AAsecondary font-sans text-sm  sm:text-xl"> 03.</span>
          <span className=" font-bold tracking-wider text-gray-200 text-lg md:text-2xl w-44 md:w-56 opacity-85">
            Some Things I&apos;ve Built
          </span>
        </div>
        <div className="bg-gray-400 h-[0.2px] w-full xl:w-1/3 md:w-1/2"></div>
      </div>

      <div className="flex flex-col xl:space-y-36 space-y-8 md:space-y-28">
        {/* Healthcare AI Agents Project */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96 ">
          {/* Left image */}
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="#" target={"_blank"} rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/healthcare.png"} alt={"Healthcare AI Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          {/* Right Content */}
          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            {/* Background for text in mobile responsive */}
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-yellow opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/healthcare.png"} alt={"Healthcare AI Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">AI Leadership Project</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Healthcare AI Agents Platform
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Leading development of an advanced <span className="text-AAsecondary">healthcare AI platform</span> with 
                  voice and text-based health record automation. Features include <span className="text-AAsecondary">AI scribe functionality</span>, 
                  real-time conversations with simulated AI patients, comprehensive <span className="text-AAsecondary">allergy and condition tracking</span>, 
                  MCP server integration, period tracker, and automated appointment booking with calendar integration. 
                  Built using modern <span className="text-AAsecondary">microservices architecture</span>.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Turborepo</span>
                <span className="pr-4 z-10">pnpm Monorepo</span>
                <span className="pr-4 z-10">AI Agents</span>
                <span className="pr-4 z-10">Voice AI</span>
                <span className="pr-4 z-10">MCP Server</span>
                <span className="pr-4 z-10">Healthcare AI</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="#" />
                <ExternalLink url={""} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* E-commerce AI Agents Project */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="#" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/ecommerce.png"} alt={"E-commerce AI Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-yellow opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/ecommerce.png"} alt={"E-commerce AI Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">AI Leadership Project</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  E-commerce AI Agents Platform
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Architecting intelligent <span className="text-AAsecondary">multi-agent e-commerce system</span> with 
                  specialized agents for search, cart management, and payment processing. Features <span className="text-AAsecondary">vector database integration</span> 
                  for semantic search, dual agent workflows, and user-customizable agent setup. Built with <span className="text-AAsecondary">SQLAlchemy ORM</span> 
                  for robust database management and includes custom agent description capabilities for personalized shopping experiences.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">Multi-Agent Systems</span>
                <span className="pr-4 z-10">Vector Database</span>
                <span className="pr-4 z-10">SQLAlchemy ORM</span>
                <span className="pr-4 z-10">AI Agents</span>
                <span className="pr-4 z-10">E-commerce</span>
                <span className="pr-4 z-10">Python</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="#" />
                <ExternalLink url={""} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* Frontend Blueprint Project */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="#" target={"_blank"} rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/blueprint.png"} alt={"Blueprint Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-yellow opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/blueprint.png"} alt={"Blueprint Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Frontend Architecture</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Blueprint Applications Platform
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Developing a comprehensive <span className="text-AAsecondary">blueprint applications framework</span> with 
                  modular architecture serving as foundation for 5 interconnected applications. Features include 
                  <span className="text-AAsecondary">blueprint functions</span>, reusable components, and standardized 
                  development patterns. Built with modern <span className="text-AAsecondary">monorepo architecture</span> 
                  for scalable enterprise-level applications.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Next.js</span>
                <span className="pr-4 z-10">Turborepo</span>
                <span className="pr-4 z-10">pnpm Monorepo</span>
                <span className="pr-4 z-10">Blueprint Architecture</span>
                <span className="pr-4 z-10">Frontend Framework</span>
                <span className="pr-4 z-10">TypeScript</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="#" />
                <ExternalLink url={""} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* KnowHow Assist RAG Application */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="#" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/rag.png"} alt={"RAG Application"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-yellow opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/rag.png"} alt={"RAG Application"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">Enterprise AI</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  KnowHow Assist RAG Platform
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Enterprise-scale <span className="text-AAsecondary">knowledge management system</span> processing 60k+ 
                  documents using <span className="text-AAsecondary">Google Cloud Vertex AI</span>. Built complete ML pipeline 
                  with document ingestion, multi-modal embeddings, and <span className="text-AAsecondary">vector search</span> 
                  achieving 200ms query response time. Features real-time streaming chat interface with 
                  <span className="text-AAsecondary">React.js/TypeScript</span> frontend and FastAPI backend.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">RAG Architecture</span>
                <span className="pr-4 z-10">Google Cloud Vertex AI</span>
                <span className="pr-4 z-10">Vector Search</span>
                <span className="pr-4 z-10">React.js</span>
                <span className="pr-4 z-10">FastAPI</span>
                <span className="pr-4 z-10">Multi-modal AI</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="#" />
                <ExternalLink url={""} router={router} />
              </div>
            </div>
          </div>
        </div>

        {/* Neural Network SCF Project */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://github.com/sandydasari/AnsysAPDL_python" target={"_blank"} rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/nn.png"} alt={"Neural Network Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-yellow opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/nn.png"} alt={"Neural Network Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">MTech Thesis</span>
                <a href="https://www.iitb.ac.in" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    Neural Network SCF Prediction
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Implemented efficient algorithm in <span className="text-AAsecondary">ANSYS-APDL</span> achieving 90% reduction 
                  in time complexity. Trained <span className="text-AAsecondary">deep learning models</span> with 
                  <span className="text-AAsecondary">Bayesian Optimization</span> for material property analysis. 
                  Used <span className="text-AAsecondary">Sobol sampling</span> and neural networks for geometric parameter 
                  dependency insights in structural engineering applications.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Deep Learning</span>
                <span className="pr-4 z-10">Neural Networks</span>
                <span className="pr-4 z-10">Bayesian Optimization</span>
                <span className="pr-4 z-10">ANSYS-APDL</span>
                <span className="pr-4 z-10">Sobol Sampling</span>
                <span className="pr-4 z-10">Python</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/sandydasari/AnsysAPDL_python" />
                <a href="https://www.iitb.ac.in/" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Document Analysis ML Project */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-start-6 col-span-7">
              <a href="#" target="_blank" rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-50 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/medical.png"} alt={"Document Analysis Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0 md:order-2">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-yellow opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/medical.png"} alt={"Document Analysis Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 col-span-8 flex flex-col items-start space-y-3 md:order-1">
              <div className="flex flex-col space-y-1 z-10">
                <span className="text-AAsecondary text-base">AI Research</span>
                <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                  Medical Document Analysis AI
                </span>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left">
                  Advanced <span className="text-AAsecondary">medical data extraction</span> using OCR with 
                  <span className="text-AAsecondary">docTR deep learning model</span>. Developed Label Studio API 
                  for multiple data reports and implemented <span className="text-AAsecondary">semi-supervised learning</span> 
                  achieving 3-5% accuracy improvements. Enhanced <span className="text-AAsecondary">layoutLM model</span> 
                  with FUNSD dataset achieving 80% accuracy in document understanding.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-start">
                <span className="pr-4 z-10">OCR</span>
                <span className="pr-4 z-10">docTR</span>
                <span className="pr-4 z-10">layoutLM</span>
                <span className="pr-4 z-10">Semi-supervised Learning</span>
                <span className="pr-4 z-10">Label Studio API</span>
                <span className="pr-4 z-10">Medical AI</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="#" />
                <ExternalLink url={""} router={router} />
              </div>
            </div>
          </div>
        </div>
        {/* Kafka Real-time Data Pipeline Project */}
        <div data-aos="fade-up" className="relative md:grid md:grid-cols-12 w-full md:h-96">
          <div className="hidden bg-AAprimary z-10 py-4 absolute md:grid grid-cols-12 w-full h-full content-center">
            <div className="relative rounded w-full h-full col-span-7">
              <a href="https://github.com/sandydasari/kafka-project1" target={"_blank"} rel="noreferrer">
                <div className="absolute w-full h-full rounded bg-AAprimary transition-opacity opacity-30 hover:opacity-0 hover:cursor-pointer duration-300"></div>
              </a>
              <Img src={"/img/kafka.png"} alt={"Kafka Pipeline Project"} className={`w-full rounded h-full`} />
            </div>
          </div>

          <div className="md:absolute py-4 md:grid md:grid-cols-12 w-full h-full content-center">
            <div className="absolute w-full h-full bg-opacity-70 z-0">
              <div className="relative w-full h-full">
                <div className="absolute w-full h-full bg-yellow opacity-10 z-10"></div>
                <div className="absolute w-full h-full bg-AAprimary opacity-80 z-10"></div>
                <Img src={"/img/kafka.png"} alt={"Kafka Pipeline Project"} className={`w-full h-full`} />
              </div>
            </div>

            <div className="px-8 pt-8 sm:pt-12 md:py-0 xl:col-span-6 xl:col-start-7 col-start-5 col-span-8 flex flex-col items-start md:items-end space-y-3">
              <div className="flex flex-col space-y-1 md:items-end z-10">
                <span className="text-AAsecondary text-base">Data Engineering</span>
                <a href="https://github.com/sandydasari/kafka-project1" target="_blank" rel="noopener noreferrer">
                  <span className="md:text-gray-200 text-AAsecondary font-bold text-xl hover:cursor-pointer">
                    YPredict - Real-time Analytics
                  </span>
                </a>
              </div>
              <div className="w-full md:bg-AAtertiary rounded-md py-6 md:p-6 z-10">
                <p className="text-gray-300 md:text-gray-400 text-left md:text-right">
                  Built scalable <span className="text-AAsecondary">real-time data pipeline</span> using Confluent Kafka 
                  for streaming 50,000+ daily transactions from Python Flask website. Implemented 
                  <span className="text-AAsecondary">parallel consumer processes</span> achieving 99.9% uptime with 
                  sub-200ms processing speeds. Developed comprehensive <span className="text-AAsecondary">Power BI dashboard</span> 
                  for data visualization and hosted MySQL database on aiven.io for seamless accessibility.
                </p>
              </div>
              <ul className="flex flex-wrap w-full text-gray-300 md:text-gray-400 text-sm font-Text2 md:justify-end">
                <span className="pr-4 z-10">Confluent Kafka</span>
                <span className="pr-4 z-10">Python Flask</span>
                <span className="pr-4 z-10">Real-time Processing</span>
                <span className="pr-4 z-10">Power BI</span>
                <span className="pr-4 z-10">MySQL</span>
                <span className="pr-4 z-10">Data Pipeline</span>
              </ul>
              <div className="z-10 flex fle-row space-x-5">
                <GithubIcon link="https://github.com/sandydasari/Ypredict" />
                <a href="https://github.com/sandydasari/kafka-project1" target={"_blank"} rel="noreferrer">
                  <ExternalLink url={""} router={router} />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}