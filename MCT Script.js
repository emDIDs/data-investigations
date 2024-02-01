const myRocket = document.querySelectorAll("#my-rocket")[0];
const imgList = document.querySelectorAll("img");
const rocketSize = document.querySelectorAll("#not-yet")[0].offsetHeight;
console.log(rocketSize);

let moveCount = 0;
imgList.forEach((element) => {
  element.addEventListener("click", (clicked) => {
    switch (clicked.target.getAttribute("id")) {
      case "not-yet": {
        moveCount = 0;
        break;
      }
      case "getting-there": {
        moveCount = 1;
        break;
      }
      case "got-it": {
        moveCount = 2;
        break;
      }
    }
  });
});
myRocket.style.transform = `rotate(-45deg); translateY(${
  moveCount * rocketSize
}px)`;
myRocket.style.transition = "0.4s cubic-bezier(0.65, 0, 0.35, 1)";
