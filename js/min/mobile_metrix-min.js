$(document).ready(function(){$(".carousel").carousel(),$.getJSON("health-determinants.json",function(e){console.log(e);var t=$("#metrixTemplate").html(),l=Mustache.to_html(t,e);$("#mobile-metrix .carousel-inner").html(l),$("#mobile-metrix .item:first-child").addClass("active")})});