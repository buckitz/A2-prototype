const STORAGE_KEYS = {
  liveState: "baky-baky-live-state",
  draft: "baky-baky-draft-order",
  orders: "baky-baky-orders"
};

const BAKERIES = [
  {
    id: "bakery-1",
    shortLabel: "Bakery 1",
    name: "Saigon Petal Studio",
    city: "Ho Chi Minh City",
    address: "82 Vo Thi Sau, District 3, Ho Chi Minh City",
    phone: "+84 28 3820 5151",
    email: "hello@saigonpetal.vn",
    description: "Soft sponge cakes, floral piping, and quick celebration bakes for the city center.",
    look: "A pastel storefront with cream awnings, flower boxes, and window trays filled with berry cakes.",
    tones: ["#ccd6eb", "#ae76a6", "#993955"],
    flavors: ["Chocolate", "Vanilla", "Strawberry"],
    toppings: ["Choco chips", "Sprinkles", "Banana"],
    designs: ["Petal swirl", "Soft ripple", "Ribbon glaze"],
    specialties: ["Berry bloom cake", "Banana cream slice", "Mini party boxes"]
  },
  {
    id: "bakery-2",
    shortLabel: "Bakery 2",
    name: "Hanoi Lotus Bakehouse",
    city: "Hanoi",
    address: "16 Tong Duy Tan, Hoan Kiem, Hanoi",
    phone: "+84 24 3928 8870",
    email: "orders@lotusbakehouse.vn",
    description: "Elegant mousse cakes with layered flavors and a polished finish for gifting and birthdays.",
    look: "A light stone facade with lotus decals, a narrow counter, and polished display domes.",
    tones: ["#e9ece5", "#ccd6eb", "#ae76a6"],
    flavors: ["Pandan", "Salted caramel", "Coffee"],
    toppings: ["Toasted coconut", "Lotus seeds", "Almond praline"],
    designs: ["Lotus petal", "Silk frosting", "Marble sweep"],
    specialties: ["Lotus caramel mousse", "Coffee opera slice", "Gift tart set"]
  },
  {
    id: "bakery-3",
    shortLabel: "Bakery 3",
    name: "Da Nang Cloud Oven",
    city: "Da Nang",
    address: "54 Bach Dang, Hai Chau, Da Nang",
    phone: "+84 236 374 4411",
    email: "team@cloudoven.vn",
    description: "Bright fruit-forward cakes and lighter cream finishes inspired by coastal ingredients.",
    look: "A white storefront with sea-glass tiles, broad windows, and chilled pastry towers by the door.",
    tones: ["#a3c3d9", "#ccd6eb", "#ae76a6"],
    flavors: ["Matcha", "Mango yogurt", "Lemon"],
    toppings: ["White pearls", "Mango cubes", "Mint sugar"],
    designs: ["Seafoam wave", "Citrus ribbon", "Minimal glaze"],
    specialties: ["Mango sea chiffon", "Lemon cloud tart", "Matcha tea cake"]
  },
  {
    id: "bakery-4",
    shortLabel: "Bakery 4",
    name: "Hue Moon Bakery",
    city: "Hue",
    address: "28 Le Loi, Phu Hoi, Hue",
    phone: "+84 234 381 7782",
    email: "hello@huemoon.vn",
    description: "Richer textures, roasted flavors, and slower evening dessert boxes for intimate celebrations.",
    look: "A deep beige front with lantern lighting, wooden shelves, and a quiet tasting corner.",
    tones: ["#e9ece5", "#a3c3d9", "#993955"],
    flavors: ["Black sesame", "Ube", "Coconut"],
    toppings: ["Candied kumquat", "Macadamia", "Cocoa nibs"],
    designs: ["Velvet sweep", "Lunar piping", "Rustic crumb"],
    specialties: ["Sesame moon roll", "Ube coconut cake", "Evening dessert tin"]
  }
];

const DEFAULT_LIVE_STATE = {
  "bakery-1": {
    status: "Baking now",
    featuredInventory: 18,
    customSlots: 6,
    leadTime: 45,
    schedule: "Open 08:00 - 19:30",
    note: "Chocolate sponge batches refresh every 90 minutes.",
    todayOrders: 9
  },
  "bakery-2": {
    status: "Busy window",
    featuredInventory: 11,
    customSlots: 4,
    leadTime: 70,
    schedule: "Open 09:00 - 20:00",
    note: "Lotus mousse orders are closing faster this evening.",
    todayOrders: 7
  },
  "bakery-3": {
    status: "Baking now",
    featuredInventory: 14,
    customSlots: 5,
    leadTime: 55,
    schedule: "Open 08:30 - 18:30",
    note: "Fresh fruit topping stock is strongest before 16:00.",
    todayOrders: 6
  },
  "bakery-4": {
    status: "Closed for today",
    featuredInventory: 7,
    customSlots: 2,
    leadTime: 95,
    schedule: "Reopens tomorrow at 09:00",
    note: "Night orders reopen first thing tomorrow morning.",
    todayOrders: 5
  }
};

