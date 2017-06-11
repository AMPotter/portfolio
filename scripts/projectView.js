'use strict';

var projectView = {};

projectView.handleMainNav = function () {
    $('#main-nav').on('click', 'a', function() {
        $('.tab-content').hide();
        var clickedTab = $(this).parent().data('content');
        $('#' + clickedTab).show();
    });
    $('.main-nav .tab:first').click();
};

projectView.initIndex = function () {
    $('.tab-content').hide();
    $('#home-tab').show();
};

projectView.menuToggle = function () {
    $('#icons-and-tabs ul').hide();
    $('.icon-menu').on('click', function () {
        $('#icons-and-tabs ul').toggle();
    });
};

$(document).ready(function () {
    projectView.menuToggle();
    projectView.initIndex();
    projectView.handleMainNav();
});
