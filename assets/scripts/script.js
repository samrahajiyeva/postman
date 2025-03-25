$(function () {
  // Modal
  $(".search-btn").on("click", function () {
    $(".modal").addClass("m-display");
  });

  $(".modal-closer").on("click", function () {
    $(".modal").removeClass("m-display");
  });

  // Invite Modal
  $(".invite").on("click", function () {
    $(".invite-modal").addClass("inviteModalDisplay");
  });

  $(".inviteModalDisplayNone").on("click", function () {
    $(".invite-modal").removeClass("inviteModalDisplay");
  });

  // Select Option
  $("#colorSelect").on("change", function () {
    const selectedOption = $("#colorSelect option:selected");
    $(this).css("color", selectedOption.css("color"));
  });

  $("#colorSelect").trigger("change");

  // light - dark mode
  $(document).ready(function () {
    $(".mode-icon").on("click", function () {
      $("body").toggleClass("light-mode");

      $(this).toggleClass("fa-sun fa-moon");

      console.log(
        $("body").hasClass("light-mode")
          ? "Light mode açıldı"
          : "Dark mode açıldı"
      );
    });
  });

  // cookie modal display ucun kodlar
  $(document).ready(function () {
    $(".cookie-open").on("click", function () {
      $(".cookie-modal").addClass("cookieDisplay");
    });

    $(".cookie-close").on("click", function () {
      $(".cookie-modal").removeClass("cookieDisplay");
    });
  });

  // cookie modal list ucun kodlar
  $(".sync-cookie-li").on("click", function () {
    $(".manage-cookie-li").removeClass("selected-cookie");
    $(".sync-cookie-li").addClass("selected-cookie");

    $(".cookie-manage").toggleClass("manageDisplay");
    $(".cookie-sync").toggleClass("syncDisplay");
  });

  $(".manage-cookie-li").on("click", function () {
    $(".manage-cookie-li").addClass("selected-cookie");
    $(".sync-cookie-li").removeClass("selected-cookie");

    $(".cookie-sync").toggleClass("syncDisplay");
    $(".cookie-manage").toggleClass("manageDisplay");
  });

  // share modal kodlari
  $(".share-toggle").on("click", function () {
    $(".share-modal").toggleClass("d-none");
  });

  $(window).on("click", function (e) {
    if (!$(e.target).closest(".share-modal, .share-toggle").length) {
      $(".share-modal").addClass("d-none");
    }
  });

  //send submodal
  $(".sendSubModalToggle").on("click", function () {
    $(".send-submodal").toggleClass("d-none");
  });

  $(window).on("click", function (e) {
    if (!$(e.target).closest(".send-submodal, .sendSubModalToggle").length) {
      $(".send-submodal").addClass("d-none");
    }
  });

  // saveAs submodal kodlari
  $(".saveAs").on("click", function () {
    $(".saveAs-submodal").toggleClass("d-none");
  });

  $(window).on("click", function (e) {
    if (!$(e.target).closest(".saveAs-submodal, .saveAs").length) {
      $(".saveAs-submodal").addClass("d-none");
    }
  });

  //desc kodlari
  $(".addDesc").on("click", function () {
    $(this).toggleClass("d-none");
    $(".addedDesc").toggleClass("d-none");
  });

  // save as cancel
  $(".saveAsOpen").on("click", function () {
    $(".saveAs-modal").removeClass("d-none");
    $(".saveAs-submodal").toggleClass("d-none");
  });

  $(".saveAsCancel").on("click", function () {
    $(".saveAs-modal").addClass("d-none");
    $(".addDesc").removeClass("d-none");
    $(".addedDesc").addClass("d-none");
  });

  // save as daxili funksionalliqlar
  const $addNewCollection = $(".addNewCollection");
  const $addNewCollectionCancel = $(".addNewCollection-cancel");
  const $newCollectionSpan = $(".newCollectionSpan");

  $newCollectionSpan.on("click", function () {
    $addNewCollection.toggleClass("d-none");
  });

  $addNewCollectionCancel.on("click", function () {
    $addNewCollection.addClass("d-none");
  });

  const $addNewCollectionCreate = $(".addNewCollection-create");
  const $addNewCollectionInput = $(".addNewCollection-inp");
  const $addNewCollectionList = $(".addNewCollectionList");
  const $addNewFolderList = $(".addNewFolderList");
  const $addNewFolder = $(".addNewFolder");
  const $emptyItem = $(".emptyItem");
  const $addNewFolderCreate = $(".addNewFolder-create");
  const $addNewFolderCancel = $(".addNewFolder-cancel");
  const $addednewFoldersZone = $(".addednewFoldersZone");
  const $newFolderSpan = $(".newFolderSpan");

  const $sidebarList = $(".sidebarList");
  const $saveasChangeablePart = $(".saveAs-changeable-part");
  const $selectCollectionFolder = $(".selectCollectionFolder");
  const $myWorkspace = $(".myWorkspace");

  let collections = [
    {
      collection: "Collation",
      folder: [],
    },
  ];

  $addNewCollectionCreate.on("click", function () {
    const collectionName = $addNewCollectionInput.val().trim();
    if (collectionName) {
      collections.push({
        collection: collectionName,
        folder: [],
      });

      const newItem = $("<li>").html(`
          <i class="fa-brands fa-nfc-symbol"></i>
          <span>${collectionName}</span>
        `);
      $addNewCollectionList.append(newItem);
      $addNewCollectionInput.val("");
      $(".addNewCollection").toggleClass("d-none");

      $newFolderSpan.toggleClass("d-none");
      $(".newCollectionSpan").toggleClass("d-none");
      $myWorkspace.removeClass("d-none");
      $selectCollectionFolder.text(`/${collectionName}`);
      $addNewFolderList.removeClass("d-none");
      $addNewCollectionList.addClass("d-none");

      const newSidebarLi = $("<li>").html(`
          <div>
            <i class="fa-solid fa-angle-right"></i>
            <span>${collectionName}</span>
          </div>
        `);
      $sidebarList.append(newSidebarLi);
    }

    console.log(collections);
  });

  $newFolderSpan.on("click", function () {
    $addNewFolder.removeClass("d-none");
    $emptyItem.addClass("d-none");
  });

  $myWorkspace.on("click", function () {
    $selectCollectionFolder.text("Select a collection/folder");
    $addNewFolderList.addClass("d-none");
    $addNewCollectionList.removeClass("d-none");
    $myWorkspace.addClass("d-none");
    $newFolderSpan.toggleClass("d-none");
    $(".newCollectionSpan").removeClass("d-none");
    $emptyItem.removeClass("d-none");
    $addNewFolder.addClass("d-none");
    $addednewFoldersZone.empty();
  });

  $addNewFolderCancel.on("click", function () {
    $addNewFolder.addClass("d-none");
  });

  let folderName = "";

  $addNewFolderCreate.on("click", function () {
    folderName = $(".addNewFolder-inp").val().trim();

    if (folderName && collections.length > 0) {
      const collectionName = $selectCollectionFolder.text().trim().substring(1);
      const selectedCollection = collections.find(
        (collection) => collection.collection === collectionName
      );

      if (selectedCollection) {
        selectedCollection.folder.push(folderName);

        const newFolderItem = $("<li>").html(`
            <i class="fa-brands fa-nfc-symbol"></i>
            <span>${folderName}</span>
          `);
        $addednewFoldersZone.append(newFolderItem);
        console.log(selectedCollection);
      }

      $(".addNewFolder-inp").val("");
      $addNewFolder.addClass("d-none");

      console.log("Updated Collections:", collections);
    }
  });

  // history funksionalliq
  $(document).ready(function () {
    const $historyToggle = $(".historyToggle");
    const $historyModal = $(".history-modal");

    $historyToggle.on("click", function () {
      $historyModal.toggleClass("d-none");
    });

    $(window).on("click", function (e) {
      if (
        !$(e.target).closest($historyModal).length &&
        !$(e.target).closest($historyToggle).length
      ) {
        $historyModal.addClass("d-none");
      }
    });

    const $requestSendInput = $("#exampleInputText");
    const $requestSendBtn = $(".request-send-btn");
    const $historyModalEmpty = $(".history-modal-empty");
    const $historyModalSend = $(".history-modal-send");
    const $dateFromRequest = $(".dateFromRequest");

    const now = new Date().toLocaleString("en-US", {
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    });

    $requestSendBtn.on("click", function () {
      if ($requestSendInput.val().trim()) {
        $historyModalSend.removeClass("d-none");
        $historyModalEmpty.addClass("d-none");

        $dateFromRequest.html(`
           Today, <span>${now}</span>
        `);
      }

      $requestSendInput.val("");
    });
  });

  //request table
  const $tableBody = $("tbody");
  const $mainCheckbox = $("thead .params-check");

  function addDeleteFunctionality($row) {
    const $trashIcon = $row.find(".fa-trash-can");

    if ($trashIcon.length === 0) return;

    $row.on("mouseenter", function () {
      if ($row[0] !== $tableBody.children().last()[0]) {
        $trashIcon.css("opacity", "1");
      }
    });

    $row.on("mouseleave", function () {
      if ($row.find(".key-input").val().trim() === "") {
        $trashIcon.css("opacity", "0");
      }
    });

    $trashIcon.on("click", function () {
      if (
        $tableBody.children().length > 1 &&
        $row[0] !== $tableBody.children().last()[0]
      ) {
        $row.remove();
        updateMainCheckbox();
      }
    });

    const $inputs = $row.find(".key-input");
    $inputs.on("input", function () {
      if ($(this).val().trim() !== "") {
        $trashIcon.css("opacity", "1");

        if ($row[0] === $tableBody.children().first()[0]) {
          $trashIcon.removeClass("opacity-0");
        }
      } else {
        $trashIcon.css("opacity", "0");
      }
    });
  }

  function addNewRow() {
    const $newRow = $(`
      <tr>
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
            <i class="fa-solid fa-trash-can text-light" style="opacity: 0; cursor: pointer;"></i>
          </div>
        </td>
      </tr>
    `);

    $tableBody.append($newRow);
    addEventToInputs($newRow);
    addDeleteFunctionality($newRow);
  }

  $("tbody tr").each(function () {
    addDeleteFunctionality($(this));
  });

  function addEventToInputs($row) {
    const $inputs = $row.find(".key-input");
    const $checkbox = $row.find(".params-check");
    let isRowUpdated = false;

    $inputs.on("input", function () {
      if ($(this).val().trim() !== "") {
        $checkbox.css("opacity", 1);
        $checkbox.prop("checked", true);
        updateMainCheckbox();

        if (!isRowUpdated) {
          isRowUpdated = true;
          addNewRow();
        }
      }
    });

    $checkbox.on("change", updateMainCheckbox);
  }

  function updateMainCheckbox() {
    const $allCheckboxes = $("tbody .params-check");
    const $validCheckboxes = $allCheckboxes.slice(0, -1);
    const allChecked =
      $validCheckboxes.length > 0 &&
      $validCheckboxes.toArray().every((checkbox) => checkbox.checked);

    $mainCheckbox.prop("checked", allChecked);
  }

  $("tbody tr").each(function () {
    addEventToInputs($(this));
  });

  const $firstRow = $("tbody tr:first-child");

  if ($firstRow.length) {
    $firstRow.find(".key-input").val("");
    $firstRow.find(".params-check").prop("checked", false);
  }

  // sortable.js
  new Sortable(document.getElementById("sortable-table"), {
    animation: 150, // Hərəkət effekti
    handle: "td.d-flex", // Sadəcə checkbox olan td üzərindən sürüşdürülə bilər
    ghostClass: "sortable-ghost",
  });

  // tooltips

  [
    "documentation",
    "comments",
    "code",
    "related-requests",
    "info",
    "variables-request",
  ].forEach((className) => {
    $(`.${className}`).tooltip({
      title: className
        .replace("-", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      placement: "left",
      fallbackPlacement: [],
    });
  });

  $(".configureWorkspace").tooltip({
    title: "Configure workspace sidebar",
    placement: "right",
    fallbackPlacement: [],
  });

  [
    "searchTabs",
    "settings",
    "notifications",
    "manageAccounts",
    "saveRequest",
    "shareRequest",
    "Ctrl+",
  ].forEach((className) => {
    $(`.${className}`).tooltip({
      title: className
        .replace("-", " ")
        .replace(/\b\w/g, (c) => c.toUpperCase()),
      placement: "bottom",
      fallbackPlacement: [],
    });
  });

  // Environment modal açıb-bağlama
  $(".middle-side").on("click", function (event) {
    event.stopPropagation();
    $(".environment-modal").toggleClass("d-none");
  });

  $(".environment-modal").on("click", function (event) {
    event.stopPropagation();
  });

  $(document).on("click", function () {
    $(".environment-modal").addClass("d-none");
  });

  // Yeni environment əlavə etmək
  $(
    ".environment-modal__empty button, .environment-search button, .createEnvironment, .add-new-environment"
  ).on("click", function () {
    $(".environment-modal__empty").addClass("d-none");
    $(".environment-modal__list").removeClass("d-none");

    $(".sidebar-no-environment").addClass("d-none");
    $(".sidebar-new-environment").removeClass("d-none");

    createNewEnvironment();
  });
  // Axtarış filteri
  $(".environment-search input").on("keyup", function () {
    let searchText = $(this).val().toLowerCase();
    let found = false;

    $(".environment-modal__list ul li.no-environments").remove();

    $(".environment-modal__list ul li").each(function () {
      let itemText = $(this).text().toLowerCase();
      if (itemText.includes(searchText)) {
        $(this).show();
        found = true;
      } else {
        $(this).hide();
      }
    });

    if (!found && searchText !== "") {
      $(".environment-modal__list ul").append(`
      <li class="no-environments text-center">
        <span style="color: var(--baseTextColor)">No environments found</span>
      </li>
    `);
    }
  });

  // Collection və environment arasında keçid
  $(".collection").on("click", () => {
    $(".sidebar-collections").removeClass("d-none");
    $(".sidebar-environments").addClass("d-none");
    $(".sidebar-three-dots").removeClass("d-none");
    $(".collection").addClass("active-tab");
    $(".environment").removeClass("active-tab");
  });

  $(".environment").on("click", () => {
    $(".sidebar-collections").addClass("d-none");
    $(".sidebar-environments").removeClass("d-none");
    $(".sidebar-three-dots").addClass("d-none");
    $(".collection").removeClass("active-tab");
    $(".environment").addClass("active-tab");
  });

  // Yeni environment seçildikdə span dəyişməsi
  $(".sidebar-new-environment-ul").on("click", "li", function () {
    $(".sidebar-new-environment-ul li").removeClass("active");
    $(this).addClass("active");
  });

  // Əsas funksiyalar aktiv edilsin
  syncEnvironmentSelection();

  // sidebar acma qapama

  $(".sidebarToggle").on("click", () => {
    sidebarToggler();
  });

  $(document).on("click", ".sidebarLockToggle", function () {
    sidebarToggler();
  });


  //update modali
  $(document).on("click", ".fa-ellipsis", function (event) {
    event.stopPropagation(); // Digər klik eventlərinin qarşısını almaq üçün
    let container = $(this).siblings(".updateEnvironmentContainer");
  
    // Bütün digər açıq olanları bağla
    $(".updateEnvironmentContainer").not(container).addClass("d-none");
  
    // Mövcud konteynerin görünürlüğünü dəyiş
    container.toggleClass("d-none");
  });
  
  // Səhifədə başqa yerə klik edildikdə modalın bağlanması üçün
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".updateEnvironmentContainer, .fa-ellipsis").length) {
      $(".updateEnvironmentContainer").addClass("d-none");
    }
  });
  
});

