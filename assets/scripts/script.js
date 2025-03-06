//  BISMILLAH

document.addEventListener("DOMContentLoaded", function () {
  // Modal ucun kodlar
  const searchBtn = document.querySelector(".search-btn");
  const modal = document.querySelector(".modal");
  const modalCloser = document.querySelector(".modal-closer");

  searchBtn.addEventListener("click", (e) => {
    modal.classList.add("m-display");
  });

  modalCloser.addEventListener("click", (e) => {
    modal.classList.remove("m-display");
  });

  //hero footer ucun kodlar
  const icon = document.querySelector(".hero-footer-toggle");
  const footerHero = document.querySelector(
    ".postman__main__hero__bottom__left__footer__hero"
  );

  icon.addEventListener("click", function () {
    if (footerHero.style.display === "none") {
      footerHero.style.display = "block";
      icon.classList.replace("fa-angle-up", "fa-angle-down");
    } else {
      footerHero.style.display = "none";
      icon.classList.replace("fa-angle-down", "fa-angle-up");
    }
  });
});
