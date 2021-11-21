import React, { useEffect } from "react";
import { plusAll, apiService } from "./utils";

export default function App() {
  const getDummyData = async () => {
    const res = await apiService.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(`--- res ----> `, res);
  };

  useEffect(() => {
    getDummyData();
  }, []);

  return (
    <div>
      <p>it is a page</p>
      <button onClick={getDummyData}>get dummy data</button>
      <button onClick={() => plusAll(71, 0)}>add all</button>
      wowojf;aksjdflkjas;ldkj
    </div>
  );
}
