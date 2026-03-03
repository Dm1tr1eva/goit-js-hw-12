import{a as d,S,i as n}from"./assets/vendor-B5nsgUv9.js";(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const s of t)if(s.type==="childList")for(const f of s.addedNodes)f.tagName==="LINK"&&f.rel==="modulepreload"&&c(f)}).observe(document,{childList:!0,subtree:!0});function o(t){const s={};return t.integrity&&(s.integrity=t.integrity),t.referrerPolicy&&(s.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?s.credentials="include":t.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function c(t){if(t.ep)return;t.ep=!0;const s=o(t);fetch(t.href,s)}})();d.defaults.baseURL="https://pixabay.com";const q="54811885-a0f1e46fb5733e769b4bb2295";async function y(r,e,o){return(await d.get("/api/",{params:{key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:e,per_page:o}})).data}const h=document.querySelector(".gallery"),m=document.querySelector(".loader"),p=document.querySelector(".btn-load-more"),v=new S(".gallery .gallery-link",{captions:!0,captionsData:"alt",captionPosition:"bottom",captionDelay:250});function g(r){const e=r.map(o=>`<li class="gallery-item">
    <a class="gallery-link" href="${o.largeImageURL}">
      <img
        class="gallery-image"
        src="${o.webformatURL}"
        alt="${o.tags}"
        width="360"
        height="200"
      />
    </a>
    <ul class="info-list">
      <li class="info-item"><h3 class="info-title">Likes</h3><p class="info-text">${o.likes}</p></li>
      <li class="info-item"><h3 class="info-title">Views</h3><p class="info-text">${o.views}</p></li>
      <li class="info-item"><h3 class="info-title">Comments</h3><p class="info-text">${o.comments}</p></li>
      <li class="info-item"><h3 class="info-title">Downloads</h3><p class="info-text">${o.downloads}</p></li>
    </ul>
  </li>`).join("");h.insertAdjacentHTML("beforeend",e),v.refresh()}function x(){h.innerHTML=""}function b(){m.style.display="block"}function L(){m.style.display="none"}function w(){p.style.display="block"}function u(){p.style.display="none"}const R=document.querySelector(".form");let a="",i=1;const l=15,P=document.querySelector(".btn-load-more");R.addEventListener("submit",async r=>{if(r.preventDefault(),a=r.target.elements["search-text"].value.trim(),a!==""){i=1,x(),u(),b();try{const e=await y(a,i,l);if(e.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",backgroundColor:"#ef4040",messageColor:" #fafafb",iconColor:"#fafafb"});return}g(e.hits),i*l>=e.totalHits?(u(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):w()}catch{n.error({position:"topRight",message:"Something went wrong"})}finally{L()}}});P.addEventListener("click",async()=>{i+=1,b();try{const r=await y(a,i,l);g(r.hits);const e=document.querySelector(".gallery-item");if(e){const{height:o}=e.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}i*l>=r.totalHits?(u(),n.info({position:"topRight",message:"We're sorry, but you've reached the end of search results."})):w()}catch{n.error({message:"Something went wrong"})}finally{L()}});
//# sourceMappingURL=index.js.map
