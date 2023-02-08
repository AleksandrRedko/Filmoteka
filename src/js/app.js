import {refs} from "../js/refs";

refs.homeRefs.classList.add("current");

const goHome = function (e) {
  e.preventDefault();
  refs.homeRefs.classList.add("current");
  refs.libraryRefs.classList.remove("current");

  refs.form.style.display = "flex";
  refs.btn.style.display = "none";
  refs.header.classList.remove("my__library");

  refs.sectionLibrary.style.display = "none";
  refs.sectionHome.style.display = "block";
};

const goLibrary = function (e) {
  e.preventDefault();
  refs.homeRefs.classList.remove("current");
  refs.libraryRefs.classList.add("current");

  refs.form.style.display = "none";
  refs.btn.style.display = "block";

  refs.header.classList.add("my__library");

  refs.sectionHome.style.display = "none";
  refs.sectionLibrary.style.display = "block";
};

refs.homeRefs.addEventListener("click", goHome);
refs.logoRefs.addEventListener("click", goHome);
refs.libraryRefs.addEventListener("click", goLibrary);
