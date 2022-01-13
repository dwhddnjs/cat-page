let header = document.querySelector(".header");

window.onscroll = () => {
  let windowTop = window.scrollY;

  if (windowTop >= 900) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};
