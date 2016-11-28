fetch('/v1/codebases').then(function(response) {
  var codebases = new CodeBases({
    data: response.json(),
    element: document.getElementById("codebases-scatterplot")
  });

  codebases.graph.render();
});
