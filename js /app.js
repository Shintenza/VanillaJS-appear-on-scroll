function appear() {
  for (let i = 1; i <= 2; i++) {
    const handler = document.querySelector(".textContent" + i);
    let topDistance = handler.getBoundingClientRect().top;
    let monitorHeight = window.innerHeight / 1.2;
    if (topDistance < monitorHeight) {
      handler.classList.add("textContentReplace");
    }
  }

  return [monitorHeight, topDistance];
}
document.addEventListener("scroll", appear);
console.log(appear());
