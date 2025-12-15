import Header from "../components/Header/Header";
import Startup from "../components/Header/StartupLogo/Startup";
import MyName from "../components/Home/MyName/MyName";
import { useContext, useEffect, useState, useRef } from "react";
import SocialMediaArround from "../components/Home/SocialMediaArround/SocialMediaArround";
import LatestUpdates from "../components/Home/LatestUpdates/LatestUpdates"
import WhereIHaveWorked from "../components/Home/WhereIHaveWorked/WhereIHaveWorked";
import SomethingIveBuilt from "../components/Home/SomethingIveBuilt/SomethingIveBuilt";
import GetInTouch from "../components/Home/GetInTouch/GetInTouch";
import Research from "../components/Home/Research/Research";
import Footer from "../components/Footer/Footer";
import AppContext from "../components/AppContextFolder/AppContext";
import Aos from "aos";
import "aos/dist/aos.css";
import Head from "next/head";
import ScreenSizeDetector from "../components/CustomComponents/ScreenSizeDetector";
import Maintenance from "../components/Home/Maintenance/Maintenance";
import AskAI from "../components/Chat/AskAI";
export default function Home() {
  const [ShowElement, setShowElement] = useState(false);
  const [ShowThisCantBeReached, setShowThisCantBeReached] = useState(false);
  const [ShowMe, setShowMe] = useState(false);
  // context Variable to clearInterval
  const context = useContext(AppContext);
  const aboutRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);


  // this userEffect will be called to get the user location, so we can check if he is from the blackList,
  // this will only run if NEXT_PUBLIC_BLACKLIST_COUNTRIES is not empty
  useEffect(() => {
    
      

    
  }, []); // Empty dependency array ensures that this effect runs once when the component mounts

  // this useEffect will be called when userData is set
 

  useEffect(() => {
    // remove the interval Cookie timer setter when
    clearInterval(context.sharedState.userdata.timerCookieRef.current);
    if (typeof window !== "undefined") {
      // remove UserDataPuller project EventListeners
      window.removeEventListener("resize", context.sharedState.userdata.windowSizeTracker.current);
      window.removeEventListener("mousemove", context.sharedState.userdata.mousePositionTracker.current, false);
      // remove Typing project EventListeners
      window.removeEventListener("resize", context.sharedState.typing.eventInputLostFocus);
      document.removeEventListener("keydown", context.sharedState.typing.keyboardEvent);
    }
    setTimeout(() => {
      setShowElement(true);
    }, 10);

    setTimeout(() => {
      setShowThisCantBeReached(false);
    }, 10);
    // ? INFORMATIONAL next function will show the component after changing the state of ShowMe
    setTimeout(() => {
      setShowElement(false);
      setShowMe(true);
      context.sharedState.finishedLoading = true;
      context.setSharedState(context.sharedState);
    }, 10);
  }, [context, context.sharedState]);

  useEffect(() => {
    Aos.init({ duration: 10, once: true });
  }, []);

  console.log("website is rendering...");
  const meta = {
    title: "Sandy Dasari - AI Engineer",
    description: `AI Engineer focused on scalable Agentic AI systems, RAG, and production-grade machine learning pipelines using Python and TypeScript. Research interests include neural network optimization and intelligent system automation at scale. Previously conducted academic research on neural network optimization and scaling at IIT Bombay.`,
    image: "/titofCercle.png",
    type: "website",
  };
  const isProd = process.env.NODE_ENV === "production";

  return (
    <>
      <Head>
        <title>{meta.title}</title>
        <meta name="robots" content="follow, index" />
        <meta content={meta.description} name="description" />
        <meta property="og:url" content={`https://sandydasari.com`} />
        <link rel="canonical" href={`https://sandydasari.com`} />
        <meta property="og:type" content={meta.type} />
        <meta property="og:site_name" content="Sandy Dasari" />
        <meta property="og:description" content={meta.description} />
        <meta property="og:title" content={meta.title} />
        <meta property="og:image" content={meta.image} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@titofabdo" />
        <meta name="twitter:title" content={meta.title} />
        <meta name="twitter:description" content={meta.description} />
        <meta name="twitter:image" content={meta.image} />
      </Head>

      {true ? (
        <div className="relative snap-mandatory min-h-screen bg-AAprimary w-full ">
         
        
          <Header finishedLoading={true} sectionsRef={homeRef} />
          <MyName finishedLoading={true} />
          <SocialMediaArround finishedLoading={true} />
          {context.sharedState.finishedLoading ? <LatestUpdates ref={aboutRef} /> : <></>}
          {context.sharedState.finishedLoading ? <WhereIHaveWorked /> : <></>}
          {context.sharedState.finishedLoading ? <SomethingIveBuilt /> : <></>}
          {context.sharedState.finishedLoading ? <Research /> : <></>}
          {context.sharedState.finishedLoading ? <GetInTouch /> : <></>}
          {context.sharedState.finishedLoading ? (
            <Footer githubUrl={"https://sandydasari.github.io/"} hideSocialsInDesktop={true} />
          ) : (
            <></>
          )}
          {!isProd && <ScreenSizeDetector />}
          {context.sharedState.finishedLoading && <AskAI />}
        </div>
      ) : (
        <Maintenance />
      )}
    </>
  );
}
