import { html } from "hono/html";

const Navbar = () => html`
  <nav>
    <div class="container mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <!-- Left: Company Name -->
        <div class="flex-shrink-0">
          <a
            href="/"
            class="text-xl font-bold text-foreground hover:text-accent transition-colors"
          >
            Minimtic Solutions
          </a>
        </div>

        <!-- Middle: Navigation Items (Desktop) -->
        <div class="hidden md:flex items-center space-x-8">
          <a
            href="/#services"
            class="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >Services</a
          >
          <a
            href="/#about"
            class="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >About</a
          >
          <a
            href="/#portfolio"
            class="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >Portfolio</a
          >
          <a
            href="/#contact"
            class="text-muted-foreground hover:text-foreground transition-colors font-medium"
            >Contact</a
          >
        </div>

        <!-- Right: Schedule Call Button & Mobile Menu -->
        <div class="flex items-center space-x-4">
          <!-- Schedule Call Button -->
          <button
            class="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground transition-colors schedule-call-btn"
          >
            Schedule a Call
          </button>

          <!-- Mobile Menu Button -->
          <button
            id="mobile-menu-button"
            class="md:hidden inline-flex items-center justify-center p-2 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <svg
              class="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                id="menu-icon"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
              <path
                id="close-icon"
                class="hidden"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>

      <!-- Mobile Menu -->
      <div id="mobile-menu" class="hidden md:hidden border-t border-border">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <a
            href="/#services"
            class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >Services</a
          >
          <a
            href="/#about"
            class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >About</a
          >
          <a
            href="/#portfolio"
            class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >Portfolio</a
          >
          <a
            href="/#contact"
            class="block px-3 py-2 text-muted-foreground hover:text-foreground hover:bg-muted rounded-lg transition-colors font-medium"
            >Contact</a
          >
          <div class="pt-2">
            <button
              class="w-full text-left px-3 py-2 text-sm font-medium rounded-lg bg-accent hover:bg-accent/90 text-accent-foreground transition-colors schedule-call-btn"
            >
              Schedule a Call
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
`;
export default Navbar;
