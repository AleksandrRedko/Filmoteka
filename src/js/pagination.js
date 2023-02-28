import createPagination from '../templates/pagination.hbs';
import scrollUp from './scroll';

const paginationGenerator = (current, last, delta = 2) => {
  const left = current - delta;
  const right = current + delta;
  const range = [];
  const rangeWithDots = [];
  const dots = '...';
  let previous = null;

  for (let i = 1; i <= last; i += 1) {
    if (i === 1 || i === last || (i >= left && i <= right)) {
      range.push(i);
    } else if (i > right) {
      range.push(last);
      break;
    }
  }

  range.forEach((page, index) => {
    if (previous && page - previous !== 1) {
      rangeWithDots.push({ page: dots, current: false, dots: true });
    }
    page === current
      ? rangeWithDots.push({ page: page, data: index, current: true, dots: false })
      : rangeWithDots.push({ page: page, data: index, current: false, dots: false });
    previous = page;
  });

  return rangeWithDots;
};

function renderPagination(current, pages, list, paginationList) {
  if (pages <= 1) {
    paginationList.classList.add('visual-hidden');
    return;
  }

  paginationList.classList.remove('visual-hidden');
  list.innerHTML = createPagination(paginationGenerator(current, pages));

  disableUnnecessaryArrows(current, pages);
}

export function activatePagination({ current, pages, list, paginationList }) {
  renderPagination(current, pages, list, paginationList);

  paginationList.addEventListener('click', (e) => {
    if (!e.target.dataset.pg) {
      return;
    }

    if (e.target.dataset.pg === 'right') {
      if (current !== pages) {
        current += 1;

        renderPagination(current, pages, list, paginationList);
        scrollUp();
      }
      return;
    }

    if (e.target.dataset.pg === 'left') {
      if (current !== 1) {
        current -= 1;

        renderPagination(current, pages, list, paginationList);
        scrollUp();
      }
      return;
    }

    if (e.target.dataset.pg) {
      current = +e.target.dataset.pg;

      renderPagination(current, pages, list, paginationList);
      scrollUp();

      return;
    }
  });
}

function disableUnnecessaryArrows(current, pages) {
  const arrows = {
    left: document.querySelector('.pagination__btn--left'),
    right: document.querySelector('.pagination__btn--right'),
  };
  if (arrows.left.disabled === true || arrows.right.disabled === true) {
    arrows.left.disabled = false;
    arrows.right.disabled = false;
  }
  if (current === 1) {
    arrows.left.disabled = true;
    return;
  }
  if (current === pages) {
    arrows.right.disabled = true;
    return;
  }
}
