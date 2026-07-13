// Gallery items — each entry points at whatever filename the picture
// actually has in /images/. Add new pictures to the END of this list —
// the gallery displays newest first (it reverses this array when rendering).
const items = [
  { file: "Screenshot 2025-08-12 204648.png", title: "Aug 12, 2025 — First Unique Monster Hunt" },
  { file: "Screenshot 2025-08-15 201522.png", title: "Aug 15, 2025 — My very first Squad" },
  { file: "Screenshot 2025-08-16 045518.png", title: "Aug 16, 2025 — Venatus FFA" },
  { file: "Screenshot 2025-08-16 200526.png", title: "Aug 16, 2025 — I Found Katarina on League of Legends Ft(Raspberri)" },
  { file: "image40.png", title: "Aug 19, 2025 — Crumbled Palace Tomb Dungeon Run" },
  { file: "image41.png", title: "Aug 21, 2025 — Character Portrait at Crescent Lake" },
  { file: "image42.png", title: "Aug 21, 2025 — Before the Storm" },
  { file: "image-1783876844760.webp", title: "Aug 23, 2025 — Chumeng Vs Arsha/WASALAKPH" },
  { file: "image43.png", title: "Aug 23, 2025 — Coldhearted Breath Eclosia Guild Boss" },
  { file: "image44.png", title: "Aug 23, 2025 — First Garbana" },
  { file: "image45.png", title: "Aug 23, 2025 — Pushing Trials" },
  { file: "image46.png", title: "Aug 23, 2025 — Arsha Carry" },
  { file: "image47.png", title: "Aug 24, 2025 — Tomb of Tyrosia Nemesis" },
  { file: "image48.png", title: "Aug 29, 2025 — Weekly Wasalak Unique Hunt" },
  { file: "image-1783876869986.webp", title: "Sept 27, 2025 — On WASALAKPH GUILD Rally" },
  { file: "image37.png", title: "Sept 30, 2025 — Almost 50k CP" },
  { file: "image-1783876860408.webp", title: "Oct 2, 2025 — Setting up a party for ROTCph" },
  { file: "image-1783876865393.webp", title: "Oct 7, 2025 — WASALAKPH Uniform Screenshot" },
  { file: "Screenshot 2026-07-13 081313.png", title: "Oct 9, 2025 — Orthan Hunt" },
  { file: "Screenshot 2025-10-22 014739.png", title: "Oct 22, 2025 — Revolts Transfer on d9" },
  { file: "Screenshot 2025-10-22 014904.png", title: "Oct 22, 2025 — Revolt Vs PhenixZ 1hour war in Baron Braudmore" },
  { file: "Screenshot 2025-10-25 190203.png", title: "Oct 25, 2025 — This Guy is Afk while were doing main quest Ft(SwifT)" },
  { file: "image25.png", title: "Nov 8, 2025 — First Deadman's land encounter" },
  { file: "image39.png", title: "Nov 26, 2025 — Treasure Protector World Boss Fight" },
  { file: "image-1783876873816.webp", title: "Dec 19, 2025 — First Ego In Medea 5" },
  { file: "image-1783876879778.webp", title: "Dec 21, 2025 — Last Guild Boss on ROTCph" },
  { file: "image-1783876882826.webp", title: "Dec 21, 2025 — Guild Boss Aftermath Goodbye's" },
  { file: "image-1783876885832.webp", title: "Dec 25, 2025 — First Amentis on Medea 5 Hunt" },
  { file: "image-1783876890644.webp", title: "Jan 7, 2026 — Joining PhenixZ on Douglas 9" },
  { file: "image-1783876893548.webp", title: "Jan 7, 2026 — PhenixZ's Teshi?" },
  { file: "image.png", title: "Jan 7, 2026 — Revolt Inner Conflict Created a new opening" },
  { file: "Screenshot 2026-01-15 205809.png", title: "Jan 15, 2026 — Arena 5v5 With Friends in Thai" },
  { file: "image23.png", title: "Jan 16, 2026 — First Interaction with This Guy's" },
  { file: "image22.png", title: "Jan 17, 2026 — KalaMang's Last Stand" },
  { file: "image21.png", title: "Feb 4, 2026 — Volcano Dracas Early Release Bug" },
  { file: "image20.png", title: "Feb 6, 2026 — Strongest Guy Hit the Cockcroach" },
  { file: "image2.png", title: "Feb 7, 2026 — Medea Server Transfer to Medea3 First War" },
  { file: "image3.png", title: "Feb 8, 2026 — Aztecs Took Over Medea 3" },
  { file: "Screenshot_20260219_024630.jpg", title: "Feb 19, 2026 — KalaMang Riding a horse in Boss Room" },
  { file: "image38.png", title: "Feb 24, 2026 — First Rakajeth Raid" },
  { file: "image18.png", title: "Mar 2, 2026 — PvP Duel vs Dix01" },
  { file: "image17.png", title: "Mar 13, 2026 — Guild Feast Name of the Plate is Kingwhitez" },
  { file: "image16.png", title: "Mar 21, 2026 — Servant of the Empire Squad" },
  { file: "image15.png", title: "Mar 22, 2026 — World Boss Event Lagged" },
  { file: "image14.png", title: "Mar 22, 2026 — Guild Base PhenixZ Ph Meeting About Flood Control" },
  { file: "image13.png", title: "Mar 24, 2026 — The First Complete Squad Gathering" },
  { file: "image12.png", title: "Mar 25, 2026 — Veridon Vs. PhenixZ Little one's" },
  { file: "image11.png", title: "Mar 28, 2026 — Story Cutscene kissing scene with Dix01" },
  { file: "image10.png", title: "Mar 31, 2026 — Servant of the Empire Bullied the Bully" },
  { file: "image9.png", title: "Apr 1, 2026 — Cool Unique monster fight Scene" },
  { file: "image8.png", title: "Apr 5, 2026 — Thumbnail For Drama Ft PhenixZ(Angela) Legs" },
  { file: "image7.png", title: "Apr 7, 2026 — Silvergrass Field Conflict Guild Leader Rampage" },
  { file: "image6.png", title: "Apr 8, 2026 — This Tiger is Wild" },
  { file: "image5.png", title: "Apr 15, 2026 — The Scorpion Team Created!" },
  { file: "image24.png", title: "Apr 15, 2026 — Scorpion Shits" },
  { file: "image26.png", title: "Apr 19, 2026 — First Benji 1v1 MQ Got Annihilated" },
  { file: "image27.png", title: "Apr 21, 2026 — Trying To Scare a friend" },
  { file: "image28.png", title: "Apr 21, 2026 — 100k CP Hit" },
  { file: "image4.png", title: "Apr 26, 2026 — Medea Quitting" },
  { file: "image29.png", title: "Apr 29, 2026 — First Step on New Kransia Map" },
  { file: "image30.png", title: "Apr 29, 2026 — This Squad is really Trying Something Stupid" },
  { file: "image31.png", title: "May 2, 2026 — World Dungeon" },
  { file: "Screenshot_20260509_224227.jpg", title: "May 9, 2026 — Far Beyond skill marks" },
  { file: "image32.png", title: "Jun 1, 2026 — Spot Issue" },
  { file: "image33.png", title: "Jun 2, 2026 — Soldiers" },
  { file: "image35.png", title: "Jul 10, 2026 — Still With The Crazy Squad" },
  { file: "image36.png", title: "Jul 11, 2026 — One of the funiest boss raids" },
  { file: "image34.png", title: "Jul 12, 2026 — The Douglas 9 Intense Dungeon war" },
];

