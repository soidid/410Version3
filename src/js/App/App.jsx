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
var AppBar = require('../AppBar/AppBar.jsx');

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
        });
        return (
         <div>
         
         <div className="App-section">
              <div className="App-meta">各訴求對應的修法版本有哪些？立法院審議進度如何？</div>
         </div>
         <div className="App-block">
              <div className="App-section">
                 <div className="App-sectionTitle">{item.title}</div>
              </div>

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

          // <div className="App-section">
          //     <div className="App-mainTitle">410還權於民</div>
          // </div>
          // <div className="App-block">
          //     <div className="App-section">
          //       <div className="App-sectionTitle">為什麼重要</div>
          //       <div>近年因執政黨行政、立法兩權集於一身，造成無法制衡的政治現象，也直接呈現政府政策無法真正反映民意的結果。公民除了以每四年一次的選舉來表達心聲，幾乎沒有其他真正得以監督政府的武器。台灣的民主似乎欠缺了直接民權，這也是目前許多公民團體提出落實公民參政權訴求的原因。</div>
          //     </div>

          //     <div className="App-section">
          //        <div className="App-sectionTitle">好，我知道是要「還權於民」了，那具體有哪些訴求呢</div>
          //     </div>
          // </div> 
