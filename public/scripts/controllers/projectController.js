'use strict';

(function (module) {
  const projectController = {};

  projectController.init = () => {
    app.projectView.initIndexPage();
    app.Project.fetchAll();
    // $('main > section').hide();
    // $('#home-tab').show();
  }

  module.projectController = projectController;
})(app);