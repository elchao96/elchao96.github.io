$(document).ready(function() {
    console.log('Hello');
    $.getJSON('data.json').done(function(data) {
        var socialTemplate = Mustache.render($('#social-media-template').html(), data);
        $('#social-media').html(socialTemplate);
        var projectTemplate = Mustache.render($('#project-template').html(), data);
        $('.projects').html(projectTemplate);
        $('.projects').slick({
            centerMode: true
        });
    });
});