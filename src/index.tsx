import React from "react";
import ReactDOM from "react-dom/client";
import Games from "./games";
import "./index.css";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(<Games />);
