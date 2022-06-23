document.addEventListener('DOMContentLoaded',function () {
  document.querySelectorAll('.how__btn').forEach (function (howBtn){
    howBtn.addEventListener ('click',function (event){
      const path=event.currentTarget.dataset.path;

  document.querySelectorAll('.how__btn').forEach(function(btn) {
    btn.classList.remove ('how__btn--active')
  });
  event.currentTarget.classList.add ('how__btn--active');
  
  document.querySelectorAll ('.how-process').forEach(function(howBtn){
    howBtn.classList.remove ('how-process--active')
  });

  document.querySelector (`[data-target="${path}"]`).classList.add ('how-process--active');
  });
  });
});
