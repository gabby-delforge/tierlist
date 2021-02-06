import "./App.scss";
import React from "react";
import { Tierlist } from "./tierlist";
import { Navbar } from "./navbar";
import { TierlistInputter } from "./tierlistinputter";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Tierlist
        name="message for alex (except the last one's for gabby <3 )"
        items={["i", "love", "you", "♥", "I LOVE YOU TOO <3"]}
      />
      <Tierlist name="Alex's Gods" items={["item 1"]} />
    </div>
  );
}

export default App;