const PRODUCTS = [
  { id: "prod-1", bakeryId: "bakery-1", name: "Berry Bloom Cake", type: "Celebration Cake", flavor: "Strawberry", price: 385000, description: "Soft berry sponge with whipped vanilla cream and petal piping.", tones: ["#e9ece5", "#ccd6eb", "#993955"] },
  { id: "prod-2", bakeryId: "bakery-1", name: "Banana Crunch Slice", type: "Pastry", flavor: "Banana", price: 92000, description: "Grab-and-go pastry with caramel banana filling and crisp topping.", tones: ["#e9ece5", "#a3c3d9", "#ae76a6"] },
  { id: "prod-3", bakeryId: "bakery-2", name: "Lotus Caramel Mousse", type: "Celebration Cake", flavor: "Salted caramel", price: 445000, description: "Clean mousse layers with toasted lotus crumbs and mirror finish.", tones: ["#ccd6eb", "#ae76a6", "#993955"] },
  { id: "prod-4", bakeryId: "bakery-2", name: "Coffee Opera Slice", type: "Slice", flavor: "Coffee", price: 118000, description: "Coffee sponge, soft ganache, and a glossy finish.", tones: ["#e9ece5", "#ccd6eb", "#a3c3d9"] },
  { id: "prod-5", bakeryId: "bakery-3", name: "Mango Sea Chiffon", type: "Celebration Cake", flavor: "Mango yogurt", price: 405000, description: "Light sponge with mango cream and airy frosting.", tones: ["#a3c3d9", "#ccd6eb", "#e9ece5"] },
  { id: "prod-6", bakeryId: "bakery-3", name: "Lemon Cloud Tart", type: "Tart", flavor: "Lemon", price: 108000, description: "Short crust tart with lemon cream and torched meringue.", tones: ["#ccd6eb", "#e9ece5", "#a3c3d9"] },
  { id: "prod-7", bakeryId: "bakery-3", name: "Matcha Tea Cake", type: "Celebration Cake", flavor: "Matcha", price: 418000, description: "Fresh matcha sponge with a lighter cream profile.", tones: ["#e9ece5", "#a3c3d9", "#ae76a6"] },
  { id: "prod-8", bakeryId: "bakery-4", name: "Sesame Moon Roll", type: "Roll", flavor: "Black sesame", price: 138000, description: "Roasted sesame roll with cream filling and cocoa nib texture.", tones: ["#ccd6eb", "#ae76a6", "#a3c3d9"] },
  { id: "prod-9", bakeryId: "bakery-4", name: "Ube Coconut Cake", type: "Celebration Cake", flavor: "Ube", price: 432000, description: "A soft evening-style cake with coconut cream and ube crumb.", tones: ["#ae76a6", "#ccd6eb", "#e9ece5"] },
  { id: "prod-10", bakeryId: "bakery-4", name: "Lantern Dessert Tin", type: "Pastry Box", flavor: "Coconut", price: 165000, description: "Mixed pastry box designed for gifting and tea time.", tones: ["#e9ece5", "#a3c3d9", "#993955"] }
];

const SIZE_OPTIONS = [
  { id: "mini", label: "Mini 4 inch", price: 240000, note: "Good for 2 to 4 people" },
  { id: "classic", label: "Classic 6 inch", price: 360000, note: "Best for a small gathering" },
  { id: "party", label: "Party 8 inch", price: 520000, note: "Good for birthdays and teams" }
];

const FLAVOR_PALETTE = {
  Chocolate: { main: "#caa7b1", icing: "#f7f0f2", accent: "#993955" },
  Vanilla: { main: "#e9ece5", icing: "#ffffff", accent: "#ae76a6" },
  Strawberry: { main: "#d9a8bb", icing: "#fbf5f7", accent: "#993955" },
  Pandan: { main: "#cfe0d5", icing: "#f7fbf9", accent: "#7c9da9" },
  "Salted caramel": { main: "#dbc7cf", icing: "#fcf8fa", accent: "#ae76a6" },
  Coffee: { main: "#d4c7d1", icing: "#f9f7fb", accent: "#6a5368" },
  Matcha: { main: "#c7d8d9", icing: "#f4f9f9", accent: "#7e9eb1" },
  "Mango yogurt": { main: "#c8d7ea", icing: "#f6f9ff", accent: "#a3c3d9" },
  Lemon: { main: "#dfe5ef", icing: "#f7f9fd", accent: "#7f90ac" },
  "Black sesame": { main: "#d0ccd8", icing: "#f8f7fb", accent: "#7a6d87" },
  Ube: { main: "#d6c3dd", icing: "#faf6fc", accent: "#ae76a6" },
  Coconut: { main: "#e9ece5", icing: "#ffffff", accent: "#a3c3d9" }
};

const DESIGN_ACCENTS = {
  "Petal swirl": "#993955",
  "Soft ripple": "#ae76a6",
  "Ribbon glaze": "#a3c3d9",
  "Lotus petal": "#ae76a6",
  "Silk frosting": "#ccd6eb",
  "Marble sweep": "#993955",
  "Seafoam wave": "#a3c3d9",
  "Citrus ribbon": "#ccd6eb",
  "Minimal glaze": "#ae76a6",
  "Velvet sweep": "#993955",
  "Lunar piping": "#ae76a6",
  "Rustic crumb": "#a3c3d9"
};

const TOPPING_PALETTE = {
  "Choco chips": "#993955",
  Sprinkles: "#ae76a6",
  Banana: "#ccd6eb",
  "Toasted coconut": "#e9ece5",
  "Lotus seeds": "#ccd6eb",
  "Almond praline": "#ae76a6",
  "White pearls": "#ffffff",
  "Mango cubes": "#a3c3d9",
  "Mint sugar": "#ccd6eb",
  "Candied kumquat": "#993955",
  Macadamia: "#e9ece5",
  "Cocoa nibs": "#6d5367"
};

const FAQS = [
  { question: "How does Bakecity work for local bakeries in Vietnam?", answer: "Bakecity combines a customer-facing pastry marketplace with a bakery portal for stock, orders, and schedule updates." },
  { question: "Can I place a fully custom cake order?", answer: "Yes. The custom page lets customers choose a bakery first, then only the flavors, toppings, and decor options that bakery supports." },
  { question: "What payment modes can customers use?", answer: "The MVP checkout supports cash on delivery, bank transfer, credit or debit card, and e-wallet selection." },
  { question: "Do bakery portal changes update the customer side?", answer: "Yes. The portal stores demo bakery state in browser storage so the landing and bakery pages refresh from the same source." },
  { question: "Can customers contact the bakery directly?", answer: "Each bakery page includes phone, email, address, and a short profile to help customers choose the right shop." }
];

const QA_THREADS = [
  { question: "How early should I order a custom cake?", answer: "For the MVP demo, each bakery shows its current lead time and remaining custom slots." },
  { question: "Can I compare bakeries before I design?", answer: "Yes. The custom page includes a bakery comparison strip so customers can scan specialties and available flavors first." },
  { question: "Will bakeries see new customer orders inside the portal?", answer: "They do in this MVP. Every successful checkout adds a new order card to the bakery portal order list." }
];

