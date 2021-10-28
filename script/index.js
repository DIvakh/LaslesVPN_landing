function renderHeaderShadow() {
  const stickyItem = document.querySelector('.header');

  const observer = new IntersectionObserver(
    ([e]) =>
      e.target.classList.toggle('header-shadow', e.intersectionRatio < 1),
    { threshold: [1] }
  );

  return observer.observe(stickyItem);
}
renderHeaderShadow();

//  =========== Slider Function ==========

function sliderInit() {
  const $cardContainer = document.querySelector('.feedbacks-slide-container');
  const $cards = document.querySelectorAll('.feedbacks-card');
  const $dots = document.querySelectorAll('.dot');
  const $left = document.querySelector('.btn--left');
  const $right = document.querySelector('.btn--right');
  let selectIndex = 0;

  function cardSelect(i) {
    $cards[selectIndex].classList.remove('selected-card');
    $dots[selectIndex].classList.remove('selected-dot');
    selectIndex = i;

    let $card = $cards[selectIndex];
    let $dot = $dots[selectIndex];
    $card.classList.add('selected-card');

    $cardContainer.scrollBy(
      $card.offsetLeft - $cardContainer.offsetLeft - $cardContainer.scrollLeft,
      0
    );
    console.log($card.offsetLeft);
    console.log($cardContainer.offsetLeft);

    $dot.classList.add('selected-dot');
  }

  $left.addEventListener('click', () => {
    if (selectIndex === 0) {
      index = $cards.length - 1;
    } else {
      index = selectIndex - 1;
    }
    cardSelect(index);
  });

  $right.addEventListener('click', () => {
    if (selectIndex === $cards.length - 1) {
      index = 0;
    } else {
      index = selectIndex + 1;
    }
    cardSelect(index);
  });

  $dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
      cardSelect(i);
    });
  });
}

sliderInit();
