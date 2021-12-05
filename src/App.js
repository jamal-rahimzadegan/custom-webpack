import React from "react";
import { apiService, sumAll } from "Utils";

export default function App() {
  const getDummyData = async () => {
    const res = await apiService.get(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    console.log(`--- res ----> `, res);
  };

  return (
    <div>
      <p>it is a page</p>
      <button onClick={getDummyData}>get dummy data</button>
      <button onClick={() => sumAll(71, 0)}>add all</button>
    </div>
  );
}
