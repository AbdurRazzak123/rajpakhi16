/* বাংলা সংবাদ — GitHub JSON media loader */
(function(){
 const DATA_URL='news-data.json';
 const esc=s=>String(s??'').replace(/[&<>\"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','\"':'&quot;',"'":'&#39;'}[c]));
 function yt(u){let s=String(u||'').trim(),m=s.match(/youtu\.be\/([\w-]{6,})/)||s.match(/[?&]v=([\w-]{6,})/)||s.match(/youtube\.com\/(?:embed|shorts|live)\/([\w-]{6,})/);return m?m[1]:''}
 function parse(t){let a=t.indexOf('{'),b=t.lastIndexOf('}')+1;let rows=JSON.parse(t.slice(a,b)).table.rows||[];return rows.map((r,i)=>{let c=r.c||[],v=n=>c[n]&&c[n].v!=null?String(c[n].v):'';return{id:v(0)||(i+1)+'',category:v(1),title:v(2),summary:v(3),image:v(4),date:v(5),image2:v(6),image3:v(7),video:v(8),keywords:v(9)}})}
 function styles(){if(document.getElementById('media-style'))return;let s=document.createElement('style');s.id='media-style';s.textContent=`
 .sheet-media-gallery{display:grid;grid-template-columns:1fr;gap:12px;margin:18px 0}.sheet-media-gallery figure{margin:0;background:#fff;border:1px solid #e5e5e5;border-radius:8px;overflow:hidden}.sheet-media-gallery img{width:100%;height:auto;max-height:520px;object-fit:cover;display:block}.sheet-media-gallery figcaption{padding:5px;text-align:center;color:#777;font-size:12px}
 .sheet-video{margin:18px 0;background:#000;border-radius:8px;overflow:hidden}.sheet-video iframe{width:100%;aspect-ratio:16/9;border:0;display:block}.sheet-video video{width:100%;display:block}
 .inline-media{margin:18px 0}.inline-media img{width:100%;height:auto;max-height:520px;object-fit:cover;border-radius:8px;display:block}.inline-media figcaption{text-align:center;color:#777;font-size:12px;margin-top:4px}
 .category-tag{position:static!important;display:inline-block!important;background:#fff!important;color:#c1121f!important;padding:2px 0!important;border-radius:0!important;margin:0 0 6px!important;box-shadow:none!important;z-index:auto!important}
 .news-card .news-image{position:relative}.news-card .news-details,.news-card .news-card-content{position:relative;background:#fff;z-index:2}
 .home-summary,.news-summary{display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:10;overflow:hidden;line-height:1.65}
 @media(max-width:768px){.category-tag{position:static!important}.sheet-media-gallery img,.inline-media img{max-height:360px}}
 `;document.head.appendChild(s)}
 function imageUrl(url){
  const raw=String(url||'').trim();
  if(!raw) return '';
  const m=raw.match(/drive\.google\.com\/(?:file\/d\/|open\?(?:[^#]*&)?id=|uc\?(?:[^#]*&)?id=)([A-Za-z0-9_-]+)/i);
  if(m) return `https://drive.google.com/thumbnail?id=${m[1]}&sz=w1000`;
  // The optimized package stores news images as WebP. Google Sheet data may still contain .jpeg/.jpg/.png.
  if(/^assets\/news\//i.test(raw)) return raw.replace(/\.(?:jpe?g|png)$/i,'.webp');
  try { return new URL(raw, document.baseURI).href; } catch(e) { return raw; }
})();