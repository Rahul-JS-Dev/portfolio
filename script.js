const homePageNav = document.querySelector(".nav");

async function navbar(navUrl, page) {
  const response = await fetch(navUrl);
  const data = await response.text();
  page.innerHTML = data;
}

navbar(
  "/components/header/header.html" || "./components/header/header.html",
  homePageNav
);
