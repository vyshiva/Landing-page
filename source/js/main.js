(function() {
  //Add event listener for open form button

  var openFormButton = document.querySelector('.arrow-down');
  var form = document.querySelector('.form');

  if (openFormButton){
    openFormButton.addEventListener('click', function(e) {
      e.preventDefault();
      main.form.open();
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      if (main.form.isValid()){
        console.log('All is OK!');
      } else {
        console.log('Is not valid');
      }
    });
  }
})();
