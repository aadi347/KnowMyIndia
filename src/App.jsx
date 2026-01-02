import React from "react";
import StateInfo from "./components/StateInfo";
import TechnicalDemo from "./components/TechnicalDemo";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="root">
      <div>
        <Analytics />
        <StateInfo />
        <TechnicalDemo />
      </div>
    </div>
  );
}

export default App;
