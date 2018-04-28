'use strict';

(function () {
  var ARRAY_WIZARD_LENGTH = 4;
  var EYES_COLORS = ['black', 'red', 'blue', 'yellow', 'green'];
  var CLOTHES_COLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
  var FIREBALLS_COLORS = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

  var wizards = [];

  window.data = {
    numberOfWizards: ARRAY_WIZARD_LENGTH,
    eyesColors: EYES_COLORS,
    fireballsColors: FIREBALLS_COLORS,
    coatColors: CLOTHES_COLORS,
    wizards: wizards
  };
})();

