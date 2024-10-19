"use strict";

// Function to run all the necessary operations
function runAllOperations() {
  // element toggle function
  const elementToggleFunc = function (elem) {
    elem.classList.toggle("active");
  };

  // sidebar variables
  const sidebar = document.querySelector("[data-sidebar]");
  const sidebarBtn = document.querySelector("[data-sidebar-btn]");

  // sidebar toggle functionality for mobile
  if (sidebarBtn) {
    sidebarBtn.addEventListener("click", function () {
      elementToggleFunc(sidebar);
    });
  }

  // testimonials variables
  const testimonialsItem = document.querySelectorAll(
    "[data-testimonials-item]",
  );
  const modalContainer = document.querySelector("[data-modal-container]");
  const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
  const overlay = document.querySelector("[data-overlay]");

  // modal variable
  const modalImg = document.querySelector("[data-modal-img]");
  const modalTitle = document.querySelector("[data-modal-title]");
  const modalText = document.querySelector("[data-modal-text]");

  // modal toggle function
  const testimonialsModalFunc = function () {
    modalContainer.classList.toggle("active");
    overlay.classList.toggle("active");
  };

  // add click event to all modal items
  testimonialsItem.forEach((item) => {
    item.addEventListener("click", function () {
      modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
      modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
      modalTitle.innerHTML = this.querySelector(
        "[data-testimonials-title]",
      ).innerHTML;
      modalText.innerHTML = this.querySelector(
        "[data-testimonials-text]",
      ).innerHTML;
      testimonialsModalFunc();
    });
  });

  // add click event to modal close button
  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", testimonialsModalFunc);
  }
  if (overlay) {
    overlay.addEventListener("click", testimonialsModalFunc);
  }

  // custom select variables
  const select = document.querySelector("[data-select]");
  const selectItems = document.querySelectorAll("[data-select-item]");
  const selectValue = document.querySelector("[data-selecct-value]");
  const filterBtn = document.querySelectorAll("[data-filter-btn]");

  if (select) {
    select.addEventListener("click", function () {
      elementToggleFunc(this);
    });
  }

  // add event in all select items
  selectItems.forEach((item) => {
    item.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      if (select) elementToggleFunc(select);
      filterFunc(selectedValue);
    });
  });

  // filter variables
  const filterItems = document.querySelectorAll("[data-filter-item]");

  const filterFunc = function (selectedValue) {
    filterItems.forEach((item) => {
      if (selectedValue === "all" || selectedValue === item.dataset.category) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  };

  // add event in all filter button items for large screen
  let lastClickedBtn = filterBtn[0];

  filterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let selectedValue = this.innerText.toLowerCase();
      if (selectValue) selectValue.innerText = this.innerText;
      filterFunc(selectedValue);

      lastClickedBtn.classList.remove("active");
      this.classList.add("active");
      lastClickedBtn = this;
    });
  });

  // contact form variables
  const form = document.querySelector("[data-form]");
  const formInputs = document.querySelectorAll("[data-form-input]");
  const formBtn = document.querySelector("[data-form-btn]");

  // add event to all form input fields
  formInputs.forEach((input) => {
    input.addEventListener("input", function () {
      // check form validation
      if (form && formBtn) {
        if (form.checkValidity()) {
          formBtn.removeAttribute("disabled");
        } else {
          formBtn.setAttribute("disabled", "");
        }
      }
    });
  });

  const iframe = document.getElementById("map-iframe");
  const currentMonth = new Date().getMonth() + 1;
  if (currentMonth >= 9 || currentMonth <= 4) {
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47494.14237010853!2d-84.67557343836305!3d41.92760144464611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883d72e59fdc700b%3A0x7b2bb9a774645d37!2sHillsdale%2C%20MI!5e0!3m2!1sen!2sus!4v1722043331437!5m2!1sen!2sus";
  } else {
    iframe.src =
      "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95062.40784442106!2d-72.44354216698476!3d41.87779531833269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6f35d88939d8d%3A0x3b59035b904c52f6!2sTolland%2C%20CT%2006084!5e0!3m2!1sen!2sus!4v1684351063691!5m2!1sen!2sus";
  }
}

// Run all operations initially
runAllOperations();

// Set up a MutationObserver to watch for DOM changes
const observer = new MutationObserver(runAllOperations);

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });
