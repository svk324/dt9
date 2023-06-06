/**
 * Theme: Tailfox - Tailwind Admin Dashboard Template
 * Author: Mannatthemes
 * File: nouislider Js
 */

var slider=document.getElementById("slider");noUiSlider.create(slider,{start:[5],step:1,range:{min:[0],max:[10]}}),slider.noUiSlider.on("hover",function(e){console.log(e)});var hidingTooltipSlider=document.getElementById("slider_2");noUiSlider.create(hidingTooltipSlider,{start:[20,80],connect:!0,range:{min:0,max:100},tooltips:!0});for(var select=document.getElementById("input-select"),i=-20;i<=40;i++){var e=document.createElement("option");e.text=i,e.value=i,select.appendChild(e)}var html5Slider=document.getElementById("html5");noUiSlider.create(html5Slider,{start:[10,30],connect:!0,range:{min:-20,max:40}});var inputNumber=document.getElementById("input-number");html5Slider.noUiSlider.on("update",function(e,t){var n=e[t];t?inputNumber.value=n:select.value=Math.round(n)}),select.addEventListener("change",function(){html5Slider.noUiSlider.set([this.value,null])}),inputNumber.addEventListener("change",function(){html5Slider.noUiSlider.set([null,this.value])});var dateSlider=document.getElementById("slider-date");function timestamp(e){return new Date(e).getTime()}noUiSlider.create(dateSlider,{range:{min:timestamp("2010"),max:timestamp("2016")},step:6048e5,start:[timestamp("2011"),timestamp("2015")],format:wNumb({decimals:0})});var dateValues=[document.getElementById("event-start"),document.getElementById("event-end")],formatter=new Intl.DateTimeFormat("en-GB",{dateStyle:"full"});dateSlider.noUiSlider.on("update",function(e,t){dateValues[t].innerHTML=formatter.format(new Date(+e[t]))});var skipSlider=document.getElementById("skipstep");noUiSlider.create(skipSlider,{range:{min:0,"10%":10,"20%":20,"30%":30,"50%":50,"60%":60,"70%":70,"90%":90,max:100},snap:!0,start:[20,90]});var skipValues=[document.getElementById("skip-value-lower"),document.getElementById("skip-value-upper")];skipSlider.noUiSlider.on("update",function(e,t){skipValues[t].innerHTML=e[t]});var pipsSlider=document.getElementById("slider-pips");noUiSlider.create(pipsSlider,{range:{min:0,max:100},start:[50],pips:{mode:"count",values:5}});var pips=pipsSlider.querySelectorAll(".noUi-value");function clickOnPip(){var e=Number(this.getAttribute("data-value"));pipsSlider.noUiSlider.set(e)}for(var i=0;i<pips.length;i++)pips[i].style.cursor="pointer",pips[i].addEventListener("click",clickOnPip);var range=document.getElementById("range");noUiSlider.create(range,{range:{min:1300,max:3250},step:150,start:[1450,2050,2350,3e3],margin:300,limit:600,connect:!0,direction:"rtl",orientation:"vertical",behaviour:"tap-drag",tooltips:!0,format:wNumb({decimals:0}),pips:{mode:"steps",stepped:!0,density:4}}),range.style.height="400px",range.style.margin="0 auto 30px";var valuesDivs=[document.getElementById("range-value-1"),document.getElementById("range-value-2"),document.getElementById("range-value-3"),document.getElementById("range-value-4")],diffDivs=[document.getElementById("range-diff-1"),document.getElementById("range-diff-2"),document.getElementById("range-diff-3")];range.noUiSlider.on("update",function(e,t){valuesDivs[t].innerHTML=e[t],diffDivs[0].innerHTML=e[1]-e[0],diffDivs[1].innerHTML=e[2]-e[1],diffDivs[2].innerHTML=e[3]-e[2]});var softSlider=document.getElementById("soft");noUiSlider.create(softSlider,{start:50,range:{min:0,max:100},pips:{mode:"values",values:[20,80],density:4}}),softSlider.noUiSlider.on("change",function(e,t){e[t]<20?softSlider.noUiSlider.set(20):e[t]>80&&softSlider.noUiSlider.set(80)});