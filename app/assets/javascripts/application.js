// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, or any plugin's
// vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require rails-ujs
//= require activestorage
//= require jquery3
//= require materialize
//= require turbolinks
//= require_tree .

$(document).on('turbolinks:load', function() {
  $(".dropdown-trigger").dropdown();
  $(".sidenav").sidenav();
  $(".carousel").carousel();
  $(".materialboxed").materialbox();
  $(".scrollspy").scrollSpy();
  $(".slider").slider();
})

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 850 || document.documentElement.scrollTop > 850) {
    document.getElementById("nav-wrapper").style.padding = "35px 15px";
    document.getElementById("brand-logo").style.fontSize = "30px";
  } else {
    document.getElementById("nav-wrapper").style.padding = "70px 10px";
    document.getElementById("brand-logo").style.fontSize = "35px";
  }
}