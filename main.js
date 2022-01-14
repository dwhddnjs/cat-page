const header = document.querySelector(".header");
const subBtn = document.querySelector(".subscribe-btn");
const modal = document.querySelector(".modal");
const closeModal = document.querySelector(".close-modal");

subBtn.addEventListener("click", openModal);
closeModal.addEventListener("click", removeModal);
modal.addEventListener("focusout", removeModal);
// modal
function openModal() {
  const input = document.querySelector(".email");

  if (input.value.length === 0) {
    alert("이메일 작성해주세요");
    modal.style.display = "none";
    return;
  }
  if (input.value.length < 11 || !input.value.includes("@")) {
    alert("이메일을 잘못 입력하셨습니다");
  } else {
    modal.style.display = "flex";
  }
}

function removeModal() {
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
