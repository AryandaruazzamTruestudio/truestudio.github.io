const API_KEY = "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"; // <--- Ganti dengan API key OpenAI kamu

const sendBtn = document.getElementById("send-btn");
const userInput = document.getElementById("user-input");
const chatBox = document.getElementById("chat-box");

sendBtn.addEventListener("click", sendMessage);

async function sendMessage() {
  const userText = userInput.value.trim();
  if (!userText) return;

  addMessage("user", userText);
  userInput.value = "";

  addMessage("ai", "Mengetik...");

  const response = await fetch("https://api.openai.com/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${API_KEY}`
    },
    body: JSON.stringify({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: userText }]
    })
  });

  const data = await response.json();
  const aiReply = data.choices?.[0]?.message?.content || "Maaf, terjadi kesalahan.";
  updateLastAIMessage(aiReply);
}

function addMessage(sender, text) {
  const msg = document.createElement("div");
  msg.classList.add("message", sender);
  msg.innerText = text;
  chatBox.appendChild(msg);
  chatBox.scrollTop = chatBox.scrollHeight;
}

function updateLastAIMessage(text) {
  const aiMsgs = document.querySelectorAll(".message.ai");
  if (aiMsgs.length > 0) {
    aiMsgs[aiMsgs.length - 1].innerText = text;
  }
}
