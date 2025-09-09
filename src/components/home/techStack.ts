import { html } from "hono/html";

const TechStack = () => html`
  <section class="py-16 bg-[#0f172a] text-white">
    <div class="container mx-auto text-center mb-10">
      <h2 class="text-3xl font-bold">
        <span class="text-yellow-400">Yes!</span> We cover your tech stack.
      </h2>
      <p class="mt-4 text-gray-400">
        Our team has expertise in almost every programming language.
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <!-- 1st Line (Right to Left) -->
      <marquee
        direction="left"
        scrollamount="8"
        class="text-4xl font-semibold py-3"
        onmouseover="this.stop();"
        onmouseout="this.start();"
      >
        Node.js • Java • React • .NET • Python • C# • Laravel • Vue.js • Golang
        • Moodle • Ionic • Angular • WordPress • iOS • Node.js • Java • React •
        .NET • Python • C# • Laravel • Vue.js • Golang • Moodle • Ionic •
        Angular • WordPress • iOS
      </marquee>

      <!-- 2nd Line (Left to Right) -->
      <marquee
        direction="right"
        scrollamount="8"
        class="text-4xl font-semibold py-3"
        onmouseover="this.stop();"
        onmouseout="this.start();"
      >
        Ruby • Kotlin • Swift • Flutter • PHP • TypeScript • Scala • Rust •
        Haskell • Django • Spring • Ruby • Kotlin • Swift • Flutter • PHP •
        TypeScript • Scala • Rust • Haskell • Django • Spring
      </marquee>
    </div>
  </section>
`;

export default TechStack;
