Plotly.d3.csv('https://raw.githubusercontent.com/mvienneau/fontmap/master/datapoints.csv', function(err, rows){
      function unpack(rows, key) {
          return rows.map(function(row) 
          { return row[key]; });
      }
var trace1 = {
  x:unpack(rows, 'x'),  y: unpack(rows, 'y'), z: unpack(rows, 'z'), 
  mode: 'markers',
  marker: {
    size: 12,
    line: {
      color: 'rgba(217, 217, 217, 0.14)',
      width: 0.5
    },
    opacity: 0.8
  },
  type: 'scatter3d'
};

var data = [trace1];
var layout = {
      dragmode: false,
      margin: {
        l: 0,
        r: 0,
        b: 0,
        t: 0
  }};
Plotly.newPlot('myDiv', data, layout);
});