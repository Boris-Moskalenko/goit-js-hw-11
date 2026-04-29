import{a as l,S as u,i}from"./assets/vendor-Do60_h77.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();const f="MY_KEY",m="https://pixabay.com/api/";async function d(a){return(await l.get(m,{params:{key:f,q:a,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data}const c=document.querySelector(".gallery"),y=new u(".gallery a",{captionsData:"alt",captionDelay:250});function g(a){const r=a.map(o=>`
      <li class="gallery-item">
        <a class="gallery-link" href="${o.largeImageURL}">
          <img
            class="gallery-image"
            src="${o.webformatURL}"
            alt="${o.tags}"
          />
        </a>
      </li>
    `).join("");c.insertAdjacentHTML("beforeend",r),y.refresh()}function p(){c.innerHTML=""}function h(){document.querySelector(".loader").classList.add("is-visible")}function L(){document.querySelector(".loader").classList.remove("is-visible")}const b=document.querySelector(".form");b.addEventListener("submit",async a=>{a.preventDefault();const r=a.target.elements["search-text"].value.trim();if(!r){i.warning({message:"Search field cannot be empty",position:"topRight"});return}p(),h();try{const o=await d(r);if(o.hits.length===0){i.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}g(o.hits)}catch{i.error({message:"Something went wrong. Try again!",position:"topRight"})}finally{L()}});
//# sourceMappingURL=index.js.map
