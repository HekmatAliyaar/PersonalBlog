// Mobile Nav
const btnNavEl = document.querySelector(".btn-moblie-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

// Sticky navigation
const sectionHeroEl = document.querySelector(".header");

const obs = new IntersectionObserver(
  function (entries) {
    const ent = entries[0];
    console.log(ent);
    if (ent.isIntersecting === false) {
      document.querySelector(".nav").classList.add("sticky");
    }
    if (ent.isIntersecting === true) {
      document.querySelector(".nav").classList.remove("sticky");
    }
  },
  {
    //In the viewport
    root: null,
    threshold: 0,
    // rootMargin: "-40px",
  }
);
obs.observe(sectionHeroEl);

///////////////////////////
// Smooth animation behavior

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    let href = link.getAttribute("href");
    // console.log(href);
    //scroll back to top
    if (href === "#") {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    /// scroll to other links
    if (href !== "#" && href.startsWith("#")) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: "smooth" });
    }

    ///close mobile navigation
    if (link.classList.contains("nav__link")) {
      headerEl.classList.toggle("nav-open");
    }
  });
});
