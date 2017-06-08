'use strict';

var projectView = {};

projectView.handleMainNav = function () {
    $('#main-nav li.tab').on('click', function() {
        console.log('clicked!');
        $('.tab-content').hide();
        var clickedTab = $(this).data('content');
        $('#' + clickedTab).show();
    });
    $('.main-nav .tab:first').click();
};

$(document).ready(function () {
    projectView.handleMainNav();
});
