!function() {
  var i = location.hash.split('#')[1] | 0;
  var total = document.getElementsByClassName('slide').length - 1;

  if (i) {
    go(i);
  }

  document.addEventListener('keyup', function(e){
    if (e.keyCode == 39 || e.keyCode == 32) {
      e.preventDefault();
      doNext();
    } else if (e.keyCode == 37) {
      e.preventDefault();
      doPrev();
    }
  }, false)

  window.addEventListener('hashchange', function(e) {
    go(e.newURL.split('#')[1]|0);
  }, false);

  function go(i) {
    var current = document.querySelector('.current');
    if (!current) {
      return;
    }
    current.classList.remove('current');
    current = document.getElementsByClassName('slide')[i];
    if (!current) {
      return;
    }
    current.classList.add('current');
  }

  function doNext() {
    i = Math.min(total, i + 1);
    location.href = '#' + i;
  }

  function doPrev() {
    i = Math.max(0, i - 1);
    location.href = '#' + i;
  }
}();
