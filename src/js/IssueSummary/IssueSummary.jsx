/** @jsx React.DOM */
var React = require('react/addons');
require('./IssueSummary.css');

var IssueSummary = React.createClass({

  getInitialState(){
    return {
      
    }
  },
  
  render () {
    var { data } = this.props;
    
    return (
      <div className="IssueSummary">
          
          <div className="IssueSummary-item">
                <div className="IssueSummary-itemLeft">民團訴求</div>
                <div className="IssueSummary-itemMain">{data.titleFull}</div>
          </div>
          <div className="IssueSummary-item">
              <div className="IssueSummary-itemLeft">現行法律</div>
              <div className="IssueSummary-itemMain">{data.currentLaw}</div>
          </div>
          <div className="IssueSummary-item">
              <div className="IssueSummary-itemLeft">政府回應</div>
              <div className="IssueSummary-itemMain">{data.govState}</div>
          </div>
          <div className="IssueSummary-item">
              <div className="IssueSummary-itemLeft">立法進度</div>
              <div className="IssueSummary-itemMain">{data.legiSummary}</div>
          </div>
      </div>
    );
  }
});

module.exports = IssueSummary;
