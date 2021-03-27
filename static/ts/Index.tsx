import * as React from "react";
import * as ReactDom from "react-dom";

export const App = () => (
  <div className="row">
    <div className="col-12 text-center">
      <h1>Hello world</h1>
    </div>
  </div>
);
ReactDom.render(<App />, document.getElementById("app"));
