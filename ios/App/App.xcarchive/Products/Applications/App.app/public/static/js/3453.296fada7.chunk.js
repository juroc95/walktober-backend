/*! For license information please see 3453.296fada7.chunk.js.LICENSE.txt */
"use strict";(self.webpackChunkwalktober=self.webpackChunkwalktober||[]).push([[3453,9383],{3453:function(t,e,n){n.r(e),n.d(e,{ion_datetime_button:function(){return l}});var i=n(3431),a=n(1205),r=n(3878),o=n(300),s=n(369),d=n(9383),c=n(7235),l=function(){function t(t){var e=this;(0,a.r)(this,t),this.datetimeEl=null,this.overlayEl=null,this.datetimePresentation="date-time",this.datetimeActive=!1,this.color="primary",this.disabled=!1,this.getParsedDateValues=function(t){return""===t||void 0===t||null===t?[]:Array.isArray(t)?t:[t]},this.setDateTimeText=function(){var t=e,n=t.datetimeEl,i=t.datetimePresentation;if(n){var a=n.value,r=n.locale,o=n.hourCycle,d=n.preferWheel,l=n.multiple,u=n.titleSelectedDatesFormatter,m=e.getParsedDateValues(a),p=(0,c.q)(m.length>0?m:[(0,c.t)()]),h=p[0],f=(0,c.J)(r,o);switch(p.forEach((function(t){t.tzOffset=void 0})),e.dateText=e.timeText=void 0,i){case"date-time":case"time-date":var b=(0,c.T)(r,h),g=(0,c.K)(r,h,f);d?e.dateText="".concat(b," ").concat(g):(e.dateText=b,e.timeText=g);break;case"date":if(l&&1!==m.length){var v="".concat(m.length," days");if(void 0!==u)try{v=u(m)}catch(t){(0,s.b)("Exception in provided `titleSelectedDatesFormatter`: ",t)}e.dateText=v}else e.dateText=(0,c.T)(r,h);break;case"time":e.timeText=(0,c.K)(r,h,f);break;case"month-year":e.dateText=(0,c.G)(r,h);break;case"month":e.dateText=(0,c.S)(r,h,{month:"long"});break;case"year":e.dateText=(0,c.S)(r,h,{year:"numeric"})}}},this.waitForDatetimeChanges=function(){return(0,i.mG)(e,void 0,void 0,(function(){var t;return(0,i.Jh)(this,(function(e){return(t=this.datetimeEl)?[2,new Promise((function(e){(0,o.a)(t,"ionRender",e,{once:!0})}))]:[2,Promise.resolve()]}))}))},this.handleDateClick=function(t){return(0,i.mG)(e,void 0,void 0,(function(){var e,n,a,r,o;return(0,i.Jh)(this,(function(i){if(n=(e=this).datetimeEl,a=e.datetimePresentation,!n)return[2];switch(r=!1,a){case"date-time":case"time-date":o="date"!==n.presentation,!n.preferWheel&&o&&(n.presentation="date",r=!0)}return this.selectedButton="date",this.presentOverlay(t,r,this.dateTargetEl),[2]}))}))},this.handleTimeClick=function(t){var n=e,i=n.datetimeEl,a=n.datetimePresentation;if(i){var r=!1;switch(a){case"date-time":case"time-date":"time"!==i.presentation&&(i.presentation="time",r=!0)}e.selectedButton="time",e.presentOverlay(t,r,e.timeTargetEl)}},this.presentOverlay=function(t,n,a){return(0,i.mG)(e,void 0,void 0,(function(){var e;return(0,i.Jh)(this,(function(i){switch(i.label){case 0:return(e=this.overlayEl)?"ION-POPOVER"!==e.tagName?[3,3]:n?[4,this.waitForDatetimeChanges()]:[3,2]:[2];case 1:i.sent(),i.label=2;case 2:return e.present(Object.assign(Object.assign({},t),{detail:{ionShadowTarget:a}})),[3,4];case 3:e.present(),i.label=4;case 4:return[2]}}))}))}}return t.prototype.componentWillLoad=function(){return(0,i.mG)(this,void 0,void 0,(function(){var t,e,n,a,r=this;return(0,i.Jh)(this,(function(i){return(t=this.datetime)?(e=this.datetimeEl=document.getElementById(t))?(n=new IntersectionObserver((function(t){var e=t[0];r.datetimeActive=e.isIntersecting}),{threshold:.01}),n.observe(e),(a=this.overlayEl=e.closest("ion-modal, ion-popover"))&&a.classList.add("ion-datetime-button-overlay"),(0,o.c)(e,(function(){var t=r.datetimePresentation=e.presentation||"date-time";switch(r.setDateTimeText(),(0,o.a)(e,"ionChange",r.setDateTimeText),t){case"date-time":case"date":case"month-year":case"month":case"year":r.selectedButton="date";break;case"time-date":case"time":r.selectedButton="time"}})),[2]):((0,s.b)("No ion-datetime instance found for ID '".concat(t,"'."),this.el),[2]):((0,s.b)("An ID associated with an ion-datetime instance is required for ion-datetime-button to function properly.",this.el),[2])}))}))},t.prototype.render=function(){var t,e=this,n=this,i=n.color,o=n.dateText,s=n.timeText,c=n.selectedButton,l=n.datetimeActive,u=n.disabled,m=(0,r.b)(this);return(0,a.h)(a.H,{class:(0,d.c)(i,(t={},t[m]=!0,t["".concat(c,"-active")]=l,t["datetime-button-disabled"]=u,t))},o&&(0,a.h)("button",{class:"ion-activatable",id:"date-button","aria-expanded":l?"true":"false",onClick:this.handleDateClick,disabled:u,part:"native",ref:function(t){return e.dateTargetEl=t}},(0,a.h)("slot",{name:"date-target"},o),"md"===m&&(0,a.h)("ion-ripple-effect",null)),s&&(0,a.h)("button",{class:"ion-activatable",id:"time-button","aria-expanded":l?"true":"false",onClick:this.handleTimeClick,disabled:u,part:"native",ref:function(t){return e.timeTargetEl=t}},(0,a.h)("slot",{name:"time-target"},s),"md"===m&&(0,a.h)("ion-ripple-effect",null)))},Object.defineProperty(t.prototype,"el",{get:function(){return(0,a.i)(this)},enumerable:!1,configurable:!0}),t}();l.style={ios:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}",md:":host{display:-ms-flexbox;display:flex;-ms-flex-align:center;align-items:center;-ms-flex-pack:center;justify-content:center}:host button{border-radius:8px;padding-left:12px;padding-right:12px;padding-top:6px;padding-bottom:6px;margin-left:2px;margin-right:2px;margin-top:0px;margin-bottom:0px;position:relative;-webkit-transition:150ms color ease-in-out;transition:150ms color ease-in-out;border:none;background:var(--ion-color-step-300, #edeef0);color:var(--ion-text-color, #000);font-family:inherit;font-size:inherit;cursor:pointer;-webkit-appearance:none;-moz-appearance:none;appearance:none;overflow:hidden}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{padding-left:unset;padding-right:unset;-webkit-padding-start:12px;padding-inline-start:12px;-webkit-padding-end:12px;padding-inline-end:12px}}@supports ((-webkit-margin-start: 0) or (margin-inline-start: 0)) or (-webkit-margin-start: 0){:host button{margin-left:unset;margin-right:unset;-webkit-margin-start:2px;margin-inline-start:2px;-webkit-margin-end:2px;margin-inline-end:2px}}:host(.time-active) #time-button,:host(.date-active) #date-button{color:var(--ion-color-base)}:host(.datetime-button-disabled){pointer-events:none}:host(.datetime-button-disabled) button{opacity:0.4}"}},9383:function(t,e,n){n.r(e),n.d(e,{c:function(){return r},g:function(){return o},h:function(){return a},o:function(){return d}});var i=n(3431),a=function(t,e){return null!==e.closest(t)},r=function(t,e){var n;return"string"===typeof t&&t.length>0?Object.assign(((n={"ion-color":!0})["ion-color-".concat(t)]=!0,n),e):e},o=function(t){var e={};return function(t){return void 0!==t?(Array.isArray(t)?t:t.split(" ")).filter((function(t){return null!=t})).map((function(t){return t.trim()})).filter((function(t){return""!==t})):[]}(t).forEach((function(t){return e[t]=!0})),e},s=/^[a-z][a-z0-9+\-.]*:/,d=function(t,e,n,a){return(0,i.mG)(void 0,void 0,void 0,(function(){var r;return(0,i.Jh)(this,(function(i){return null!=t&&"#"!==t[0]&&!s.test(t)&&(r=document.querySelector("ion-router"))?(null!=e&&e.preventDefault(),[2,r.push(t,n,a)]):[2,!1]}))}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RixHQUFHLE9BQVUsTUFBSEEsQ0FBTyxJQUFJMkYsS0FBSyxTQUFTM0YsR0FBRyxPQUFPQSxFQUFFNEYsTUFBTSxJQUFJRixRQUFRLFNBQVMxRixHQUFHLE1BQVcsS0FBSkEsQ0FBTSxJQUFVLEVBQUUsQ0FBdUM2RixDQUFhN0YsR0FBR2tCLFNBQVMsU0FBU2xCLEdBQUcsT0FBT25CLEVBQUVtQixJQUFHLENBQUksSUFBV25CLENBQUMsRUFBTWlILEVBQU8sdUJBQTJCQyxFQUFRLFNBQVMvRixFQUFFbkIsRUFBRWlCLEVBQUVoQixHQUFHLE9BQU9vRCxFQUFBQSxFQUFBQSxTQUFVLE9BQU8sT0FBTyxHQUFRLFdBQVcsSUFBSWhDLEVBQUUsT0FBT2lDLEVBQUFBLEVBQUFBLElBQVlwRCxNQUFNLFNBQVNjLEdBQUcsT0FBTSxNQUFIRyxHQUFnQixNQUFQQSxFQUFFLEtBQVc4RixFQUFPRSxLQUFLaEcsS0FBSUUsRUFBRXdELFNBQVN1QyxjQUFjLGdCQUEwQixNQUFIcEgsR0FBU0EsRUFBRXFILGlCQUF1QixDQUFDLEVBQUVoRyxFQUFFaUcsS0FBS25HLEVBQUVGLEVBQUVoQixLQUFXLENBQUMsR0FBRSxFQUFNLEdBQUcsR0FBRyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS9pb24tZGF0ZXRpbWUtYnV0dG9uLmVudHJ5LmpzIiwiLi4vbm9kZV9tb2R1bGVzL0Bpb25pYy9jb3JlL2Rpc3QvZXNtLWVzNS90aGVtZS03NjcwMzQxYy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnR7X19hd2FpdGVyLF9fZ2VuZXJhdG9yfWZyb21cInRzbGliXCI7XG4vKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL2ltcG9ydHtyIGFzIHJlZ2lzdGVySW5zdGFuY2UsaCxIIGFzIEhvc3QsaSBhcyBnZXRFbGVtZW50fWZyb21cIi4vaW5kZXgtOGU2OTI0NDUuanNcIjtpbXBvcnR7YiBhcyBnZXRJb25Nb2RlfWZyb21cIi4vaW9uaWMtZ2xvYmFsLWM3NGU0OTUxLmpzXCI7aW1wb3J0e2EgYXMgYWRkRXZlbnRMaXN0ZW5lcixjIGFzIGNvbXBvbmVudE9uUmVhZHl9ZnJvbVwiLi9oZWxwZXJzLTNiMzkwZTQ4LmpzXCI7aW1wb3J0e2IgYXMgcHJpbnRJb25FcnJvcn1mcm9tXCIuL2luZGV4LWM0YjExNjc2LmpzXCI7aW1wb3J0e2MgYXMgY3JlYXRlQ29sb3JDbGFzc2VzfWZyb21cIi4vdGhlbWUtNzY3MDM0MWMuanNcIjtpbXBvcnR7cSBhcyBwYXJzZURhdGUsdCBhcyBnZXRUb2RheSxKIGFzIGlzMjRIb3VyLFMgYXMgZ2V0TG9jYWxpemVkRGF0ZVRpbWUsRyBhcyBnZXRNb250aEFuZFllYXIsSyBhcyBnZXRMb2NhbGl6ZWRUaW1lLFQgYXMgZ2V0TW9udGhEYXlBbmRZZWFyfWZyb21cIi4vZGF0YS1jYjcyNDQ4Yy5qc1wiO3ZhciBpb3NEYXRldGltZUJ1dHRvbkNzcz1cIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCBidXR0b257Ym9yZGVyLXJhZGl1czo4cHg7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHg7bWFyZ2luLWxlZnQ6MnB4O21hcmdpbi1yaWdodDoycHg7bWFyZ2luLXRvcDowcHg7bWFyZ2luLWJvdHRvbTowcHg7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOjE1MG1zIGNvbG9yIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246MTUwbXMgY29sb3IgZWFzZS1pbi1vdXQ7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zMDAsICNlZGVlZjApO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtvdmVyZmxvdzpoaWRkZW59QHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXs6aG9zdCBidXR0b257cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHh9fUBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSBvciAobWFyZ2luLWlubGluZS1zdGFydDogMCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Omhvc3QgYnV0dG9ue21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHh9fTpob3N0KC50aW1lLWFjdGl2ZSkgI3RpbWUtYnV0dG9uLDpob3N0KC5kYXRlLWFjdGl2ZSkgI2RhdGUtYnV0dG9ue2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguZGF0ZXRpbWUtYnV0dG9uLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1idXR0b24tZGlzYWJsZWQpIGJ1dHRvbntvcGFjaXR5OjAuNH1cIjt2YXIgbWREYXRldGltZUJ1dHRvbkNzcz1cIjpob3N0e2Rpc3BsYXk6LW1zLWZsZXhib3g7ZGlzcGxheTpmbGV4Oy1tcy1mbGV4LWFsaWduOmNlbnRlcjthbGlnbi1pdGVtczpjZW50ZXI7LW1zLWZsZXgtcGFjazpjZW50ZXI7anVzdGlmeS1jb250ZW50OmNlbnRlcn06aG9zdCBidXR0b257Ym9yZGVyLXJhZGl1czo4cHg7cGFkZGluZy1sZWZ0OjEycHg7cGFkZGluZy1yaWdodDoxMnB4O3BhZGRpbmctdG9wOjZweDtwYWRkaW5nLWJvdHRvbTo2cHg7bWFyZ2luLWxlZnQ6MnB4O21hcmdpbi1yaWdodDoycHg7bWFyZ2luLXRvcDowcHg7bWFyZ2luLWJvdHRvbTowcHg7cG9zaXRpb246cmVsYXRpdmU7LXdlYmtpdC10cmFuc2l0aW9uOjE1MG1zIGNvbG9yIGVhc2UtaW4tb3V0O3RyYW5zaXRpb246MTUwbXMgY29sb3IgZWFzZS1pbi1vdXQ7Ym9yZGVyOm5vbmU7YmFja2dyb3VuZDp2YXIoLS1pb24tY29sb3Itc3RlcC0zMDAsICNlZGVlZjApO2NvbG9yOnZhcigtLWlvbi10ZXh0LWNvbG9yLCAjMDAwKTtmb250LWZhbWlseTppbmhlcml0O2ZvbnQtc2l6ZTppbmhlcml0O2N1cnNvcjpwb2ludGVyOy13ZWJraXQtYXBwZWFyYW5jZTpub25lOy1tb3otYXBwZWFyYW5jZTpub25lO2FwcGVhcmFuY2U6bm9uZTtvdmVyZmxvdzpoaWRkZW59QHN1cHBvcnRzICgoLXdlYmtpdC1tYXJnaW4tc3RhcnQ6IDApIG9yIChtYXJnaW4taW5saW5lLXN0YXJ0OiAwKSkgb3IgKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKXs6aG9zdCBidXR0b257cGFkZGluZy1sZWZ0OnVuc2V0O3BhZGRpbmctcmlnaHQ6dW5zZXQ7LXdlYmtpdC1wYWRkaW5nLXN0YXJ0OjEycHg7cGFkZGluZy1pbmxpbmUtc3RhcnQ6MTJweDstd2Via2l0LXBhZGRpbmctZW5kOjEycHg7cGFkZGluZy1pbmxpbmUtZW5kOjEycHh9fUBzdXBwb3J0cyAoKC13ZWJraXQtbWFyZ2luLXN0YXJ0OiAwKSBvciAobWFyZ2luLWlubGluZS1zdGFydDogMCkpIG9yICgtd2Via2l0LW1hcmdpbi1zdGFydDogMCl7Omhvc3QgYnV0dG9ue21hcmdpbi1sZWZ0OnVuc2V0O21hcmdpbi1yaWdodDp1bnNldDstd2Via2l0LW1hcmdpbi1zdGFydDoycHg7bWFyZ2luLWlubGluZS1zdGFydDoycHg7LXdlYmtpdC1tYXJnaW4tZW5kOjJweDttYXJnaW4taW5saW5lLWVuZDoycHh9fTpob3N0KC50aW1lLWFjdGl2ZSkgI3RpbWUtYnV0dG9uLDpob3N0KC5kYXRlLWFjdGl2ZSkgI2RhdGUtYnV0dG9ue2NvbG9yOnZhcigtLWlvbi1jb2xvci1iYXNlKX06aG9zdCguZGF0ZXRpbWUtYnV0dG9uLWRpc2FibGVkKXtwb2ludGVyLWV2ZW50czpub25lfTpob3N0KC5kYXRldGltZS1idXR0b24tZGlzYWJsZWQpIGJ1dHRvbntvcGFjaXR5OjAuNH1cIjt2YXIgRGF0ZXRpbWVCdXR0b249ZnVuY3Rpb24oKXtmdW5jdGlvbiB0KHQpe3ZhciBlPXRoaXM7cmVnaXN0ZXJJbnN0YW5jZSh0aGlzLHQpO3RoaXMuZGF0ZXRpbWVFbD1udWxsO3RoaXMub3ZlcmxheUVsPW51bGw7dGhpcy5kYXRldGltZVByZXNlbnRhdGlvbj1cImRhdGUtdGltZVwiO3RoaXMuZGF0ZXRpbWVBY3RpdmU9ZmFsc2U7dGhpcy5jb2xvcj1cInByaW1hcnlcIjt0aGlzLmRpc2FibGVkPWZhbHNlO3RoaXMuZ2V0UGFyc2VkRGF0ZVZhbHVlcz1mdW5jdGlvbih0KXtpZih0PT09XCJcInx8dD09PXVuZGVmaW5lZHx8dD09PW51bGwpe3JldHVybltdfWlmKEFycmF5LmlzQXJyYXkodCkpe3JldHVybiB0fXJldHVyblt0XX07dGhpcy5zZXREYXRlVGltZVRleHQ9ZnVuY3Rpb24oKXt2YXIgdD1lLGk9dC5kYXRldGltZUVsLGE9dC5kYXRldGltZVByZXNlbnRhdGlvbjtpZighaSl7cmV0dXJufXZhciBuPWkudmFsdWUscj1pLmxvY2FsZSxvPWkuaG91ckN5Y2xlLHM9aS5wcmVmZXJXaGVlbCxkPWkubXVsdGlwbGUsbD1pLnRpdGxlU2VsZWN0ZWREYXRlc0Zvcm1hdHRlcjt2YXIgYz1lLmdldFBhcnNlZERhdGVWYWx1ZXMobik7dmFyIG09cGFyc2VEYXRlKGMubGVuZ3RoPjA/YzpbZ2V0VG9kYXkoKV0pO3ZhciBwPW1bMF07dmFyIHU9aXMyNEhvdXIocixvKTttLmZvckVhY2goKGZ1bmN0aW9uKHQpe3QudHpPZmZzZXQ9dW5kZWZpbmVkfSkpO2UuZGF0ZVRleHQ9ZS50aW1lVGV4dD11bmRlZmluZWQ7c3dpdGNoKGEpe2Nhc2VcImRhdGUtdGltZVwiOmNhc2VcInRpbWUtZGF0ZVwiOnZhciBnPWdldE1vbnRoRGF5QW5kWWVhcihyLHApO3ZhciBoPWdldExvY2FsaXplZFRpbWUocixwLHUpO2lmKHMpe2UuZGF0ZVRleHQ9XCJcIi5jb25jYXQoZyxcIiBcIikuY29uY2F0KGgpfWVsc2V7ZS5kYXRlVGV4dD1nO2UudGltZVRleHQ9aH1icmVhaztjYXNlXCJkYXRlXCI6aWYoZCYmYy5sZW5ndGghPT0xKXt2YXIgZj1cIlwiLmNvbmNhdChjLmxlbmd0aCxcIiBkYXlzXCIpO2lmKGwhPT11bmRlZmluZWQpe3RyeXtmPWwoYyl9Y2F0Y2godCl7cHJpbnRJb25FcnJvcihcIkV4Y2VwdGlvbiBpbiBwcm92aWRlZCBgdGl0bGVTZWxlY3RlZERhdGVzRm9ybWF0dGVyYDogXCIsdCl9fWUuZGF0ZVRleHQ9Zn1lbHNle2UuZGF0ZVRleHQ9Z2V0TW9udGhEYXlBbmRZZWFyKHIscCl9YnJlYWs7Y2FzZVwidGltZVwiOmUudGltZVRleHQ9Z2V0TG9jYWxpemVkVGltZShyLHAsdSk7YnJlYWs7Y2FzZVwibW9udGgteWVhclwiOmUuZGF0ZVRleHQ9Z2V0TW9udGhBbmRZZWFyKHIscCk7YnJlYWs7Y2FzZVwibW9udGhcIjplLmRhdGVUZXh0PWdldExvY2FsaXplZERhdGVUaW1lKHIscCx7bW9udGg6XCJsb25nXCJ9KTticmVhaztjYXNlXCJ5ZWFyXCI6ZS5kYXRlVGV4dD1nZXRMb2NhbGl6ZWREYXRlVGltZShyLHAse3llYXI6XCJudW1lcmljXCJ9KTticmVha319O3RoaXMud2FpdEZvckRhdGV0aW1lQ2hhbmdlcz1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIoZSx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0O3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihlKXt0PXRoaXMuZGF0ZXRpbWVFbDtpZighdCl7cmV0dXJuWzIsUHJvbWlzZS5yZXNvbHZlKCldfXJldHVyblsyLG5ldyBQcm9taXNlKChmdW5jdGlvbihlKXthZGRFdmVudExpc3RlbmVyKHQsXCJpb25SZW5kZXJcIixlLHtvbmNlOnRydWV9KX0pKV19KSl9KSl9O3RoaXMuaGFuZGxlRGF0ZUNsaWNrPWZ1bmN0aW9uKHQpe3JldHVybiBfX2F3YWl0ZXIoZSx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBlLGksYSxuLHI7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKG8pe2U9dGhpcyxpPWUuZGF0ZXRpbWVFbCxhPWUuZGF0ZXRpbWVQcmVzZW50YXRpb247aWYoIWkpe3JldHVyblsyXX1uPWZhbHNlO3N3aXRjaChhKXtjYXNlXCJkYXRlLXRpbWVcIjpjYXNlXCJ0aW1lLWRhdGVcIjpyPWkucHJlc2VudGF0aW9uIT09XCJkYXRlXCI7aWYoIWkucHJlZmVyV2hlZWwmJnIpe2kucHJlc2VudGF0aW9uPVwiZGF0ZVwiO249dHJ1ZX1icmVha310aGlzLnNlbGVjdGVkQnV0dG9uPVwiZGF0ZVwiO3RoaXMucHJlc2VudE92ZXJsYXkodCxuLHRoaXMuZGF0ZVRhcmdldEVsKTtyZXR1cm5bMl19KSl9KSl9O3RoaXMuaGFuZGxlVGltZUNsaWNrPWZ1bmN0aW9uKHQpe3ZhciBpPWUsYT1pLmRhdGV0aW1lRWwsbj1pLmRhdGV0aW1lUHJlc2VudGF0aW9uO2lmKCFhKXtyZXR1cm59dmFyIHI9ZmFsc2U7c3dpdGNoKG4pe2Nhc2VcImRhdGUtdGltZVwiOmNhc2VcInRpbWUtZGF0ZVwiOnZhciBvPWEucHJlc2VudGF0aW9uIT09XCJ0aW1lXCI7aWYobyl7YS5wcmVzZW50YXRpb249XCJ0aW1lXCI7cj10cnVlfWJyZWFrfWUuc2VsZWN0ZWRCdXR0b249XCJ0aW1lXCI7ZS5wcmVzZW50T3ZlcmxheSh0LHIsZS50aW1lVGFyZ2V0RWwpfTt0aGlzLnByZXNlbnRPdmVybGF5PWZ1bmN0aW9uKHQsaSxhKXtyZXR1cm4gX19hd2FpdGVyKGUsdm9pZCAwLHZvaWQgMCwoZnVuY3Rpb24oKXt2YXIgZTtyZXR1cm4gX19nZW5lcmF0b3IodGhpcywoZnVuY3Rpb24obil7c3dpdGNoKG4ubGFiZWwpe2Nhc2UgMDplPXRoaXMub3ZlcmxheUVsO2lmKCFlKXtyZXR1cm5bMl19aWYoIShlLnRhZ05hbWU9PT1cIklPTi1QT1BPVkVSXCIpKXJldHVyblszLDNdO2lmKCFpKXJldHVyblszLDJdO3JldHVybls0LHRoaXMud2FpdEZvckRhdGV0aW1lQ2hhbmdlcygpXTtjYXNlIDE6bi5zZW50KCk7bi5sYWJlbD0yO2Nhc2UgMjplLnByZXNlbnQoT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LHQpLHtkZXRhaWw6e2lvblNoYWRvd1RhcmdldDphfX0pKTtyZXR1cm5bMyw0XTtjYXNlIDM6ZS5wcmVzZW50KCk7bi5sYWJlbD00O2Nhc2UgNDpyZXR1cm5bMl19fSkpfSkpfX10LnByb3RvdHlwZS5jb21wb25lbnRXaWxsTG9hZD1mdW5jdGlvbigpe3JldHVybiBfX2F3YWl0ZXIodGhpcyx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciB0LGUsaSxhO3ZhciBuPXRoaXM7cmV0dXJuIF9fZ2VuZXJhdG9yKHRoaXMsKGZ1bmN0aW9uKHIpe3Q9dGhpcy5kYXRldGltZTtpZighdCl7cHJpbnRJb25FcnJvcihcIkFuIElEIGFzc29jaWF0ZWQgd2l0aCBhbiBpb24tZGF0ZXRpbWUgaW5zdGFuY2UgaXMgcmVxdWlyZWQgZm9yIGlvbi1kYXRldGltZS1idXR0b24gdG8gZnVuY3Rpb24gcHJvcGVybHkuXCIsdGhpcy5lbCk7cmV0dXJuWzJdfWU9dGhpcy5kYXRldGltZUVsPWRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHQpO2lmKCFlKXtwcmludElvbkVycm9yKFwiTm8gaW9uLWRhdGV0aW1lIGluc3RhbmNlIGZvdW5kIGZvciBJRCAnXCIuY29uY2F0KHQsXCInLlwiKSx0aGlzLmVsKTtyZXR1cm5bMl19aT1uZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGZ1bmN0aW9uKHQpe3ZhciBlPXRbMF07bi5kYXRldGltZUFjdGl2ZT1lLmlzSW50ZXJzZWN0aW5nfSkse3RocmVzaG9sZDouMDF9KTtpLm9ic2VydmUoZSk7YT10aGlzLm92ZXJsYXlFbD1lLmNsb3Nlc3QoXCJpb24tbW9kYWwsIGlvbi1wb3BvdmVyXCIpO2lmKGEpe2EuY2xhc3NMaXN0LmFkZChcImlvbi1kYXRldGltZS1idXR0b24tb3ZlcmxheVwiKX1jb21wb25lbnRPblJlYWR5KGUsKGZ1bmN0aW9uKCl7dmFyIHQ9bi5kYXRldGltZVByZXNlbnRhdGlvbj1lLnByZXNlbnRhdGlvbnx8XCJkYXRlLXRpbWVcIjtuLnNldERhdGVUaW1lVGV4dCgpO2FkZEV2ZW50TGlzdGVuZXIoZSxcImlvbkNoYW5nZVwiLG4uc2V0RGF0ZVRpbWVUZXh0KTtzd2l0Y2godCl7Y2FzZVwiZGF0ZS10aW1lXCI6Y2FzZVwiZGF0ZVwiOmNhc2VcIm1vbnRoLXllYXJcIjpjYXNlXCJtb250aFwiOmNhc2VcInllYXJcIjpuLnNlbGVjdGVkQnV0dG9uPVwiZGF0ZVwiO2JyZWFrO2Nhc2VcInRpbWUtZGF0ZVwiOmNhc2VcInRpbWVcIjpuLnNlbGVjdGVkQnV0dG9uPVwidGltZVwiO2JyZWFrfX0pKTtyZXR1cm5bMl19KSl9KSl9O3QucHJvdG90eXBlLnJlbmRlcj1mdW5jdGlvbigpe3ZhciB0O3ZhciBlPXRoaXM7dmFyIGk9dGhpcyxhPWkuY29sb3Isbj1pLmRhdGVUZXh0LHI9aS50aW1lVGV4dCxvPWkuc2VsZWN0ZWRCdXR0b24scz1pLmRhdGV0aW1lQWN0aXZlLGQ9aS5kaXNhYmxlZDt2YXIgbD1nZXRJb25Nb2RlKHRoaXMpO3JldHVybiBoKEhvc3Qse2NsYXNzOmNyZWF0ZUNvbG9yQ2xhc3NlcyhhLCh0PXt9LHRbbF09dHJ1ZSx0W1wiXCIuY29uY2F0KG8sXCItYWN0aXZlXCIpXT1zLHRbXCJkYXRldGltZS1idXR0b24tZGlzYWJsZWRcIl09ZCx0KSl9LG4mJmgoXCJidXR0b25cIix7Y2xhc3M6XCJpb24tYWN0aXZhdGFibGVcIixpZDpcImRhdGUtYnV0dG9uXCIsXCJhcmlhLWV4cGFuZGVkXCI6cz9cInRydWVcIjpcImZhbHNlXCIsb25DbGljazp0aGlzLmhhbmRsZURhdGVDbGljayxkaXNhYmxlZDpkLHBhcnQ6XCJuYXRpdmVcIixyZWY6ZnVuY3Rpb24odCl7cmV0dXJuIGUuZGF0ZVRhcmdldEVsPXR9fSxoKFwic2xvdFwiLHtuYW1lOlwiZGF0ZS10YXJnZXRcIn0sbiksbD09PVwibWRcIiYmaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsbnVsbCkpLHImJmgoXCJidXR0b25cIix7Y2xhc3M6XCJpb24tYWN0aXZhdGFibGVcIixpZDpcInRpbWUtYnV0dG9uXCIsXCJhcmlhLWV4cGFuZGVkXCI6cz9cInRydWVcIjpcImZhbHNlXCIsb25DbGljazp0aGlzLmhhbmRsZVRpbWVDbGljayxkaXNhYmxlZDpkLHBhcnQ6XCJuYXRpdmVcIixyZWY6ZnVuY3Rpb24odCl7cmV0dXJuIGUudGltZVRhcmdldEVsPXR9fSxoKFwic2xvdFwiLHtuYW1lOlwidGltZS10YXJnZXRcIn0sciksbD09PVwibWRcIiYmaChcImlvbi1yaXBwbGUtZWZmZWN0XCIsbnVsbCkpKX07T2JqZWN0LmRlZmluZVByb3BlcnR5KHQucHJvdG90eXBlLFwiZWxcIix7Z2V0OmZ1bmN0aW9uKCl7cmV0dXJuIGdldEVsZW1lbnQodGhpcyl9LGVudW1lcmFibGU6ZmFsc2UsY29uZmlndXJhYmxlOnRydWV9KTtyZXR1cm4gdH0oKTtEYXRldGltZUJ1dHRvbi5zdHlsZT17aW9zOmlvc0RhdGV0aW1lQnV0dG9uQ3NzLG1kOm1kRGF0ZXRpbWVCdXR0b25Dc3N9O2V4cG9ydHtEYXRldGltZUJ1dHRvbiBhcyBpb25fZGF0ZXRpbWVfYnV0dG9ufTsiLCJpbXBvcnR7X19hd2FpdGVyLF9fZ2VuZXJhdG9yfWZyb21cInRzbGliXCI7XG4vKiFcbiAqIChDKSBJb25pYyBodHRwOi8vaW9uaWNmcmFtZXdvcmsuY29tIC0gTUlUIExpY2Vuc2VcbiAqL3ZhciBob3N0Q29udGV4dD1mdW5jdGlvbihyLHQpe3JldHVybiB0LmNsb3Nlc3QocikhPT1udWxsfTt2YXIgY3JlYXRlQ29sb3JDbGFzc2VzPWZ1bmN0aW9uKHIsdCl7dmFyIG47cmV0dXJuIHR5cGVvZiByPT09XCJzdHJpbmdcIiYmci5sZW5ndGg+MD9PYmplY3QuYXNzaWduKChuPXtcImlvbi1jb2xvclwiOnRydWV9LG5bXCJpb24tY29sb3ItXCIuY29uY2F0KHIpXT10cnVlLG4pLHQpOnR9O3ZhciBnZXRDbGFzc0xpc3Q9ZnVuY3Rpb24ocil7aWYociE9PXVuZGVmaW5lZCl7dmFyIHQ9QXJyYXkuaXNBcnJheShyKT9yOnIuc3BsaXQoXCIgXCIpO3JldHVybiB0LmZpbHRlcigoZnVuY3Rpb24ocil7cmV0dXJuIHIhPW51bGx9KSkubWFwKChmdW5jdGlvbihyKXtyZXR1cm4gci50cmltKCl9KSkuZmlsdGVyKChmdW5jdGlvbihyKXtyZXR1cm4gciE9PVwiXCJ9KSl9cmV0dXJuW119O3ZhciBnZXRDbGFzc01hcD1mdW5jdGlvbihyKXt2YXIgdD17fTtnZXRDbGFzc0xpc3QocikuZm9yRWFjaCgoZnVuY3Rpb24ocil7cmV0dXJuIHRbcl09dHJ1ZX0pKTtyZXR1cm4gdH07dmFyIFNDSEVNRT0vXlthLXpdW2EtejAtOStcXC0uXSo6Lzt2YXIgb3BlblVSTD1mdW5jdGlvbihyLHQsbixlKXtyZXR1cm4gX19hd2FpdGVyKHZvaWQgMCx2b2lkIDAsdm9pZCAwLChmdW5jdGlvbigpe3ZhciBvO3JldHVybiBfX2dlbmVyYXRvcih0aGlzLChmdW5jdGlvbihhKXtpZihyIT1udWxsJiZyWzBdIT09XCIjXCImJiFTQ0hFTUUudGVzdChyKSl7bz1kb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaW9uLXJvdXRlclwiKTtpZihvKXtpZih0IT1udWxsKXt0LnByZXZlbnREZWZhdWx0KCl9cmV0dXJuWzIsby5wdXNoKHIsbixlKV19fXJldHVyblsyLGZhbHNlXX0pKX0pKX07ZXhwb3J0e2NyZWF0ZUNvbG9yQ2xhc3NlcyBhcyBjLGdldENsYXNzTWFwIGFzIGcsaG9zdENvbnRleHQgYXMgaCxvcGVuVVJMIGFzIG99OyJdLCJuYW1lcyI6WyJEYXRldGltZUJ1dHRvbiIsInQiLCJlIiwidGhpcyIsInJlZ2lzdGVySW5zdGFuY2UiLCJkYXRldGltZUVsIiwib3ZlcmxheUVsIiwiZGF0ZXRpbWVQcmVzZW50YXRpb24iLCJkYXRldGltZUFjdGl2ZSIsImNvbG9yIiwiZGlzYWJsZWQiLCJnZXRQYXJzZWREYXRlVmFsdWVzIiwidW5kZWZpbmVkIiwiQXJyYXkiLCJpc0FycmF5Iiwic2V0RGF0ZVRpbWVUZXh0IiwiaSIsImEiLCJuIiwidmFsdWUiLCJyIiwibG9jYWxlIiwibyIsImhvdXJDeWNsZSIsInMiLCJwcmVmZXJXaGVlbCIsImQiLCJtdWx0aXBsZSIsImwiLCJ0aXRsZVNlbGVjdGVkRGF0ZXNGb3JtYXR0ZXIiLCJjIiwibSIsInBhcnNlRGF0ZSIsImxlbmd0aCIsImdldFRvZGF5IiwicCIsInUiLCJpczI0SG91ciIsImZvckVhY2giLCJ0ek9mZnNldCIsImRhdGVUZXh0IiwidGltZVRleHQiLCJnIiwiZ2V0TW9udGhEYXlBbmRZZWFyIiwiaCIsImdldExvY2FsaXplZFRpbWUiLCJjb25jYXQiLCJmIiwicHJpbnRJb25FcnJvciIsImdldE1vbnRoQW5kWWVhciIsImdldExvY2FsaXplZERhdGVUaW1lIiwibW9udGgiLCJ5ZWFyIiwid2FpdEZvckRhdGV0aW1lQ2hhbmdlcyIsIl9fYXdhaXRlciIsIl9fZ2VuZXJhdG9yIiwiUHJvbWlzZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJvbmNlIiwicmVzb2x2ZSIsImhhbmRsZURhdGVDbGljayIsInByZXNlbnRhdGlvbiIsInNlbGVjdGVkQnV0dG9uIiwicHJlc2VudE92ZXJsYXkiLCJkYXRlVGFyZ2V0RWwiLCJoYW5kbGVUaW1lQ2xpY2siLCJ0aW1lVGFyZ2V0RWwiLCJsYWJlbCIsInRhZ05hbWUiLCJzZW50IiwicHJlc2VudCIsIk9iamVjdCIsImFzc2lnbiIsImRldGFpbCIsImlvblNoYWRvd1RhcmdldCIsInByb3RvdHlwZSIsImNvbXBvbmVudFdpbGxMb2FkIiwiZGF0ZXRpbWUiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJpc0ludGVyc2VjdGluZyIsInRocmVzaG9sZCIsIm9ic2VydmUiLCJjbG9zZXN0IiwiY2xhc3NMaXN0IiwiYWRkIiwiY29tcG9uZW50T25SZWFkeSIsImVsIiwicmVuZGVyIiwiZ2V0SW9uTW9kZSIsIkhvc3QiLCJjbGFzcyIsImNyZWF0ZUNvbG9yQ2xhc3NlcyIsImlkIiwib25DbGljayIsInBhcnQiLCJyZWYiLCJuYW1lIiwiZGVmaW5lUHJvcGVydHkiLCJnZXQiLCJnZXRFbGVtZW50IiwiZW51bWVyYWJsZSIsImNvbmZpZ3VyYWJsZSIsInN0eWxlIiwiaW9zIiwibWQiLCJob3N0Q29udGV4dCIsImdldENsYXNzTWFwIiwic3BsaXQiLCJmaWx0ZXIiLCJtYXAiLCJ0cmltIiwiZ2V0Q2xhc3NMaXN0IiwiU0NIRU1FIiwib3BlblVSTCIsInRlc3QiLCJxdWVyeVNlbGVjdG9yIiwicHJldmVudERlZmF1bHQiLCJwdXNoIl0sInNvdXJjZVJvb3QiOiIifQ==