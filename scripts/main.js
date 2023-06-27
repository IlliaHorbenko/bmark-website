function toggleFilter(filterType) {
   var buttons = document.querySelectorAll('.filter');

   buttons.forEach(function(button) {
      if (button.classList.contains(filterType)) {
         button.id = 'active';
      } else {
         button.removeAttribute('id');
      }
   });
}
