window.__require=function t(e,o,n){function i(c,s){if(!o[c]){if(!e[c]){var x=c.split("/");if(x=x[x.length-1],!e[x]){var a="function"==typeof __require&&__require;if(!s&&a)return a(x,!0);if(r)return r(x,!0);throw new Error("Cannot find module '"+c+"'")}c=x}var l=o[c]={exports:{}};e[c][0].call(l.exports,function(t){return i(e[c][1][t]||t)},l,l.exports,t,e,o,n)}return o[c].exports}for(var r="function"==typeof __require&&__require,c=0;c<n.length;c++)i(n[c]);return i}({GameMain:[function(t,e,o){"use strict";cc._RF.push(e,"7ab29/T+jZGKJY4vELTRu4o","GameMain");var n=this&&this.__extends||function(){var t=function(e,o){return(t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var o in e)e.hasOwnProperty(o)&&(t[o]=e[o])})(e,o)};return function(e,o){function n(){this.constructor=e}t(e,o),e.prototype=null===o?Object.create(o):(n.prototype=o.prototype,new n)}}(),i=this&&this.__decorate||function(t,e,o,n){var i,r=arguments.length,c=r<3?e:null===n?n=Object.getOwnPropertyDescriptor(e,o):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)c=Reflect.decorate(t,e,o,n);else for(var s=t.length-1;s>=0;s--)(i=t[s])&&(c=(r<3?i(c):r>3?i(e,o,c):i(e,o))||c);return r>3&&c&&Object.defineProperty(e,o,c),c};Object.defineProperty(o,"__esModule",{value:!0});var r=cc._decorator,c=r.ccclass,s=r.property,x=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.pointer=null,e.distanceLabel=null,e.selectedLabel=null,e.noneSelectedLabel=null,e.placeLabel=null,e.twitterButton=null,e.backgroundNode=null,e.rootNode=null,e.pointerList=[],e.selectedIndexes=[],e.japanesePrefList=[{y:43.06417,x:141.34694,text:"\u672d\u5e4c\u5e02"},{y:40.82444,x:140.74,text:"\u9752\u68ee\u5e02"},{y:39.70361,x:141.1525,text:"\u76db\u5ca1\u5e02"},{y:38.26889,x:140.87194,text:"\u4ed9\u53f0\u5e02"},{y:39.71861,x:140.1025,text:"\u79cb\u7530\u5e02"},{y:38.24056,x:140.36333,text:"\u5c71\u5f62\u5e02"},{y:37.75,x:140.46778,text:"\u798f\u5cf6\u5e02"},{y:36.34139,x:140.44667,text:"\u6c34\u6238\u5e02"},{y:36.56583,x:139.88361,text:"\u5b87\u90fd\u5bae\u5e02"},{y:36.39111,x:139.06083,text:"\u524d\u6a4b\u5e02"},{y:35.85694,x:139.64889,text:"\u3055\u3044\u305f\u307e\u5e02"},{y:35.60472,x:140.12333,text:"\u5343\u8449\u5e02"},{y:35.68944,x:139.69167,text:"\u65b0\u5bbf\u533a"},{y:35.44778,x:139.6425,text:"\u6a2a\u6d5c\u5e02"},{y:37.90222,x:139.02361,text:"\u65b0\u6f5f\u5e02"},{y:36.69528,x:137.21139,text:"\u5bcc\u5c71\u5e02"},{y:36.59444,x:136.62556,text:"\u91d1\u6ca2\u5e02"},{y:36.06528,x:136.22194,text:"\u798f\u4e95\u5e02"},{y:35.66389,x:138.56833,text:"\u7532\u5e9c\u5e02"},{y:36.65139,x:138.18111,text:"\u9577\u91ce\u5e02"},{y:35.39111,x:136.72222,text:"\u5c90\u961c\u5e02"},{y:34.97694,x:138.38306,text:"\u9759\u5ca1\u5e02"},{y:35.18028,x:136.90667,text:"\u540d\u53e4\u5c4b\u5e02"},{y:34.73028,x:136.50861,text:"\u6d25\u5e02"},{y:35.00444,x:135.86833,text:"\u5927\u6d25\u5e02"},{y:35.02139,x:135.75556,text:"\u4eac\u90fd\u5e02"},{y:34.68639,x:135.52,text:"\u5927\u962a\u5e02"},{y:34.69139,x:135.18306,text:"\u795e\u6238\u5e02"},{y:34.68528,x:135.83278,text:"\u5948\u826f\u5e02"},{y:34.22611,x:135.1675,text:"\u548c\u6b4c\u5c71\u5e02"},{y:35.50361,x:134.23833,text:"\u9ce5\u53d6\u5e02"},{y:35.47222,x:133.05056,text:"\u677e\u6c5f\u5e02"},{y:34.66167,x:133.935,text:"\u5ca1\u5c71\u5e02"},{y:34.39639,x:132.45944,text:"\u5e83\u5cf6\u5e02"},{y:34.18583,x:131.47139,text:"\u5c71\u53e3\u5e02"},{y:34.06583,x:134.55944,text:"\u5fb3\u5cf6\u5e02"},{y:34.34028,x:134.04333,text:"\u9ad8\u677e\u5e02"},{y:33.84167,x:132.76611,text:"\u677e\u5c71\u5e02"},{y:33.55972,x:133.53111,text:"\u9ad8\u77e5\u5e02"},{y:33.60639,x:130.41806,text:"\u798f\u5ca1\u5e02"},{y:33.24944,x:130.29889,text:"\u4f50\u8cc0\u5e02"},{y:32.74472,x:129.87361,text:"\u9577\u5d0e\u5e02"},{y:32.78972,x:130.74167,text:"\u718a\u672c\u5e02"},{y:33.23806,x:131.6125,text:"\u5927\u5206\u5e02"},{y:31.91111,x:131.42389,text:"\u5bae\u5d0e\u5e02"},{y:31.56028,x:130.55806,text:"\u9e7f\u5150\u5cf6\u5e02"},{y:26.2125,x:127.68111,text:"\u90a3\u8987\u5e02"}],e.colorList=[cc.Color.WHITE,cc.Color.GRAY,cc.Color.RED,cc.Color.GREEN,cc.Color.BLUE,cc.Color.YELLOW,cc.Color.ORANGE,cc.Color.CYAN,cc.Color.MAGENTA],e.hashTag="\u5de1\u56de\u30b5\u30e9\u30ea\u30fc\u30de\u30f3\u554f\u984c\u56de\u7b54",e.secretKey="towp2020",e.completeDistance=0,e}return n(e,t),e.prototype.start=function(){var t=this;this.backgroundNode=this.node.getChildByName("BackGround"),this.rootNode=this.node.getChildByName("RootNode");var e={xMin:9999,xMax:0,xCenter:0,yMin:9999,yMax:0,yCenter:0,count:0};this.japanesePrefList.forEach(function(t,o){e.xMin=Math.min(e.xMin,t.x),e.yMin=Math.min(e.yMin,t.y),e.xMax=Math.max(e.xMax,t.x),e.yMax=Math.max(e.yMax,t.y),e.count++}),e.xCenter=(e.xMin+e.xMax)/2,e.yCenter=(e.yMin+e.yMax)/2;var o=Math.max(e.xMax-e.xMin,e.yMax-e.yMin);this.japanesePrefList.forEach(function(n,i){var r=cc.instantiate(t.pointer);r.x=(n.x-e.xCenter)/o*910,r.y=(n.y-e.yCenter)/o*590,cc.log("x, y = "+r.x+", "+r.y),r.on(cc.Node.EventType.MOUSE_DOWN,t.onMouseDown,t),r.on(cc.Node.EventType.MOUSE_ENTER,t.onMouseEnter,t),r.on(cc.Node.EventType.MOUSE_LEAVE,t.onMouseLeave,t),t.rootNode.addChild(r),t.pointerList.push(r),t.selectedIndexes.push(i)});var n=new cc.Component.EventHandler;n.target=this.node,n.component="GameMain",n.handler="onTwitterButtonClick",n.customEventData="",this.twitterButton.clickEvents.push(n),this.draw()},e.prototype.onTwitterButtonClick=function(t,e){this.twitterOpen("\u65e5\u672c\u4e00\u5468\u30b9\u30b3\u30a2\u306f"+this.completeDistance+"\u3067\u3059",this.selectedIndexes)},e.prototype.onMouseEnter=function(t){t.stopPropagation();var e=this.pointerList.findIndex(function(e){return e==t.target});e<0||(this.placeLabel.string="\u5834\u6240\uff1a "+this.japanesePrefList[e].text)},e.prototype.onMouseLeave=function(t){t.stopPropagation(),this.placeLabel.string="\u5834\u6240\uff1a"},e.prototype.onMouseDown=function(t){t.stopPropagation();var e=this.pointerList.findIndex(function(e){return e==t.target});if(!(e<0)){var o=this.selectedIndexes.findIndex(function(t){return t==e});o<0?this.selectedIndexes.push(e):this.selectedIndexes.splice(o),this.draw()}},e.prototype.draw=function(){var t=this,e=0,o=this.backgroundNode.getComponent(cc.Graphics),n=null;if(o.clear(!0),this.selectedIndexes.forEach(function(i,r){var c=t.pointerList[i];null!=n&&(t.drawLine(o,new cc.Vec2(n.x,n.y),new cc.Vec2(c.x,c.y),t.colorList[r%t.colorList.length]),e+=Math.pow(c.x-n.x,2)+Math.pow(c.y-n.y,2)),n=c}),this.selectedIndexes.length==this.pointerList.length){var i=this.pointerList[this.selectedIndexes[0]];this.drawLine(o,new cc.Vec2(n.x,n.y),new cc.Vec2(i.x,i.y),this.colorList[this.pointerList.length%this.colorList.length]),e+=Math.pow(i.x-n.x,2)+Math.pow(i.y-n.y,2),this.twitterButton.node.active=!0}else this.twitterButton.node.active=!1;this.completeDistance=Math.floor(Math.sqrt(e)),this.distanceLabel.string="\u8ddd\u96e2\uff1a "+this.completeDistance,this.selectedLabel.string="\u9078\u629e\u3055\u308c\u305f\u6570\uff1a "+this.selectedIndexes.length,this.noneSelectedLabel.string="\u6b8b\u308a\uff1a "+(this.pointerList.length-this.selectedIndexes.length)},e.prototype.drawLine=function(t,e,o,n){t.fillColor=t.strokeColor=n,t.lineWidth=5,t.moveTo(e.x,e.y),t.lineTo(o.x,o.y),t.stroke()},e.prototype.twitterOpen=function(t,e){var o=btoa(e.join(","));t=encodeURI(t)+" ("+o+")",cc.sys.openURL("https://twitter.com/compose/tweet?text="+t+"&hashtags="+encodeURI(this.hashTag))},i([s(cc.Prefab)],e.prototype,"pointer",void 0),i([s(cc.Label)],e.prototype,"distanceLabel",void 0),i([s(cc.Label)],e.prototype,"selectedLabel",void 0),i([s(cc.Label)],e.prototype,"noneSelectedLabel",void 0),i([s(cc.Label)],e.prototype,"placeLabel",void 0),i([s(cc.Button)],e.prototype,"twitterButton",void 0),e=i([c],e)}(cc.Component);o.default=x,cc._RF.pop()},{}]},{},["GameMain"]);