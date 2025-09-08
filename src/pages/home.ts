import { html } from "hono/html";
import Hero from "../components/home/hero";
import Portfolio from "../components/home/portfolio";
import Service from "../components/home/service";

const Home = () => html` ${Hero()} ${Service()} ${Portfolio()} `;

export default Home;
