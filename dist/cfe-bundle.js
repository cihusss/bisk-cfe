(()=>{"use strict";const e={},o=o=>{e.event=o,console.log("\nSEND TO SERVER -------------------------\x3e"),console.log("sendToServer",e)};window.addEventListener("load",(t=>{(()=>{console.log("\nUTM MANAGER -------------------------\x3e!");const o=new URLSearchParams(window.location.search),t={};t.medium={utm:o.get("utm_medium"),localStorage:localStorage.getItem("utm_medium"),label:"utm_medium"},t.campaign={utm:o.get("utm_campaign"),localStorage:localStorage.getItem("utm_campaign"),label:"utm_campaign"},console.log("utmData:",t);for(let e in t)t[e].utm&&(l=t[e].utm,n=t[e].localStorage,a=t[e].label,console.log("\nUTM HANDLER -------------------------\x3e"),console.log(`${a}:`,l),console.log("localStorage:",n),l||n?l&&!n?(localStorage.setItem(a,l),console.log("utm HERE > storing UTM")):!l&&n?console.log("localStorage HERE > doing nothing"):l&&n&&(l!==n?(localStorage.setItem(a,l),console.log("BOTH HERE > utm DIFFERENT from localStorage > storing new utm")):console.log("BOTH HERE and MATCHING > doing nothing")):console.log("BOTH NULL > doing nothing"));var l,n,a;e.utmMedium=localStorage.getItem("utm_medium"),e.utmCampaign=localStorage.getItem("utm_campaign")})(),(e=>{const t=document.querySelectorAll(".form-btn,.cfe-trigger, .mktoButton");for(let e=0;e<t.length;e++){let l=t[e].getAttribute("data-cfe");t[e].addEventListener("click",(n=>{o(null!==l?l:t[e].innerText)}))}})(),(()=>{let o;console.log("\nMETA PIXEL EXTRACTOR -------------------------\x3e");const t=document.querySelectorAll("script");for(let e=0;e<t.length;e++)t[e].innerText.includes("fbq")&&(o=t[e].innerText,o=o.split('"init","')[1],o=o.split('");')[0],console.log("metaPixelID:",o));e.metaPixel=o})(),console.log("userAgent",navigator.userAgent),e.userAgent=navigator.userAgent}))})();