const SAMPLE_ORDERS = [
  { id: "BB-240519", bakeryId: "bakery-1", bakeryName: "Saigon Petal Studio", kind: "custom", itemName: "Classic 6 inch custom cake", total: 414000, customerName: "Mai Nguyen", payment: "Bank transfer", createdAt: "2026-04-02T08:35:00+07:00" },
  { id: "BB-240520", bakeryId: "bakery-3", bakeryName: "Da Nang Cloud Oven", kind: "premade", itemName: "Mango Sea Chiffon", total: 405000, customerName: "Anh Le", payment: "Cash on delivery", createdAt: "2026-04-02T09:20:00+07:00" }
];

const currencyFormatter = new Intl.NumberFormat("vi-VN", {
  style: "currency",
  currency: "VND",
  maximumFractionDigits: 0
});

document.addEventListener("DOMContentLoaded", () => {
  bootstrapStorage();
  renderFooter();
  setupNavigation();
  setActiveNavLink();
  initSharedForms();
  initLandingPage();
  initAboutPage();
  initCustomPage();
  initPremadePage();
  initBakeriesPage();
  initCheckoutPage();
  initLoginPage();
  initPortalPage();
  window.addEventListener("storage", refreshDynamicViews);
});

function supportsStorage() {
  try {
    return typeof window !== "undefined" && typeof window.localStorage !== "undefined";
  } catch (error) {
    return false;
  }
}

function bootstrapStorage() {
  if (!supportsStorage()) {
    return;
  }

  if (!localStorage.getItem(STORAGE_KEYS.liveState)) {
    const liveState = BAKERIES.map((bakery) => ({ id: bakery.id, ...DEFAULT_LIVE_STATE[bakery.id] }));
    localStorage.setItem(STORAGE_KEYS.liveState, JSON.stringify(liveState));
  }

  if (!localStorage.getItem(STORAGE_KEYS.orders)) {
    localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(SAMPLE_ORDERS));
  }
}

function getLiveState() {
  if (!supportsStorage()) {
    return BAKERIES.map((bakery) => ({ id: bakery.id, ...DEFAULT_LIVE_STATE[bakery.id] }));
  }

  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.liveState) || "[]");
    return BAKERIES.map((bakery) => {
      const stored = raw.find((item) => item.id === bakery.id) || {};
      return { id: bakery.id, ...DEFAULT_LIVE_STATE[bakery.id], ...stored };
    });
  } catch (error) {
    return BAKERIES.map((bakery) => ({ id: bakery.id, ...DEFAULT_LIVE_STATE[bakery.id] }));
  }
}

function saveLiveState(records) {
  if (supportsStorage()) {
    localStorage.setItem(STORAGE_KEYS.liveState, JSON.stringify(records));
  }
}

function getOrders() {
  if (!supportsStorage()) {
    return SAMPLE_ORDERS.slice();
  }

  try {
    const raw = JSON.parse(localStorage.getItem(STORAGE_KEYS.orders) || "[]");
    return raw.length ? raw : SAMPLE_ORDERS.slice();
  } catch (error) {
    return SAMPLE_ORDERS.slice();
  }
}

function saveOrders(orders) {
  if (supportsStorage()) {
    localStorage.setItem(STORAGE_KEYS.orders, JSON.stringify(orders));
  }
}

function getDraftOrder() {
  if (!supportsStorage()) {
    return null;
  }

  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEYS.draft) || "null");
  } catch (error) {
    return null;
  }
}

function saveDraftOrder(draft) {
  if (supportsStorage()) {
    localStorage.setItem(STORAGE_KEYS.draft, JSON.stringify(draft));
  }
}

function clearDraftOrder() {
  if (supportsStorage()) {
    localStorage.removeItem(STORAGE_KEYS.draft);
  }
}

function getBakeryRecords() {
  const liveMap = Object.fromEntries(getLiveState().map((item) => [item.id, item]));
  return BAKERIES.map((bakery) => ({ ...bakery, ...liveMap[bakery.id] }));
}

function formatCurrency(amount) {
  return currencyFormatter.format(amount);
}

function formatStatusClass(status) {
  const normalized = status.toLowerCase();
  if (normalized.includes("closed")) {
    return "is-closed";
  }
  if (normalized.includes("busy")) {
    return "is-busy";
  }
  return "is-baking";
}

function formatDateTime(value) {
  try {
    return new Intl.DateTimeFormat("en-GB", {
      day: "2-digit",
      month: "short",
      hour: "2-digit",
      minute: "2-digit"
    }).format(new Date(value));
  } catch (error) {
    return value;
  }
}

function toneStyle(tones) {
  return `--tone-a:${tones[0]};--tone-b:${tones[1]};--tone-c:${tones[2]};`;
}

function slugify(value) {
  return String(value).toLowerCase().replace(/[^a-z0-9]+/g, "-");
}

function renderFooter() {
  const footer = document.querySelector("[data-site-footer]");
  if (!footer) {
    return;
  }

  footer.innerHTML = `
    <div class="site-footer-inner">
      <div>
        <div class="brand-mark">
          <span class="brand-kicker">Vietnam bakery marketplace</span>
          <span class="brand-name">Bakecity</span>
        </div>
        <p class="footer-note">A clickable MVP for ordering pastries, designing custom cakes, and showing live bakery updates in one place.</p>
      </div>
      <div class="footer-links">
        <a href="index.html">Home</a>
        <a href="custom.html">Custom</a>
        <a href="premade.html">Pre-Made</a>
        <a href="bakeries.html">Bakeries</a>
        <a href="contact.html">Contact</a>
        <a href="portal.html">Bakery Portal</a>
      </div>
    </div>
  `;
}

function renderSharedTail() {
  document.querySelectorAll("[data-shared-tail]").forEach((root) => {
    root.innerHTML = `
      <section class="tail-shell">
        <div class="section-heading">
          <div>
            <span class="section-chip">FAQ and Q&A</span>
            <h2>Questions customers and bakeries usually ask</h2>
          </div>
          <p>Every page ends with the same support block so users can find answers no matter where they are in the flow.</p>
        </div>
        <div class="faq-block">
          <div class="accordion-list">
            ${FAQS.map(
              (item, index) => `
                <div class="accordion-item">
                  <button class="accordion-trigger" type="button" aria-expanded="${index === 0 ? "true" : "false"}">
                    <span>${item.question}</span>
                    <span class="accordion-symbol">${index === 0 ? "-" : "+"}</span>
                  </button>
                  <div class="accordion-panel" style="${index === 0 ? "max-height: 200px;" : ""}">
                    <div class="accordion-panel-content">${item.answer}</div>
                  </div>
                </div>
              `
            ).join("")}
          </div>
          <div class="qna-grid">
            <div class="qna-card">
              <h3>Recent answered questions</h3>
              <p class="card-note">This keeps the MVP feeling alive even before a backend exists.</p>
              <div class="qa-thread">
                ${QA_THREADS.map(
                  (thread) => `
                    <div class="qa-message">
                      <small>Question</small>
                      <div>${thread.question}</div>
                      <small style="margin-top: 10px;">Answer</small>
                      <div>${thread.answer}</div>
                    </div>
                  `
                ).join("")}
              </div>
            </div>
            <div class="qna-card">
              <h3>Ask your own question</h3>
              <p class="card-note">This is a front-end placeholder ready for backend wiring later.</p>
              <form data-qna-form>
                <div class="form-grid">
                  <div class="field">
                    <label for="qna-name">Name</label>
                    <input id="qna-name" name="name" type="text" placeholder="Your name" required>
                  </div>
                  <div class="field">
                    <label for="qna-email">Email</label>
                    <input id="qna-email" name="email" type="email" placeholder="you@example.com" required>
                  </div>
                  <div class="field field-full">
                    <label for="qna-question">Question</label>
                    <textarea id="qna-question" name="question" placeholder="What would you like to ask?" required></textarea>
                  </div>
                </div>
                <div class="cta-row" style="justify-content:flex-start;">
                  <button class="primary-btn" type="submit">Send question</button>
                </div>
                <div class="status-text" data-qna-status></div>
              </form>
            </div>
          </div>
        </div>
      </section>
    `;
  });

  setupAccordions();
}

function setupAccordions() {
  document.querySelectorAll(".accordion-trigger").forEach((button) => {
    if (button.dataset.bound === "true") {
      return;
    }

    button.dataset.bound = "true";
    button.addEventListener("click", () => {
      const panel = button.nextElementSibling;
      const expanded = button.getAttribute("aria-expanded") === "true";
      button.setAttribute("aria-expanded", String(!expanded));
      const symbol = button.querySelector(".accordion-symbol");
      symbol.textContent = expanded ? "+" : "-";
      panel.style.maxHeight = expanded ? "" : `${panel.scrollHeight}px`;
    });
  });
}

function setupNavigation() {
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("mobile-nav");
  if (!toggle || !nav) {
    return;
  }

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("is-open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
}

function setActiveNavLink() {
  const current = window.location.pathname.split("/").pop() || "index.html";
  const activeMap = {
    "custom.html": "custom.html",
    "checkout.html": "custom.html",
    "premade.html": "premade.html",
    "about.html": "about.html",
    "bakeries.html": "about.html",
    "contact.html": "contact.html",
    "login.html": "login.html",
    "portal.html": "login.html"
  };

  const activeHref = activeMap[current];
  if (!activeHref) {
    return;
  }

  document.querySelectorAll(`a[href="${activeHref}"]`).forEach((link) => {
    link.classList.add("is-active");
  });
}

function initSharedForms() {
  document.querySelectorAll("[data-qna-form]").forEach((form) => {
    if (form.dataset.bound === "true") {
      return;
    }

    form.dataset.bound = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-qna-status]");
      status.textContent = "Question saved for the MVP demo. This is ready to connect to email or a database later.";
      form.reset();
    });
  });

  document.querySelectorAll("[data-local-form]").forEach((form) => {
    if (form.dataset.bound === "true") {
      return;
    }

    form.dataset.bound = "true";
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = form.querySelector("[data-form-status]");
      if (status) {
        status.textContent = "Saved in the MVP interface. This action is ready for backend wiring later.";
      }
      form.reset();
    });
  });
}

function initLandingPage() {
  const strip = document.getElementById("live-bakery-strip");
  if (!strip) {
    return;
  }

  const records = getBakeryRecords();
  strip.innerHTML = records.map((bakery) => `
    <article class="live-card">
      <div class="live-card-head">
        <div>
          <strong>${bakery.name}</strong>
          <div class="card-note">${bakery.city}</div>
        </div>
        <span class="status-pill ${formatStatusClass(bakery.status)}">${bakery.status}</span>
      </div>
      <ul class="details-list">
        <li><span>Featured stock</span><span>${bakery.featuredInventory} items</span></li>
        <li><span>Custom slots</span><span>${bakery.customSlots}</span></li>
        <li><span>Lead time</span><span>${bakery.leadTime} min</span></li>
      </ul>
      <p class="summary-note">${bakery.schedule}. ${bakery.note}</p>
    </article>
  `).join("");

  const stats = document.getElementById("home-stats");
  if (!stats) {
    return;
  }

  const openCount = records.filter((item) => !item.status.toLowerCase().includes("closed")).length;
  const customSlots = records.reduce((sum, item) => sum + item.customSlots, 0);
  const itemsToday = records.reduce((sum, item) => sum + item.featuredInventory, 0);

  stats.innerHTML = `
    <article class="mini-card">
      <div class="stat-number">${openCount}</div>
      <p>partner bakeries currently accepting orders</p>
    </article>
    <article class="mini-card">
      <div class="stat-number">${customSlots}</div>
      <p>custom cake slots still available today</p>
    </article>
    <article class="mini-card">
      <div class="stat-number">${itemsToday}</div>
      <p>pre-made pastries marked available in the MVP</p>
    </article>
  `;
}

function initAboutPage() {
  const partnerStrip = document.getElementById("about-partners");
  if (!partnerStrip) {
    return;
  }

  partnerStrip.innerHTML = getBakeryRecords().map((bakery) => `
    <article class="partner-card panel-card">
      <strong>${bakery.shortLabel}</strong>
      <h3>${bakery.name}</h3>
      <p>${bakery.description}</p>
      <ul>
        <li>${bakery.city}</li>
        <li>${bakery.schedule}</li>
        <li>${bakery.specialties[0]}</li>
      </ul>
    </article>
  `).join("");
}

function initCustomPage() {
  const bakerySelect = document.getElementById("bakery-select");
  if (!bakerySelect) {
    return;
  }

  const sizeRoot = document.getElementById("size-options");
  const flavorRoot = document.getElementById("flavor-options");
  const designRoot = document.getElementById("design-options");
  const toppingRoot = document.getElementById("topping-options");
  const previewSummary = document.getElementById("cake-summary");
  const nextButton = document.getElementById("custom-next");
  const previousButton = document.getElementById("custom-previous");
  const topper = document.getElementById("cake-topper");
  const confetti = document.getElementById("cake-confetti");
  const stage = document.getElementById("cake-stage");
  const compare = document.getElementById("custom-bakery-strip");
  const noteInput = document.getElementById("message-input");

  const bakeries = getBakeryRecords();
  const existingDraft = getDraftOrder();
  let state = {
    bakeryId: existingDraft && existingDraft.kind === "custom" ? existingDraft.bakeryId : bakeries[0].id,
    sizeId: existingDraft && existingDraft.kind === "custom" ? existingDraft.sizeId : "classic",
    flavor: existingDraft && existingDraft.kind === "custom" ? existingDraft.flavor : bakeries[0].flavors[0],
    design: existingDraft && existingDraft.kind === "custom" ? existingDraft.design : bakeries[0].designs[0],
    toppings: existingDraft && existingDraft.kind === "custom" ? existingDraft.toppings : [bakeries[0].toppings[0]],
    message: existingDraft && existingDraft.kind === "custom" ? existingDraft.message : "Bakecity"
  };

  bakerySelect.innerHTML = bakeries.map((bakery) => `
    <option value="${bakery.id}">${bakery.shortLabel} - ${bakery.name}</option>
  `).join("");

  compare.innerHTML = bakeries.map((bakery) => `
    <article class="compare-card panel-card">
      <strong>${bakery.shortLabel}</strong>
      <h3>${bakery.name}</h3>
      <p>${bakery.look}</p>
      <ul>
        <li>Flavors: ${bakery.flavors.join(", ")}</li>
        <li>Toppings: ${bakery.toppings.join(", ")}</li>
        <li>Designs: ${bakery.designs.join(", ")}</li>
      </ul>
    </article>
  `).join("");

  bakerySelect.addEventListener("change", () => {
    state.bakeryId = bakerySelect.value;
    syncBakerySelections();
    paintDesigner();
  });

  noteInput.addEventListener("input", () => {
    state.message = noteInput.value.trim() || "Bakecity";
    paintDesigner();
  });

  nextButton.addEventListener("click", () => {
    saveDraftOrder(buildCustomDraft());
    window.location.href = "checkout.html";
  });

  previousButton.addEventListener("click", () => {
    window.location.href = "index.html#home-actions";
  });

  bakerySelect.value = state.bakeryId;
  noteInput.value = state.message === "Bakecity" ? "" : state.message;
  syncBakerySelections();
  paintDesigner();

  function getSelectedBakery() {
    return bakeries.find((item) => item.id === state.bakeryId) || bakeries[0];
  }

  function getCustomPrice() {
    const bakeryIndex = bakeries.findIndex((item) => item.id === state.bakeryId);
    const sizeOption = SIZE_OPTIONS.find((option) => option.id === state.sizeId) || SIZE_OPTIONS[1];
    return sizeOption.price + bakeryIndex * 14000 + state.toppings.length * 18000;
  }

  function syncBakerySelections() {
    const bakery = getSelectedBakery();
    if (!bakery.flavors.includes(state.flavor)) {
      state.flavor = bakery.flavors[0];
    }
    if (!bakery.designs.includes(state.design)) {
      state.design = bakery.designs[0];
    }
    state.toppings = state.toppings.filter((item) => bakery.toppings.includes(item));
    if (!state.toppings.length) {
      state.toppings = [bakery.toppings[0]];
    }
    renderSizeChoices();
    renderFlavorChoices();
    renderDesignChoices();
    renderToppingChoices();
  }

  function renderSizeChoices() {
    sizeRoot.innerHTML = SIZE_OPTIONS.map((option) => `
      <div class="choice-card">
        <input type="radio" name="cake-size" id="size-${option.id}" value="${option.id}" ${state.sizeId === option.id ? "checked" : ""}>
        <label for="size-${option.id}">
          <strong>${option.label}</strong>
          <span>${option.note}</span>
          <span class="price-chip">${formatCurrency(option.price)}</span>
        </label>
      </div>
    `).join("");

    sizeRoot.querySelectorAll('input[name="cake-size"]').forEach((input) => {
      input.addEventListener("change", () => {
        state.sizeId = input.value;
        paintDesigner();
      });
    });
  }

  function renderFlavorChoices() {
    const bakery = getSelectedBakery();
    flavorRoot.innerHTML = bakery.flavors.map((flavor) => `
      <div class="choice-card">
        <input type="radio" name="cake-flavor" id="flavor-${slugify(flavor)}" value="${flavor}" ${state.flavor === flavor ? "checked" : ""}>
        <label for="flavor-${slugify(flavor)}">
          <strong>${flavor}</strong>
          <span>${bakery.shortLabel} available flavor</span>
        </label>
      </div>
    `).join("");

    flavorRoot.querySelectorAll('input[name="cake-flavor"]').forEach((input) => {
      input.addEventListener("change", () => {
        state.flavor = input.value;
        paintDesigner();
      });
    });
  }

  function renderDesignChoices() {
    const bakery = getSelectedBakery();
    designRoot.innerHTML = bakery.designs.map((design) => `
      <div class="choice-card">
        <input type="radio" name="cake-design" id="design-${slugify(design)}" value="${design}" ${state.design === design ? "checked" : ""}>
        <label for="design-${slugify(design)}">
          <strong>${design}</strong>
          <span>Decor style from ${bakery.shortLabel}</span>
        </label>
      </div>
    `).join("");

    designRoot.querySelectorAll('input[name="cake-design"]').forEach((input) => {
      input.addEventListener("change", () => {
        state.design = input.value;
        paintDesigner();
      });
    });
  }

  function renderToppingChoices() {
    const bakery = getSelectedBakery();
    toppingRoot.innerHTML = bakery.toppings.map((topping) => `
      <div class="toggle-card">
        <input type="checkbox" name="cake-topping" id="topping-${slugify(topping)}" value="${topping}" ${state.toppings.includes(topping) ? "checked" : ""}>
        <label for="topping-${slugify(topping)}">
          <strong>${topping}</strong>
          <span>Optional topping from ${bakery.shortLabel}</span>
        </label>
      </div>
    `).join("");

    toppingRoot.querySelectorAll('input[name="cake-topping"]').forEach((input) => {
      input.addEventListener("change", () => {
        const nextSet = new Set(state.toppings);
        if (input.checked) {
          nextSet.add(input.value);
        } else {
          nextSet.delete(input.value);
        }
        state.toppings = Array.from(nextSet);
        if (!state.toppings.length) {
          state.toppings = [getSelectedBakery().toppings[0]];
          renderToppingChoices();
        }
        paintDesigner();
      });
    });
  }

  function paintDesigner() {
    const bakery = getSelectedBakery();
    const flavorPalette = FLAVOR_PALETTE[state.flavor] || FLAVOR_PALETTE.Vanilla;
    const sizeOption = SIZE_OPTIONS.find((option) => option.id === state.sizeId) || SIZE_OPTIONS[1];
    const total = getCustomPrice();
    const accent = DESIGN_ACCENTS[state.design] || bakery.tones[2];

    topper.textContent = state.message || "Bakecity";
    stage.style.setProperty("--cake-main", flavorPalette.main);
    stage.style.setProperty("--cake-icing", flavorPalette.icing);
    stage.style.setProperty("--cake-accent", accent);
    stage.style.setProperty("--cake-dot", TOPPING_PALETTE[state.toppings[0]] || flavorPalette.accent);

    confetti.innerHTML = state.toppings.map((topping, index) => {
      const color = TOPPING_PALETTE[topping] || accent;
      const left = 28 + (index % 3) * 18 + index * 8;
      const top = 112 + (index % 2) * 34;
      return `<span style="left:${left}%;top:${top}px;background:${color};"></span>`;
    }).join("");

    previewSummary.innerHTML = `
      <div class="summary-tile"><small>Bakery</small><strong>${bakery.name}</strong></div>
      <div class="summary-tile"><small>Size</small><strong>${sizeOption.label}</strong></div>
      <div class="summary-tile"><small>Flavor</small><strong>${state.flavor}</strong></div>
      <div class="summary-tile"><small>Decor</small><strong>${state.design}</strong></div>
      <div class="summary-tile"><small>Toppings</small><strong>${state.toppings.join(", ")}</strong></div>
      <div class="summary-tile"><small>Estimated total</small><strong>${formatCurrency(total)}</strong></div>
    `;
  }

  function buildCustomDraft() {
    const bakery = getSelectedBakery();
    const sizeOption = SIZE_OPTIONS.find((option) => option.id === state.sizeId) || SIZE_OPTIONS[1];
    return {
      kind: "custom",
      bakeryId: bakery.id,
      bakeryName: bakery.name,
      sizeId: sizeOption.id,
      itemName: `${sizeOption.label} custom cake`,
      flavor: state.flavor,
      design: state.design,
      toppings: state.toppings,
      message: state.message || "Bakecity",
      total: getCustomPrice()
    };
  }
}

function initPremadePage() {
  const grid = document.getElementById("catalog-grid");
  if (!grid) {
    return;
  }

  const bakeryFilter = document.getElementById("catalog-bakery-filter");
  const typeFilter = document.getElementById("catalog-type-filter");
  const sortFilter = document.getElementById("catalog-sort-filter");
  const records = getBakeryRecords();

  bakeryFilter.innerHTML = `
    <option value="all">All bakeries</option>
    ${records.map((bakery) => `<option value="${bakery.id}">${bakery.name}</option>`).join("")}
  `;

  const types = Array.from(new Set(PRODUCTS.map((item) => item.type)));
  typeFilter.innerHTML = `
    <option value="all">All pastry types</option>
    ${types.map((type) => `<option value="${type}">${type}</option>`).join("")}
  `;

  function renderCatalog() {
    const filtered = PRODUCTS.filter((product) => {
      const bakeryMatch = bakeryFilter.value === "all" || product.bakeryId === bakeryFilter.value;
      const typeMatch = typeFilter.value === "all" || product.type === typeFilter.value;
      return bakeryMatch && typeMatch;
    }).sort((left, right) => {
      if (sortFilter.value === "price-low") {
        return left.price - right.price;
      }
      if (sortFilter.value === "price-high") {
        return right.price - left.price;
      }
      return left.name.localeCompare(right.name);
    });

    grid.innerHTML = filtered.map((product) => {
      const bakery = records.find((item) => item.id === product.bakeryId);
      const closed = bakery.status.toLowerCase().includes("closed");
      return `
        <article class="product-card">
          <div class="product-art" style="${toneStyle(product.tones)}"></div>
          <div class="product-body">
            <div class="product-card-top">
              <div class="status-row">
                <strong>${bakery.shortLabel}</strong>
                <span class="metric-chip">${product.type}</span>
              </div>
              <h3>${product.name}</h3>
              <p>${product.description}</p>
              <div class="product-meta">
                <span class="metric-chip">${product.flavor}</span>
                <span class="metric-chip">${closed ? "Pre-order" : `${bakery.featuredInventory} left today`}</span>
              </div>
            </div>
            <div class="product-card-footer">
              <span class="price-tag">${formatCurrency(product.price)}</span>
              <button class="primary-btn" type="button" data-product-id="${product.id}">
                ${closed ? "Pre-order" : "Reserve now"}
              </button>
            </div>
          </div>
        </article>
      `;
    }).join("");
  }

  bakeryFilter.addEventListener("change", renderCatalog);
  typeFilter.addEventListener("change", renderCatalog);
  sortFilter.addEventListener("change", renderCatalog);
  grid.addEventListener("click", (event) => {
    const button = event.target.closest("[data-product-id]");
    if (!button) {
      return;
    }
    const product = PRODUCTS.find((item) => item.id === button.dataset.productId);
    const bakery = records.find((item) => item.id === product.bakeryId);
    saveDraftOrder({
      kind: "premade",
      bakeryId: bakery.id,
      bakeryName: bakery.name,
      itemName: product.name,
      flavor: product.flavor,
      design: product.type,
      toppings: [],
      total: product.price
    });
    window.location.href = "checkout.html";
  });

  renderCatalog();
}

function initBakeriesPage() {
  const root = document.getElementById("bakery-showcase");
  if (!root) {
    return;
  }

  root.innerHTML = getBakeryRecords().map((bakery) => `
    <article class="bakery-card">
      <div class="bakery-art" style="${toneStyle(bakery.tones)}">
        <div class="awning"></div>
      </div>
      <div class="bakery-body">
        <div class="status-row">
          <strong>${bakery.shortLabel}</strong>
          <span class="status-pill ${formatStatusClass(bakery.status)}">${bakery.status}</span>
        </div>
        <h3>${bakery.name}</h3>
        <p>${bakery.look}</p>
        <div class="bakery-meta">
          <span class="metric-chip">${bakery.city}</span>
          <span class="metric-chip">${bakery.leadTime} min lead time</span>
          <span class="metric-chip">${bakery.customSlots} custom slots</span>
        </div>
        <ul class="details-list">
          <li><span>Address</span><span>${bakery.address}</span></li>
          <li><span>Phone</span><span>${bakery.phone}</span></li>
          <li><span>Email</span><span>${bakery.email}</span></li>
        </ul>
        <ul class="summary-list">
          <li><span>Specialties</span><span>${bakery.specialties.join(", ")}</span></li>
        </ul>
      </div>
    </article>
  `).join("");
}

function initCheckoutPage() {
  const form = document.getElementById("checkout-form");
  if (!form) {
    return;
  }

  const summaryRoot = document.getElementById("checkout-summary-content");
  const emptyState = document.getElementById("checkout-empty");
  const successState = document.getElementById("checkout-success");
  const draft = getDraftOrder();

  if (!draft) {
    emptyState.hidden = false;
    form.hidden = true;
    summaryRoot.innerHTML = `
      <div class="empty-state">
        No order is ready yet. Choose a custom cake or a pre-made cake first, then return here for confirmation and payment.
      </div>
    `;
    return;
  }

  emptyState.hidden = true;
  form.hidden = false;
  renderDraftSummary(draft);

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const order = {
      id: `BB-${Date.now().toString().slice(-6)}`,
      bakeryId: draft.bakeryId,
      bakeryName: draft.bakeryName,
      kind: draft.kind,
      itemName: draft.itemName,
      total: draft.total,
      customerName: formData.get("name"),
      address: formData.get("address"),
      phone: formData.get("phone"),
      email: formData.get("email"),
      payment: formData.get("payment"),
      createdAt: new Date().toISOString()
    };

    const orders = getOrders();
    orders.unshift(order);
    saveOrders(orders);
    updateBakeryAfterOrder(order);
    clearDraftOrder();
    form.hidden = true;
    successState.hidden = false;
    successState.innerHTML = `
      <div class="success-state">
        <h3>Order confirmed</h3>
        <p>${order.customerName}, your order <strong>${order.id}</strong> has been saved for the MVP flow.</p>
        <ul class="summary-list">
          <li><span>Bakery</span><span>${order.bakeryName}</span></li>
          <li><span>Item</span><span>${order.itemName}</span></li>
          <li><span>Payment</span><span>${order.payment}</span></li>
          <li><span>Total</span><span>${formatCurrency(order.total)}</span></li>
        </ul>
        <div class="cta-row" style="justify-content:flex-start;">
          <a class="primary-btn" href="portal.html">View bakery portal</a>
          <a class="secondary-btn" href="index.html">Back to landing page</a>
        </div>
      </div>
    `;
  }, { once: true });

  function renderDraftSummary(currentDraft) {
    const extras = [];
    if (currentDraft.flavor) {
      extras.push(`<li><span>Flavor</span><span>${currentDraft.flavor}</span></li>`);
    }
    if (currentDraft.design) {
      extras.push(`<li><span>Decor or type</span><span>${currentDraft.design}</span></li>`);
    }
    if (currentDraft.toppings && currentDraft.toppings.length) {
      extras.push(`<li><span>Toppings</span><span>${currentDraft.toppings.join(", ")}</span></li>`);
    }
    if (currentDraft.message) {
      extras.push(`<li><span>Cake text</span><span>${currentDraft.message}</span></li>`);
    }

    summaryRoot.innerHTML = `
      <ul class="summary-list">
        <li><span>Bakery</span><span>${currentDraft.bakeryName}</span></li>
        <li><span>Order type</span><span>${currentDraft.kind === "custom" ? "Custom cake" : "Pre-made pastry"}</span></li>
        <li><span>Selected item</span><span>${currentDraft.itemName}</span></li>
        ${extras.join("")}
      </ul>
      <div class="summary-total">
        <span>Total</span>
        <strong>${formatCurrency(currentDraft.total)}</strong>
      </div>
    `;
  }
}

function updateBakeryAfterOrder(order) {
  const liveState = getLiveState().map((record) => {
    if (record.id !== order.bakeryId) {
      return record;
    }

    const nextFeaturedInventory = Math.max(0, record.featuredInventory - 1);
    const nextCustomSlots = order.kind === "custom" ? Math.max(0, record.customSlots - 1) : record.customSlots;

    return {
      ...record,
      featuredInventory: nextFeaturedInventory,
      customSlots: nextCustomSlots,
      todayOrders: (record.todayOrders || 0) + 1,
      status: nextCustomSlots <= 1 && order.kind === "custom" ? "Busy window" : record.status
    };
  });

  saveLiveState(liveState);
}

function initLoginPage() {
  const customerForm = document.getElementById("customer-login-form");
  const partnerForm = document.getElementById("partner-login-form");

  if (customerForm) {
    customerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      const status = document.getElementById("customer-login-status");
      status.textContent = "Customer login is shown as a placeholder in this MVP.";
      customerForm.reset();
    });
  }

  if (partnerForm) {
    partnerForm.addEventListener("submit", (event) => {
      event.preventDefault();
      window.location.href = "portal.html";
    });
  }
}

