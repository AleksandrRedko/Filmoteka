console.log(22);
const refs = {
  logoRefs: document.querySelector("#logo"),
  homeRefs: document.querySelector("#home"),
  libraryRefs: document.querySelector("#library"),
};

refs.homeRefs.classList.add("current");
// console.log(refs.logoRefs);
const goHome = function (e) {
  e.preventDefault();
};

refs.homeRefs.addEventListener("click", goHome);
refs.logoRefs.addEventListener("click", goHome);
