const loader = document.querySelector('.mask');

const spinerOf = function () {
  loader.classList.remove('hide');
};
const spinerOn = function () {
  loader.classList.add('hide');
};

export default { spinerOf, spinerOn };
