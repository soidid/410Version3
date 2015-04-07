/** @jsx React.DOM */
var React = require('react/addons');
require('./BillVersion.css');

var BillVersion = React.createClass({

  getInitialState(){
    return {
      length: 0,
      isHovered: false
    }
  },
  _onHover(value, event){
    
    //console.log(value);
    this.setState({
        isHovered: value
    });
 
  },
  componentDidMount(){
      var { data, levelData } = this.props;

      var baselineIndex = levelData["baseline"];
      var baseline = document.getElementById(levelData[baselineIndex]);
      var ref = document.getElementById(levelData[data.stage]);
      var wrapper = document.getElementById("App");
     

      if(ref){
          
          var baselineRect = baseline.getBoundingClientRect();
          var refRect = ref.getBoundingClientRect();
          var wrapperRect = wrapper.getBoundingClientRect();
          var ratio = (window.innerWidth > 1000) ? wrapperRect.right / (1000-80) : 1;
          
          var length = 0;

          if(window.innerWidth > 600){
            length = ((refRect.right-baselineRect.left)-(refRect.width/2)) / ratio;

          }else{
            length = (refRect.bottom-baselineRect.top);
          }

          this.setState({
            length: length
          });
          
      }
  },
  render () {
    var { data, levelData } = this.props;
    var classSet = React.addons.classSet;
  
    var progressStyle = {
      "height" : this.state.length,
      "width" : 20
    };

    if(window.innerWidth > 600) {
      progressStyle = {
        "height" : 30,
        "width" : this.state.length
      };
    }

    console.log(progressStyle);

    var billVersionClasses = classSet({
      "BillVersion" : true,
      "is-hovered" : this.state.isHovered
    });
    var dayCountClasses = classSet({
      "BillVersion-dayCount" : true,
      "is-show" : this.state.length > 0,
      "is-hovered" : this.state.isHovered
    });
 
    var boundEntering = this._onHover.bind(null, true);
    var boundLeaving = this._onHover.bind(null, false);

    return (
      
      <div className={billVersionClasses}
           onMouseOver={boundEntering}
           onMouseOut={boundLeaving}>
          <div className="BillVersion-proposer">{data.proposer}</div>
          <div className="BillVersion-progressBar"
               style={progressStyle}>
          </div>
          <div className={dayCountClasses}>停留 129 天</div>
          <div className="BillVersion-summary">{data.summary}</div>
          
      </div>
          
    );
  }
});

module.exports = BillVersion;