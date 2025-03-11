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
//   const icon = document.querySelector(".hero-footer-toggle");
//   const footerHero = document.querySelector(
//     ".postman__main__hero__bottom__left__footer__hero"
//   );
//   const footerHeader = document.querySelector('.postman__main__hero__bottom__left__footer__header')
//   const mainHeroFooter = document.querySelector('.postman__main__hero__bottom__left__footer')


// //   const footerToggleStyle = {
// //     display: 'flex',
// //     alignItems: 'center',
// //     justifyContent: 'space-between'
// //   };

//   icon.addEventListener("click", function () {
//     if (footerHero.style.display === "none") {
//       footerHero.style.display = "block";
//       icon.classList.replace("fa-angle-up", "fa-angle-down");
//       footerHeader.classList.remove('footerUpDown')
//       mainHeroFooter.style.border = '0.5px solid rgba(63, 63, 63, 0.473)'
      
//     } else {
//         footerHero.style.display = "none";
//         icon.classList.replace("fa-angle-down", "fa-angle-up");
//         footerHeader.classList.add('footerUpDown')
//         mainHeroFooter.style.border = 'none'
//         footerHeader.style.borderTop = '0.5px solid rgba(63, 63, 63, 0.473)'
//     }
//   });





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


// cookie modal display ucun kodlar
const cookieOpen = document.querySelector('.cookie-open')
const cookieModal = document.querySelector('.cookie-modal')
const cookieClose = document.querySelector('.cookie-close')


cookieOpen.addEventListener('click' , ()=> {
  cookieModal.classList.add('cookieDisplay')
  
})

cookieClose.addEventListener('click' , ()=> {
  cookieModal.classList.remove('cookieDisplay')
})

// cookie modal list ucun kodlar

const manageList = document.querySelector('.manage-cookie-li')
const syncList = document.querySelector('.sync-cookie-li')
const cookieManage = document.querySelector('.cookie-manage')
const cookieSync = document.querySelector('.cookie-sync')

syncList.addEventListener('click', () => {
  manageList.classList.remove('selected-cookie');
  syncList.classList.add('selected-cookie');
  
  cookieManage.classList.toggle('manageDisplay');
  cookieSync.classList.toggle('syncDisplay');
});

manageList.addEventListener('click', () => {
  manageList.classList.add('selected-cookie');
  syncList.classList.remove('selected-cookie');

  cookieSync.classList.toggle('syncDisplay');
  cookieManage.classList.toggle('manageDisplay');
});

// share modal kodlari
const shareToggle = document.querySelector('.share-toggle')
const shareModal = document.querySelector('.share-modal')

shareToggle.addEventListener('click' , ()=> {
  shareModal.classList.toggle('d-none')  
})

// saveAs submodal kodlari
const saveAsToggle = document.querySelector('.saveAs')
const saveAsSubModal = document.querySelector('.saveAs-submodal')

saveAsToggle.addEventListener('click' , ()=> {
  saveAsSubModal.classList.toggle('d-none')
})

// addDesc
const addDesc = document.querySelector('.addDesc')
const addedDesc = document.querySelector('.addedDesc')

addDesc.addEventListener('click' , ()=> {
  addDesc.classList.toggle('d-none')
  addedDesc.classList.toggle('d-none')
})

// save ass cancel
const saveasCancel = document.querySelector('.saveAsCancel')
const saveasModal = document.querySelector('.saveAs-modal')
const saveasOpen = document.querySelector('.saveAsOpen')

saveasOpen.addEventListener('click' ,()=> {
  saveasModal.classList.remove('d-none')
  saveAsSubModal.classList.toggle('d-none')
  
})

saveasCancel.addEventListener('click' , ()=> {
  saveasModal.classList.add('d-none')
  addDesc.classList.toggle('d-none')
  addedDesc.classList.toggle('d-none')
})

// send submodal
const sendSubModal = document.querySelector('.send-submodal')
const sendSubModalToggle = document.querySelector('.sendSubModalToggle')

sendSubModalToggle.addEventListener('click' , ()=>{
  sendSubModal.classList.toggle('d-none')
})


});

