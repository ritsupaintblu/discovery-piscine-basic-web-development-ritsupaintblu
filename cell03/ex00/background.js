function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
  }
  document
    .querySelector("button#changeColor")
    .addEventListener("click", function (event) {
      document.body.style.backgroundColor = getRandomColor();
    });
