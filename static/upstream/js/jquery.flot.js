/* FLOT */
function bigCharts(){
(function(F){function D(AO,e,f){var W=[],o={colors:["#ffa337","#036daa","#35672e","#615132","#e44028"],legend:{show:true,noColumns:1,labelFormatter:null,labelBoxBorderColor:"#615132",container:null,position:"ne",margin:3,backgroundColor:null,backgroundOpacity:0.85},xaxis:{mode:null,min:null,max:null,autoscaleMargin:null,ticks:null,tickFormatter:null,labelWidth:null,labelHeight:null,tickDecimals:null,tickSize:null,minTickSize:null,monthNames:null,timeformat:null},yaxis:{autoscaleMargin:0.02},x2axis:{autoscaleMargin:null},y2axis:{autoscaleMargin:0.02},points:{show:false,radius:3,lineWidth:2,fill:true,fillColor:"#fffdcd"},lines:{show:false,lineWidth:2,fill:true,fillColor:null},bars:{show:false,lineWidth:2,barWidth:1,fill:true,fillColor:null,align:"left"},grid:{color:"#545454",backgroundColor:null,tickColor:"#dddddd",labelMargin:5,borderWidth:1,markings:null,markingsColor:"#f4f4f4",markingsLineWidth:2,clickable:false,hoverable:false,autoHighlight:true,mouseActiveRadius:10},selection:{mode:null,color:"#e8cfac"},shadowSize:0},X=null,AP=null,AQ=null,g=null,AX=null,K=AO,AA={xaxis:{},yaxis:{},x2axis:{},y2axis:{}},m={left:0,right:0,top:0,bottom:0},AI=0,Z=0,N=0,AB=0,S={};this.setData=n;this.setupGrid=s;this.draw=AU;this.clearSelection=I;this.setSelection=AC;this.getCanvas=function(){return X};this.getPlotOffset=function(){return m};this.getData=function(){return W};this.getAxes=function(){return AA};this.highlight=AS;this.unhighlight=AH;y(f);n(e);j();s();AU();function n(AY){W=U(AY);c();t()}function U(Ac){var Aa=[];for(var AZ=0;AZ<Ac.length;++AZ){var Ab;if(Ac[AZ].data){Ab={};for(var AY in Ac[AZ]){Ab[AY]=Ac[AZ][AY]}}else{Ab={data:Ac[AZ]}}Aa.push(Ab)}return Aa}function y(AY){F.extend(true,o,AY);if(o.xaxis.noTicks&&o.xaxis.ticks==null){o.xaxis.ticks=o.xaxis.noTicks}if(o.yaxis.noTicks&&o.yaxis.ticks==null){o.yaxis.ticks=o.yaxis.noTicks}if(o.grid.coloredAreas){o.grid.markings=o.grid.coloredAreas}if(o.grid.coloredAreasColor){o.grid.markingsColor=o.grid.coloredAreasColor}}function c(){var Ad;var Ai=W.length,AY=[],Ab=[];for(Ad=0;Ad<W.length;++Ad){var Ah=W[Ad].color;if(Ah!=null){--Ai;if(typeof Ah=="number"){Ab.push(Ah)}else{AY.push(E(W[Ad].color))}}}for(Ad=0;Ad<Ab.length;++Ad){Ai=Math.max(Ai,Ab[Ad]+1)}var AZ=[],Ac=0;Ad=0;while(AZ.length<Ai){var Ag;if(o.colors.length==Ad){Ag=new G(100,100,100)}else{Ag=E(o.colors[Ad])}var Aa=Ac%2==1?-1:1;var Af=1+Aa*Math.ceil(Ac/2)*0.2;Ag.scale(Af,Af,Af);AZ.push(Ag);++Ad;if(Ad>=o.colors.length){Ad=0;++Ac}}var Ae=0,Aj;for(Ad=0;Ad<W.length;++Ad){Aj=W[Ad];if(Aj.color==null){Aj.color=AZ[Ae].toString();++Ae}else{if(typeof Aj.color=="number"){Aj.color=AZ[Aj.color].toString()}}Aj.lines=F.extend(true,{},o.lines,Aj.lines);Aj.points=F.extend(true,{},o.points,Aj.points);Aj.bars=F.extend(true,{},o.bars,Aj.bars);if(Aj.shadowSize==null){Aj.shadowSize=o.shadowSize}if(Aj.xaxis&&Aj.xaxis==2){Aj.xaxis=AA.x2axis}else{Aj.xaxis=AA.xaxis}if(Aj.yaxis&&Aj.yaxis==2){Aj.yaxis=AA.y2axis}else{Aj.yaxis=AA.yaxis}}}function t(){var Aa=Number.POSITIVE_INFINITY,AZ=Number.NEGATIVE_INFINITY,Ab;for(Ab in AA){AA[Ab].datamin=Aa;AA[Ab].datamax=AZ;AA[Ab].used=false}for(var Ae=0;Ae<W.length;++Ae){var Ad=W[Ae].data,Aj=W[Ae].xaxis,Ai=W[Ae].yaxis,AY=0,Ah=0;if(W[Ae].bars.show){AY=W[Ae].bars.align=="left"?0:-W[Ae].bars.barWidth/2;Ah=AY+W[Ae].bars.barWidth}Aj.used=Ai.used=true;for(var Ac=0;Ac<Ad.length;++Ac){if(Ad[Ac]==null){continue}var Ag=Ad[Ac][0],Af=Ad[Ac][1];if(Ag!=null&&!isNaN(Ag=+Ag)){if(Ag+AY<Aj.datamin){Aj.datamin=Ag+AY}if(Ag+Ah>Aj.datamax){Aj.datamax=Ag+Ah}}if(Af!=null&&!isNaN(Af=+Af)){if(Af<Ai.datamin){Ai.datamin=Af}if(Af>Ai.datamax){Ai.datamax=Af}}if(Ag==null||Af==null||isNaN(Ag)||isNaN(Af)){Ad[Ac]=null}}}for(Ab in AA){if(AA[Ab].datamin==Aa){AA[Ab].datamin=0}if(AA[Ab].datamax==AZ){AA[Ab].datamax=1}}}function j(){AI=K.width();Z=K.height();K.html("");K.css("position","relative");if(AI<=0||Z<=0){throw"Invalid dimensions for plot, width = "+AI+", height = "+Z}X=F('<canvas width="'+AI+'" height="'+Z+'"></canvas>').appendTo(K).get(0);if(F.browser.msie){X=window.G_vmlCanvasManager.initElement(X)}g=X.getContext("2d");AP=F('<canvas style="position:absolute;left:0px;top:0px;" width="'+AI+'" height="'+Z+'"></canvas>').appendTo(K).get(0);if(F.browser.msie){AP=window.G_vmlCanvasManager.initElement(AP)}AX=AP.getContext("2d");AQ=F([AP,X]);if(o.selection.mode!=null||o.grid.hoverable){AQ.each(function(){this.onmousemove=J});if(o.selection.mode!=null){AQ.mousedown(AN)}}if(o.grid.clickable){AQ.click(k)}}function s(){function AY(Ab,Aa){Q(Ab,Aa);L(Ab,Aa);w(Ab,Aa);if(Ab==AA.xaxis||Ab==AA.x2axis){Ab.p2c=function(Ac){return(Ac-Ab.min)*Ab.scale};Ab.c2p=function(Ac){return Ab.min+Ac/Ab.scale}}else{Ab.p2c=function(Ac){return(Ab.max-Ac)*Ab.scale};Ab.c2p=function(Ac){return Ab.max-Ac/Ab.scale}}}for(var AZ in AA){AY(AA[AZ],o[AZ])}AW();p();AV()}function Q(Ab,Ad){var Aa=Ad.min!=null?Ad.min:Ab.datamin;var AY=Ad.max!=null?Ad.max:Ab.datamax;if(AY-Aa==0){var AZ;if(AY==0){AZ=1}else{AZ=0.01}Aa-=AZ;AY+=AZ}else{var Ac=Ad.autoscaleMargin;if(Ac!=null){if(Ad.min==null){Aa-=(AY-Aa)*Ac;if(Aa<0&&Ab.datamin>=0){Aa=0}}if(Ad.max==null){AY+=(AY-Aa)*Ac;if(AY>0&&Ab.datamax<=0){AY=0}}}}Ab.min=Aa;Ab.max=AY}function L(Ad,Ag){var Ac;if(typeof Ag.ticks=="number"&&Ag.ticks>0){Ac=Ag.ticks}else{if(Ad==AA.xaxis||Ad==AA.x2axis){Ac=AI/100}else{Ac=Z/60}}var Al=(Ad.max-Ad.min)/Ac;var Ao,Ah,Aj,Ak,Af,Aa,AZ;if(Ag.mode=="time"){function An(Av,Ap,Ar){var Aq=function(Ax){Ax=""+Ax;return Ax.length==1?"0"+Ax:Ax};var Au=[];var At=false;if(Ar==null){Ar=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]}for(var As=0;As<Ap.length;++As){var Aw=Ap.charAt(As);if(At){switch(Aw){case"h":Aw=""+Av.getUTCHours();break;case"H":Aw=Aq(Av.getUTCHours());break;case"M":Aw=Aq(Av.getUTCMinutes());break;case"S":Aw=Aq(Av.getUTCSeconds());break;case"d":Aw=""+Av.getUTCDate();break;case"m":Aw=""+(Av.getUTCMonth()+1);break;case"y":Aw=""+Av.getUTCFullYear();break;case"b":Aw=""+Ar[Av.getUTCMonth()];break}Au.push(Aw);At=false}else{if(Aw=="%"){At=true}else{Au.push(Aw)}}}return Au.join("")}var Ai={second:1000,minute:60*1000,hour:60*60*1000,day:24*60*60*1000,month:30*24*60*60*1000,year:365.2425*24*60*60*1000};var Am=[[1,"second"],[2,"second"],[5,"second"],[10,"second"],[30,"second"],[1,"minute"],[2,"minute"],[5,"minute"],[10,"minute"],[30,"minute"],[1,"hour"],[2,"hour"],[4,"hour"],[8,"hour"],[12,"hour"],[1,"day"],[2,"day"],[3,"day"],[0.25,"month"],[0.5,"month"],[1,"month"],[2,"month"],[3,"month"],[6,"month"],[1,"year"]];var Ab=0;if(Ag.minTickSize!=null){if(typeof Ag.tickSize=="number"){Ab=Ag.tickSize}else{Ab=Ag.minTickSize[0]*Ai[Ag.minTickSize[1]]}}for(Af=0;Af<Am.length-1;++Af){if(Al<(Am[Af][0]*Ai[Am[Af][1]]+Am[Af+1][0]*Ai[Am[Af+1][1]])/2&&Am[Af][0]*Ai[Am[Af][1]]>=Ab){break}}Ao=Am[Af][0];Aj=Am[Af][1];if(Aj=="year"){Aa=Math.pow(10,Math.floor(Math.log(Al/Ai.year)/Math.LN10));AZ=(Al/Ai.year)/Aa;if(AZ<1.5){Ao=1}else{if(AZ<3){Ao=2}else{if(AZ<7.5){Ao=5}else{Ao=10}}}Ao*=Aa}if(Ag.tickSize){Ao=Ag.tickSize[0];Aj=Ag.tickSize[1]}Ah=function(Ar){var Aw=[],Au=Ar.tickSize[0],Ax=Ar.tickSize[1],Av=new Date(Ar.min);var Aq=Au*Ai[Ax];if(Ax=="second"){Av.setUTCSeconds(C(Av.getUTCSeconds(),Au))}if(Ax=="minute"){Av.setUTCMinutes(C(Av.getUTCMinutes(),Au))}if(Ax=="hour"){Av.setUTCHours(C(Av.getUTCHours(),Au))}if(Ax=="month"){Av.setUTCMonth(C(Av.getUTCMonth(),Au))}if(Ax=="year"){Av.setUTCFullYear(C(Av.getUTCFullYear(),Au))}Av.setUTCMilliseconds(0);if(Aq>=Ai.minute){Av.setUTCSeconds(0)}if(Aq>=Ai.hour){Av.setUTCMinutes(0)}if(Aq>=Ai.day){Av.setUTCHours(0)}if(Aq>=Ai.day*4){Av.setUTCDate(1)}if(Aq>=Ai.year){Av.setUTCMonth(0)}var Az=0,Ay=Number.NaN,As;do{As=Ay;Ay=Av.getTime();Aw.push({v:Ay,label:Ar.tickFormatter(Ay,Ar)});if(Ax=="month"){if(Au<1){Av.setUTCDate(1);var Ap=Av.getTime();Av.setUTCMonth(Av.getUTCMonth()+1);var At=Av.getTime();Av.setTime(Ay+Az*Ai.hour+(At-Ap)*Au);Az=Av.getUTCHours();Av.setUTCHours(0)}else{Av.setUTCMonth(Av.getUTCMonth()+Au)}}else{if(Ax=="year"){Av.setUTCFullYear(Av.getUTCFullYear()+Au)}else{Av.setTime(Ay+Aq)}}}while(Ay<Ar.max&&Ay!=As);return Aw};Ak=function(Ap,As){var At=new Date(Ap);if(Ag.timeformat!=null){return An(At,Ag.timeformat,Ag.monthNames)}var Aq=As.tickSize[0]*Ai[As.tickSize[1]];var Ar=As.max-As.min;if(Aq<Ai.minute){fmt="%h:%M:%S"}else{if(Aq<Ai.day){if(Ar<2*Ai.day){fmt="%h:%M"}else{fmt="%b %d %h:%M"}}else{if(Aq<Ai.month){fmt="%b %d"}else{if(Aq<Ai.year){if(Ar<Ai.year){fmt="%b"}else{fmt="%b %y"}}else{fmt="%y"}}}}return An(At,fmt,Ag.monthNames)}}else{var AY=Ag.tickDecimals;var Ae=-Math.floor(Math.log(Al)/Math.LN10);if(AY!=null&&Ae>AY){Ae=AY}Aa=Math.pow(10,-Ae);AZ=Al/Aa;if(AZ<1.5){Ao=1}else{if(AZ<3){Ao=2;if(AZ>2.25&&(AY==null||Ae+1<=AY)){Ao=2.5;++Ae}}else{if(AZ<7.5){Ao=5}else{Ao=10}}}Ao*=Aa;if(Ag.minTickSize!=null&&Ao<Ag.minTickSize){Ao=Ag.minTickSize}if(Ag.tickSize!=null){Ao=Ag.tickSize}Ad.tickDecimals=Math.max(0,(AY!=null)?AY:Ae);Ah=function(Ar){var At=[];var Au=C(Ar.min,Ar.tickSize),Aq=0,Ap=Number.NaN,As;do{As=Ap;Ap=Au+Aq*Ar.tickSize;At.push({v:Ap,label:Ar.tickFormatter(Ap,Ar)});++Aq}while(Ap<Ar.max&&Ap!=As);return At};Ak=function(Ap,Aq){return Ap.toFixed(Aq.tickDecimals)}}Ad.tickSize=Aj?[Ao,Aj]:Ao;Ad.tickGenerator=Ah;if(F.isFunction(Ag.tickFormatter)){Ad.tickFormatter=function(Ap,Aq){return""+Ag.tickFormatter(Ap,Aq)}}else{Ad.tickFormatter=Ak}if(Ag.labelWidth!=null){Ad.labelWidth=Ag.labelWidth}if(Ag.labelHeight!=null){Ad.labelHeight=Ag.labelHeight}}function w(Ac,Ae){Ac.ticks=[];if(!Ac.used){return }if(Ae.ticks==null){Ac.ticks=Ac.tickGenerator(Ac)}else{if(typeof Ae.ticks=="number"){if(Ae.ticks>0){Ac.ticks=Ac.tickGenerator(Ac)}}else{if(Ae.ticks){var Ad=Ae.ticks;if(F.isFunction(Ad)){Ad=Ad({min:Ac.min,max:Ac.max})}var Ab,AY;for(Ab=0;Ab<Ad.length;++Ab){var AZ=null;var Aa=Ad[Ab];if(typeof Aa=="object"){AY=Aa[0];if(Aa.length>1){AZ=Aa[1]}}else{AY=Aa}if(AZ==null){AZ=Ac.tickFormatter(AY,Ac)}Ac.ticks[Ab]={v:AY,label:AZ}}}}}if(Ae.autoscaleMargin!=null&&Ac.ticks.length>0){if(Ae.min==null){Ac.min=Math.min(Ac.min,Ac.ticks[0].v)}if(Ae.max==null&&Ac.ticks.length>1){Ac.max=Math.min(Ac.max,Ac.ticks[Ac.ticks.length-1].v)}}}function AW(){function AZ(Ac){if(Ac.labelWidth==null){Ac.labelWidth=AI/6}if(Ac.labelHeight==null){labels=[];for(i=0;i<Ac.ticks.length;++i){l=Ac.ticks[i].label;if(l){labels.push('<div class="tickLabel" style="float:left;width:'+Ac.labelWidth+'px">'+l+"</div>")}}Ac.labelHeight=0;if(labels.length>0){var Ab=F('<div style="position:absolute;top:-10000px;width:10000px;font-size:smaller">'+labels.join("")+'<div style="clear:left"></div></div>').appendTo(K);Ac.labelHeight=Ab.height();Ab.remove()}}}function AY(Ae){if(Ae.labelWidth==null||Ae.labelHeight==null){var Ad,Af=[],Ac;for(Ad=0;Ad<Ae.ticks.length;++Ad){Ac=Ae.ticks[Ad].label;if(Ac){Af.push('<div class="tickLabel">'+Ac+"</div>")}}if(Af.length>0){var Ab=F('<div style="position:absolute;top:-10000px;font-size:smaller">'+Af.join("")+"</div>").appendTo(K);if(Ae.labelWidth==null){Ae.labelWidth=Ab.width()}if(Ae.labelHeight==null){Ae.labelHeight=Ab.find("div").height()}Ab.remove()}if(Ae.labelWidth==null){Ae.labelWidth=0}if(Ae.labelHeight==null){Ae.labelHeight=0}}}AZ(AA.xaxis);AY(AA.yaxis);AZ(AA.x2axis);AY(AA.y2axis);var Aa=o.grid.borderWidth/2;for(i=0;i<W.length;++i){Aa=Math.max(Aa,2*(W[i].points.radius+W[i].points.lineWidth/2))}m.left=m.right=m.top=m.bottom=Aa;if(AA.xaxis.labelHeight>0){m.bottom=Math.max(Aa,AA.xaxis.labelHeight+o.grid.labelMargin)}if(AA.yaxis.labelWidth>0){m.left=Math.max(Aa,AA.yaxis.labelWidth+o.grid.labelMargin)}if(AA.x2axis.labelHeight>0){m.top=Math.max(Aa,AA.x2axis.labelHeight+o.grid.labelMargin)}if(AA.y2axis.labelWidth>0){m.right=Math.max(Aa,AA.y2axis.labelWidth+o.grid.labelMargin)}N=AI-m.left-m.right;AB=Z-m.bottom-m.top;AA.xaxis.scale=N/(AA.xaxis.max-AA.xaxis.min);AA.yaxis.scale=AB/(AA.yaxis.max-AA.yaxis.min);AA.x2axis.scale=N/(AA.x2axis.max-AA.x2axis.min);AA.y2axis.scale=AB/(AA.y2axis.max-AA.y2axis.min)}function AU(){a();for(var AY=0;AY<W.length;AY++){AK(W[AY])}}function V(AZ,Af){var Ac=Af+"axis",AY=Af+"2axis",Ab,Ae,Ad,Aa;if(AZ[Ac]){Ab=AA[Ac];Ae=AZ[Ac].from;Ad=AZ[Ac].to}else{if(AZ[AY]){Ab=AA[AY];Ae=AZ[AY].from;Ad=AZ[AY].to}else{Ab=AA[Ac];Ae=AZ[Af+"1"];Ad=AZ[Af+"2"]}}if(Ae!=null&&Ad!=null&&Ae>Ad){return{from:Ad,to:Ae,axis:Ab}}return{from:Ae,to:Ad,axis:Ab}}function a(){var Ac;g.save();g.clearRect(0,0,AI,Z);g.translate(m.left,m.top);if(o.grid.backgroundColor){g.fillStyle=o.grid.backgroundColor;g.fillRect(0,0,N,AB)}if(o.grid.markings){var AZ=o.grid.markings;if(F.isFunction(AZ)){AZ=AZ({xmin:AA.xaxis.min,xmax:AA.xaxis.max,ymin:AA.yaxis.min,ymax:AA.yaxis.max,xaxis:AA.xaxis,yaxis:AA.yaxis,x2axis:AA.x2axis,y2axis:AA.y2axis})}for(Ac=0;Ac<AZ.length;++Ac){var AY=AZ[Ac],Ae=V(AY,"x"),Ab=V(AY,"y");if(Ae.from==null){Ae.from=Ae.axis.min}if(Ae.to==null){Ae.to=Ae.axis.max}if(Ab.from==null){Ab.from=Ab.axis.min}if(Ab.to==null){Ab.to=Ab.axis.max}if(Ae.to<Ae.axis.min||Ae.from>Ae.axis.max||Ab.to<Ab.axis.min||Ab.from>Ab.axis.max){continue}Ae.from=Math.max(Ae.from,Ae.axis.min);Ae.to=Math.min(Ae.to,Ae.axis.max);Ab.from=Math.max(Ab.from,Ab.axis.min);Ab.to=Math.min(Ab.to,Ab.axis.max);if(Ae.from==Ae.to&&Ab.from==Ab.to){continue}Ae.from=Ae.axis.p2c(Ae.from);Ae.to=Ae.axis.p2c(Ae.to);Ab.from=Ab.axis.p2c(Ab.from);Ab.to=Ab.axis.p2c(Ab.to);if(Ae.from==Ae.to||Ab.from==Ab.to){g.strokeStyle=AY.color||o.grid.markingsColor;g.lineWidth=AY.lineWidth||o.grid.markingsLineWidth;g.moveTo(Math.floor(Ae.from),Math.floor(Ab.from));g.lineTo(Math.floor(Ae.to),Math.floor(Ab.to));g.stroke()}else{g.fillStyle=AY.color||o.grid.markingsColor;g.fillRect(Math.floor(Ae.from),Math.floor(Ab.to),Math.floor(Ae.to-Ae.from),Math.floor(Ab.from-Ab.to))}}}g.lineWidth=1;g.strokeStyle=o.grid.tickColor;g.beginPath();var Aa,Ad=AA.xaxis;for(Ac=0;Ac<Ad.ticks.length;++Ac){Aa=Ad.ticks[Ac].v;if(Aa<=Ad.min||Aa>=AA.xaxis.max){continue}g.moveTo(Math.floor(Ad.p2c(Aa))+g.lineWidth/2,0);g.lineTo(Math.floor(Ad.p2c(Aa))+g.lineWidth/2,AB)}Ad=AA.yaxis;for(Ac=0;Ac<Ad.ticks.length;++Ac){Aa=Ad.ticks[Ac].v;if(Aa<=Ad.min||Aa>=Ad.max){continue}g.moveTo(0,Math.floor(Ad.p2c(Aa))+g.lineWidth/2);g.lineTo(N,Math.floor(Ad.p2c(Aa))+g.lineWidth/2)}Ad=AA.x2axis;for(Ac=0;Ac<Ad.ticks.length;++Ac){Aa=Ad.ticks[Ac].v;if(Aa<=Ad.min||Aa>=Ad.max){continue}g.moveTo(Math.floor(Ad.p2c(Aa))+g.lineWidth/2,-5);g.lineTo(Math.floor(Ad.p2c(Aa))+g.lineWidth/2,5)}Ad=AA.y2axis;for(Ac=0;Ac<Ad.ticks.length;++Ac){Aa=Ad.ticks[Ac].v;if(Aa<=Ad.min||Aa>=Ad.max){continue}g.moveTo(N-5,Math.floor(Ad.p2c(Aa))+g.lineWidth/2);g.lineTo(N+5,Math.floor(Ad.p2c(Aa))+g.lineWidth/2)}g.stroke();if(o.grid.borderWidth){g.lineWidth=o.grid.borderWidth;g.strokeStyle=o.grid.color;g.lineJoin="round";g.strokeRect(0,0,N,AB)}g.restore()}function p(){K.find(".tickLabels").remove();var AY='<div class="tickLabels" style="font-size:smaller;color:'+o.grid.color+'">';function AZ(Ac,Ad){for(var Ab=0;Ab<Ac.ticks.length;++Ab){var Aa=Ac.ticks[Ab];if(!Aa.label||Aa.v<Ac.min||Aa.v>Ac.max){continue}AY+=Ad(Aa,Ac)}}AZ(AA.xaxis,function(Aa,Ab){return'<div style="position:absolute;top:'+(m.top+AB+o.grid.labelMargin)+"px;left:"+(m.left+Ab.p2c(Aa.v)-Ab.labelWidth/2)+"px;width:"+Ab.labelWidth+'px;text-align:center" class="tickLabel">'+Aa.label+"</div>"});AZ(AA.yaxis,function(Aa,Ab){return'<div style="position:absolute;top:'+(m.top+Ab.p2c(Aa.v)-Ab.labelHeight/2)+"px;right:"+(m.right+N+o.grid.labelMargin)+"px;width:"+Ab.labelWidth+'px;text-align:right" class="tickLabel">'+Aa.label+"</div>"});AZ(AA.x2axis,function(Aa,Ab){return'<div style="position:absolute;bottom:'+(m.bottom+AB+o.grid.labelMargin)+"px;left:"+(m.left+Ab.p2c(Aa.v)-Ab.labelWidth/2)+"px;width:"+Ab.labelWidth+'px;text-align:center" class="tickLabel">'+Aa.label+"</div>"});AZ(AA.y2axis,function(Aa,Ab){return'<div style="position:absolute;top:'+(m.top+Ab.p2c(Aa.v)-Ab.labelHeight/2)+"px;left:"+(m.left+N+o.grid.labelMargin)+"px;width:"+Ab.labelWidth+'px;text-align:left" class="tickLabel">'+Aa.label+"</div>"});AY+="</div>";K.append(AY)}function AK(AY){if(AY.lines.show||(!AY.bars.show&&!AY.points.show)){h(AY)}if(AY.bars.show){u(AY)}if(AY.points.show){v(AY)}}function h(Aa){function AZ(Aj,Ah,An,Am){var Ag,Ao=null,Ad=null,Ap=null;g.beginPath();for(var Ai=0;Ai<Aj.length;++Ai){Ag=Ao;Ao=Aj[Ai];if(Ag==null||Ao==null){continue}var Af=Ag[0],Al=Ag[1],Ae=Ao[0],Ak=Ao[1];if(Al<=Ak&&Al<Am.min){if(Ak<Am.min){continue}Af=(Am.min-Al)/(Ak-Al)*(Ae-Af)+Af;Al=Am.min}else{if(Ak<=Al&&Ak<Am.min){if(Al<Am.min){continue}Ae=(Am.min-Al)/(Ak-Al)*(Ae-Af)+Af;Ak=Am.min}}if(Al>=Ak&&Al>Am.max){if(Ak>Am.max){continue}Af=(Am.max-Al)/(Ak-Al)*(Ae-Af)+Af;Al=Am.max}else{if(Ak>=Al&&Ak>Am.max){if(Al>Am.max){continue}Ae=(Am.max-Al)/(Ak-Al)*(Ae-Af)+Af;Ak=Am.max}}if(Af<=Ae&&Af<An.min){if(Ae<An.min){continue}Al=(An.min-Af)/(Ae-Af)*(Ak-Al)+Al;Af=An.min}else{if(Ae<=Af&&Ae<An.min){if(Af<An.min){continue}Ak=(An.min-Af)/(Ae-Af)*(Ak-Al)+Al;Ae=An.min}}if(Af>=Ae&&Af>An.max){if(Ae>An.max){continue}Al=(An.max-Af)/(Ae-Af)*(Ak-Al)+Al;Af=An.max}else{if(Ae>=Af&&Ae>An.max){if(Af>An.max){continue}Ak=(An.max-Af)/(Ae-Af)*(Ak-Al)+Al;Ae=An.max}}if(Ad!=An.p2c(Af)||Ap!=Am.p2c(Al)+Ah){g.moveTo(An.p2c(Af),Am.p2c(Al)+Ah)}Ad=An.p2c(Ae);Ap=Am.p2c(Ak)+Ah;g.lineTo(Ad,Ap)}g.stroke()}function Ab(Aj,Aq,Ao){var Ah,Ar=null;var Ad=Math.min(Math.max(0,Ao.min),Ao.max);var Am,Ag=0;var Ap=false;for(var Ai=0;Ai<Aj.length;++Ai){Ah=Ar;Ar=Aj[Ai];if(Ap&&Ah!=null&&Ar==null){g.lineTo(Aq.p2c(Ag),Ao.p2c(Ad));g.fill();Ap=false;continue}if(Ah==null||Ar==null){continue}var Af=Ah[0],An=Ah[1],Ae=Ar[0],Al=Ar[1];if(Af<=Ae&&Af<Aq.min){if(Ae<Aq.min){continue}An=(Aq.min-Af)/(Ae-Af)*(Al-An)+An;Af=Aq.min}else{if(Ae<=Af&&Ae<Aq.min){if(Af<Aq.min){continue}Al=(Aq.min-Af)/(Ae-Af)*(Al-An)+An;Ae=Aq.min}}if(Af>=Ae&&Af>Aq.max){if(Ae>Aq.max){continue}An=(Aq.max-Af)/(Ae-Af)*(Al-An)+An;Af=Aq.max}else{if(Ae>=Af&&Ae>Aq.max){if(Af>Aq.max){continue}Al=(Aq.max-Af)/(Ae-Af)*(Al-An)+An;Ae=Aq.max}}if(!Ap){g.beginPath();g.moveTo(Aq.p2c(Af),Ao.p2c(Ad));Ap=true}if(An>=Ao.max&&Al>=Ao.max){g.lineTo(Aq.p2c(Af),Ao.p2c(Ao.max));g.lineTo(Aq.p2c(Ae),Ao.p2c(Ao.max));continue}else{if(An<=Ao.min&&Al<=Ao.min){g.lineTo(Aq.p2c(Af),Ao.p2c(Ao.min));g.lineTo(Aq.p2c(Ae),Ao.p2c(Ao.min));continue}}var As=Af,Ak=Ae;if(An<=Al&&An<Ao.min&&Al>=Ao.min){Af=(Ao.min-An)/(Al-An)*(Ae-Af)+Af;An=Ao.min}else{if(Al<=An&&Al<Ao.min&&An>=Ao.min){Ae=(Ao.min-An)/(Al-An)*(Ae-Af)+Af;Al=Ao.min}}if(An>=Al&&An>Ao.max&&Al<=Ao.max){Af=(Ao.max-An)/(Al-An)*(Ae-Af)+Af;An=Ao.max}else{if(Al>=An&&Al>Ao.max&&An<=Ao.max){Ae=(Ao.max-An)/(Al-An)*(Ae-Af)+Af;Al=Ao.max}}if(Af!=As){if(An<=Ao.min){Am=Ao.min}else{Am=Ao.max}g.lineTo(Aq.p2c(As),Ao.p2c(Am));g.lineTo(Aq.p2c(Af),Ao.p2c(Am))}g.lineTo(Aq.p2c(Af),Ao.p2c(An));g.lineTo(Aq.p2c(Ae),Ao.p2c(Al));if(Ae!=Ak){if(Al<=Ao.min){Am=Ao.min}else{Am=Ao.max}g.lineTo(Aq.p2c(Ak),Ao.p2c(Am));g.lineTo(Aq.p2c(Ae),Ao.p2c(Am))}Ag=Math.max(Ae,Ak)}if(Ap){g.lineTo(Aq.p2c(Ag),Ao.p2c(Ad));g.fill()}}g.save();g.translate(m.left,m.top);g.lineJoin="round";var Ac=Aa.lines.lineWidth;var AY=Aa.shadowSize;if(AY>0){g.lineWidth=AY/2;g.strokeStyle="rgba(0,0,0,0.1)";AZ(Aa.data,Ac/2+AY/2+g.lineWidth/2,Aa.xaxis,Aa.yaxis);g.lineWidth=AY/2;g.strokeStyle="rgba(0,0,0,0.2)";AZ(Aa.data,Ac/2+g.lineWidth/2,Aa.xaxis,Aa.yaxis)}g.lineWidth=Ac;g.strokeStyle=Aa.color;AD(Aa.lines,Aa.color);if(Aa.lines.fill){Ab(Aa.data,Aa.xaxis,Aa.yaxis)}AZ(Aa.data,0,Aa.xaxis,Aa.yaxis);g.restore()}function v(AZ){function Ac(Ag,Ae,Ah,Ak,Ai){for(var Af=0;Af<Ag.length;++Af){if(Ag[Af]==null){continue}var Ad=Ag[Af][0],Aj=Ag[Af][1];if(Ad<Ak.min||Ad>Ak.max||Aj<Ai.min||Aj>Ai.max){continue}g.beginPath();g.arc(Ak.p2c(Ad),Ai.p2c(Aj),Ae,0,2*Math.PI,true);if(Ah){g.fill()}g.stroke()}}function Ab(Ag,Ai,Ae,Ak,Ah){for(var Af=0;Af<Ag.length;++Af){if(Ag[Af]==null){continue}var Ad=Ag[Af][0],Aj=Ag[Af][1];if(Ad<Ak.min||Ad>Ak.max||Aj<Ah.min||Aj>Ah.max){continue}g.beginPath();g.arc(Ak.p2c(Ad),Ah.p2c(Aj)+Ai,Ae,0,Math.PI,false);g.stroke()}}g.save();g.translate(m.left,m.top);var Aa=AZ.lines.lineWidth;var AY=AZ.shadowSize;if(AY>0){g.lineWidth=AY/2;g.strokeStyle="rgba(0,0,0,0.1)";Ab(AZ.data,AY/2+g.lineWidth/2,AZ.points.radius,AZ.xaxis,AZ.yaxis);g.lineWidth=AY/2;g.strokeStyle="rgba(0,0,0,0.2)";Ab(AZ.data,g.lineWidth/2,AZ.points.radius,AZ.xaxis,AZ.yaxis)}g.lineWidth=AZ.points.lineWidth;g.strokeStyle=AZ.color;AD(AZ.points,AZ.color);Ac(AZ.data,AZ.points.radius,AZ.points.fill,AZ.xaxis,AZ.yaxis);g.restore()}function AM(Aj,Ah,Ac,Ai,Aa,Ao,An,Ak,Af){var Am=true,Ae=true,Ab=true,Ad=false,AZ=Aj+Ac,Al=Aj+Ai,AY=0,Ag=Ah;if(Ag<AY){Ag=0;AY=Ah;Ad=true;Ab=false}if(Al<An.min||AZ>An.max||Ag<Ak.min||AY>Ak.max){return }if(AZ<An.min){AZ=An.min;Am=false}if(Al>An.max){Al=An.max;Ae=false}if(AY<Ak.min){AY=Ak.min;Ad=false}if(Ag>Ak.max){Ag=Ak.max;Ab=false}if(Ao){Af.beginPath();Af.moveTo(An.p2c(AZ),Ak.p2c(AY)+Aa);Af.lineTo(An.p2c(AZ),Ak.p2c(Ag)+Aa);Af.lineTo(An.p2c(Al),Ak.p2c(Ag)+Aa);Af.lineTo(An.p2c(Al),Ak.p2c(AY)+Aa);Af.fill()}if(Am||Ae||Ab||Ad){Af.beginPath();AZ=An.p2c(AZ);AY=Ak.p2c(AY);Al=An.p2c(Al);Ag=Ak.p2c(Ag);Af.moveTo(AZ,AY+Aa);if(Am){Af.lineTo(AZ,Ag+Aa)}else{Af.moveTo(AZ,Ag+Aa)}if(Ab){Af.lineTo(Al,Ag+Aa)}else{Af.moveTo(Al,Ag+Aa)}if(Ae){Af.lineTo(Al,AY+Aa)}else{Af.moveTo(Al,AY+Aa)}if(Ad){Af.lineTo(AZ,AY+Aa)}else{Af.moveTo(AZ,AY+Aa)}Af.stroke()}}function u(Aa){function AZ(Ae,Ab,Ad,Ah,Af,Ai,Ag){for(var Ac=0;Ac<Ae.length;Ac++){if(Ae[Ac]==null){continue}AM(Ae[Ac][0],Ae[Ac][1],Ab,Ad,Ah,Af,Ai,Ag,g)}}g.save();g.translate(m.left,m.top);g.lineJoin="round";g.lineWidth=Aa.bars.lineWidth;g.strokeStyle=Aa.color;AD(Aa.bars,Aa.color);var AY=Aa.bars.align=="left"?0:-Aa.bars.barWidth/2;AZ(Aa.data,AY,AY+Aa.bars.barWidth,0,Aa.bars.fill,Aa.xaxis,Aa.yaxis);g.restore()}function AD(Aa,AY){var AZ=Aa.fill;if(!AZ){return }if(Aa.fillColor){g.fillStyle=Aa.fillColor}else{var Ab=E(AY);Ab.a=typeof AZ=="number"?AZ:0.4;Ab.normalize();g.fillStyle=Ab.toString()}}function AV(){K.find(".legend").remove();if(!o.legend.show){return }var Ae=[];var Ac=false;for(i=0;i<W.length;++i){if(!W[i].label){continue}if(i%o.legend.noColumns==0){if(Ac){Ae.push("</tr>")}Ae.push("<tr>");Ac=true}var Ag=W[i].label;if(o.legend.labelFormatter!=null){Ag=o.legend.labelFormatter(Ag)}Ae.push('<td class="legendColorBox"><div style="border:1px solid '+o.legend.labelBoxBorderColor+';padding:1px"><div style="width:14px;height:10px;background-color:'+W[i].color+';overflow:hidden"></div></div></td><td class="legendLabel">'+Ag+"</td>")}if(Ac){Ae.push("</tr>")}if(Ae.length==0){return }var Ai='<table style="font-size:smaller;color:'+o.grid.color+'">'+Ae.join("")+"</table>";if(o.legend.container!=null){o.legend.container.html(Ai)}else{var Af="";var AZ=o.legend.position,Aa=o.legend.margin;if(AZ.charAt(0)=="n"){Af+="top:"+(Aa+m.top)+"px;"}else{if(AZ.charAt(0)=="s"){Af+="bottom:"+(Aa+m.bottom)+"px;"}}if(AZ.charAt(1)=="e"){Af+="right:"+(Aa+m.right)+"px;"}else{if(AZ.charAt(1)=="w"){Af+="left:"+(Aa+m.left)+"px;"}}var Ah=F('<div class="legend">'+Ai.replace('style="','style="position:absolute;'+Af+";")+"</div>").appendTo(K);if(o.legend.backgroundOpacity!=0){var Ad=o.legend.backgroundColor;if(Ad==null){var Ab;if(o.grid.backgroundColor){Ab=o.grid.backgroundColor}else{Ab=A(Ah)}Ad=E(Ab).adjust(null,null,null,1).toString()}var AY=Ah.children();F('<div style="position:absolute;width:'+AY.width()+"px;height:"+AY.height()+"px;"+Af+"background-color:"+Ad+';"> </div>').prependTo(Ah).css("opacity",o.legend.backgroundOpacity)}}}var AG={pageX:null,pageY:null},d={first:{x:-1,y:-1},second:{x:-1,y:-1},show:false,active:false},AF=[],P=false,O=null,z=null;function AT(Ae,Ac){var Al=o.grid.mouseActiveRadius,Ar=Al*Al+1,At=null,An=false;function Ai(Ay,Ax){return{datapoint:W[Ay].data[Ax],dataIndex:Ax,series:W[Ay],seriesIndex:Ay}}for(var Aq=0;Aq<W.length;++Aq){var Aw=W[Aq].data,Ad=W[Aq].xaxis,Ab=W[Aq].yaxis,Am=Ad.c2p(Ae),Ak=Ab.c2p(Ac),AZ=Al/Ad.scale,AY=Al/Ab.scale,Av=W[Aq].bars.show,Au=!(W[Aq].bars.show&&!(W[Aq].lines.show||W[Aq].points.show)),Aa=W[Aq].bars.align=="left"?0:-W[Aq].bars.barWidth/2,As=Aa+W[Aq].bars.barWidth;for(var Ap=0;Ap<Aw.length;++Ap){if(Aw[Ap]==null){continue}var Ag=Aw[Ap][0],Af=Aw[Ap][1];if(Av){if(!An&&Am>=Ag+Aa&&Am<=Ag+As&&Ak>=Math.min(0,Af)&&Ak<=Math.max(0,Af)){At=Ai(Aq,Ap)}}if(Au){if((Ag-Am>AZ||Ag-Am<-AZ)||(Af-Ak>AY||Af-Ak<-AY)){continue}var Aj=Math.abs(Ad.p2c(Ag)-Ae),Ah=Math.abs(Ab.p2c(Af)-Ac),Ao=Aj*Aj+Ah*Ah;if(Ao<Ar){Ar=Ao;An=true;At=Ai(Aq,Ap)}}}}return At}function J(AZ){var Aa=AZ||window.event;if(Aa.pageX==null&&Aa.clientX!=null){var Ab=document.documentElement,AY=document.body;AG.pageX=Aa.clientX+(Ab&&Ab.scrollLeft||AY.scrollLeft||0);AG.pageY=Aa.clientY+(Ab&&Ab.scrollTop||AY.scrollTop||0)}else{AG.pageX=Aa.pageX;AG.pageY=Aa.pageY}if(o.grid.hoverable&&!z){z=setTimeout(R,100)}if(d.active){AL(AG)}}function AN(AY){if(AY.which!=1){return }document.body.focus();if(document.onselectstart!==undefined&&S.onselectstart==null){S.onselectstart=document.onselectstart;document.onselectstart=function(){return false}}if(document.ondrag!==undefined&&S.ondrag==null){S.ondrag=document.ondrag;document.ondrag=function(){return false}}AR(d.first,AY);AG.pageX=null;d.active=true;F(document).one("mouseup",Y)}function k(AY){if(P){P=false;return }M("plotclick",AY)}function R(){M("plothover",AG);z=null}function M(AZ,AY){var Aa=AQ.offset(),Af={pageX:AY.pageX,pageY:AY.pageY},Ad=AY.pageX-Aa.left-m.left,Ab=AY.pageY-Aa.top-m.top;if(AA.xaxis.used){Af.x=AA.xaxis.c2p(Ad)}if(AA.yaxis.used){Af.y=AA.yaxis.c2p(Ab)}if(AA.x2axis.used){Af.x2=AA.x2axis.c2p(Ad)}if(AA.y2axis.used){Af.y2=AA.y2axis.c2p(Ab)}var Ag=AT(Ad,Ab);if(Ag){Ag.pageX=parseInt(Ag.series.xaxis.p2c(Ag.datapoint[0])+Aa.left+m.left);Ag.pageY=parseInt(Ag.series.yaxis.p2c(Ag.datapoint[1])+Aa.top+m.top)}if(o.grid.autoHighlight){for(var Ac=0;Ac<AF.length;++Ac){var Ae=AF[Ac];if(Ae.auto&&!(Ag&&Ae.series==Ag.series&&Ae.point==Ag.datapoint)){AH(Ae.series,Ae.point)}}if(Ag){AS(Ag.series,Ag.datapoint,true)}}K.trigger(AZ,[Af,Ag])}function x(){if(!O){O=setTimeout(T,50)}}function T(){O=null;AX.save();AX.clearRect(0,0,AI,Z);AX.translate(m.left,m.top);var Ab,Aa;for(Ab=0;Ab<AF.length;++Ab){Aa=AF[Ab];if(Aa.series.bars.show){AJ(Aa.series,Aa.point)}else{AE(Aa.series,Aa.point)}}AX.restore();if(d.show&&b()){AX.strokeStyle=E(o.selection.color).scale(null,null,null,0.8).toString();AX.lineWidth=1;g.lineJoin="round";AX.fillStyle=E(o.selection.color).scale(null,null,null,0.4).toString();var AY=Math.min(d.first.x,d.second.x),Ad=Math.min(d.first.y,d.second.y),AZ=Math.abs(d.second.x-d.first.x),Ac=Math.abs(d.second.y-d.first.y);AX.fillRect(AY+m.left,Ad+m.top,AZ,Ac);AX.strokeRect(AY+m.left,Ad+m.top,AZ,Ac)}}function AS(Aa,AY,Ab){if(typeof Aa=="number"){Aa=W[Aa]}if(typeof AY=="number"){AY=Aa.data[AY]}var AZ=q(Aa,AY);if(AZ==-1){AF.push({series:Aa,point:AY,auto:Ab});x()}else{if(!Ab){AF[AZ].auto=false}}}function AH(Aa,AY){if(typeof Aa=="number"){Aa=W[Aa]}if(typeof AY=="number"){AY=Aa.data[AY]}var AZ=q(Aa,AY);if(AZ!=-1){AF.splice(AZ,1);x()}}function q(Aa,Ab){for(var AY=0;AY<AF.length;++AY){var AZ=AF[AY];if(AZ.series==Aa&&AZ.point[0]==Ab[0]&&AZ.point[1]==Ab[1]){return AY}}return -1}function AE(Ab,Aa){var AZ=Aa[0],Af=Aa[1],Ae=Ab.xaxis,Ad=Ab.yaxis;if(AZ<Ae.min||AZ>Ae.max||Af<Ad.min||Af>Ad.max){return }var Ac=Ab.points.radius+Ab.points.lineWidth/2;AX.lineWidth=Ac;AX.strokeStyle=E(Ab.color).scale(1,1,1,0.5).toString();var AY=1.5*Ac;AX.beginPath();AX.arc(Ae.p2c(AZ),Ad.p2c(Af),AY,0,2*Math.PI,true);AX.stroke()}function AJ(Aa,AY){AX.lineJoin="round";AX.lineWidth=Aa.bars.lineWidth;AX.strokeStyle=E(Aa.color).scale(1,1,1,0.5).toString();AX.fillStyle=E(Aa.color).scale(1,1,1,0.5).toString();var AZ=Aa.bars.align=="left"?0:-Aa.bars.barWidth/2;AM(AY[0],AY[1],AZ,AZ+Aa.bars.barWidth,0,true,Aa.xaxis,Aa.yaxis,AX)}function r(){var AZ=Math.min(d.first.x,d.second.x),AY=Math.max(d.first.x,d.second.x),Ab=Math.max(d.first.y,d.second.y),Aa=Math.min(d.first.y,d.second.y);var Ac={};if(AA.xaxis.used){Ac.xaxis={from:AA.xaxis.c2p(AZ),to:AA.xaxis.c2p(AY)}}if(AA.x2axis.used){Ac.x2axis={from:AA.x2axis.c2p(AZ),to:AA.x2axis.c2p(AY)}}if(AA.yaxis.used){Ac.yaxis={from:AA.yaxis.c2p(Ab),to:AA.yaxis.c2p(Aa)}}if(AA.y2axis.used){Ac.yaxis={from:AA.y2axis.c2p(Ab),to:AA.y2axis.c2p(Aa)}}K.trigger("plotselected",[Ac]);if(AA.xaxis.used&&AA.yaxis.used){K.trigger("selected",[{x1:Ac.xaxis.from,y1:Ac.yaxis.from,x2:Ac.xaxis.to,y2:Ac.yaxis.to}])}}function Y(AY){if(document.onselectstart!==undefined){document.onselectstart=S.onselectstart}if(document.ondrag!==undefined){document.ondrag=S.ondrag}d.active=false;AL(AY);if(b()){r();P=true}return false}function AR(Aa,AY){var AZ=AQ.offset();if(o.selection.mode=="y"){if(Aa==d.first){Aa.x=0}else{Aa.x=N}}else{Aa.x=AY.pageX-AZ.left-m.left;Aa.x=Math.min(Math.max(0,Aa.x),N)}if(o.selection.mode=="x"){if(Aa==d.first){Aa.y=0}else{Aa.y=AB}}else{Aa.y=AY.pageY-AZ.top-m.top;Aa.y=Math.min(Math.max(0,Aa.y),AB)}}function AL(AY){if(AY.pageX==null){return }AR(d.second,AY);if(b()){d.show=true;x()}else{I()}}function I(){if(d.show){d.show=false;x()}}function AC(AZ,AY){var Aa;if(o.selection.mode=="y"){d.first.x=0;d.second.x=N}else{Aa=V(AZ,"x");d.first.x=Aa.axis.p2c(Aa.from);d.second.x=Aa.axis.p2c(Aa.to)}if(o.selection.mode=="x"){d.first.y=0;d.second.y=AB}else{Aa=V(AZ,"y");d.first.y=Aa.axis.p2c(Aa.from);d.second.y=Aa.axis.p2c(Aa.to)}d.show=true;x();if(!AY){r()}}function b(){var AY=5;return Math.abs(d.second.x-d.first.x)>=AY&&Math.abs(d.second.y-d.first.y)>=AY}}F.plot=function(L,J,I){var K=new D(L,J,I);return K};function C(J,I){return I*Math.floor(J/I)}function H(J,K,I){if(K<J){return K}else{if(K>I){return I}else{return K}}}function G(O,N,J,L){var M=["r","g","b","a"];var I=4;while(-1<--I){this[M[I]]=arguments[I]||((I==3)?1:0)}this.toString=function(){if(this.a>=1){return"rgb("+[this.r,this.g,this.b].join(",")+")"}else{return"rgba("+[this.r,this.g,this.b,this.a].join(",")+")"}};this.scale=function(R,Q,S,P){I=4;while(-1<--I){if(arguments[I]!=null){this[M[I]]*=arguments[I]}}return this.normalize()};this.adjust=function(R,Q,S,P){I=4;while(-1<--I){if(arguments[I]!=null){this[M[I]]+=arguments[I]}}return this.normalize()};this.clone=function(){return new G(this.r,this.b,this.g,this.a)};var K=function(Q,P,R){return Math.max(Math.min(Q,R),P)};this.normalize=function(){this.r=K(parseInt(this.r),0,255);this.g=K(parseInt(this.g),0,255);this.b=K(parseInt(this.b),0,255);this.a=K(this.a,0,1);return this};this.normalize()}var B={aqua:[0,255,255],azure:[240,255,255],beige:[245,245,220],black:[0,0,0],blue:[0,0,255],brown:[165,42,42],cyan:[0,255,255],darkblue:[0,0,139],darkcyan:[0,139,139],darkgrey:[169,169,169],darkgreen:[0,100,0],darkkhaki:[189,183,107],darkmagenta:[139,0,139],darkolivegreen:[85,107,47],darkorange:[255,140,0],darkorchid:[153,50,204],darkred:[139,0,0],darksalmon:[233,150,122],darkviolet:[148,0,211],fuchsia:[255,0,255],gold:[255,215,0],green:[0,128,0],indigo:[75,0,130],khaki:[240,230,140],lightblue:[173,216,230],lightcyan:[224,255,255],lightgreen:[144,238,144],lightgrey:[211,211,211],lightpink:[255,182,193],lightyellow:[255,255,224],lime:[0,255,0],magenta:[255,0,255],maroon:[128,0,0],navy:[0,0,128],olive:[128,128,0],orange:[255,165,0],pink:[255,192,203],purple:[128,0,128],violet:[128,0,128],red:[255,0,0],silver:[192,192,192],white:[255,255,255],yellow:[255,255,0]};function A(J){var I,K=J;do{I=K.css("background-color").toLowerCase();if(I!=""&&I!="transparent"){break}K=K.parent()}while(!F.nodeName(K.get(0),"body"));if(I=="rgba(0, 0, 0, 0)"){return"transparent"}return I}function E(K){var I;if(I=/rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(K)){return new G(parseInt(I[1],10),parseInt(I[2],10),parseInt(I[3],10))}if(I=/rgba\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(K)){return new G(parseInt(I[1],10),parseInt(I[2],10),parseInt(I[3],10),parseFloat(I[4]))}if(I=/rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(K)){return new G(parseFloat(I[1])*2.55,parseFloat(I[2])*2.55,parseFloat(I[3])*2.55)}if(I=/rgba\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\s*\)/.exec(K)){return new G(parseFloat(I[1])*2.55,parseFloat(I[2])*2.55,parseFloat(I[3])*2.55,parseFloat(I[4]))}if(I=/#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(K)){return new G(parseInt(I[1],16),parseInt(I[2],16),parseInt(I[3],16))}if(I=/#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(K)){return new G(parseInt(I[1]+I[1],16),parseInt(I[2]+I[2],16),parseInt(I[3]+I[3],16))}var J=F.trim(K).toLowerCase();if(J=="transparent"){return new G(255,255,255,0)}else{I=B[J];return new G(I[0],I[1],I[2])}}})(jQuery);
};
