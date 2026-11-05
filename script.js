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

/* Heti menü – Facebook ajánló */

.menu-facebook-section {
  max-width: 760px;
  margin: 10px auto 75px;
  text-align: center;
}

.menu-facebook-card {
  background: var(--paper);
  border: 1px solid var(--line);
  border-radius: 8px;
  padding: 48px 35px;
  box-shadow: var(--shadow);
}

.menu-facebook-icon {
  width: 72px;
  height: 72px;
  margin: 0 auto 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  background: #e9eef8;
  color: #1877f2;
}

.menu-facebook-card h2 {
  font-size: clamp(1.7rem, 4vw, 2.3rem);
  margin: 12px 0 16px;
}

.menu-facebook-card p {
  color: var(--muted);
  max-width: 520px;
  margin: 0 auto 26px;
}

.menu-facebook-footer {
  margin-top: 24px;
  padding-top: 18px;
  border-top: 1px solid var(--line);
  color: var(--muted);
  font: .75rem Arial, sans-serif;
  letter-spacing: .05em;
}

.menu-contact-link {
  margin-top: 28px;
  color: var(--muted);
}

.menu-contact-link p {
  margin-bottom: 5px;
}

.menu-contact-link a {
  color: var(--rust);
  font-weight: bold;
}

.menu-contact-link a:hover {
  color: var(--rust-dark);
}

@media(max-width:600px) {
  .menu-facebook-card {
    padding: 35px 22px;
  }
}
