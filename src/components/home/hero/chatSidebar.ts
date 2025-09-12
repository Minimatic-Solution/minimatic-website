import { html } from "hono/html";

const ChatSidebar = () => html`
  <div
    id="chat-sidebar"
    class="fixed top-0 right-0 h-full w-96 bg-card border-l border-border transform translate-x-full transition-transform duration-300 ease-in-out z-80 shadow-2xl flex flex-col"
  >
    <!-- Chat Header -->
    <div
      class="flex items-center justify-between px-4 py-3 border-b border-border bg-accent/5"
    >
      <div class="flex items-center gap-3">
        <div class="bg-accent p-2 rounded-full">
          <svg
            class="h-5 w-5 text-accent-foreground"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div>
          <h3 class="font-semibold text-card-foreground">AI Assistant</h3>
          <p class="text-xs text-muted-foreground">Online</p>
        </div>
      </div>
      <button
        id="chat-close"
        class="text-muted-foreground hover:text-card-foreground p-2"
      >
        <svg
          class="h-5 w-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>
    </div>

    <!-- Chat Messages Area -->
    <div id="chat-messages" class="flex-1 p-4 space-y-4 overflow-y-auto">
      <div class="flex gap-3">
        <div class="bg-accent p-2 rounded-full h-fit">
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
              d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </div>
        <div class="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
          <p class="text-sm text-card-foreground">
            Hi! I'm here to help you with any questions about our software
            solutions. How can I assist you today?
          </p>
          <span class="text-xs text-muted-foreground mt-1 block">Just now</span>
        </div>
      </div>
    </div>

    <!-- Chat Input -->
    <div class="p-4 border-t border-border">
      <div class="flex gap-2">
        <input
          id="chat-input"
          type="text"
          placeholder="Type your message..."
          class="flex-1 px-3 py-2 text-sm bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-accent/50"
        />
        <button
          id="chat-send"
          class="bg-accent hover:bg-accent/90 text-accent-foreground p-2 rounded-lg transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          <svg
            class="h-4 w-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
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
    </div>
  </div>
`;

export default ChatSidebar;
