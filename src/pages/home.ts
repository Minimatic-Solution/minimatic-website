import { html } from "hono/html";
import Hero from "../components/home/hero";

const Home = () => html` ${Hero()} `;

export default Home;
