/* BanglaSongbad FINAL — static article image assurance */
(function(){
 const catImg={national:'../assets/news/9-1.jpeg',politics:'../politics.jpeg',international:'../internatinol.jpeg',economy:'../economy.jpeg',sports:'../sporst.jpeg',entertainment:'../entertetment.jpeg',technology:'../tecnolgy.jpeg'};
 const norm=s=>String(s||'').toLowerCase().trim();
 const map={national:['জাতীয়','জাতীয়','national'],politics:['রাজনীতি','politics'],international:['আন্তর্জাতিক','international'],economy:['অর্থনীতি','economy'],sports:['খেলাধুলা','sports','sport'],entertainment:['বিনোদন','entertainment'],technology:['প্রযুক্তি','technology','tech']};
 function run(){let text=document.body.innerText||'';let cat=Object.keys(map).find(k=>map[k].some(v=>text.includes(v)))||'national';let article=document.querySelector('.article-full-block,.article-full-details,.vertical-news-block');if(article&&!article.querySelector('img:not(.logo-image)')){let box=document.createElement('div');box.className='static-lead-image';box.innerHTML='<img src="'+catImg[cat]+'" alt="সংবাদের ছবি" loading="eager" decoding="sync" fetchpriority="high">';let target=article.querySelector('.news-text-bottom,.article-full-details');if(target)target.parentNode.insertBefore(box,target);else article.prepend(box);}document.querySelectorAll('img:not(.logo-image)').forEach(i=>{i.loading='eager';i.decoding='sync';i.fetchPriority='high';});}
 if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',run);else run();
})();
