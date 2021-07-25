import React from "react";
import { plusAll } from "Utils";

export default function App() {
  return (
    <div>
      <p>App page</p>
      <button onClick={() => plusAll(71, 0)}>add all</button>
    </div>
  );
}