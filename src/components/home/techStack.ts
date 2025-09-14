import { html } from "hono/html";

const TechStack = () => html`
  <section
    class="py-16 bg-[#0f172a] text-white"
    role="region"
    aria-labelledby="tech-stack-title"
  >
    <div class="container mx-auto text-center mb-10">
      <header>
        <h2 id="tech-stack-title" class="text-3xl font-bold">
          <span class="text-yellow-400">Yes!</span> We cover your tech stack.
        </h2>
        <p
          class="mt-4 text-gray-400"
          role="doc-subtitle"
          aria-describedby="tech-stack-title"
        >
          Our team has expertise in almost every programming language.
        </p>
      </header>
    </div>

    <div class="max-w-4xl mx-auto" role="presentation">
      <!-- 1st Line (Right to Left) -->
      <marquee
        direction="left"
        scrollamount="8"
        class="text-4xl font-semibold py-3"
        onmouseover="this.stop();"
        onmouseout="this.start();"
        aria-label="Technologies scrolling from right to left: Node.js, Java, React, .NET, Python, C#, Laravel, Vue.js, Golang, Moodle, Ionic, Angular, WordPress, iOS"
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
        aria-label="Technologies scrolling from left to right: Ruby, Kotlin, Swift, Flutter, PHP, TypeScript, Scala, Rust, Haskell, Django, Spring"
      >
        Ruby • Kotlin • Swift • Flutter • PHP • TypeScript • Scala • Rust •
        Haskell • Django • Spring • Ruby • Kotlin • Swift • Flutter • PHP •
        TypeScript • Scala • Rust • Haskell • Django • Spring
      </marquee>
    </div>

    <!-- Screen Reader Accessible Alternative -->
    <div class="sr-only">
      <h3>Complete Technology Stack:</h3>
      <p>Frontend Technologies: React, Vue.js, Angular, Ionic, Flutter</p>
      <p>
        Backend Technologies: Node.js, Java, .NET, Python, C#, Laravel, Golang,
        Ruby, PHP, Django, Spring
      </p>
      <p>Mobile Technologies: iOS, Swift, Kotlin, Flutter, Ionic</p>
      <p>Programming Languages: TypeScript, Scala, Rust, Haskell</p>
      <p>Content Management: WordPress, Moodle</p>
    </div>
  </section>
`;

export default TechStack;
