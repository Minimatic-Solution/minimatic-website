import { html } from "hono/html";
import Hero from "../components/home/hero";
import Service from "../components/home/service";

const Home = () => html` ${Hero()} ${Service()} `;

export default Home;
