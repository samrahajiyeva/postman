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

  // environment modal
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

  $(".environment-modal__empty button").on("click", function () {
    $(".environment-modal__empty").addClass("d-none");
    $(".environment-modal__list").removeClass("d-none");

    $(
      ".middle-side .change-check"
    ).html(` <span class="ms-1 me-4">New environment</span>
                          <i class="fa-solid fa-angle-down"></i>`);

    // sidebar collectiona yeni env elave etme
    $(".sidebar-no-environment").addClass("d-none");
    $(".sidebar-new-environment").removeClass("d-none");

    createNewEnvironment();
    createNewSidebarEnv();
  });

  // Search input filter
  $(".environment-search input").on("keyup", function () {
    let searchText = $(this).val().toLowerCase();
    let found = false; // Mətnin uyğun gəlib-gəlmədiyini izləyirik

    // Əvvəlcə "No environments found" mesajını gizlət
    $(".environment-modal__list ul li.no-environments").remove();

    $(".environment-modal__list ul li").each(function () {
      let itemText = $(this).text().toLowerCase();

      if (itemText.includes(searchText)) {
        $(this).show(); // Uyğun gələn li elementlərini göstəririk
        found = true;
      } else {
        $(this).hide(); // Uyğun gəlməyənləri gizləyirik
      }
    });

    // Əgər heç bir li uyğun gəlmirsə, "No environments found" mesajını əlavə et
    if (!found && searchText !== "") {
      let noResults = `<li class="no-environments text-center"><span style="color: var(--baseTextColor)
    ">No environments found</span></li>`;
      $(".environment-modal__list ul").append(noResults);
    }
  });

  // "+" (plus) ikonuna klik edildikdə yeni environment əlavə etmək
  $(".environment-search button").on("click", function () {
    createNewEnvironment();
    createNewSidebarEnv();
  });

  // Hər hansı bir <li> klik edildikdə yalnız həmin <li> içindəki fa-check görünsün

  $(".environment-modal__list ul").on("click", "li", function () {
    // Bütün li elementlərindəki fa-check ikonlarını gizlət
    $(".environment-modal__list ul li i.fa-check").addClass("opacity-0");

    // Seçilən <li> içindəki fa-check ikonunu gosterme
    $(this).find("i.fa-check").removeClass("opacity-0");

    // Seçilən li içindəki yazıya görə span-ı dəyişdiririk
    let selectedText = $(this).find("span").text();
    if (selectedText === "No Environment") {
      $(".middle-side .change-check").html(` 
        <i class="fa-regular fa-note-sticky"></i>
        <span class="ms-1 me-4">No environment</span>
        <i class="fa-solid fa-angle-down"></i>`);
    } else if (selectedText === "New Environment") {
      $(".middle-side .change-check")
        .html(` <span class="ms-1 me-4">New environment</span>
        <i class="fa-solid fa-angle-down"></i>`);
    }
  });

  // kecid etme collection ve environment tab arasinda
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

    $(".add-new-environment").on("click", function () {
      $(".sidebar-no-environment").addClass("d-none");
      $(".sidebar-new-environment").removeClass("d-none");

      createNewSidebarEnv();

      // environment modala yeni environment elave etmek
      $(".environment-modal__empty").addClass("d-none");
      $(".environment-modal__list").removeClass("d-none");
      createNewEnvironment();

      //fa check eden zaman environment modal span deyismesi
      $(".selectedEnvironment").on("click", function () {
        $(
          ".middle-side .change-check"
        ).html(` <span class="ms-1 me-4">New environment</span>
                            <i class="fa-solid fa-angle-down"></i>`);
      });
    });

    $(".createEnvironment").on("click", () => {
      $(".sidebar-no-environment").addClass("d-none");
      $(".sidebar-new-environment").removeClass("d-none");

      createNewSidebarEnv();

      // environment modala yeni environment elave etmek
      $(".environment-modal__empty").addClass("d-none");
      $(".environment-modal__list").removeClass("d-none");
      createNewEnvironment();

      //fa check eden zaman environment modal span deyismesi
      $(".selectedEnvironment").on("click", function () {
        $(
          ".middle-side .change-check"
        ).html(`<span class="ms-1 me-4">New environment</span>
                <i class="fa-solid fa-angle-down"></i>`);
      });
    });
  });

  $(".sidebar-new-environment-ul").on("click", "li", function () {
    $(".sidebar-new-environment-ul li").removeClass("active"); // Hamısından "active" sil
    $(this).addClass("active"); // Yalnız klik olunan `li`-yə "active" əlavə et
  });
});

// func for creating new env in env modal
const createNewEnvironment = () => {
  $(".environment-modal__list ul li i.fa-check").addClass("opacity-0");

  // Yeni environment əlavə edirik
  let newEnvironment = `
  <li>
    <i class="fa-solid fa-check opacity-0"></i>
    <span>New Environment</span>
  </li>
`;

  // Yeni li'yi əlavə edirik
  $(".environment-modal__list ul").append(newEnvironment);

  // Yalnız yeni əlavə olunan li elementində fa-check ikonunu göstəririk
  let lastItem = $(".environment-modal__list ul li").last();
  lastItem.find("i.fa-check").removeClass("opacity-0"); // fa-check ikonunu göstəririk
};

// func for creating new lenv for sidebar env
const createNewSidebarEnv = () => {
  $(".sidebar-new-environment-ul li").removeClass("active");

  const newli = `
  <li class="active">
      <div class="d-flex justify-content-between">
          <span>New Environment</span>

          <div class="sidebar-new-environment-icons">
            <i class="fa-solid fa-circle-check me-1 selectedEnvironment"></i>
            <i class="fa-solid fa-ellipsis"></i>
          </div>
      </div>
  </li>
`;

  $(".sidebar-new-environment-ul").append(newli);
};
