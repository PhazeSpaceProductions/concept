(function() { /* This is an "IIFE" used to prevent accidental duplication */

// The following three event handlers are not how you would really do it
// We do it this way here to illustrate the concept

function page1ClickHandler(e) {
  // This is a debug message, used to help diagnose problems in the code
  console.log("Inside function page1ClickHandler");
  // Hide all pages again
  $('.my-page').hide();
  // Show the next page
  $('#page-2').show();
}

function page2ClickHandler(e) {
  // Hide all pages again
  $('.my-page').hide();
  // Show the next page
  $('#page-3').show();
}

function page3ClickHandler(e) {
  // Hide all pages again
  $('.my-page').hide();
  // Show the last page
  $('#page-4').show();
}

function backButtonHandler(event) {
  // Hide all pages again
  $('.my-page').hide();

  // Make sure the page click handler doesnt also get called
  event.stopPropagation();

  // Here, we "work out" which page we are on and where to go to
  var pageRef = $(event.target).parent().parent();
  // Strip off the 'page-' - 5 characters, positions 0 through 4 - from the start
  pageRef = pageRef.prop('id');
  pageRef = pageRef.substr(5);

  console.log("Inside function backButtonHandler, on page " + pageRef);

  pageRef = pageRef - 1; // go back ...

  var id = '#page-' + pageRef;
  $(id).show();

  // Use the MDN to discover other things you can do with strings
  // e.g. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
}

// This is the first function run after the page HTML file finished loading
$( document ).ready(function() {
  console.log("Hello, World");

  // Remove the default hidden flag
  $('.my-page').removeAttr('hidden');

  // And hide all using the jquery method - display:none
  $('.my-page').hide();

  // Show the first page
  $('#page-1').show();

  // Set up the click event handlers
  $('#page-1').on('click', page1ClickHandler);
  $('#page-2').on('click', page2ClickHandler);
  $('#page-3').on('click', page3ClickHandler);

  $('.my-button').on('click', backButtonHandler);
});

})();
