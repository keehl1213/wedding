"use strict";(self.webpackChunkwedding=self.webpackChunkwedding||[]).push([[386],{9386:function(n,t,e){e.r(t),e.d(t,{default:function(){return p}});e(7313);var r=e(5354),i=e(576),o=e(1570),s=e.n(o),a=e(7786),c=e(8247),u=e(6417),p=function(){return a.ZP.send(c.ZP.HOME),(0,u.jsxs)("div",{className:"home-page",children:[(0,u.jsx)(s(),{preview:i,src:r,render:function(n,t){return(0,u.jsx)("img",{src:n,style:t,alt:"wedding banner"})}}),(0,u.jsx)("pre",{children:"\u8a5e/\u66f2\uff1a\u5f35\u54f2\u745c\n\n\u9084\u4ee5\u70ba\u4eba\u751f \u6703\u4e00\u76f4\u5fac\u5fa8\n\u59b3\u51fa\u73fe\u6642\u5019 \u6211\u90fd\u9084\u6c92\u60f3\n\u4e00\u4e0d\u5c0f\u5fc3 \u7576\u59b3\u7684\u592a\u967d\n\u5f7c\u6b64\u6276\u6301\u8457\u6210\u9577\n\u8aaa\u6211\u5e79\u8a71\u591a \u53ef\u59b3\u4e5f\u4e00\u6a23\n\u4e0a\u5c71\u4e0b\u6d77 \u524d\u5f80\u6bcf\u500b\u5730\u65b9 \n\u671f\u5f85\u8457\u59b3 \u7684\u5fae\u7b11\u6a21\u6a23\n\u7d00\u9304 \u6211\u5011\u7684\u6642\u5149\n\n\u7d30\u6578\u4e0d\u5b8c\u7684\u8ff4\u97ff \u6709\u591a\u5c11\u7684\u5206\u4eab\n\u591c\u591c\u7684\u7b11\u5834 \u4e00\u76de\u71c8\u5149\u7167\u4eae\n\u7121\u8ad6\u59b3\u6709\u591a\u6cae\u55aa \u6211\u90fd\u6703\u5728\u8eab\u65c1\n\u6211\u60f3\u5c0d\u59b3\u8aaa \u59b3\u771f\u7684\u4e0d\u4e00\u6a23\n\n\u96d6\u7136\u6211\u5e38\u5e38\u8b93\u59b3\u5f88\u53ad\u7169\n\u53c8\u6216\u8005\u5c31\u662f\u59b3\u7684\u5927\u9ebb\u7169\n\u4e0d\u7ba1\u63a5\u4e0b\u4f86\u7d93\u6b77\u591a\u96e3 \n\u4e00\u8d77\u5ea6\u904e\u6bcf\u6b21\u96e3\u95dc\n\n\u6211\u61c2\u59b3\u7684\u7fd2\u6163 \u6211\u4e5f\u7fd2\u6163\n\u7d93\u6b77\u9019\u4e9b\u5e74 \u4e92\u76f8\u7684\u966a\u4f34\n\u898f\u5283\u6bcf\u4e00\u6b21\u6bcf\u500b\u671f\u76fc\n\u6bcf\u500b\u5c07\u4f86\n\u6700\u5f8c\u9084\u8981\u8aaa\u4e00\u8072 \u5f35\u592a\u592a\n\n\n\u8a5e\u66f2 Lyrics & Composer\uff5c\u5f35\u54f2\u745c\n\u7de8\u66f2\uff5c\u984f\u8a8c\u5bec\n\u4eba\u8072\u9304\u97f3\u5ba4\uff5c\u8482\u5152\u97f3\u6a02\n\u548c\u8072\u6f14\u5531\uff5c\u5f35\u54f2\u745c\n\u548c\u8072\u7de8\u66f2\uff5c\u5f35\u54f2\u745c\n\u6df7\u97f3\u5de5\u7a0b\u5e2bMixing Engineer\uff5c\u52dd\u9d3b\n\u6bcd\u5e36\u5f8c\u671f\u8655\u7406\u9304\u97f3\u5ba4 Mastering Studio\uff5c\u8482\u5152\u97f3\u6a02"}),(0,u.jsx)("div",{className:"map-wrapper",children:(0,u.jsx)("iframe",{title:"memory",src:"https://www.google.com/maps/d/embed?mid=195y3R6S2crqow3QRY1m-BAHAwl507ZJO&ehbc=2E312F",width:"100%",height:"600",frameBorder:"0",style:{border:0,marginTop:-60}})})]})}},1570:function(n,t,e){var r=this&&this.__extends||function(){var n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(n,t){n.__proto__=t}||function(n,t){for(var e in t)t.hasOwnProperty(e)&&(n[e]=t[e])};return function(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();Object.defineProperty(t,"__esModule",{value:!0});var i=function(n){function t(){return null!==n&&n.apply(this,arguments)||this}return r(t,n),t.prototype.componentWillMount=function(){var n=this,t=this.props,e=t.src,r=t.preview,i=this.props.initialBlur;this.setState({src:r,blur:i}),this.fetch(e).then((function(t){return n.setState({src:t,blur:0})}))},t.prototype.render=function(){var n=this.state.src;return(0,this.props.render)(n,this.getStyle())},t.prototype.fetch=function(n){return new Promise((function(t){var e=new Image;e.src=n,e.addEventListener("load",(function(){return t(n)}),!1)}))},t.prototype.getStyle=function(){var n=this.props,t=n.transitionTime,e=n.timingFunction;return{filter:"blur("+this.state.blur+"px)",transition:"filter "+t+"ms "+e}},t}(e(7313).Component);i.defaultProps={transitionTime:500,timingFunction:"ease",initialBlur:10},t.ProgressiveImage=i,t.default=i},576:function(n,t,e){n.exports=e.p+"static/media/A100876-0034-1-small.71f285f275ebca83d781.jpg"},5354:function(n,t,e){n.exports=e.p+"static/media/A100876-0034-1.596477d1b6fbaba508a9.jpg"}}]);