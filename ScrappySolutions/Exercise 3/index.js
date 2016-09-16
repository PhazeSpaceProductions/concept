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

function teamButtonHandler(event) {
  alert('You chose: ' + $(event.target).text());

  var odds = 100.0 * (Math.random() / 2 + 0.5);

  alert('My prediction of a win is ' + odds.toFixed(0) + '%');
}

function playButtonHandler(event) {
  // This is a debug message, used to help diagnose problems in the code
  console.log('Inside function playButtonHandler');

  // Make sure the page click handler (if any) doesnt also get called
  event.stopPropagation();

  // Show the buttons
  $('#section-game').show();
  $('#section-camera').show();
}

// This one is just for fun - but to also illustrate advanced functionality is possible
function cameraButtonHandler(event) {
  var w = window.open('', '_newTab', 'width=320,height=260');
  w.document.write('If you see nothing you may need to click back and allow camera sharing<div id="camera"></div>');

  Webcam.set({
    width: 320,
    height: 240,
    dest_width: 640,
    dest_height: 480,
    image_format: 'jpeg',
    jpeg_quality: 90
  });
  var element = w.document.getElementById('camera');
  Webcam.attach(element);
}

// This is the first function run after the page HTML file finished loading
$( document ).ready(function() {
  console.log('Scrappy Solution #3');

  // Remove the default hidden flag from all sections
  $('section').removeAttr('hidden');

  // And hide all using the jquery way of doing it - display:none
  $('section').hide();

  // Show the first section
  $('#section-top').show();

  // Set up the click event handlers for the pages
  $('#btn-play').on('click', playButtonHandler);
  $('.btn-team').on('click', teamButtonHandler);
  $('#btn-camera').on('click', cameraButtonHandler);
});

})();
