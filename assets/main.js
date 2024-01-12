const adviceIdEl = document.querySelector("#advice-id");
const adviceTextEl = document.querySelector("#advice-content");
const rollTheDiceBtn = document.querySelector("#roll");
const URL = "https://api.adviceslip.com/advice";

function rollTheDice() {
    fetch(URL, { cache: "no-cache" })
        .then((response) => response.json())
        .then((data) => {
            adviceIdEl.innerHTML = `Advice #${data.slip.id}`;
            adviceTextEl.innerHTML = data.slip.advice;
        })
        .catch((err) => console.error(err));
}

rollTheDiceBtn.addEventListener("click", rollTheDice);
