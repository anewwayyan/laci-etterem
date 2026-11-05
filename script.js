// IDE illeszd be az étterem Facebook-oldalának vagy -csoportjának teljes linkjét.
const FACEBOOK_PAGE_URL = "https://www.facebook.com/IDE-ILLESZD-BE-A-LINKET";

// A menü- és kapcsolatoldal összes Facebook-gombja ezt a címet használja.
document.querySelectorAll("[data-facebook-link]").forEach((link) => {
  if (FACEBOOK_PAGE_URL.includes("IDE-ILLESZD-BE-A-LINKET")) {
    link.addEventListener("click", (event) => event.preventDefault());
    link.setAttribute("aria-disabled", "true");
    link.title = "A Facebook-link még nincs beállítva.";
    return;
  }

  link.href = FACEBOOK_PAGE_URL;
});
