// Redirect to "/about" if on the root path
page("/", () => {
  page.redirect("/about");
  loadPage("about.html");
});

page("*", (ctx) => {
  const pageName = ctx.path.substring(1);
  loadPage(`${pageName}.html`);
});

page();

function loadPage(url) {
  fetch(`./assets/pages/${url}`)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Page not found");
      }
      return response.text();
    })
    .then((new_html) => {
      console.log(new_html);
      if (new_html.includes("<!DOCTYPE html>")) {
        throw new Error("404 page not found");
      }
      document.getElementById("content-placeholder").innerHTML = new_html;
      console.log(`Successfully loaded content for ${url}`);
      setActiveLink(url);
    })
    .catch((error) => {
      console.error(`Error loading the page ${url}:`, error);
      // Load 404.html if the page doesn't exist or is empty
      fetch("assets/pages/404.html")
        .then((response) => {
          if (!response.ok) {
            throw new Error("404 page not found");
          }
          return response.text();
        })
        .then((html) => {
          document.getElementById("content-placeholder").innerHTML = html;
          console.log("Loaded 404 page");
          setActiveLink("404.html");
        })
        .catch((error) => {
          console.error("Error loading 404 page:", error);
          document.getElementById("content-placeholder").innerHTML =
            "<h1>404 - Page Not Found</h1>";
        });
    });
}

function setActiveLink(url) {
  const currentPath = `/${url.split(".")[0]}`;
  const navigationLinks = document.querySelectorAll(".navbar-item a");
  navigationLinks.forEach((link) => {
    if (link.getAttribute("href") === currentPath) {
      link.classList.add("active");
    } else {
      link.classList.remove("active");
    }
  });
}

// Call setActiveLink on page load to highlight the correct link on reload
window.addEventListener("load", () => {
  const currentPath = window.location.pathname;
  setActiveLink(currentPath.substring(1) + ".html");
});
