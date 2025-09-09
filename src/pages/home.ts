import { html } from "hono/html";
import About from "../components/home/about/about";
import AiExcellence from "../components/home/ai-excellence/aiExcellence";
import Contact from "../components/home/contact/contact";
import Hero from "../components/home/hero";
import Portfolio from "../components/home/portfolio/portfolio";
import Service from "../components/home/service/service";

const Home = () =>
  html` ${Hero()} ${Service()} ${About()} ${AiExcellence()} ${Portfolio()}
  ${Contact()}`;

export default Home;
