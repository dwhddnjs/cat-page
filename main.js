const header = document.querySelector(".header");
const subBtn = document.querySelector(".subscribe-btn");
const modal = document.querySelector(".modal");
const removeModal = document.querySelector(".close-modal");
const input = document.querySelector(".email");

subBtn.addEventListener("click", openModal);
removeModal.addEventListener("click", closeModal);

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

window.onscroll = () => {
  let windowTop = window.scrollY;

  if (windowTop >= 900) {
    header.classList.add("drop");
  } else {
    header.classList.remove("drop");
  }
};
