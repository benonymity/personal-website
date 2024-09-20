if (window.location.hostname.includes("benbassett.dev")) {
  var script = document.createElement("script");
  script.async = true;
  script.src = "https://umami.blazenetworking.com/script.js";
  script.setAttribute(
    "data-website-id",
    "5e1aa497-2035-4994-929c-8204b452d1a1"
  );
  document.head.appendChild(script);

  // Add data-umami-event attribute to clickable elements
  function addUmamiEventAttributes() {
    const clickableElements = document.querySelectorAll(
      'a, button, [role="button"], input[type="submit"], input[type="button"]'
    );

    clickableElements.forEach((element) => {
      if (!element.hasAttribute("data-umami-event")) {
        let description =
          element.textContent.trim() ||
          element.value ||
          element.href ||
          element.className ||
          "Unnamed element";
        element.setAttribute("data-umami-event", description);
      }
    });

    // Add Umami event attributes whenever the DOM changes
    const observer = new MutationObserver(() => {
      addUmamiEventAttributes();
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });

    document.addEventListener("DOMContentLoaded", () => {
      addUmamiEventAttributes();
      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });
    });

    addUmamiEventAttributes();
  }
}
