function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.async = false; // Set to false to maintain the order of scripts
    script.onload = resolve;
    script.onerror = reject;
    if (document.body) {
      document.body.appendChild(script);
    } else {
      document.addEventListener("DOMContentLoaded", () => {
        document.body.appendChild(script);
      });
    }
  });
}

// List of scripts to load
const scripts = [
  "./assets/js/page.js",
  "./assets/js/router.js",
  "./assets/js/bars.js",
  "./assets/js/script.js",
  "./assets/js/analytics.js",
  "./assets/js/word-search.js",
  "https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js",
];

// Load each script
async function loadScripts() {
  for (const script of scripts) {
    try {
      await loadScript(script);
    } catch (error) {
      console.error(`Failed to load script: ${script}`, error);
    }
  }
}

// Call the function to load scripts when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadScripts);
} else {
  loadScripts();
}

function loadLink(href, rel = "stylesheet") {
  return new Promise((resolve, reject) => {
    const link = document.createElement("link");
    link.rel = rel;
    link.href = href;
    link.onload = resolve;
    link.onerror = reject;
    document.head.appendChild(link);
  });
}

// List of links to load
const links = [
  { href: "./assets/css/style.css", rel: "stylesheet" },
  { href: "./assets/css/about.css", rel: "stylesheet" },
  { href: "./assets/css/bars.css", rel: "stylesheet" },
  { href: "./assets/css/blog.css", rel: "stylesheet" },
  { href: "./assets/css/buttons.css", rel: "stylesheet" },
  { href: "./assets/css/contact.css", rel: "stylesheet" },
  { href: "./assets/css/links.css", rel: "stylesheet" },
  { href: "./assets/css/portfolio.css", rel: "stylesheet" },
  { href: "./assets/css/resume.css", rel: "stylesheet" },
  { href: "./assets/css/word-search.css", rel: "stylesheet" },
  { href: "./assets/css/responsive.css", rel: "stylesheet" },
  {
    href: "https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600&display=swap",
    rel: "stylesheet preconnect",
  },
  { href: "./assets/images/ben.ico", rel: "icon" },
];

// Load each link
async function loadLinks() {
  for (const link of links) {
    try {
      await loadLink(link.href, link.rel);
    } catch (error) {
      console.error(`Failed to load link: ${link.href}`, error);
    }
  }
}

// Call the function to load links when the DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadLinks);
} else {
  loadLinks();
}
