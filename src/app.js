import { sumAll } from "@utils";
import "./app.css";

export default function App() {
  const allResult = sumAll(5, 15);
  console.log(`--- result of all ----> `, allResult);

  const root = document.getElementById("root");
  root.innerHTML = '<p class="app-style">Hello Webpack</p>';

  return root;
}
