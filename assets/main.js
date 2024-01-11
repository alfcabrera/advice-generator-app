const adviceIdEl = document.querySelector("#advice-id");
const adviceTextEl = document.querySelector("#advice-content");
const rollTheDiceBtn = document.querySelector("#roll");
const url = "https://api.adviceslip.com/advice";

fetch(url, { cache: "no-cache" })
    .then((response) => response.json())
    .then((data) => {
        adviceIdEl.innerHTML = `Advice #${data.slip.id}`;
        adviceTextEl.innerHTML = data.slip.advice;
    });

rollTheDiceBtn.addEventListener("click", function (e) {
    fetch(url, { cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => {
            adviceIdEl.innerHTML = `Advice #${data.slip.id}`;
            adviceTextEl.innerHTML = data.slip.advice;
        });
});
