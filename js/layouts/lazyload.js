Global.initLazyLoad=()=>{const t=document.querySelectorAll("img"),e=new IntersectionObserver(((t,e)=>{t.forEach((t=>{if(t.isIntersecting){const r=t.target,o=r.getAttribute("data-src");r.src=o,r.removeAttribute("lazyload"),e.unobserve(r)}}))}),{rootMargin:"0px",threshold:.1});t.forEach((t=>{t.hasAttribute("lazyload")&&e.observe(t)}))};