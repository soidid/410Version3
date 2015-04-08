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

  _renderFigure(){
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

        // console.log(ref);
        // console.log(refRect);
        // console.log(baseline);
        // console.log(baselineRect);

        if(window.innerWidth > 600){
          length = ((refRect.right-baselineRect.left)-(refRect.width/2)) / ratio;
          

        }else{
          length = (refRect.bottom-baselineRect.top);
          
        }

        this.setState({
          length: length
        });

        //console.log("_renderFigure:"+length);

        
    }
  },

  componentDidMount () {
      this._renderFigure();
      //window.addEventListener("resize", this._renderFigure);
  },
  
  componentWillUnmount () {
      //window.removeEventListener("resize", this._renderFigure);
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

    //console.log(progressStyle);

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
    
    var summary = ( data.summary.length > 30 ) ? data.summary.substring(0,30)+"...":data.summary;
    return (
      
      <div className={billVersionClasses}
           onMouseOver={boundEntering}
           onMouseOut={boundLeaving}>
          <div className="BillVersion-proposer">{data.proposer}</div>
          <div className="BillVersion-progressBar"
               style={progressStyle}>
          </div>
          
          <div className="BillVersion-summary">{summary}</div>

      </div>
          
    );
  }
});

module.exports = BillVersion;
