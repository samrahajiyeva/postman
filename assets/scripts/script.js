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
            <i class="fa-solid fa-trash-can ${
              $("body").hasClass("light-mode") ? "text-dark" : "text-light"
            }" style="opacity: 0; cursor: pointer;"></i>
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
});
