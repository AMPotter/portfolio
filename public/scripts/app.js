'use strict';

function Project(rawDataObj) {
  this.title = rawDataObj.title;
  this.img = rawDataObj.img;
  this.projectUrl = rawDataObj.projectUrl;
  this.projectBlurb = rawDataObj.projectBlurb;
}

Project.all = [];

Project.prototype.toHtml = function() {
  let template = Handlebars.compile($('#project-template').text());
  return template(this);
};

Project.loadAll = function(rawData) {
  rawData.forEach(function(ele) {
    Project.all.push(new Project(ele));
  })
}

Project.fetchAll = function() {
  if (localStorage.rawData) {
    Project.loadAll(JSON.parse(localStorage.rawData));
    projectView.initIndexPage();
  } else {
    $.getJSON('/data/projectData.json')
      .then(function(rawData) {
        Project.loadAll(rawData);
        localStorage.rawData = JSON.stringify(rawData);
        projectView.initIndexPage();
      }, function(err) {
        console.error(err);
      });
  }
}
