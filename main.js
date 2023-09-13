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

const navBar = document.querySelector(".nav-bar");
const a_click = document.querySelectorAll(".nav-bar a");

a_click.forEach((a) => {
  a.addEventListener("click", () => {
    a_click.forEach((navItem) => {
      navItem.classList.remove("nav-active");
    });
    a.classList.add("nav-active");
  });
});

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const topOffsetThreshold = 100; // Adjust this value as needed

  // Check if the user has scrolled below the top offset threshold
  if (scrollY > topOffsetThreshold) {
    navBar.style.backgroundColor = "rgba(243, 240, 235, 1)"; // Set your desired color
  } else {
    // If at the top, make the background color transparent
    navBar.style.backgroundColor = "rgba(243, 240, 235, 0)"; // Transparent background
  }
});
