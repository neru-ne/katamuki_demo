var c=Object.defineProperty;var u=(n,e,t)=>e in n?c(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var s=(n,e,t)=>(u(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))m(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const i of a.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&m(i)}).observe(document,{childList:!0,subtree:!0});function t(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerPolicy&&(a.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?a.credentials="include":r.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function m(r){if(r.ep)return;r.ep=!0;const a=t(r);fetch(r.href,a)}})();const o=class{constructor(e,t,m){s(this,"alpha");s(this,"beta");s(this,"gamma");this.alpha=e,this.beta=t,this.gamma=m}setImgPositon(){if(this.alpha===null||this.beta===null||this.gamma===null)return;let e=this.gamma,t=this.beta;e>90&&(e=90),e<-90&&(e=-90),e=Math.floor(e*Math.pow(10,1))/Math.pow(10,1),t=Math.floor(t*Math.pow(10,1))/Math.pow(10,1),this.setImages(t,e)}setImages(e,t){e=e/4,new Promise(i=>{o.layer_7.style.transform=`translate(${t}px, ${e/2}px)`,i("done")}).then(()=>{setTimeout(()=>{o.layer_6.style.transform=`translate(${t/2}px, ${e/3}px)`},200)}).then(()=>{setTimeout(()=>{o.layer_5.style.transform=`translate(${t/4}px, ${e/4}px)`},300)}).then(()=>{setTimeout(()=>{o.layer_4.style.transform=`translate(${t/6}px, ${e/6}px)`},400)}).then(()=>{setTimeout(()=>{o.layer_3.style.transform=`translate(${t/8}px, ${e/8}px)`},500)}).then(()=>{setTimeout(()=>{o.layer_2.style.transform=`translate(${t/9}px, ${e/9}px)`},500)});const r=document.getElementById("setY");r.textContent="Y: "+e+"px";const a=document.getElementById("setX");a.textContent="X: "+t+"px"}};let l=o;s(l,"layer_1",document.getElementById("layer_1")),s(l,"layer_2",document.getElementById("layer_2")),s(l,"layer_3",document.getElementById("layer_3")),s(l,"layer_4",document.getElementById("layer_4")),s(l,"layer_5",document.getElementById("layer_5")),s(l,"layer_6",document.getElementById("layer_6")),s(l,"layer_7",document.getElementById("layer_7"));window.addEventListener("deviceorientation",function(n){let e=n.alpha,t=n.beta,m=n.gamma;new l(e,t,m).setImgPositon()},!1);