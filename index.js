document.querySelectorAll('.accordion').forEach(item => {
  const title = item.querySelector('.accordion-title');

  title.addEventListener('click', () => {
    document.querySelectorAll('.accordion').forEach(acc => {
      if (acc !== item) acc.classList.remove('active');
    });

    item.classList.toggle('active');
  });
});