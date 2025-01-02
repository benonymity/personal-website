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
    "[data-testimonials-item]"
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
        "[data-testimonials-title]"
      ).innerHTML;
      modalText.innerHTML = this.querySelector(
        "[data-testimonials-text]"
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
  if (iframe) {
    const currentMonth = new Date().getMonth() + 1;
    if (currentMonth >= 9 || currentMonth <= 4) {
      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d47494.14237010853!2d-84.67557343836305!3d41.92760144464611!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x883d72e59fdc700b%3A0x7b2bb9a774645d37!2sHillsdale%2C%20MI!5e0!3m2!1sen!2sus!4v1722043331437!5m2!1sen!2sus";
    } else {
      iframe.src =
        "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d95062.40784442106!2d-72.44354216698476!3d41.87779531833269!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e6f35d88939d8d%3A0x3b59035b904c52f6!2sTolland%2C%20CT%2006084!5e0!3m2!1sen!2sus!4v1684351063691!5m2!1sen!2sus";
    }
  }

  // Copy quote to clipboard on click
  const quoteItems = document.querySelectorAll(".quotes-item");
  const copyPopup = document.getElementById("copy-popup");

  quoteItems.forEach((item) => {
    item.addEventListener("click", function () {
      const quoteText = this.querySelector("blockquote p").textContent;
      const author = this.querySelector("cite").textContent;
      const formattedQuote = `"${quoteText}" - ${author}`;
      navigator.clipboard
        .writeText(formattedQuote)
        .then(() => {
          copyPopup.classList.add("show");
          setTimeout(() => {
            copyPopup.classList.remove("show");
          }, 2000);
        })
        .catch((err) => {
          console.error("Failed to copy quote: ", err);
        });
    });
  });

  // timeline filter variables
  const timelineFilterBtn = document.querySelectorAll(".selector-btn");
  const timelineItems = document.querySelectorAll(".timeline-item");
  const timelineSections = document.querySelectorAll(".timeline");

  // Initially show all timeline items
  timelineItems.forEach((item) => {
    item.classList.add("show");
  });

  const timelineFilterFunc = function (selectedCategory) {
    timelineSections.forEach((section) => {
      const items = section.querySelectorAll(".timeline-item");
      let lastVisibleItem = null;
      let hasVisibleItems = false;

      items.forEach((item, index) => {
        if (
          selectedCategory === "all" ||
          selectedCategory === item.dataset.category ||
          item.dataset.category.includes("all")
        ) {
          item.classList.add("show");
          item.style.display = "block";
          lastVisibleItem = item;
          hasVisibleItems = true;

          // Remove the 'last-visible' class from all items
          item.classList.remove("last-visible");

          // Restore the connecting line for all items except the last one
          if (index < items.length - 1) {
            item.style.setProperty("--timeline-line-display", "block");
          }
        } else {
          item.classList.remove("show");
          item.style.display = "none";
          item.style.setProperty("--timeline-line-display", "none");
        }
      });

      if (lastVisibleItem) {
        lastVisibleItem.classList.add("last-visible");
        lastVisibleItem.style.setProperty("--timeline-line-display", "none");
      }

      // Hide the entire section if it doesn't have any visible children
      if (hasVisibleItems) {
        section.style.display = "block";
      } else {
        section.style.display = "none";
      }
    });
  };

  // add event listener to timeline filter buttons
  timelineFilterBtn.forEach((btn) => {
    btn.addEventListener("click", function () {
      let selectedCategory = this.dataset.filter;
      timelineFilterFunc(selectedCategory);

      timelineFilterBtn.forEach((btn) => btn.classList.remove("active"));
      this.classList.add("active");

      // Update download button
      const downloadBtn = document.querySelector(".download-btn");
      if (downloadBtn) {
        const cvTypes = {
          all: "Full",
          tech: "Tech",
          academic: "Academic",
          music: "Music",
          other: "Other",
        };
        const type = cvTypes[selectedCategory] || "";
        downloadBtn.href = `/assets/files/Benjamin Bassett${
          type ? ` ${type}` : ""
        } CV.pdf`
          .replace("Full ", "")
          .trim();
        downloadBtn.textContent = `Download ${type || ""} CV`.trim();
      }
    });
  });

  // Collapsible sections
  const titleWrappers = document.querySelectorAll(".title-wrapper");

  titleWrappers.forEach((titleWrapper) => {
    titleWrapper.addEventListener("click", function () {
      const timelineList = this.nextElementSibling;
      this.classList.toggle("collapsed");
      timelineList.classList.toggle("collapsed");

      if (timelineList.classList.contains("collapsed")) {
        timelineList.style.maxHeight = "0px";
      } else {
        timelineList.style.maxHeight = timelineList.scrollHeight + "px";
      }
    });
  });

  // Books
  const bookCards = document.querySelectorAll(".book-card");
  bookCards.forEach((card) => {
    card.addEventListener("click", () => {
      const bookTitle = card.querySelector(".book-title").textContent;
      const searchQuery = encodeURIComponent(bookTitle);
      window.open(
        `https://www.thriftbooks.com/browse/?b.search=${searchQuery}`,
        "_blank"
      );
    });
  });
}

// Run all operations initially
runAllOperations();

// Set up a MutationObserver to watch for DOM changes
const observer = new MutationObserver(runAllOperations);

// Start observing the document with the configured parameters
observer.observe(document, { childList: true, subtree: true });
