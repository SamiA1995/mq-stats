var line_chart_1 = document.getElementById('line_chart_1');

//var api = [87,62,0,0,0,27,100,292,17];
//var index = 0;

var stats = [0,0,0,0,0,0];
var end = [0,0,0,0,0,0];
var start = [0,0,0,0,0,0];

function getStats() {
  var current_depth = 0;
  for(var i = 0; i < 5; i++) {
    stats[i] = stats[i+1];
    current_depth += stats[i];
  }
  //stats[5] = api[index] ;//Get the lastest stat
  $.getJSON( "http://localhost:8080/stats" )
    .done(function( json ) {
      stats[5] = Number(json.put_count);
      current_depth += stats[5];
      console.log(current_depth);
  
      for(var j = 0; j < 6; j++) {
        end[j] = stats[j] / current_depth;
      }
      start[0] = 0;
      for(var k = 1; k < 6; k++) {
        start[k] = end[k-1];
      }
      updateStats() 
    })
    .fail(function( jqxhr, textStatus, error ) {
        var err = textStatus + ", " + error;
        console.log( "Request Failed: " + err );
    });
  //index++;
}



function updateStats() {
  for(var i = 0; i < 6; i++) {
    line_chart_1.removeChild(line_chart_1.firstElementChild);
  }
  for(var i = 0; i < 6; i++) {
    var table_data = document.createElement('td');
    table_data.setAttribute('style', '--start: ' + start[i] + '; --end: ' + end[i] + ';');
    var table_data_text = document.createTextNode(stats[i]);
    table_data.appendChild(table_data_text);

    var table_header = document.createElement('th');
    table_header.setAttribute('scope', 'row');
    var table_header_text = document.createTextNode('-' + (6-i)*5 + 's');
    table_header.appendChild(table_header_text);

    var table_row = document.createElement('tr');
    table_row.appendChild(table_header);
    table_row.appendChild(table_data);

    line_chart_1.appendChild(table_row);
  }
}

const interval = setInterval(function() {
  getStats();
}, 5000);