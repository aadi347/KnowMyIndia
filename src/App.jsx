import React from "react";
import NewHero from "./components/NewHero";
import StateInfo from "./components/StateInfo";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="root">
      <div>
        <Analytics />
        <StateInfo />
      </div>
    </div>
  );
}

export default App;
