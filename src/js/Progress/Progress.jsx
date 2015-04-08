/** @jsx React.DOM */

var React = require('react/addons');
var Hintpoint = require('../Hintpoint/Hintpoint.jsx');

require('./Progress.css');

var Progress = React.createClass({
  
  
  render () {
    var {  legiProcess, levelData, legendHeight } = this.props;
    var state = this.state;
    var classSet = React.addons.classSet;
  
    /*==================
           進度條
      ================== */
    var issueCount = 0;
  	var progressItems = legiProcess.map((item,key)=>{
        
        var legendBorderStyle =  {
            "height" : legendHeight
        };

        var itemClasses = classSet({
          "Progress-item" : item.type === "challenge" ,
          "Progress-point" : item.type === "point"
        });

        var lableClasses = classSet({
          "Progress-label" : item.type === "challenge",
          "Progress-circle" : item.type === "point"
        })

        // //在委員會旁邊加上「實質審查」
        // var debateContentItem = (item.stage==="委員會") ?
        // <div>
        //   <div className="Progress-labelSidenote">實質審查</div>
        //   <div className="Progress-tri"></div>
        // </div>
        // : "";
        return (window.innerWidth > 600)?(
           <div className={itemClasses}
                style={legendBorderStyle}
                key={key}
                id={levelData[item.stage]}
                ref={levelData[item.stage]}>
                <div className="Progress-unitPoint" />
                  
                <div className={lableClasses}>
                  <div>{item.stage}</div>
                </div>
                
           </div>
        ):
        (
           <div className={itemClasses}
                key={key}
                id={levelData[item.stage]}
                ref={levelData[item.stage]}>
                <div className="Progress-unitPoint" />
                  
                <div className={lableClasses}>
                  <div>{item.stage}</div>
                </div>
                
           </div>
        )
    });

    return (
      
      <div className="Progress">
          <div className="Progress-bricks"
               id="Progress-bricks">
            {progressItems}
          </div> 
      </div>
          
    );
  }
});

module.exports = Progress;

// var issues = (item.issues) ? item.issues

        // .map((i,k)=>{
        //     issueCount ++;
        //     var boundClick = this._onSetFocusIssue.bind(null,i);

        //     var boundHover = this._onSetHoverIssue.bind(null,i);
            
        //     var isFocused = (i.index === this.state.currentIssue.index);
        //     var issueClasses = classSet({
        //           "Progress-issue" : item.type!=="row",
        //           "Progress-issueRow" : item.type==="row",
        //           "is-focused" : isFocused,
        //           "is-hovered" : i.index === this.state.currentHoverIndex
        //         });
        //     var hintItem = (issueCount === 2 && state.clean) ? <Hintpoint /> : "";

        //     /* 訴求詳細版，mobile */

        //     //// 各修法版本 //
        //     var versionCount = 0;
        //     var proposedBillItem = (i.proposedBill) ? i.proposedBill.map((bill,bill_key)=>{
                
        //         if(bill.progress === item.stage)
        //            versionCount = bill.bills.length;

        //         var versions = (bill.progress === item.stage) ? bill.bills.map((stage, stage_index)=>{
        //             //var separater = (stage_index < bill.bills.length-1) ? "、":"";
        //             var imgURL = require("./images/"+stage.proposer+".png");
                    
        //             var summary = <div className="Progress-avatarHoverInfo">{stage.summary}</div>;
        //             return (
        //               <span key={stage_index}
        //                     className="Progress-versionItem">
        //                   <a className="Progress-link"
        //                      href={stage.link} 
        //                      target="_blank">
        //                      <img src={imgURL}
        //                           className="Progress-avatarImg"/>
        //                      <div className="Progress-avatarName">{stage.proposer}</div>
                          
        //                   {summary}
        //                   </a>
        //               </span>    
        //             )
        //         }) : "";
                
        //         return (
        //             <span key={bill_key}>
        //                 {versions}
        //             </span>
        //          )
        //     }) : "";

        //     var showVersions = (isFocused) ? <div>{proposedBillItem}</div> : "";
            
        //     var fullItem = 
        //     (isFocused && item.type==="row") ? 
        //     <div className="Progress-issueFull">
        //         <div className="Progress-focusItem">
        //             <div className="Progress-focusItemLeft">民團訴求</div>
        //             <div className="Progress-focusItemMain">{i.titleFull}</div>
        //         </div>
        //         <div className="Progress-focusItem">
        //             <div className="Progress-focusItemLeft">現行法律</div>
        //             <div className="Progress-focusItemMain">{i.currentLaw}</div>
        //         </div>
        //         <div className="Progress-focusItem">
        //             <div className="Progress-focusItemLeft">政府回應</div>
        //             <div className="Progress-focusItemMain">{i.govState}</div>
        //         </div>
        //     </div> : "";
            
        //     var rowHint = (window.innerWidth > 600) ? "":i.title+" ：";
        //     var issueText = (item.type === "challenge") ? rowHint+versionCount +" 個版本" : i.title;
        //     if(versionCount === 0  && item.type!=="row")
        //       issueClasses += " is-hide";

        //     var rowTitleClass = (item.type ==="row")? "Progress-issueMainTitle" : "";
        //     var barChartStyle = {
        //       "width" : versionCount*15 + "%"
        //     }
        //     return (
        //       <a className={issueClasses}
        //          key={k}
        //          onClick={boundClick} 
        //          onMouseOver={boundHover}>
        //          {hintItem}
        //          <div className="Progress-barChart"
        //               style={barChartStyle}>
        //          </div>
        //          <div className="Progress-issueMain">      
        //             <div className={rowTitleClass}>
        //                  {issueText}
        //             </div>  
                    
        //             {showVersions}
        //             {fullItem}
        //          </div>
                 
        //       </a>
        //     );
        // }):"";
