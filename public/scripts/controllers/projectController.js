'use strict';

(function (module) {
  const projectController = {};

  projectController.init = () => {
    app.projectView.initIndexPage();
    app.Project.fetchAll();
  }

  module.projectController = projectController;
})(app);