function initPortalPage() {
  const root = document.getElementById("portal-grid");
  if (!root) {
    return;
  }

  renderPortal();
  renderPortalOrders();
  updatePortalStats();
  startPortalClock();

  const reset = document.getElementById("portal-reset");
  if (reset) {
    reset.addEventListener("click", () => {
      if (!supportsStorage()) {
        return;
      }
      localStorage.removeItem(STORAGE_KEYS.liveState);
      localStorage.removeItem(STORAGE_KEYS.orders);
      bootstrapStorage();
      renderPortal();
      renderPortalOrders();
      updatePortalStats();
    });
  }

  function renderPortal() {
    root.innerHTML = getBakeryRecords().map((bakery) => `
      <article class="dashboard-card">
        <div class="live-card-head">
          <div>
            <strong>${bakery.name}</strong>
            <div class="card-note">${bakery.address}</div>
          </div>
          <span class="status-pill ${formatStatusClass(bakery.status)}">${bakery.status}</span>
        </div>
        <form class="portal-form" data-bakery-id="${bakery.id}">
          <div class="field">
            <label for="status-${bakery.id}">Current status</label>
            <select id="status-${bakery.id}" name="status">
              <option value="Baking now" ${bakery.status === "Baking now" ? "selected" : ""}>Baking now</option>
              <option value="Busy window" ${bakery.status === "Busy window" ? "selected" : ""}>Busy window</option>
              <option value="Closed for today" ${bakery.status === "Closed for today" ? "selected" : ""}>Closed for today</option>
            </select>
          </div>
          <div class="field">
            <label for="schedule-${bakery.id}">Schedule</label>
            <input id="schedule-${bakery.id}" name="schedule" type="text" value="${bakery.schedule}">
          </div>
          <div class="field">
            <label for="note-${bakery.id}">Bakery note</label>
            <textarea id="note-${bakery.id}" name="note">${bakery.note}</textarea>
          </div>
          <div class="metric-row">
            <label for="inventory-${bakery.id}">Featured stock</label>
            <input id="inventory-${bakery.id}" name="featuredInventory" type="range" min="0" max="30" value="${bakery.featuredInventory}">
            <span class="metric-value">${bakery.featuredInventory}</span>
          </div>
          <div class="metric-row">
            <label for="slots-${bakery.id}">Custom slots</label>
            <input id="slots-${bakery.id}" name="customSlots" type="range" min="0" max="10" value="${bakery.customSlots}">
            <span class="metric-value">${bakery.customSlots}</span>
          </div>
          <div class="metric-row">
            <label for="lead-${bakery.id}">Lead time</label>
            <input id="lead-${bakery.id}" name="leadTime" type="range" min="30" max="150" step="5" value="${bakery.leadTime}">
            <span class="metric-value">${bakery.leadTime}m</span>
          </div>
        </form>
      </article>
    `).join("");

    root.querySelectorAll(".portal-form").forEach((form) => {
      const syncValues = () => {
        form.querySelectorAll(".metric-row").forEach((row) => {
          const input = row.querySelector('input[type="range"]');
          const value = row.querySelector(".metric-value");
          value.textContent = input.name === "leadTime" ? `${input.value}m` : input.value;
        });
      };

      syncValues();
      form.addEventListener("input", () => {
        syncValues();
        persistPortalForm(form);
      });
      form.addEventListener("change", () => {
        persistPortalForm(form);
      });
    });
  }

  function persistPortalForm(form) {
    const bakeryId = form.dataset.bakeryId;
    const formData = new FormData(form);
    const nextState = getLiveState().map((record) => {
      if (record.id !== bakeryId) {
        return record;
      }

      return {
        ...record,
        status: String(formData.get("status")),
        schedule: String(formData.get("schedule")),
        note: String(formData.get("note")),
        featuredInventory: Number(formData.get("featuredInventory")),
        customSlots: Number(formData.get("customSlots")),
        leadTime: Number(formData.get("leadTime"))
      };
    });

    saveLiveState(nextState);
    updatePortalStats();
  }
}

function renderPortalOrders() {
  const root = document.getElementById("portal-orders");
  if (!root) {
    return;
  }

  const orders = getOrders()
    .slice()
    .sort((left, right) => new Date(right.createdAt) - new Date(left.createdAt))
    .slice(0, 8);

  root.innerHTML = `
    <div class="orders-list">
      ${orders.map((order) => `
        <article class="order-item">
          <strong>${order.id} - ${order.customerName}</strong>
          <div>${order.bakeryName}</div>
          <div>${order.itemName}</div>
          <div>${formatCurrency(order.total)} - ${order.payment}</div>
          <div class="card-note">${formatDateTime(order.createdAt)}</div>
        </article>
      `).join("")}
    </div>
  `;
}

function updatePortalStats() {
  const root = document.getElementById("portal-stats");
  if (!root) {
    return;
  }

  const bakeries = getBakeryRecords();
  const orders = getOrders();
  const openCount = bakeries.filter((item) => !item.status.toLowerCase().includes("closed")).length;
  const stockCount = bakeries.reduce((sum, item) => sum + item.featuredInventory, 0);
  const slots = bakeries.reduce((sum, item) => sum + item.customSlots, 0);

  root.innerHTML = `
    <span class="metric-pill is-baking">${openCount} bakeries live</span>
    <span class="metric-pill is-busy">${slots} custom slots left</span>
    <span class="metric-pill is-closed">${orders.length} orders in feed</span>
    <span class="metric-pill is-baking">${stockCount} pastries in stock</span>
  `;
}

function startPortalClock() {
  const root = document.getElementById("portal-clock");
  if (!root || root.dataset.bound === "true") {
    return;
  }

  root.dataset.bound = "true";
  const paint = () => {
    root.textContent = `Live portal clock: ${new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit"
    })}`;
  };
  paint();
  window.setInterval(paint, 1000);
}

function refreshDynamicViews() {
  if (document.getElementById("live-bakery-strip")) {
    initLandingPage();
  }
  if (document.getElementById("about-partners")) {
    initAboutPage();
  }
  if (document.getElementById("bakery-showcase")) {
    initBakeriesPage();
  }
  if (document.getElementById("portal-grid")) {
    renderPortalOrders();
    updatePortalStats();
  }
}
