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
