function loadComponent(componentId, url) {
  fetch(url)
    .then((response) => {
      return response.text();
    })
    .then((html) => {
      document.getElementById(componentId).innerHTML = html;
      console.log(`Successfully loaded ${componentId}`);
    })
    .catch((error) => {
      console.error(`Failed to load ${url}: `, error);
      console.log(`Error details for ${componentId}:`, error.message);
    });
}

// We don't need to listen for DOMContentLoaded here as this script is loaded after DOM is ready
loadComponent("navbar-placeholder", "assets/components/navbar.html");
loadComponent("sidebar-placeholder", "assets/components/sidebar.html");
