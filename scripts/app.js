'use strict';

var projects = [];

function Project (rawDataObj) {
    this.title = rawDataObj.title;
    this.projectUrl = rawDataObj.projectUrl;
    this.projectBlurb = rawDataObj.projectBlurb;
}

Project.prototype.toHtml = function () {
    var $newProject = $('article.template').clone();
    $newProject.removeClass('template');
    $newProject.find('h1').html(this.title);
    $newProject.find('.project-blurb').html(this.projectBlurb);
    $newProject.find('.repo-link').attr('href', this.projectUrl);
}

projectData.forEach(function(projectObject){
    projects.push(new Project(projectObject));
});

projects.forEach(function (project){
    $('#projects').append(project.toHtml);
});

