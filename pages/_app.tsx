import "../styles/globals.css";
import { Analytics } from '@vercel/analytics/react';
import AppContext from "../components/AppContextFolder/AppContext";
import { ThemeProvider } from "../components/Theme/ThemeProvider";
import { useRef, useState } from "react";

function MyApp({ Component, pageProps }) {
  const timerCookie = useRef(null);
  const windowSizeTrackerRef = useRef(null);
  const mousePositionRef = useRef(null);
  const [sharedState, setSharedState] = useState({
    portfolio: {
      NavBar: {
        IntervalEvent: null,
        scrolling: null,
        scrollSizeY: null,
      },
      Scrolling:{
        IntervalEvent:null
      }
    },
    userdata: {
      timerCookieRef: timerCookie,
      windowSizeTracker: windowSizeTrackerRef,
      mousePositionTracker: mousePositionRef,
    },
    typing: {
      keyboardEvent: null,
      eventInputLostFocus: null,
    },
    finishedLoading: false,
  });
  return (
    <ThemeProvider>
      <AppContext.Provider value={{ sharedState, setSharedState }}>
        <Component {...pageProps} />
        <Analytics />
      </AppContext.Provider>
    </ThemeProvider>
  );
}

export default MyApp;
