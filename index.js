import{a as l,S as m,i as n}from"./assets/vendor-DfezCyqK.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function a(e){if(e.ep)return;e.ep=!0;const t=i(e);fetch(e.href,t)}})();l.defaults.baseURL="https://pixabay.com/api/";const g="57451796-7753b2a5b705356fd4c9945a0";async function y(o){const r={key:g,q:o,image_type:"photo",orientation:"horizontal",safesearch:!0};return(await l.get("",{params:r})).data}const c=document.querySelector("#gallery"),u=document.querySelector("#loader"),p=new m(".gallery-link",{captionsData:"alt",captionDelay:250,overlayOpacity:.85});function h(o){const r=o.map(({webformatURL:i,largeImageURL:a,tags:e,likes:t,views:s,comments:f,downloads:d})=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${a}">
          <img
            class="gallery-image"
            src="${i}"
            alt="${e}"
            loading="lazy"
          />
        </a>
        <ul class="info">
          <li class="info-item"><b>Likes</b>${t}</li>
          <li class="info-item"><b>Views</b>${s}</li>
          <li class="info-item"><b>Comments</b>${f}</li>
          <li class="info-item"><b>Downloads</b>${d}</li>
        </ul>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),p.refresh()}function b(){c.innerHTML=""}function L(){u.classList.remove("is-hidden")}function w(){u.classList.add("is-hidden")}const S=document.querySelector("#search-form");S.addEventListener("submit",P);async function P(o){o.preventDefault();const r=o.target.elements["search-text"].value.trim();if(!r){n.warning({title:"Warning",message:"Please enter a search word first.",position:"topRight"});return}b(),L();try{const i=await y(r);if(!i.hits.length){n.error({title:"Error",message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}h(i.hits)}catch(i){n.error({title:"Error",message:"Something went wrong while fetching images. Please try again.",position:"topRight"}),console.error(i)}finally{w(),o.target.reset()}}
//# sourceMappingURL=index.js.map
