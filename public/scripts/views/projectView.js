'use strict';
var app = app || {};

(function (module) {
  const projectView = {};

  projectView.menuToggle = function () {
    $('#icons-and-tabs ul').hide();
    $('.icon-menu').on('click', function () {
      $('#icons-and-tabs ul').toggle();
    })
  };

  projectView.initIndexPage = function() {
    app.Project.all.forEach(function(project) {
      $('#projects').append(project.toHtml());
    });

    $('.tab-content').hide();
    $('#projects').show();

  }

  module.projectView = projectView;
})(app);