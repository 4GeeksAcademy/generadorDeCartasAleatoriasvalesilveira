window.onload = function () {
    const palos = ["♦", "♥", "♠", "♣"];
    const valores = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

    const paloRandom = palos[Math.floor(Math.random() * palos.length)];
    const valorRandom = valores[Math.floor(Math.random() * valores.length)];

    let top = document.querySelector("#topSuit");
    let bottom = document.querySelector("#bottomSuit");
    let value = document.querySelector("#value");

    top.innerHTML = paloRandom;
    bottom.innerHTML = paloRandom;
    value.innerHTML = valorRandom;
 

    if (paloRandom === "♥" || paloRandom === "♦") {
        top.style.color = "red";
        bottom.style.color = "red";
        value.style.color = "red";
    }
};