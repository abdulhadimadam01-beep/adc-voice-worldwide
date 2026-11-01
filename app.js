const translations={
en:{tagline:"Your Voice, Our Platform!",home:"Home",adc:"ADC News",politics:"Politics",gallery:"Gallery",about:"About",breaking:"BREAKING NEWS",ticker:"Latest updates from ADC Voice Worldwide",welcome:"WELCOME TO",intro:"Your trusted destination for news, updates, interviews and stories.",read:"Explore latest news",latest:"Latest News",adcTitle:"ADC Updates",adcText:"Party news, leadership updates, events and official statements.",politicsTitle:"Nigeria Politics",politicsText:"Political developments and public-interest reporting across Nigeria.",galleryTitle:"Photo & Video Gallery",galleryText:"Event photographs, interviews and video reports will appear here.",aboutTitle:"About ADC Voice Worldwide",aboutText:"ADC Voice Worldwide is a digital media platform sharing news, updates and public-interest information. Content should be verified before publication."},
ha:{tagline:"Muryarka, Dandalinku!",home:"Gida",adc:"Labaran ADC",politics:"Siyasa",gallery:"Hotuna",about:"Game da Mu",breaking:"LABARI MAI ZAFI",ticker:"Sabbin bayanai daga ADC Voice Worldwide",welcome:"BARKA DA ZUWA",intro:"Amintacciyar kafarka ta labarai, sanarwa, tattaunawa da rahotanni.",read:"Duba sabbin labarai",latest:"Sabbin Labarai",adcTitle:"Sabbin Bayanai na ADC",adcText:"Labaran jam'iyya, shugabanci, taruka da sanarwar hukuma.",politicsTitle:"Siyasar Najeriya",politicsText:"Rahotannin siyasa da muhimman al'amuran jama'a a Najeriya.",galleryTitle:"Hotuna da Bidiyo",galleryText:"Hotunan taruka, tattaunawa da rahotannin bidiyo za su bayyana a nan.",aboutTitle:"Game da ADC Voice Worldwide",aboutText:"ADC Voice Worldwide kafar yada labarai ce ta zamani da ke wallafa labarai, sanarwa da bayanan da suka shafi jama'a. A tantance sahihancin bayani kafin wallafawa."}
};
const stories={
en:[
["ADC NEWS","Welcome to ADC Voice Worldwide","Your digital source for ADC updates, interviews and public-interest news."],
["NATIONAL","Nigeria Newsroom","National developments and verified reports from across Nigeria."],
["MEDIA","From the Field","Photo reports, interviews and community updates from our correspondents."]],
ha:[
["LABARAN ADC","Barka da zuwa ADC Voice Worldwide","Tashar zamani don samun labaran ADC, tattaunawa da rahotannin jama'a."],
["NAJERIYA","Dandalin Labaran Kasa","Sabbin abubuwan da ke faruwa da sahihan rahotanni daga sassan Najeriya."],
["KAFAR Watsa Labarai","Rahoto daga Fili","Hotuna, tattaunawa da bayanai daga wakilanmu."]]};
let lang="en";
function render(){document.documentElement.lang=lang==="ha"?"ha":"en";document.querySelectorAll("[data-i18n]").forEach(el=>{const k=el.dataset.i18n;if(translations[lang][k])el.textContent=translations[lang][k]});document.getElementById("lang").textContent=lang==="en"?"HAUSA":"ENGLISH";document.getElementById("stories").innerHTML=stories[lang].map(s=>`<article class="story"><span class="category">${s[0]}</span><h3>${s[1]}</h3><p>${s[2]}</p><small>ADC Voice Worldwide</small></article>`).join("")}
document.getElementById("lang").addEventListener("click",()=>{lang=lang==="en"?"ha":"en";render()});render();
if("serviceWorker" in navigator){window.addEventListener("load",()=>navigator.serviceWorker.register("./sw.js").catch(()=>{}))}
