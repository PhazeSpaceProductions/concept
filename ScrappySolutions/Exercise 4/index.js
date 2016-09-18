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
(function() {

function onComputerItem(obj) {
  // This log will show the file data you just loaded.
  // JSON.stringify prints as JSON text, rather than [ object ]
  console.log(JSON.stringify(obj));

  // Here we are using jQuery to manipulate the HTML elements (the 'DOM')

  // We want to make a thing that looks like:
  //  <table>
  //    <tr><td> (value) </td><td> (value) </td><td> (value) </td>
  //  </table>

  var tableHeader = '<thead><tr><th>Name</th><th>Year</th><th></th></tr></thead>';

  // This demonstrates one way to build a HTML table.
  // There are more efficient methods...
  // But this shows various javascript examples

  // This is a loop, over each item in the JSON list
  var tableBody = '';
  for (var i=0; i < obj.length; i++) {
    // Make a reference to the item in the list. This is _not_ a copy.
    var item = obj[i];

    // Create the content for each cell
    var cells = [ ];

    cells.push( '<td><a href="' + item.info + '">' + item.name + '</a></td>');
    cells.push( '<td>' + item.released + '</td>');

    var attribution = item['image-attribution'];

    // Beware: danger (well, confusion) lurks here...
    var href = ' onClick=\"javascript:alert(\'' + attribution + '\');\" ';

    cells.push( '<td><a ' + href + '><img class="my-img" src="' + item.image + '"/></a></td>');

    var line = '<tr>' + cells.join('') + '</tr>';

    tableBody = tableBody + line;
  }

  // Demonstrate class manipulation
  var table = $('<table>').append(tableHeader).append(tableBody);
  table.addClass('pure-table').addClass('pure-table-bordered');

  // Attach the table element to the placeholder DIV
  $('#results-table-placeholder').append(table);
}

$( document ).ready(function() {
  console.log('Scrappy Solution #4');

  // This is event driven programming - also known as Asynchronously
  // code runs at a later time in response to events

  // Asynchronously load data, calls the function when ready
  // The 'obj' argument is a javascript object created from the JSON in the file
  d3.json('assets/items.json', function(obj) { onComputerItem(obj); });
});
})();

// 4a: using a model class, to demo javascript
// 4b: using underscore templates
// 4b: using d3 for the table
