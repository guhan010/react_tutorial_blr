import React, { useState } from "react";
// import Project from "./components/pages/Project";
// import { Route, Routes } from "react-router-dom";
import "./components/Portfolio/About.css";
// import LifeCycle from "./LifeCycle";
import Effect from "./Effect";
// import State from "./State";
// import Map from "./Map.jsx";
// import Media from "./Media";
// import Project from "./components/pages/Project";
// import Portfolio from "./components/pages/Portfolio";
// import Home from "./components/Portfolio/Home";
// import NotFound from "./components/Portfolio/NotFound";
// import Inbox from "./components/Inbox";
// import MailA from "./components/MailA";
// import MailB from "./components/MailB";

function App() {
  const [state, setState] = useState(true);
  // console.log("Props passed", count);
  return (
    <div>
      {/* <Home />
      <Routes>
        <Route path="/project" element={<Project />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="inbox" element={<Inbox />}></Route>
        <Route path="/inbox/mailA" element={<MailA />} />
        <Route path="/inbox/mailB" element={<MailB />} />
        <Route path="*" element={<NotFound />} />
      </Routes> */}
      {/* <Store /> */}
      {/* <Media /> */}
      {/* <Map /> */}
      {/* <State /> */}
      {/* <LifeCycle props="hello" age={12} name="rama" /> */}
      {state && <Effect />}
      <button onClick={() => setState(!state)}>
        {state ? "Unmount" : "mount"}
      </button>
    </div>
  );
}

export default App;
