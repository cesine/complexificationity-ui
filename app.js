// set up our data series with 50 random data points

var seriesData = [ [], [], [] ];
var random = new Rickshaw.Fixtures.RandomData(150);

for (var i = 0; i < 500; i++) {
  random.addData(seriesData);
  seriesData[0][i].r = 0|Math.random() * 2 + 8
  seriesData[1][i].r = 0|Math.random() * 5 + 5
  seriesData[2][i].r = 0|Math.random() * 8 + 2
}

var codebases = new CodeBases({
  data: seriesData,
  element: document.getElementById("codebases-scatterplot")
});

codebases.graph.render();
