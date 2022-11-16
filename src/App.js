import React from "react";
import { sumAll } from "@utils";

export default function App() {

  return (
    <div>
      <p>it is a page</p>
      <button onClick={() => sumAll(71, 0)}>add all</button>
    </div>
  );
}
