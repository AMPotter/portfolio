'use strict';
var app = app || {};

page('/', app.projectController.init);
page('/projects', app.projectController.init);
page('/about', app.aboutController.init);

page();