//functions

// Environment seçim sinxronizasiyası
const syncEnvironmentSelection = () => {
  $(".environment-modal__list ul, .sidebar-new-environment-ul").on(
    "click",
    "li",
    function () {
      let envID = $(this).attr("data-id");

      // Active class'ı yalnız seçilən environment üçün əlavə et
      $(
        ".environment-modal__list ul li, .sidebar-new-environment-ul li"
      ).removeClass("active");
      $(`.environment-modal__list ul li[data-id="${envID}"]`).addClass(
        "active"
      );
      $(`.sidebar-new-environment-ul li[data-id="${envID}"]`).addClass(
        "active"
      );

      // Seçilən environment adını yenilə
      let selectedText = $(this).find("span").text();
      $(".middle-side .change-check").html(`
      <span class="ms-1 me-4">${selectedText}</span>
      <i class="fa-solid fa-angle-down"></i>
    `);
    }
  );
};

// Yeni environment yaratma funksiyası
const createNewEnvironment = (envName = "New Environment") => {
  let envID = "env_" + new Date().getTime();

  let newEnvironment = `
    <li data-id="${envID}">
      <i class="fa-solid fa-check opacity-0"></i>
      <span>${envName}</span>
    </li>
  `;

  let newSidebarEnv = `
    <li class="active" data-id="${envID}">
      <div class="d-flex justify-content-between">
          <span>${envName}</span>
          <div class="sidebar-new-environment-icons">
            <i class="fa-solid fa-circle-check me-1 selectedEnvironment"></i>
            <i class="fa-solid fa-ellipsis"></i>
            <div class="updateEnvironmentContainer d-none">
                                  <div class="updateEnvironment">
                                    <ul class="text-start">
                                      <li>Rename</li>
                                      <li>Delete</li>
                                    </ul>
                                  </div>
                                </div>
          </div>
      </div>
    </li>
  `;

  $(".environment-modal__list ul").append(newEnvironment);
  $(".sidebar-new-environment-ul").append(newSidebarEnv);

  // Active olanları sinxronlaşdır
  $(
    ".environment-modal__list ul li, .sidebar-new-environment-ul li"
  ).removeClass("active");
  $(`.environment-modal__list ul li[data-id="${envID}"]`).addClass("active");
  $(`.sidebar-new-environment-ul li[data-id="${envID}"]`).addClass("active");

  syncEnvironmentSelection();
};

