/** @jsx React.DOM */

var React = require('react/addons');

/* ===== GET JSON , Default set to 選罷法 ======= */
var hash = window.location.hash.substring(1); // remove #
if(hash === "referendum"){
  var data = require("../../data/referendum");//公投
}
if(hash === "dismiss"){
  var data = require("../../data/dismiss");//選罷
}

var levelData = require("../../data/level");

///////////////////////////////////////////////////



var Progress = require('../Progress/Progress.jsx');
var Intro = require('../Intro/Intro.jsx');
var BillVersion = require('../BillVersion/BillVersion.jsx');
var IssueSummary = require('../IssueSummary/IssueSummary.jsx');

require('./App.css');

var App = React.createClass({

  render () {
   
    // traverse through issues 不同訴求
    var issueItems = (data) ? (data.issues.map((item,key)=>{
        // traverse through different versions of bill 不同提案
        var versionItems = item.proposedBill.map((i,k)=>{
            return (
                <div className="App-billVersion" >
                <BillVersion key={k} 
                            data={i}
                            levelData={levelData}/>
                </div>
            )
        })
        return (
          <div className="App-block">
              
              <IssueSummary data={item} />
              <div className="App-figure">
                  <div className="App-progress">
                    <Progress legiProcess={data.legiProcess}
                              levelData={levelData} />
                  </div>
                  <div className="App-billVersions" 
                       key={key}>{versionItems}
                  </div>
              </div>
          </div>
        );
    })):"";

    var result = (data) ? (
        <div className="App"
             id="App">
            
                {issueItems}
            
             
        </div>
        ):<div className="App">網址錯誤</div>;


    return result;
  }

});

module.exports = App;


