import { refs } from './refs';
const scrollUp = function () {
  refs.hiddenElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
};

export default scrollUp;
