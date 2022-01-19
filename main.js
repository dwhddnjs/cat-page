const header = document.querySelector(".header");
const subBtn = document.querySelector(".subscribe-btn");
const modal = document.querySelector(".modal");
const removeModal = document.querySelector(".close-modal");
const input = document.querySelector(".email");
const menu = document.querySelector(".menu");
const pages = document.querySelector(".rendering-page");
const navbody = document.querySelector(".nav-body");

subBtn.addEventListener("click", openModal);
removeModal.addEventListener("click", closeModal);
menu.addEventListener("click", openNav);

function openModal() {
  if (input.value.length === 0) {
    alert("이메일 작성해주세요");
    return;
  }
  if (input.value.length < 11 || !input.value.includes("@")) {
    alert("이메일을 잘못 입력하셨습니다");
    input.value = "";
  } else {
    modal.style.display = "flex";
    input.value = "";
  }
}

function closeModal() {
  modal.style.display = "none";
}

function openNav() {
  pages.style.display = "none";
  navbody.style.display = "block";
  const arrow = document.querySelector(".nav-arrow");
  arrow.addEventListener("click", () => {
    navbody.style.display = "none";
    pages.style.display = "block";
  });
  const navUl = document.querySelector(".nav-ul");
  navUl.childNodes.forEach((el) => {
    el.addEventListener("click", () => {
      pages.style.display = "block";
      navbody.style.display = "none";
    });
  });
}

window.onscroll = () => {
  let windowTop = window.scrollY;

  if (windowTop >= 820) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};
