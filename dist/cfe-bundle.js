(()=>{"use strict";const e={},o=["utm_source","utm_medium","utm_campaign","campaignid","vendorid","device","utm_content","utm_term","utm_matchtype"],t=o=>{console.log("eventName:",o),e.event=o,console.log("\n"+e)};window.addEventListener("load",(n=>{(e=>{const o=document.querySelectorAll(".form-btn,.cfe-trigger, .mktoButton");for(let e=0;e<o.length;e++){let n=o[e].getAttribute("data-cfe");o[e].addEventListener("click",(l=>{t(null!==n?n:o[e].innerText)}))}})(),(()=>{let o;console.log("\nMETA PIXEL EXTRACTOR --------------------------\x3e");const t=document.querySelectorAll("script");for(let e=0;e<t.length;e++)t[e].innerText.includes("fbq")&&(o=t[e].innerText,o=o.split('"init","')[1],o=o.split('");')[0],console.log("metaPixelID:",o));e.metaPixel=o})(),console.log("\nUSER AGENT EXTRACTOR -------------------------\x3e"),console.log("userAgent: ",navigator.userAgent),e.userAgent=navigator.userAgent,(t=>{try{MktoForms2.whenReady((function(t){t.onSuccess((function(n,l){const c=t.vals();e.formData=c,e.event="MarketoFormSubmit",o.forEach((o=>{null!==localStorage.getItem(o)?(console.log(`${o} EXISTS in localStorage!`),e.utmParameters={...e.utmParameters,[o]:localStorage.getItem(o)}):console.log(`No ${o} in localStorage!!`)})),console.log("\nSENDING TO SERVER -------------------------\x3e"),fetch("https://labs.bisk.com",{mode:"cors",method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>(console.log("response",e),e.json()))).then((e=>{console.log("json",e)})).catch((e=>{console.log("err",e)}))}))}))}catch(e){console.log("err",e)}finally{console.log(e)}})()}))})();