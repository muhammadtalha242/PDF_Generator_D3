(this.webpackJsonppdf_viewer_app=this.webpackJsonppdf_viewer_app||[]).push([[0],{246:function(e,t,a){},267:function(e,t,a){},268:function(e,t,a){},269:function(e,t,a){},270:function(e,t,a){},271:function(e,t,a){},272:function(e,t,a){},273:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(11),i=a.n(c),o=(a(246),a(16)),s=a(26),d=a.n(s),l=a(114),u=a(14),j=a(88),m=a.n(j),b=(new Date).getTime(),p=function(e,t){var a=function(e){return 610.78*Math.pow(Math.E,e/(e+238.3)*17.2694)}(e)*(1-t/100)/1e3;return Math.round(100*a)/100},h=function(e,t,a){return(e-t)/(a-t)},f=a.p+"static/media/2021_week19_climate_data.513ad7be.csv",x=a(311),O=a(323),y=a(324),v=a(314),g=a(321),_=a(3),D=Object(x.a)((function(e){return{formControl:{margin:e.spacing(1),minWidth:120},selectEmpty:{marginTop:e.spacing(6)},elementPadding:{padding:e.spacing(6)}}}));function k(e){var t=e.currentSensor,a=e.setcurrentSensor,n=e.dataSetSelecots,r=(e.display,e.setDisplay,D());return Object(_.jsx)("div",{className:r.selectEmpty,children:Object(_.jsxs)(v.a,{variant:"outlined",className:r.formControl,children:[Object(_.jsx)(O.a,{id:"demo-simple-select-outlined-label",children:"Sensors"}),Object(_.jsx)(g.a,{labelId:"demo-simple-select-outlined-label",id:"demo-simple-select-outlined",value:t,onChange:function(e){a(e.target.value)},label:"Sensor",children:n.map((function(e){return Object(_.jsx)(y.a,{value:e.value,children:e.key},e.key)}))})]})})}var C=a(277),w=a(316),S=a(120),N=(a(265),a(266),a(267),a(121)),T=a(322),F=(a(268),function(e){return i.a.createPortal(Object(_.jsx)("div",{className:"backdrop",onClick:e.onClick}),document.getElementById("backdrop-hook"))}),E=(a(269),function(e){var t=Object(_.jsxs)("div",{className:"modal ".concat(e.className),style:e.style,children:[Object(_.jsx)("header",{className:"modal__header ".concat(e.headerClass),children:Object(_.jsx)("h2",{children:e.header})}),Object(_.jsxs)("form",{onSubmit:e.onSubmit?e.onSubmit:function(e){return e.preventDefault()},children:[Object(_.jsx)("div",{className:"modal__content ".concat(e.contentClass),children:e.children}),Object(_.jsx)("footer",{className:"modal__footer ".concat(e.footerClass),children:e.footer})]})]});return i.a.createPortal(t,document.getElementById("modal-hook"))}),P=function(e){return Object(_.jsxs)(r.a.Fragment,{children:[e.show&&Object(_.jsx)(F,{onClick:e.onCancel}),Object(_.jsx)(T.a,{in:e.show,mountOnEnter:!0,unmountOnExit:!0,timeout:200,classNames:"modal",children:Object(_.jsx)(E,Object(N.a)({},e))})]})},H=Object(x.a)((function(e){return{root:{display:"flex",flexDirection:"column",alignItems:"center","& > *":{margin:e.spacing(1)}},buttonHover:{"&:hover":{cursor:"pointer",backgroundColor:"#86af49"},"&:active":{backgroundColor:"#86af49"}}}})),B={startDate:new Date,endDate:new Date,key:"selection"};function V(e){var t=e.dateSelector,a=(e.currentDate,e.setCurrentDate),n=e.display,c=H(),i=r.a.useState(!1),s=Object(o.a)(i,2),d=s[0],l=s[1],u=r.a.useState({startDate:t[0].days,endDate:void 0}),j=Object(o.a)(u,2),m=j[0],b=j[1],p=function(e){var n=t.find((function(t){return t.key===e.target.innerText.toLowerCase()}));if(0===n.days)l(!0);else{var r={startDate:n.days,endData:void 0};a(r)}};return d?Object(_.jsx)(P,{show:d,contentClass:"place-item__modal-content",footerClass:"place-item__modal-actions",header:"Current date: ".concat(new Date(m.startDate).toDateString()," - ").concat(new Date(m.endDate).toDateString()),footer:Object(_.jsx)(C.a,{onClick:function(){l(!1)},children:"CLOSE"}),children:Object(_.jsx)(S.DateRangePicker,{ranges:[B],onChange:function(e){a(e.selection),b(e.selection)}})}):n?Object(_.jsx)(r.a.Fragment,{}):Object(_.jsx)("div",{className:c.root,children:Object(_.jsx)(w.a,{variant:"text",color:"primary","aria-label":"text primary button group",children:t.map((function(e){return Object(_.jsx)(C.a,{className:c.buttonHover,onClick:p,children:e.key},e.key)}))})})}var I=20,L=50,M=500-I-20,R=760-L-10;var G=function(e){var t=e.data,a=e.date,c=e.sensors,i=["#7CFC00","#228B22","#4F7942","#50C878"],o={};c.forEach((function(e,t){o[e]=i[t]}));var s=Object(n.useRef)(),d=(Object(n.useRef)(),[]);return Object(n.useEffect)((function(){var e=Object(u.i)(s.current);JSON.parse(JSON.stringify(t)).forEach((function(e){if(function(e,t){var a=t.startDate,n=t.endDate;if("function"===typeof a.getMonth)return m()(e).isBetween(a,n);var r=new Date(b-3456e6*a);return m()(e).isBetween(r,n)}(e.Date,a)){var n={};4===c.length?(n.Date=e.Date,n.temperature=h(e.avg_temp,Object(u.e)(t,(function(e){return e.avg_temp})),Object(u.d)(t,(function(e){return e.avg_temp}))),n.co2=h(e.avg_co2,Object(u.e)(t,(function(e){return e.avg_co2})),Object(u.d)(t,(function(e){return e.avg_co2}))),n.humitidy=h(e.avg_humitidy,Object(u.e)(t,(function(e){return e.avg_humitidy})),Object(u.d)(t,(function(e){return e.avg_humitidy}))),n.vpd=h(e.avg_vpd,Object(u.e)(t,(function(e){return e.avg_vpd})),Object(u.d)(t,(function(e){return e.avg_vpd}))),d.push(n)):(c.forEach((function(t){n.Date=e.Date,t in e&&(n[t]=e[t])})),d.push(n))}})),console.log("outputData: ",d);var n=Object(u.j)().keys(c).order(u.k)(d),r=[0,Object(u.d)(n,(function(e){return Object(u.d)(e,(function(e){return e[1]}))}))],i=Object(u.g)().domain(d.map((function(e){return new Date(e.Date).getTime()}))).range([0,R]).padding(.2),l=Object(u.h)().domain(r).range([M,0]);e.selectAll(".layer").data(n).join("g").attr("class","layer").attr("fill",(function(e){return o[e.key]})).selectAll("rect").data((function(e){return e})).join("rect").attr("x",(function(e){return i(new Date(e.data.Date).getTime())})).attr("width",i.bandwidth()).attr("y",(function(e){return l(e[1])})).attr("height",(function(e){return l(e[0])-l(e[1])})).attr("transform","translate(".concat(L,",").concat(I,")")).on("mouseover",(function(){j.style("display",null)})).on("mouseout",(function(){j.style("display","none")})).on("mousemove",(function(t){var a=Object(u.f)(t,e.node)[0],n=Object(u.f)(t,e.node)[1];j.attr("transform","translate( ".concat(a-200,", ").concat(n-100,")")),j.select("text").text((function(e){return e}))}));var j=e.append("g").attr("class","tooltip").style("display","none");j.append("text").attr("dy","1.2em").style("text-anchor","middle").attr("font-size","15px").attr("font-weight","bold"),e.append("text").attr("class","x label").attr("text-anchor","end").attr("x",R/2).attr("y",M+60).text("Date Month"),e.append("text").attr("class","y label").attr("text-anchor","end").attr("y",R/2-350).attr("x",-M/2+50).attr("dy",".75em").attr("transform","rotate(-90)").text("Sensor Data");var p=Object(u.a)(i).scale(i).tickFormat(Object(u.l)("%d %b")).tickValues(i.domain().filter((function(e,t){return!(t%400)})));e.select(".x-axis").attr("transform","translate(0, ".concat(M,")")).call(p);var f=Object(u.b)(l);e.select(".y-axis").call(f)}),[d,t,a,c,o]),Object(_.jsx)(r.a.Fragment,{children:Object(_.jsx)("svg",{ref:s,width:760,height:500,children:Object(_.jsxs)("g",{transform:"translate(".concat(L,",").concat(I,")"),children:[Object(_.jsx)("g",{className:"x-axis"}),Object(_.jsx)("g",{className:"y-axis"})]})})})},J=[{key:"Temperature",value:["Temperature_2","Temperature_137522"]},{key:"Co2 Levels",value:["CarbonDioxide_2","CarbonDioxide_137522"]},{key:"Humidity",value:["Humitidy_2","Humitidy_137522"]},{key:"VPD",value:["Vpd_2","Vpd_137522"]},{key:"All",value:["temperature","co2","humitidy","vpd"]}],A=[{key:"12 hours",days:.5},{key:"1 day",days:1},{key:"7 days",days:7},{key:"14 days",days:14},{key:"30 days",days:30},{key:"custome date",days:0}],W=a(320),z=a(317),q=a(318),K=a(319),Q=a.p+"static/media/logo.872fc8ea.png",U=Object(x.a)((function(){return{header:{backgroundColor:"white",width:"100%",position:"inherit"},logoStyle:{maxWidth:"170px"}}}));function X(e){var t=e.display,a=U(),n=a.header,c=a.logoStyle,i=Object(_.jsx)(q.a,{variant:"h6",component:"h1",children:Object(_.jsx)("img",{src:Q,alt:"logo",className:c})});return t?Object(_.jsx)("header",{children:Object(_.jsx)(K.a,{className:n,children:Object(_.jsx)(z.a,{children:i})})}):Object(_.jsx)(r.a.Fragment,{})}a(270);var Y=function(e){return e.display?Object(_.jsxs)(r.a.Fragment,{children:[Object(_.jsxs)("div",{className:"report-details",children:[Object(_.jsxs)("span",{children:["Report created by: ",Object(_.jsx)("span",{className:"report-creater",children:" Talha "})]}),Object(_.jsx)("span",{children:"Report Date: Date"})]}),Object(_.jsxs)("div",{className:"main-text",children:[Object(_.jsx)("span",{className:"company-name",children:"Scimetic | Epic Solutions"}),Object(_.jsx)("span",{className:"greenhouse-name",children:"Test Greenhouse"}),Object(_.jsx)("span",{children:"Genealogy: test Genealogy"}),Object(_.jsxs)("span",{children:["Date of Plating: ",(new Date).toDateString()]})]}),Object(_.jsx)("span",{className:"d3-chart",children:e.children}),Object(_.jsx)("p",{children:"More text can be added"})]}):Object(_.jsxs)(r.a.Fragment,{children:[" ",e.children]})},Z=a(122),$=a(123),ee=a.n($),te=function(e){return e.display?Object(_.jsx)(r.a.Fragment,{children:Object(_.jsx)(C.a,{variant:"outlined",color:"primary","aria-label":"text primary button",onClick:function(){var e=document.getElementById("divToPrint");ee.a.toPng(e).then((function(e){var t=new Z.a;t.addImage(e,"PNG",0,0),t.save("download.pdf")})).catch((function(e){console.error("oops, something went wrong!",e)}))},children:"Print"})}):Object(_.jsx)(r.a.Fragment,{})},ae=(a(271),function(e){return Object(_.jsx)("div",{className:"".concat(e.asOverlay&&"loading-spinner__overlay"),children:Object(_.jsx)("div",{className:"lds-dual-ring"})})}),ne=(a(272),function(){var e=function(){var e=Object(n.useState)(null),t=Object(o.a)(e,2),a=t[0],r=t[1];return Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(d.a.mark((function e(){var t,a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=function(e){return e.Date=new Date(e.Date),e.Temperature_2=+[e.Temperature_2],e.Temperature_137522=+[e.Temperature_137522],e.Humitidy_137522=+[e.Humitidy_137522],e.Humitidy_2=+[e.Humitidy_2],e.CarbonDioxide_137522=+[e.CarbonDioxide_137522],e.CarbonDioxide_2=+[e.CarbonDioxide_2],e.Vpd_2=p(e.Temperature_2,e.Humitidy_2),e.Vpd_137522=p(e.Temperature_137522,e.Humitidy_137522),e.avg_temp=(e.Temperature_137522+e.Temperature_2)/2,e.avg_co2=(e.CarbonDioxide_137522+e.CarbonDioxide_2)/2,e.avg_humitidy=(e.Humitidy_137522+e.Humitidy_2)/2,e.avg_vpd=(e.Vpd_137522+e.Vpd_2)/2,e},e.next=3,Object(u.c)(f,t);case 3:a=e.sent,r(a);case 5:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]),a}(),t=r.a.useState(J[0].value),a=Object(o.a)(t,2),c=a[0],i=a[1],s=r.a.useState({startDate:A[3].days,endDate:void 0}),j=Object(o.a)(s,2),m=j[0],b=j[1],h=r.a.useState(!1),x=Object(o.a)(h,2),O=x[0],y=x[1];return e?Object(_.jsx)(r.a.Fragment,{children:Object(_.jsxs)(W.a,{container:!0,children:[Object(_.jsx)(W.a,{item:!0,md:1,style:{marginLeft:"10%"}}),Object(_.jsx)("div",{children:Object(_.jsxs)(W.a,{item:!0,md:9,style:{maxWidth:"100%"},id:"divToPrint",children:[Object(_.jsx)(X,{display:O}),Object(_.jsx)(V,{currentDate:m,setCurrentDate:b,dateSelector:A,display:O}),Object(_.jsxs)(Y,{display:O,children:[Object(_.jsx)(G,{data:e,date:m,sensors:c}),Object(_.jsx)("h3",{children:" Graph Name & description  "})]})]})}),Object(_.jsxs)(W.a,{item:!0,md:2,style:{marginLeft:"4%"},children:[Object(_.jsx)(k,{currentSensor:c,dataSetSelecots:J,setcurrentSensor:i,display:O,setDisplay:y}),Object(_.jsx)(C.a,{variant:"outlined",color:"primary",onClick:function(){y(!O)},children:O?"Back":"View PDF Report"}),Object(_.jsx)(te,{display:O})]})]})}):Object(_.jsx)("div",{className:"center",children:Object(_.jsx)(ae,{})})}),re=function(e){e&&e instanceof Function&&a.e(6).then(a.bind(null,698)).then((function(t){var a=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;a(e),n(e),r(e),c(e),i(e)}))};i.a.render(Object(_.jsx)(r.a.StrictMode,{children:Object(_.jsx)(ne,{})}),document.getElementById("root")),re()}},[[273,1,3]]]);
//# sourceMappingURL=main.98588b49.chunk.js.map