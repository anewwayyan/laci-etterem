// Az étterem Facebook-csoportjának linkje.
const FACEBOOK_PAGE_URL =
  "https://www.facebook.com/groups/698246482025781/";

// A Facebook-gombok beállítása.
document.querySelectorAll("[data-facebook-link]").forEach((link) => {
  link.href = FACEBOOK_PAGE_URL;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  link.removeAttribute("aria-disabled");
});
