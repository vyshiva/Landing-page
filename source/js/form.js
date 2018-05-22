(function() {
  var me = {};
  var form = document.querySelector('.form-container');
  var closeButton = null;

  function onClose(e) {
    e.preventDefault();
    me.close();
    closeButton.removeEventListener('click', onClose);
  }

  function onCloseEsc(e) {
    if (e.key === 'Escape') {
      me.close();
      document.removeEventListener('keydown', onCloseEsc);
    }
  }

  me.open = function () {
    form.classList.remove('is-hidden');

    closeButton = document.querySelector('.form__close-button');
    closeButton.addEventListener('click', onClose);

    document.addEventListener('keydown', onCloseEsc);
  };

  me.close = function () {
    form.classList.add('is-hidden');
  };

  me.isValid = function() {
    var requiredFields = document.querySelectorAll("[data-valid='required']");
    var emailValue = document.querySelector('[data-email]').value;
    var numberValue = document.querySelector('[data-number]').value;
    
    if (!me.isAllCompleted(requiredFields)){
      console.log('Please, fill in the required fields');
      return false;
    } else if (!main.validation.isEmail(emailValue)){
      console.log('Email is not correct!');
      return false;
    } else if (!main.validation.isNumber(numberValue)){
      console.log('Phone is not correct!');
      return false;
    }
    return true;
  };

  me.isAllCompleted = function(data) {
    var result = true;
    for (var i = 0; i < data.length; i++) {
      if (!main.validation.isNotEmpty(data[i].value)){
        result = false;
        break;
      }
    }
    return result;
  };

  main.form = me;
})();
