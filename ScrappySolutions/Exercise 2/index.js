/*
Copyright (c) 2016 Phaze Space Productions Pty. Ltd.
Copyright (c) 2016 Andrew McDonnell

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/

/* This construction is an "IIFE" used to prevent accidental duplicate exection of Javascript code. */
(function() {

// Using three almost identical event handlers is not an efficient way to code.
// We do it this way here to illustrate the concept

function page1ClickHandler(e) {
  // This is a debug message, used to help diagnose problems in the code
  console.log('Inside function page1ClickHandler');
  // Hide all pages again
  $('.my-page').hide();
  // Show the next page
  $('#page-2').show();
}

function page2ClickHandler(e) {
  // This is a debug message, used to help diagnose problems in the code
  console.log("Inside function page2ClickHandler");
  // Hide all pages again
  $('.my-page').hide();
  // Show the next page
  $('#page-3').show();
}

function page3ClickHandler(e) {
  // This is a debug message, used to help diagnose problems in the code
  console.log('Inside function page3ClickHandler');
  // Hide all pages again
  $('.my-page').hide();
  // Show the last page
  $('#page-4').show();
}

function backButtonHandler(event) {
  // This is a debug message, used to help diagnose problems in the code
  console.log('Inside function backButtonHandler');

  // Make sure the page click handler doesnt also get called
  event.stopPropagation();

  // Here, we "work out" which page we are on and where to go to
  var pageRef = $(event.target).parent().parent();

  // Strip off the 'page-' - 5 characters, positions 0 through 4 - from the start
  pageRef = pageRef.prop('id');
  pageRef = pageRef.substr(5);
  // Use the MDN to discover other things you can do with strings
  // e.g. https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith

  console.log("Inside function backButtonHandler, on page " + pageRef);

  pageRef = pageRef - 1; // go back one page

  // Sanity check nothing has gone wrong
  if (pageRef >= 1 && pageRef <= 4) {
    // Hide all pages again
    $('.my-page').hide();
    // Show the desired page
    var id = '#page-' + pageRef;
    $(id).show();
  }

}

// This is the first function run after the page HTML file finished loading
$( document ).ready(function() {
  console.log('Scrappy Solution #2');

  // Remove the default hidden flag from all things with class 'my-page'
  $('.my-page').removeAttr('hidden');

  // And hide all using the jquery way of doing it - display:none
  $('.my-page').hide();

  // Show the first page
  $('#page-1').show();

  // Set up the click event handlers for the pages
  $('#page-1').on('click', page1ClickHandler);
  $('#page-2').on('click', page2ClickHandler);
  $('#page-3').on('click', page3ClickHandler);

  // Set up the click event handlers for the buttons
  $('.my-button').on('click', backButtonHandler);
});

})();
