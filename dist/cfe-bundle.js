(()=>{"use strict";const e={},o=["utm_source","utm_medium","utm_campaign","campaignid","vendorid","device","utm_content","utm_term","utm_matchtype"],t=["fbp","fbc"],n=o=>{console.log("eventName:",o),e.event=o,console.log("\n"+e)};window.addEventListener("load",(l=>{(e=>{const o=document.querySelectorAll(".form-btn,.cfe-trigger, .mktoButton");for(let e=0;e<o.length;e++){let t=o[e].getAttribute("data-cfe");o[e].addEventListener("click",(l=>{n(null!==t?t:o[e].innerText)}))}})(),(()=>{let o;console.log("\nMETA PIXEL EXTRACTOR --------------------------\x3e!");let t=[];const n=document.querySelectorAll("script");for(let e=0;e<n.length;e++)if(n[e].innerText.includes("fbq"))try{o=n[e].innerText,o=o.split('"init","')[1],o=o.split('");')[0]||o.split('",fb_advanced_matching);')[0],console.log("metaPixelID:",o),t.push(o)}catch(e){console.log("Error extracting metaPixelID:",e)}console.log("metaPixels:",t),e.pixel_id=t[0]})(),console.log("\nUSER AGENT EXTRACTOR -------------------------\x3e"),console.log("userAgent: ",navigator.userAgent),e.client_user_agent=navigator.userAgent,console.log("\nMETA COOKIE EXTRACTOR -------------------------\x3e"),t.forEach((o=>{console.log(o),e[o]=document.cookie.split("; ").find((e=>e.startsWith(`_${o}=`)))?.split("=")[1]})),"undefined"!=typeof MktoForms2?MktoForms2.whenReady((function(t){t.onSuccess((function(n,l){const c=t.vals();e.formData=c,e.first_name=c.FirstName,e.last_name=c.LastName,e.phone=c.Phone,e.email=c.Email,e.event_name="MarketoFormSubmit",o.forEach((o=>{null!==localStorage.getItem(o)?(console.log(`${o} EXISTS in localStorage!`),e.utmParameters={...e.utmParameters,[o]:localStorage.getItem(o)}):console.log(`No ${o} in localStorage!!`)})),console.log("\nSENDING TO SERVER -------------------------\x3e"),fetch("https://labs.bisk.com/capi",{mode:"cors",method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}}).then((e=>(console.log("response",e),e.json()))).then((e=>{console.log("json",e)})).catch((e=>{console.log("err",e)}))}))})):console.log("MktoForms2 not defined"),fetch("https://ipinfo.io/json?token=596e24d86147cf").then((e=>e.json())).then((o=>{console.log(o.ip,o.country),e.client_ip_address=o.ip,e.city=o.city,e.state=o.region,e.zip_code=o.postal,e.country=o.country})),e.event_source_url=window.location.href}))})();