// chat.js
export function initChat() {
  const chatButton = document.getElementById("chat-button");
  const chatSidebar = document.getElementById("chat-sidebar");
  const chatClose = document.getElementById("chat-close");
  const chatInput = document.getElementById("chat-input");
  const chatSend = document.getElementById("chat-send");
  const chatMessages = document.getElementById("chat-messages");

  if (!chatButton || !chatSidebar || !chatClose) return;

  // Chat API configuration
  const API_URL = "https://chatnex.takiuddin.me/api/chat";
  const USER_ID = "3754a175-4c73-4e11-97cc-7d0238ef5b0d"; // Static user ID
  const API_KEY = "chatnex_sk_rnvuCjEhcybmsm393ZCLaasS0J4SvSBFz3lhNSQqgag";

  // State management
  let isChatOpen = false;
  let conversationId = null;
  let isLoading = false;

  // Open chat
  function openChat() {
    if (isChatOpen) return;

    isChatOpen = true;
    chatSidebar.classList.remove("translate-x-full");

    // Focus on input after animation
    setTimeout(() => {
      chatInput.focus();
    }, 300);
  }

  // Close chat
  function closeChat() {
    if (!isChatOpen) return;

    isChatOpen = false;
    chatSidebar.classList.add("translate-x-full");
  }

  // Add message to chat
  function addMessage(message, isUser = false) {
    const messageDiv = document.createElement("div");
    messageDiv.className = "flex gap-3";

    if (isUser) {
      messageDiv.classList.add("justify-end");
      messageDiv.innerHTML = `
        <div class="bg-accent text-accent-foreground p-3 rounded-lg rounded-tr-none max-w-xs">
          <p class="text-sm">${message}</p>
          <span class="text-xs opacity-70 mt-1 block">Just now</span>
        </div>
        <div class="bg-accent/20 p-2 rounded-full h-fit">
          <svg class="h-4 w-4 text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"/>
          </svg>
        </div>
      `;
    } else {
      messageDiv.innerHTML = `
        <div class="bg-accent p-2 rounded-full h-fit">
          <svg class="h-4 w-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
          </svg>
        </div>
        <div class="bg-muted p-3 rounded-lg rounded-tl-none max-w-xs">
          <p class="text-sm text-card-foreground">${message}</p>
          <span class="text-xs text-muted-foreground mt-1 block">Just now</span>
        </div>
      `;
    }

    chatMessages.appendChild(messageDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Add typing indicator
  function addTypingIndicator() {
    const typingDiv = document.createElement("div");
    typingDiv.className = "flex gap-3";
    typingDiv.id = "typing-indicator";
    typingDiv.innerHTML = `
      <div class="bg-accent p-2 rounded-full h-fit">
        <svg class="h-4 w-4 text-accent-foreground" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      </div>
      <div class="bg-muted p-3 rounded-lg rounded-tl-none">
        <div class="flex space-x-1">
          <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce"></div>
          <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0.1s"></div>
          <div class="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style="animation-delay: 0.2s"></div>
        </div>
      </div>
    `;

    chatMessages.appendChild(typingDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;
  }

  // Remove typing indicator
  function removeTypingIndicator() {
    const typingIndicator = document.getElementById("typing-indicator");
    if (typingIndicator) {
      typingIndicator.remove();
    }
  }

  // Send message to API
  async function sendMessageToAPI(question) {
    try {
      const payload = {
        question: question,
        userId: USER_ID,
      };

      // Add conversationId if exists
      if (conversationId) {
        payload.conversationId = conversationId;
      }

      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      // Update conversationId from response
      if (data.conversationId) {
        conversationId = data.conversationId;
      }

      return data.answer || "Sorry, I couldn't process your request right now.";
    } catch (error) {
      console.error("Error sending message:", error);
      return "Sorry, there was an error connecting to the server. Please try again.";
    }
  }

  // Send message
  async function sendMessage() {
    const message = chatInput.value.trim();
    if (!message || isLoading) return;

    // Set loading state
    isLoading = true;
    chatSend.disabled = true;

    // Add user message
    addMessage(message, true);
    chatInput.value = "";

    // Add typing indicator
    addTypingIndicator();

    try {
      // Send to API
      const response = await sendMessageToAPI(message);

      // Remove typing indicator
      removeTypingIndicator();

      // Add bot response
      addMessage(response, false);
    } catch (error) {
      // Remove typing indicator
      removeTypingIndicator();

      // Add error message
      addMessage("Sorry, there was an error. Please try again.", false);
    } finally {
      // Reset loading state
      isLoading = false;
      chatSend.disabled = false;
      chatInput.focus();
    }
  }

  // Event listeners
  chatButton.addEventListener("click", openChat);
  chatClose.addEventListener("click", closeChat);

  chatSend.addEventListener("click", sendMessage);

  chatInput.addEventListener("keypress", (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  });

  // ESC key to close chat
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && isChatOpen) {
      closeChat();
    }
  });
}
