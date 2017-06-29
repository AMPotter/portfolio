'use strict';

(function (module) {
  const projectController = {};

  projectController.init = () => {
    app.projectView.initIndexPage();
    $('main > section').hide();
    $('#home-tab').show();
  }
  
  module.projectController = projectController;
})(app);