(function() {
  var me = {};

  me.isEmail = function(email) {
    var re =  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  };

  me.isNumber = function(num) {
    var re =  /^\d+$/;
    return re.test(num);
  };

  me.isNotEmpty = function(str) {
    return Boolean(str);
  };

  main.validation = me;
})();
