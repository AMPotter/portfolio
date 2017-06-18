'use strict';

const projectView = {};

projectView.handleMainNav = function () {
  $('.main-nav').on('click', '.tab', function() {
    $('.tab-content').hide();
    $(`#${$(this).data('content')}`).fadeIn();
  });
  $('.main-nav .tab:first').click();
};

// projectView.initIndexPage = function () {
//   $('.tab-content').hide();
//   $('#home-tab').show();
//   $('#project-json').on('focus', function(){
//     this.select();

//   });
// };

projectView.menuToggle = function () {
  $('#icons-and-tabs ul').hide();
  $('.icon-menu').on('click', function () {
    $('#icons-and-tabs ul').toggle();
  })
};

// $(document).ready(function () {
//   projectView.menuToggle();
//   projectView.initIndexPage();
//   projectView.handleMainNav();
// });

projectView.initIndexPage = function() {
  Project.all.forEach(function(project) {
    $('#projects').append(project.toHtml());
  });

  projectView.handleMainNav();
}