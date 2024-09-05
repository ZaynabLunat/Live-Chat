const connection = new WebSocket("https://web-socket-server-01zs.onrender.com");
// const connection = new WebSocket("ws://localhost:8080");
const form = document.querySelector("form");
const messages = document.querySelector(".messages");
const userCount = document.querySelector(".count");

connection.onopen = (event) => {
  console.log("WebSocket is open now.");
};

connection.onclose = (event) => {
  console.log("WebSocket is closed now.");
};

connection.onerror = (event) => {
  console.error("WebSocket error observed:", event);
};

function addMessage(user, message) {
  const newMsg = document.createElement("p");
  newMsg.textContent = `${user} says ${message}`;
  messages.appendChild(newMsg);
}

function updateCount(count) {
  userCount.textContent = `Live users: ${count}`;
}

connection.onmessage = async (event) => {
  if (isNaN(event.data)) {
    let payload = JSON.parse(await event.data.text());
    addMessage(payload.user, payload.message);
    console.log("NAN");
  } else {
    let payload = JSON.parse(await event.data);
    console.log("There is " + parseInt(payload) + " user");
    updateCount(parseInt(payload));
  }
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const payload = JSON.stringify({
    user: e.target.user.value,
    message: e.target.message.value,
  });
  connection.send(payload);
  form.reset();
});
