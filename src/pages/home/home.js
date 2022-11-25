import { sumAll } from "@utils";
import "./home.css";

export const Home = (() => {
  const allResult = sumAll(5, 15);
  console.log(`--- result of all ----> `, allResult);
  console.log(`--- env ----> `, process.env.API_BASE_URL);

  return `<p class="home">Hello Webpack</p>`;
})();
