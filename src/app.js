import { Home } from "./pages/home/home.js";

export default function App() {
  const root = document.getElementById("root");
  root.innerHTML = Home;

  return root;
}
