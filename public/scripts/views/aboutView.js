'use strict';

var app = app || {};

(function (module) {
  const aboutView = {};

  aboutView.initAboutPage = function() {
    $('.tab-content').hide();
    $('#about').show();
  }

  module.aboutView = aboutView;
})(app);