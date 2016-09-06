/**
 * @class The CodeBases Model handles login and logout and
 *        CodeBases locally or remotely.
 *
 * @extends Object
 */
class CodeBases {

  /**
   * @param {Object} json Serialized json from a previuos app load
   */
  constructor(json) {
    console.log('Constructing CodeBases', json);

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
      }, {
        color: "#ff4040",
        data: seriesData[1],
        opacity: 0.3
      }, {
        color: "#4040ff",
        data: seriesData[2]
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