function sidebarToggler() {
  $(".postman__main__sidebar__top").toggleClass("d-none");
  const lockItem = $(
    ".postman__main__sidebar__bottom__left ul li:first-child i.fa-lock"
  );

  if (lockItem.length) {
    lockItem.parent().remove();
  } else {
    $(".postman__main__sidebar__bottom__left ul").prepend(`
      <li class='sidebarLockToggle'><i class="fa-solid fa-lock"></i></li>
    `);
  }

  $(".postman__main__sidebar__bottom").toggleClass("sidebar-collapsed");

  let parentDiv = $(".postman__main__sidebar").parent();
  let parentDivofMain = $(".postman__main__hero").parent();

  if (parentDiv.hasClass("col-3")) {
    parentDiv.removeClass("col-3").addClass("col-1");
    $(".postman__main__sidebar__bottom__right").addClass("d-none");
    $(".postman__main__sidebar__bottom__left")
      .removeClass("col-3")
      .addClass("col-12");
    parentDivofMain.removeClass("col-9").addClass("col-11");
  } else {
    parentDiv.removeClass("col-1").addClass("col-3");
    $(".postman__main__sidebar__bottom__right").removeClass("d-none");
    $(".postman__main__sidebar__bottom__left")
      .removeClass("col-12")
      .addClass("col-3");
    parentDivofMain.removeClass("col-11").addClass("col-9");
  }
}

