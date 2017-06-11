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

$(document).ready(function () {
    projectView.initIndex();
    projectView.handleMainNav();
});
