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

  const inviteBtn = document.querySelector(".invite");
  const inviteModal = document.querySelector(".invite-modal");
  const inviteModalNone = document.querySelector(".inviteModalDisplayNone");

  inviteBtn.addEventListener("click", (e) => {
    inviteModal.classList.add("inviteModalDisplay");
  });

  inviteModalNone.addEventListener("click", (e) => {
    inviteModal.classList.remove("inviteModalDisplay");
  });

  // select option
  const selectElement = document.getElementById("colorSelect");

  selectElement.addEventListener("change", function () {
    const selectedOption = selectElement.options[selectElement.selectedIndex];
    selectElement.style.color = selectedOption.style.color;
  });

  selectElement.dispatchEvent(new Event("change"));

  // light - dark mode
  const modeIcon = document.querySelector(".mode-icon");

  modeIcon.addEventListener("click", function () {
    document.body.classList.toggle("light-mode");

    modeIcon.classList.toggle("fa-sun");
    modeIcon.classList.toggle("fa-moon");

    console.log(
      document.body.classList.contains("light-mode")
        ? "Light mode açıldı"
        : "Dark mode açıldı"
    );
  });

  // cookie modal display ucun kodlar
  const cookieOpen = document.querySelector(".cookie-open");
  const cookieModal = document.querySelector(".cookie-modal");
  const cookieClose = document.querySelector(".cookie-close");

  cookieOpen.addEventListener("click", () => {
    cookieModal.classList.add("cookieDisplay");
  });

  cookieClose.addEventListener("click", () => {
    cookieModal.classList.remove("cookieDisplay");
  });

  // cookie modal list ucun kodlar

  const manageList = document.querySelector(".manage-cookie-li");
  const syncList = document.querySelector(".sync-cookie-li");
  const cookieManage = document.querySelector(".cookie-manage");
  const cookieSync = document.querySelector(".cookie-sync");

  syncList.addEventListener("click", () => {
    manageList.classList.remove("selected-cookie");
    syncList.classList.add("selected-cookie");

    cookieManage.classList.toggle("manageDisplay");
    cookieSync.classList.toggle("syncDisplay");
  });

  manageList.addEventListener("click", () => {
    manageList.classList.add("selected-cookie");
    syncList.classList.remove("selected-cookie");

    cookieSync.classList.toggle("syncDisplay");
    cookieManage.classList.toggle("manageDisplay");
  });

  // share modal kodlari
  const shareToggle = document.querySelector(".share-toggle");
  const shareModal = document.querySelector(".share-modal");

  shareToggle.addEventListener("click", () => {
    shareModal.classList.toggle("d-none");
  });

  window.addEventListener("click", (e) => {
    if (!shareModal.contains(e.target) && e.target !== shareToggle) {
      shareModal.classList.add("d-none");
    }
  });

  // send submodal
  const sendSubModal = document.querySelector(".send-submodal");
  const sendSubModalToggle = document.querySelector(".sendSubModalToggle");

  sendSubModalToggle.addEventListener("click", () => {
    sendSubModal.classList.toggle("d-none");
  });

  window.addEventListener("click", (e) => {
    if (!sendSubModal.contains(e.target) && e.target !== sendSubModalToggle) {
      sendSubModal.classList.add("d-none");
    }
  });

  // saveAs submodal kodlari
  const saveAsToggle = document.querySelector(".saveAs");
  const saveAsSubModal = document.querySelector(".saveAs-submodal");

  saveAsToggle.addEventListener("click", () => {
    saveAsSubModal.classList.toggle("d-none");
  });

  window.addEventListener("click", (e) => {
    if (
      !saveAsSubModal.contains(e.target) &&
      !saveAsToggle.contains(e.target)
    ) {
      saveAsSubModal.classList.add("d-none");
    }
  });

  // addDesc
  const addDesc = document.querySelector(".addDesc");
  const addedDesc = document.querySelector(".addedDesc");

  addDesc.addEventListener("click", () => {
    addDesc.classList.toggle("d-none");
    addedDesc.classList.toggle("d-none");
  });

  // save ass cancel
  const saveasCancel = document.querySelector(".saveAsCancel");
  const saveasModal = document.querySelector(".saveAs-modal");
  const saveasOpen = document.querySelector(".saveAsOpen");

  saveasOpen.addEventListener("click", () => {
    saveasModal.classList.remove("d-none");
    saveAsSubModal.classList.toggle("d-none");
  });

  saveasCancel.addEventListener("click", () => {
    saveasModal.classList.add("d-none");
    addDesc.classList.toggle("d-none");
    addedDesc.classList.toggle("d-none");
  });

  // save as daxili funksionalliqlar
  const addNewCollection = document.querySelector(".addNewCollection");
  const addNewCollectionCancel = document.querySelector(
    ".addNewCollection-cancel"
  );
  const newCollectionSpan = document.querySelector(".newCollectionSpan");
  const newFolderSpan = document.querySelector(".newFolderSpan");

  newCollectionSpan.addEventListener("click", () => {
    addNewCollection.classList.toggle("d-none");
  });

  addNewCollectionCancel.addEventListener("click", () => {
    addNewCollection.classList.add("d-none");
  });

  const addNewCollectionCreate = document.querySelector(
    ".addNewCollection-create"
  );
  const addNewCollectionInput = document.querySelector(".addNewCollection-inp");
  const addNewCollectionList = document.querySelector(".addNewCollectionList");
  // sidebar
  const sidebarList = document.querySelector(".sidebarList");
  // new collection add etdikden sonra redirect etmek
  const saveasChangeablePart = document.querySelector(
    ".saveAs-changeable-part"
  );
  const selectCollectionFolder = document.querySelector(
    ".selectCollectionFolder"
  );
  const myWorkspace = document.querySelector(".myWorkspace");

  let collections = [];

  // addNewCollectionCreate.addEventListener("click", () => {
  //   if (addNewCollectionInput.value.trim() !== "") {
  //     collections.push(addNewCollectionInput.value)
  //     let newItem = document.createElement("li");
  //     newItem.innerHTML = `
  //       <i class="fa-brands fa-nfc-symbol"></i>
  //       <span>${addNewCollectionInput.value}</span>
  //     `;

  //     addNewCollectionList.appendChild(newItem);
  //     addNewCollectionInput.value = "";
  //     addNewCollection.classList.toggle("d-none");

  //     console.log(collections);

  //     let newSidebarLi
  //     collections.forEach((item) => {
  //       newSidebarLi= document.createElement("li")
  //       newSidebarLi.innerHTML = `
  //       <div>
  //           <i class="fa-solid fa-angle-right"></i>
  //           <span>${item}</span>
  //       </div>
  //       `
  //     })

  //     // sidebarList.appendChild(newSidebarLi)
  //     // newFolderSpan.classList.toggle('d-none')
  //     // newCollectionSpan.classList.toggle('d-none')
  //     // myWorkspace.classList.toggle('d-none')
  //     // selectCollectionFolder.classList.toggle('d-none')

  //   }
  // });

  // Yeni kolleksiya yaratmaq
  addNewCollectionCreate.addEventListener("click", () => {
    if (addNewCollectionInput.value.trim() !== "") {
      let collectionName = addNewCollectionInput.value.trim();
      collections.push(collectionName);

      let newItem = document.createElement("li");
      newItem.innerHTML = `
      <i class="fa-brands fa-nfc-symbol"></i>
      <span>${collectionName}</span>
    `;
      addNewCollectionList.appendChild(newItem);
      addNewCollectionInput.value = "";
      addNewCollection.classList.toggle("d-none");

      newFolderSpan.classList.toggle("d-none");
      newCollectionSpan.classList.toggle("d-none");
      myWorkspace.classList.remove("d-none");
      selectCollectionFolder.textContent = `/${collectionName}`;
      saveasChangeablePart.innerHTML = `<h6 style="color: white">${collectionName}</h6>`;

      // Sidebara yeni collceton elave etme
      let newSidebarLi = document.createElement("li");
      newSidebarLi.innerHTML = `
      <div>
          <i class="fa-solid fa-angle-right"></i>
          <span>${collectionName}</span>
      </div>
    `;
      sidebarList.appendChild(newSidebarLi);
    }
  });

  myWorkspace.addEventListener("click", () => {
    saveasChangeablePart.innerHTML = addNewCollectionList.outerHTML;
    selectCollectionFolder.textContent = "Select a collection/folder";
    myWorkspace.classList.add("d-none");
    newFolderSpan.classList.toggle("d-none");
    newCollectionSpan.classList.remove("d-none");

    newCollectionSpan.addEventListener("click", () => {
      console.log("clicklendi");
      addNewCollection.classList.toggle("d-flex");
      console.log("burani oxuyur");
    });

    console.log(saveasChangeablePart);
  });

  // Request table
  const tableBody = document.querySelector("tbody");
  const mainCheckbox = document.querySelector("thead .params-check");

  // function addNewRow() {
  //   const newRow = document.createElement("tr");
  //   newRow.innerHTML = `
  //   <td class="d-flex justify-content-center">
  //     <input type="checkbox" class="params-check" style="opacity: 0;">
  //   </td>
  //   <td>
  //     <input placeholder="Key" type="text" class="key-input" />
  //   </td>
  //   <td>
  //     <input placeholder="Value" type="text" class="key-input"/>
  //   </td>
  //   <td colspan="2">
  //     <input placeholder="Description" type="text" class="key-input"/>
  //   </td>
  // `;
  //   tableBody.appendChild(newRow);
  //   addEventToInputs(newRow);
  // }

  function addDeleteFunctionality(row) {
    const trashIcon = row.querySelector(".fa-trash-can");

    if (!trashIcon) return;

    row.addEventListener("mouseenter", () => {
      if (row !== tableBody.lastElementChild) {
        trashIcon.style.opacity = "1"; // Hover zamanı göstər
      }
    });

    row.addEventListener("mouseleave", () => {
      if (!row.querySelector(".key-input").value.trim()) {
        trashIcon.style.opacity = "0"; // Boşdursa gizlət
      }
    });

    trashIcon.addEventListener("click", () => {
      if (tableBody.children.length > 1 && row !== tableBody.lastElementChild) {
        row.remove();
        updateMainCheckbox();
      }
    });

    const inputs = row.querySelectorAll(".key-input");
    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
          trashIcon.style.opacity = "1"; // İlk input daxil edildikdə trash icon görünəcək

          if (row === tableBody.firstElementChild) {
            trashIcon.style.opacity = "1";
            trashIcon.classList.remove("opacity-0"); // İlk satırda opacity-0 sınıfını kaldır
          }
        } else {
          trashIcon.style.opacity = "0"; // Əgər input boşaldılarsa yenidən gizlət
        }
      });
    });
  }

  function addNewRow() {
    const newRow = document.createElement("tr");
    newRow.innerHTML = `
    <td class="d-flex justify-content-center">
      <input type="checkbox" class="params-check" style="opacity: 0;">
    </td>
    <td>
      <input placeholder="Key" type="text" class="key-input" />
    </td>
    <td>
      <input placeholder="Value" type="text" class="key-input"/>
    </td>
    <td colspan="2">
      <div class="d-flex align-items-center">
        <input placeholder="Description" type="text" class="key-input"/>
        <i class="fa-solid fa-trash-can" style="opacity: 0; cursor: pointer;"></i>
      </div>
    </td>
  `;
    tableBody.appendChild(newRow);
    addEventToInputs(newRow);
    addDeleteFunctionality(newRow);
  }

  // İlk sətirə də silmə funksiyası əlavə edirik
  document.querySelectorAll("tbody tr").forEach(addDeleteFunctionality);

  function addEventToInputs(row) {
    const inputs = row.querySelectorAll(".key-input");
    const checkbox = row.querySelector(".params-check");
    let isRowUpdated = false;

    inputs.forEach((input) => {
      input.addEventListener("input", () => {
        if (input.value.trim() !== "") {
          checkbox.style.opacity = 1;
          checkbox.checked = true;
          updateMainCheckbox();

          if (!isRowUpdated) {
            isRowUpdated = true;
            addNewRow();
          }
        }
      });
    });

    checkbox.addEventListener("change", updateMainCheckbox);
  }

  function updateMainCheckbox() {
    const allCheckboxes = document.querySelectorAll("tbody .params-check");
    const validCheckboxes = [...allCheckboxes].slice(0, -1);
    const allChecked =
      validCheckboxes.length > 0 &&
      validCheckboxes.every((checkbox) => checkbox.checked);

    mainCheckbox.checked = allChecked;
  }

  document.querySelectorAll("tbody tr").forEach((row) => {
    addEventToInputs(row);
  });

  // sortable.js
  new Sortable(document.getElementById("sortable-table"), {
    animation: 150, // Hərəkət effekti
    handle: "td.d-flex", // Sadəcə checkbox olan td üzərindən sürüşdürülə bilər
    ghostClass: "sortable-ghost",
  });

  // history funksionalliq
  const historyToggle = document.querySelector(".historyToggle");
  const historyModal = document.querySelector(".history-modal");

  historyToggle.addEventListener("click", (e) => {
    historyModal.classList.toggle("d-none");
  });

  window.addEventListener("click", (e) => {
    if (!historyModal.contains(e.target) && !historyToggle.contains(e.target)) {
      historyModal.classList.add("d-none");
    }
  });

  const requestSendInput = document.getElementById("exampleInputText");
  const requestSendBtn = document.querySelector(".request-send-btn");
  const historyModalEmpty = document.querySelector(".history-modal-empty");
  const historyModalSend = document.querySelector(".history-modal-send");
  const dateFromRequest = document.querySelector(".dateFromRequest");
  const now = new Date().toLocaleString("en-US", {
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  });

  requestSendBtn.addEventListener("click", () => {
    if (requestSendInput.value.trim()) {
      historyModalSend.classList.remove("d-none");
      historyModalEmpty.classList.add("d-none");

      dateFromRequest.innerHTML = `
    Today, <span>${now}</span>
    `;
    }
  });
});
