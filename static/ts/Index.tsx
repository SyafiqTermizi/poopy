import * as React from "react";
import * as ReactDom from "react-dom";

import { FeedingCounter } from "./components/FeedingCounter";
import { PoopCounter } from "./components/PoopCounter";

export const App = () => (
  <div className="row mt-5">
    <FeedingCounter />
    <PoopCounter />
  </div>
);

ReactDom.render(<App />, document.getElementById("app"));
