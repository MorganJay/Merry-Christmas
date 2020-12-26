const main = document.querySelector("main");
const circle = document.querySelector(".circle");
const h2 = document.querySelector("h2");

function bubbles() {
  const count = 200;
  let i = 0;
  while (i < count) {
    let bubble = document.createElement("i");
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerHeight);

    let size = Math.random() * 10;
    bubble.style.left = `${x}px`;
    bubble.style.top = `${y}px`;
    bubble.style.width = `${size}px`;
    bubble.style.height = `${size}px`;
    bubble.style.animationDuration = `2${size}s`;
    bubble.style.animationDelay = `.${size}s`;

    main.appendChild(bubble);
    i++;
  }
}

bubbles();
main.addEventListener("click", () => {
  main.classList.toggle("redBackground");
  circle.classList.toggle("redCircle");
  h2.classList.toggle("white");
  document.querySelectorAll('i').forEach(bubble => bubble.classList.toggle("stars"));
});
