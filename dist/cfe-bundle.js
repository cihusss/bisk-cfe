(()=>{"use strict";const t={},e=["utm_source","utm_medium","utm_campaign","campaignid","vendorid","device","utm_content","utm_term","utm_matchtype"],a=["fbp","fbc"],o=e=>{t.event=e};window.addEventListener("load",(l=>{(()=>{const e=new URLSearchParams(window.location.search),a={};a.medium={utm:e.get("utm_medium"),localStorage:localStorage.getItem("utm_medium"),label:"utm_medium"},a.campaign={utm:e.get("utm_campaign"),localStorage:localStorage.getItem("utm_campaign"),label:"utm_campaign"},["gclid","wbraid","gbraid"].forEach((t=>{a[t]={utm:e.get(t),localStorage:localStorage.getItem(t),label:t}}));for(let t in a)a[t].utm&&(o=a[t].utm,l=a[t].localStorage,n=a[t].label,(o||l)&&(o&&!l?localStorage.setItem(n,o):!o&&l||o&&l&&o!==l&&localStorage.setItem(n,o)));var o,l,n;t.utmMedium=localStorage.getItem("utm_medium"),t.utmCampaign=localStorage.getItem("utm_campaign"),t.gclid=localStorage.getItem("gclid"),t.wbraid=localStorage.getItem("wbraid"),t.gbraid=localStorage.getItem("gbraid")})(),(t=>{const e=document.querySelectorAll(".form-btn, .cfe-trigger, .mktoButton");for(let t=0;t<e.length;t++){let a=e[t].getAttribute("data-cfe");e[t].addEventListener("click",(l=>{o(null!==a?a:e[t].innerText)}))}})(),(()=>{let e,a=[];const o=document.querySelectorAll("script");for(let t=0;t<o.length;t++)if(o[t].innerText.includes("fbq"))try{e=o[t].innerText,e=e.split('"init","')[1],e=e.includes('",fb_advanced_matching);')?e.split('",fb_advanced_matching);')[0]:e.split('");')[0],a.push(e)}catch(t){}t.meta_pixels=a})(),t.client_user_agent=navigator.userAgent,a.forEach((e=>{t[e]=document.cookie.split("; ").find((t=>t.startsWith(`_${e}=`)))?.split("=")[1]})),"undefined"!=typeof MktoForms2&&MktoForms2.whenReady((function(a){a.onSuccess((function(o,l){const n=a.vals();t.formData=n,t.first_name=n.FirstName,t.last_name=n.LastName,t.phone=n.Phone,t.email=n.Email,t.event_name="MarketoFormSubmit",e.forEach((e=>{null!==localStorage.getItem(e)&&(t.utmParameters={...t.utmParameters,[e]:localStorage.getItem(e)})})),(()=>{let e="",a="";e=window.location.href.includes("localhost")?"http://localhost:3000":"https://labs.bisk.com",a=null!==t.gclid||null!==t.wbraid||null!==t.gbraid?"/google":"/capi",fetch(`${e}${a}`,{mode:"cors",method:"POST",body:JSON.stringify(t),headers:{"Content-Type":"application/json","Access-Control-Allow-Origin":"*"}}).then((t=>t.json())).then((t=>{})).catch((t=>{}))})()}))})),fetch("https://ipinfo.io/json?token=596e24d86147cf").then((t=>t.json())).then((e=>{t.client_ip_address=e.ip,t.city=e.city,t.state=e.region,t.zip_code=e.postal,t.country=e.country})),t.event_source_url=window.location.href,t.hostname=window.location.host}))})();