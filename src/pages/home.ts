import { html } from "hono/html";
import About from "../components/home/about/about";
import Hero from "../components/home/hero";
import Portfolio from "../components/home/portfolio";
import Service from "../components/home/service/service";

const Home = () => html` ${Hero()} ${Service()} ${About()} ${Portfolio()} `;

export default Home;
