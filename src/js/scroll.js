import { refs } from '../js/refs';
const handleButtonClick = function () {
  refs.hiddenElement.scrollIntoView({ block: 'start', behavior: 'smooth' });
};
export default handleButtonClick;
