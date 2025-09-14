import { html } from "hono/html";

const ChatSidebar = () => html`
  <aside
    id="chat-sidebar"
    class="fixed top-0 right-0 h-full w-96 bg-card border-l border-border transform translate-x-full transition-transform duration-300 ease-in-out z-80 shadow-2xl flex flex-col"
    role="complementary"
    aria-label="AI Assistant Chat Sidebar"
  >
    <!-- Chat Header -->
    <header
      class="flex items-center justify-between px-4 py-3 border-b border-border bg-accent/5"
    >
      <div class="flex items-center gap-3">
        <div class="bg-accent p-2 rounded-full" aria-hidden="true">
          <svg
            class="h-5 w-5 text-accent-foreground"
            fill="none"
            stroke="currentColor"
            role="img"
            aria-label="Chat Icon"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 
                 4.418-4.03 8-9 8a9.863 9.863 0 
                 01-4.255-.949L3 20l1.395-3.72C3.512 
                 15.042 3 13.574 3 12c0-4.418 
                 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div>
          <h2 class="font-semibold text-card-foreground text-base">
            AI Assistant
          </h2>
          <p class="text-xs text-muted-foreground">Online</p>
        </div>
      </div>
      <button
        id="chat-close"
        type="button"
        class="text-muted-foreground hover:text-card-foreground p-2"
        aria-label="Close chat"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          role="img"
          aria-hidden="true"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </header>

    <!-- Chat Messages Area -->
    <section
      id="chat-messages"
      class="flex-1 p-4 space-y-4 overflow-y-auto"
      role="log"
      aria-live="polite"
      aria-label="Chat messages"
    >
      <div class="flex gap-3">
        <div class="bg-accent p-2 rounded-full h-fit" aria-hidden="true">
          <svg
            class="h-4 w-4 text-accent-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 
                 12c0-4.418-4.03-8-9-8s-9 
                 3.582-9 8c0 1.574.512 3.042 
                 1.395 4.28L3 20l3.745-1.949A9.863 
                 9.863 0 0012 20c4.97 0 9-3.582 9-8z"
            />
          </svg>
        </div>
        <div class="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
          <p class="text-sm text-card-foreground">
            Hi! I'm here to help you with any questions about our software
            solutions. How can I assist you today?
          </p>
          <time
            class="text-xs text-muted-foreground mt-1 block"
            datetime="2025-09-14T12:00:00Z"
          >
            Just now
          </time>
        </div>
      </div>
    </section>

    <!-- Chat Input -->
    <form
      class="p-4 border-t border-border"
      role="form"
      aria-label="Send a message"
    >
      <div class="flex gap-2">
        <label for="chat-input" class="sr-only">Type your message</label>
        <input
          id="chat-input"
          type="text"
          placeholder="Type your message..."
          class="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
          aria-label="Message input"
        />
        <button
          id="chat-send"
          type="submit"
          class="bg-accent hover:bg-accent/90 text-accent-foreground p-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
          aria-label="Send message"
        >
          <svg
            class="h-4 w-4 rotate-90"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            role="img"
            aria-hidden="true"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
            />
          </svg>
        </button>
      </div>
    </form>
  </aside>
`;

export default ChatSidebar;
