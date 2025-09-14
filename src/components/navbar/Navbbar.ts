import { html } from "hono/html";

const Navbar = () => html`
  <nav role="navigation" aria-label="Main navigation">
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Left: Company Logo / Name -->
        <div class="flex-shrink-0">
          <a
            href="/"
            class="text-xl font-bold text-foreground hover:text-accent transition-colors"
            aria-label="Go to Minimatic Solutions Home"
          >
            Minimatic Solutions
          </a>
        </div>

        <!-- Middle: Navigation Items (Desktop) -->
        <ul class="hidden md:flex items-center space-x-8">
          <li>
            <a
              href="/#services"
              class="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >Services</a
            >
          </li>
          <li>
            <a
              href="/#about"
              class="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >About</a
            >
          </li>
          <li>
            <a
              href="/#portfolio"
              class="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="/#contact"
              class="text-muted-foreground hover:text-foreground transition-colors font-medium"
              >Contact</a
            >
          </li>
        </ul>

        <!-- Right: CTA & Mobile Menu Button -->
        <div class="flex items-center space-x-4">
          <a
            href="/#contact"
            class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground transition-colors"
          >
            Schedule a Call
          </a>

          <!-- Mobile Menu Button -->
          <button
            id="mobile-menu-button"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
            aria-expanded="false"
            aria-controls="mobile-menu"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path
                id="menu-icon"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                id="close-icon"
                class="hidden"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
            <span class="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div
        id="mobile-menu"
        class="hidden md:hidden border-t border-border"
        role="menu"
        aria-label="Mobile menu"
      >
        <ul class="px-2 pt-2 pb-3 space-y-1">
          <li>
            <a
              href="/#services"
              class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
              >Services</a
            >
          </li>
          <li>
            <a
              href="/#about"
              class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
              >About</a
            >
          </li>
          <li>
            <a
              href="/#portfolio"
              class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
              >Portfolio</a
            >
          </li>
          <li>
            <a
              href="/#contact"
              class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
              >Contact</a
            >
          </li>
          <li class="pt-2">
            <a
              href="/#contact"
              class="w-full block text-center px-3 py-2 text-sm font-medium rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground transition-colors"
            >
              Schedule a Call
            </a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
`;

export default Navbar;
