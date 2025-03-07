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
  const footerHeader = document.querySelector('.postman__main__hero__bottom__left__footer__header')
  const mainHeroFooter = document.querySelector('.postman__main__hero__bottom__left__footer')


//   const footerToggleStyle = {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'space-between'
//   };

  icon.addEventListener("click", function () {
    if (footerHero.style.display === "none") {
      footerHero.style.display = "block";
      icon.classList.replace("fa-angle-up", "fa-angle-down");
      footerHeader.classList.remove('footerUpDown')
      mainHeroFooter.style.border = '0.5px solid rgba(63, 63, 63, 0.473)'
      
    } else {
        footerHero.style.display = "none";
        icon.classList.replace("fa-angle-down", "fa-angle-up");
        footerHeader.classList.add('footerUpDown')
        mainHeroFooter.style.border = 'none'
        footerHeader.style.borderTop = '0.5px solid rgba(63, 63, 63, 0.473)'
    }
  });





//   invite modal ucun kodlar

const inviteBtn = document.querySelector(".invite")
const inviteModal = document.querySelector('.invite-modal')
const inviteModalNone = document.querySelector('.inviteModalDisplayNone')

inviteBtn.addEventListener('click' , (e)=> {
    inviteModal.classList.add('inviteModalDisplay')   
});

inviteModalNone.addEventListener('click' , (e)=> {
    inviteModal.classList.remove('inviteModalDisplay')
})


// select option
const selectElement = document.getElementById("colorSelect");

  selectElement.addEventListener("change", function () {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectElement.style.color = selectedOption.style.color;
  });

  selectElement.dispatchEvent(new Event("change"));




// light - dark mode
const modeIcon = document.querySelector(".mode-icon")


modeIcon.addEventListener("click", function () {
  document.body.classList.toggle("light-mode");

  modeIcon.classList.toggle('fa-sun');
  modeIcon.classList.toggle('fa-moon');

  console.log(document.body.classList.contains("light-mode") ? 'Light mode açıldı' : 'Dark mode açıldı');
});


});