const palette = [
  ["#1a1420", "#8a5cf6"],
  ["#1c1408", "#cdaa6d"],
  ["#0f1420", "#4d7ea8"],
  ["#1a1010", "#b8562f"],
];

function placeholderDataUrl(label, seed){
  const [bg, accent] = palette[seed % palette.length];
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <defs>
        <radialGradient id="g" cx="50%" cy="30%" r="80%">
          <stop offset="0%" stop-color="${accent}" stop-opacity="0.55"/>
          <stop offset="100%" stop-color="${bg}" stop-opacity="1"/>
        </radialGradient>
      </defs>
      <rect width="400" height="300" fill="${bg}"/>
      <rect width="400" height="300" fill="url(#g)"/>
      <text x="50%" y="52%" font-family="Georgia, serif" font-size="17" fill="${accent}"
        text-anchor="middle" letter-spacing="2">${label}</text>
      <text x="50%" y="62%" font-family="Georgia, serif" font-size="11" fill="#cfc9bb"
        text-anchor="middle" letter-spacing="1" opacity="0.7">place image in /images/</text>
    </svg>`;
  return "data:image/svg+xml;base64," + btoa(svg);
}

const displayedItems = items.slice().reverse();
const grid = document.getElementById("gallery-grid");

displayedItems.forEach((item, i) => {
  const tile = document.createElement("div");
  tile.className = "tile reveal";
  tile.style.transitionDelay = `${(i % 6) * 0.08}s`;

  const img = document.createElement("img");
  img.src = `images/${item.file}`;
  img.alt = item.title;
  img.onerror = () => { img.onerror = null; img.src = placeholderDataUrl(item.title, i); };

  const label = document.createElement("div");
  label.className = "tile-label";
  label.textContent = item.title;

  tile.appendChild(img);
  tile.appendChild(label);
  tile.addEventListener("click", () => openLightbox(i));

  grid.appendChild(tile);
});

// Lightbox
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const lightboxCaption = document.getElementById("lightbox-caption");
const lightboxPrev = document.getElementById("lightbox-prev");
const lightboxNext = document.getElementById("lightbox-next");

const lightboxImageWrap = document.querySelector(".lightbox-image-wrap");
let currentIndex = 0;

// Sizes the image wrapper to the image's actual rendered box (respecting the
// 88vw/78vh caps), so the nav buttons — anchored to the wrapper's edges — line
// up with the image itself instead of a box that's wider than what's shown.
function sizeLightboxImage(){
  const natW = lightboxImg.naturalWidth;
  const natH = lightboxImg.naturalHeight;
  if (!natW || !natH) return;
  const maxW = window.innerWidth * 0.88;
  const maxH = window.innerHeight * 0.78;
  let w = maxW;
  let h = (maxW * natH) / natW;
  if (h > maxH) {
    h = maxH;
    w = (maxH * natW) / natH;
  }
  lightboxImageWrap.style.width = `${w}px`;
  lightboxImageWrap.style.height = `${h}px`;
  positionLightboxNav(w);
}

// Floats the nav buttons just outside the image when there's room in the
// backdrop for them; falls back to a dimmed overlay near the edge for
// narrow-rendered images (e.g. tall/portrait screenshots) so they never
// cover much of a small picture.
function positionLightboxNav(imgWidth){
  const sideMargin = (window.innerWidth - imgWidth) / 2;
  const outsideNeeds = 90;
  const outside = sideMargin >= outsideNeeds;

  lightboxPrev.classList.toggle("overlay", !outside);
  lightboxNext.classList.toggle("overlay", !outside);
  lightboxPrev.style.left = outside ? "-74px" : "10px";
  lightboxNext.style.right = outside ? "-74px" : "10px";
}
lightboxImg.addEventListener("load", sizeLightboxImage);
window.addEventListener("resize", () => {
  if (lightbox.classList.contains("open")) sizeLightboxImage();
});

function showLightboxImage(index){
  currentIndex = (index + displayedItems.length) % displayedItems.length;
  const item = displayedItems[currentIndex];
  const tileImg = grid.children[currentIndex].querySelector("img");

  lightboxImg.classList.add("switching");
  window.setTimeout(() => {
    lightboxImg.src = tileImg.src;
    lightboxCaption.textContent = item.title;
    lightboxImg.classList.remove("switching");
  }, 150);
}

function openLightbox(index){
  currentIndex = index;
  const item = displayedItems[currentIndex];
  const tileImg = grid.children[currentIndex].querySelector("img");
  lightboxImg.src = tileImg.src;
  lightboxCaption.textContent = item.title;
  lightbox.classList.add("open");
}

lightboxPrev.addEventListener("click", (e) => {
  e.stopPropagation();
  showLightboxImage(currentIndex - 1);
});
lightboxNext.addEventListener("click", (e) => {
  e.stopPropagation();
  showLightboxImage(currentIndex + 1);
});

document.getElementById("lightbox-close").addEventListener("click", () => {
  lightbox.classList.remove("open");
});
lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) lightbox.classList.remove("open");
});
document.addEventListener("keydown", (e) => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") lightbox.classList.remove("open");
  if (e.key === "ArrowRight") showLightboxImage(currentIndex + 1);
  if (e.key === "ArrowLeft") showLightboxImage(currentIndex - 1);
});

// Scroll-in reveal for tiles and other marked sections
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

// Gallery ambient background wash — toggles on as the section scrolls
// into view (and off again if you scroll back up), pairing with the
// title's letter-spacing/glow reveal above.
const gallerySection = document.querySelector(".gallery");
if (gallerySection) {
  const galleryBgObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      gallerySection.classList.toggle("in-view", entry.isIntersecting);
    });
  }, { threshold: 0.15 });
  galleryBgObserver.observe(gallerySection);
}

// Hero parallax fade — content drifts up and fades out as the hero scrolls away,
// like a scene transition into the gallery below.
const heroSection = document.querySelector(".hero");
const heroContent = document.querySelector(".hero-content");
const scrollCue = document.querySelector(".scroll-cue");
const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (heroSection && heroContent && !reduceMotion) {
  let heroTicking = false;
  const updateHeroParallax = () => {
    const progress = Math.min(1, window.scrollY / heroSection.offsetHeight);
    heroContent.style.opacity = String(1 - progress);
    heroContent.style.transform = `translateY(${progress * 70}px)`;
    if (scrollCue) scrollCue.style.opacity = String(0.7 * (1 - progress * 2.5));
    heroTicking = false;
  };
  window.addEventListener("scroll", () => {
    if (!heroTicking) {
      heroTicking = true;
      requestAnimationFrame(updateHeroParallax);
    }
  }, { passive: true });
  updateHeroParallax();
}
