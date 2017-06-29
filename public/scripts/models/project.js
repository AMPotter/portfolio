'use strict';
var app = app || {};

(function (module) {
  function Project(rawDataObj) {
    Object.keys(rawDataObj).forEach(key => this[key] = rawDataObj[key]);
  }

  Project.all = [];


  Project.prototype.toHtml = function() {
    let template = Handlebars.compile($('#project-template').html());
    return template(this);
  };

  Project.loadAll = function(rawData) {
    rawData.forEach(function(ele) {
      Project.all.push(new Project(ele));
    })
  }

  Project.fetchAll = function() {
    $.get('github/user/repos')
      .then(data => Project.loadAll(data), err => console.error(err))
  }

  module.Project = Project;
})(app);