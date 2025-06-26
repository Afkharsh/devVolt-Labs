
function toggleChatbot() {
    const bot = document.getElementById('chatbot-container');
    bot.style.display = bot.style.display === 'flex' ? 'none' : 'flex';
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        const input = document.getElementById('user-input');
        const body = document.getElementById('chatbot-body');
        const userMsg = input.value.trim();
        if (!userMsg) return;

        body.innerHTML += `<div class='user-msg'>${userMsg}</div>`;
        const reply = getBotReply(userMsg);
        body.innerHTML += `<div class='bot-msg'>${reply}</div>`;
        input.value = '';
        body.scrollTop = body.scrollHeight;
    }
}

function getBotReply(msg) {
    msg = msg.toLowerCase();
    if (msg.includes("founder")) return "Harsh is the founder of DevVolt Labs. Learn more: linktr.ee/Afkharshh";
    if (msg.includes("devvolt")) return "DevVolt Labs creates DIY electronics kits and projects to help you build, learn, and innovate.";
    if (msg.includes("support")) return "Reach out via support@devvoltlabs.online";
    if (msg.includes("buy") || msg.includes("kit")) return "Our kits will soon be available on Amazon & Flipkart!";
    return "Sorry, I didn't understand that. Try asking about DevVolt Labs, the founder, or kits.";
}
