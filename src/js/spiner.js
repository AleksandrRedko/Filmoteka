const loader = document.querySelector('.mask');

export const spinerOf = function () {
  loader.classList.remove('hide');
};
export const spinerOn = function () {
  loader.classList.add('hide');
};
