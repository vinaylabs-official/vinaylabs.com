(function () {
  // Mobile menu
  var btn = document.querySelector('.menu-btn'), nav = document.getElementById('nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }
  // Course filter
  var chips = document.querySelectorAll('.chip');
  chips.forEach(function (c) {
    c.addEventListener('click', function () {
      chips.forEach(function (x) { x.classList.remove('on'); });
      c.classList.add('on');
      var f = c.getAttribute('data-filter');
      document.querySelectorAll('#course-grid .course').forEach(function (card) {
        var tags = (card.getAttribute('data-tags') || '').split(' ');
        card.classList.toggle('hide', f !== 'all' && tags.indexOf(f) === -1);
      });
    });
  });
})();
