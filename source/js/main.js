(function() {
  //Add event listener for open form button

  var openFormButton = document.querySelector('.arrow-down');
  var form = document.querySelector('.form');
  var nav = document.querySelector('.nav');

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

  if (nav) {
    nav.addEventListener('click', function(e) {
      var target = e.target;
      if (target.tagName.toLowerCase() !== 'a'){
        console.log('Not a');
        return;
      }
      e.preventDefault();
      main.navigation.toggleToActiveLink(target);
    });
  }
})();
