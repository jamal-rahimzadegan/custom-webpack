import React from "react";
import { plusAll } from "Utils";

export default function App() {
  console.log(`--- mode in app ----> `, process.env.NODE_ENV);

  return (
    <div>
      {/*<p>App page</p>*/}
      <button onClick={() => plusAll(71, 0)}>add all</button>
    </div>
  );
}
