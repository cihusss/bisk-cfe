(()=>{"use strict";const e={},t=["utm_source","utm_medium","utm_campaign","campaignid","vendorid","device","utm_content","utm_term","utm_matchtype"],o=t=>{console.log("eventName:",t),e.event=t,console.log("\n"+e)};window.addEventListener("load",(n=>{(e=>{const t=document.querySelectorAll(".form-btn,.cfe-trigger, .mktoButton");for(let e=0;e<t.length;e++){let n=t[e].getAttribute("data-cfe");t[e].addEventListener("click",(l=>{o(null!==n?n:t[e].innerText)}))}})(),(()=>{let t;console.log("\nMETA PIXEL EXTRACTOR --------------------------\x3e");const o=document.querySelectorAll("script");for(let e=0;e<o.length;e++)o[e].innerText.includes("fbq")&&(t=o[e].innerText,t=t.split('"init","')[1],t=t.split('");')[0],console.log("metaPixelID:",t));e.metaPixel=t})(),console.log("\nUSER AGENT EXTRACTOR -------------------------\x3e"),console.log("userAgent: ",navigator.userAgent),e.userAgent=navigator.userAgent,(o=>{try{MktoForms2.whenReady((function(o){o.onSuccess((function(n,l){const c=o.vals();e.formData=c,e.event="MarketoFormSubmit",t.forEach((t=>{localStorage.getItem(t)?e.utmParameters[t]={utm:localStorage.getItem(t),label:t}:console.log(`no ${t} in localStorage`)})),console.log("\nSENDING TO SERVER -------------------------\x3e"),fetch("https://labs.bisk.com",{mode:"cors",method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>(console.log("response",e),e.json()))).then((e=>{console.log("json",e)})).catch((e=>{console.log("err",e)}))}))}))}catch(e){console.log("err",e)}finally{console.log(e)}})()}))})();