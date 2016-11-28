/**
 * @class The CodeBases Model
 *
 * https://bost.ocks.org/mike/miserables/
 * http://mbostock.github.io/d3/talk/20111116/iris-splom.html
 * http://benjiec.github.io/scatter-matrix/demo/demo.html
 * @extends Object
 */
class CodeBases {

  /**
   * @param {Object} json Serialized json from a previuos app load
   */
  constructor(json) {
    console.log('Constructing CodeBases', json);

    // set up our data series with 50 random data points

    var seriesData = [
      [],
      [],
      []
    ];
    var random = new Rickshaw.Fixtures.RandomData(150);

    for (var i = 0; i < 500; i++) {
      random.addData(seriesData);
      seriesData[0][i].r = 0 | Math.random() * 2 + 8
      seriesData[1][i].r = 0 | Math.random() * 5 + 5
      seriesData[2][i].r = 0 | Math.random() * 8 + 2
    }

    console.log(seriesData);

    this.element = json.element;

    this.graph = new Rickshaw.Graph({
      element: this.element,
      width: 960,
      height: 500,
      renderer: 'scatterplot',
      series: [{
        color: "#ff9030",
        data: seriesData[0],
        opacity: 0.5
      }]
    });

    this.graph.renderer.dotSize = 6;

    new Rickshaw.Graph.HoverDetail({
      graph: this.graph
    });
  }

  render() {
    this.graph.render();
  }
}
