console.log("client side javascript file is loaded.");

const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const msg1 = document.getElementById("msg-1");
const msg2 = document.getElementById("msg-2");

weatherForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const location = input.value;
  msg1.textContent = "Loading...";
  msg2.textContent = "";
  const url = "/weather?address=" + location;
  fetch(url).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        msg1.textContent = data.error;
      } else {
        msg1.textContent = data.location;
        msg2.textContent = data.forecast;
      }
    });
  });
});
