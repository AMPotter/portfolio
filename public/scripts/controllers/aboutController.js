'use strict';

var app = app || {};

(function (module) {
  const aboutController = {};

  aboutController.init = () => {
    app.aboutView.initAboutPage();
  }

  module.aboutController = aboutController;
})(app);