const overlay = document.querySelector(".youtube-player-overlay");
const yt_img = document.querySelectorAll(".yt-img");
const yt_pop_up = document.querySelector(".youtube-pop-up iframe");

yt_img.forEach((yt) => {
  yt.addEventListener("click", () => {
    overlay.classList.add("active");
    let data_link = yt.getAttribute("data-link");
    let link = `https://www.youtube.com/embed/${data_link}`;
    yt_pop_up.src = link;
    console.log(yt_pop_up.src);
  });
});

overlay.addEventListener("click", () => {
  overlay.classList.remove("active");
  const videoSrc = yt_pop_up
    .getAttribute("src")
    .replace("?autoplay=1", "?autoplay=0");
  yt_pop_up.setAttribute("src", videoSrc);
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
});

document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
  }),
);

const mediaQuery = window.matchMedia("(min-width: 600px)");

const handleMedia = (mediaQuery) => {
  const handleScrool = () => {
    const scrollY = window.scrollY;
    const topOffsetThreshold = 100; // Adjust this value as needed
    // Check if the user has scrolled below the top offset threshold
    if (mediaQuery.matches) {
      if (scrollY > topOffsetThreshold) {
        navMenu.style.backgroundColor = "rgba(20, 45, 76,1)"; // Set your desired color
      } else {
        // If at the top, make the background color transparent
        navMenu.style.backgroundColor = "rgba(20, 45, 76,0)"; // Transparent background
      }
    }
  };
  handleScrool();
  window.addEventListener("scroll", handleScrool);
};
handleMedia(mediaQuery);

function setBody() {
  var message = document.getElementById("message").value;
  var mailtoLink =
    "mailto:unedo.tampubolon@gmail.com?subject=Get in touch&body=" + message;
  console.log(mailtoLink);
  document.getElementById("emailForm").action = mailtoLink;
}
