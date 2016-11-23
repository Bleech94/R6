var isMaterial = true;

var currentMap = "bank";
var currentFloor = 0;

// Add the above as global variables for templates
Template7.global = {

};

// If we need to use custom DOM library, let's save it to $$ variable:
var $$ = Dom7;

// And move Navbar into Page
$$('.view .navbar').prependTo('.view .page');

// Initialize app
var myApp = new Framework7({
  material: true,
  animateNavBackIcon: true
});

// Add view
var mainView = myApp.addView('.view-main', {
  // Because we want to use dynamic navbar, we need to enable it for this view:
  dynamicNavbar: true,
  domCache: true,
});

// Handle Cordova Device Ready Event
$$(document).on('deviceready', function deviceIsReady() {
  console.log('Device is ready!');
});

$$(document).on('click', '.item-link', function() {
    currentMap = $$(this).text().toLowerCase();
    console.log("currentMap = " + currentMap);
})

$$(document).on('click', '.floor', function() {
    currentFloor = parseInt($$(this).text());
    console.log("currentFloor = " + currentFloor);
})

function refreshImage() {
    $("#img_container").attr("src","second.jpg");
}
