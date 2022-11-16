import { sumAll } from "@utils";

export default function App() {
  const allResult = sumAll(5, 15);
  console.log(`--- result of all ----> `, allResult);

  const root = document.getElementById("root");
  root.innerHTML = `<p>hello from the app</p>`;

  return root;
}
