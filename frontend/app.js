// Dastarkhwan Assistant chat widget (mock replies only — no API calls yet)

const MOCK_REPLY = "Hi! I’m Dastarkhwan Assistant. My AI brain isn’t connected yet.";
const REPLY_DELAY_MS = 600;

const toggleButton = document.querySelector(".chat-toggle");
const chatWindow = document.querySelector(".chat-window");
const closeButton = document.querySelector(".chat-close");
const messages = document.querySelector(".chat-messages");
const form = document.querySelector(".chat-form");
const input = document.querySelector("#chat-input");

function setChatOpen(isOpen) {
  chatWindow.classList.toggle("is-open", isOpen);
  toggleButton.setAttribute("aria-expanded", String(isOpen));
  toggleButton.setAttribute("aria-label", isOpen ? "Close Dastarkhwan Assistant chat" : "Open Dastarkhwan Assistant chat");

  if (isOpen) {
    input.focus();
  } else {
    toggleButton.focus();
  }
}

function addMessage(text, sender) {
  const bubble = document.createElement("p");
  bubble.className = `chat-msg chat-msg--${sender}`;
  bubble.textContent = text;
  messages.append(bubble);
  messages.scrollTop = messages.scrollHeight;
}

toggleButton.addEventListener("click", () => {
  setChatOpen(!chatWindow.classList.contains("is-open"));
});

closeButton.addEventListener("click", () => setChatOpen(false));

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && chatWindow.classList.contains("is-open")) {
    setChatOpen(false);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) return;

  addMessage(text, "user");
  input.value = "";

  setTimeout(() => addMessage(MOCK_REPLY, "bot"), REPLY_DELAY_MS);
});
