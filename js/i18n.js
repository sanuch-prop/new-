// /js/i18n.js
(function (global) {
  const DICT_PATH = '/i18n';
  const LS_KEY = 'rn_lang';
  const FALLBACK = 'en';
  const SUPPORTED = ['ru', 'uk', 'en'];
  const cache = {};
  let currentLang = null;

  function format(str, params){ if(!params) return str; return str.replace(/\{(\w+)\}/g,(_,k)=> (k in params?params[k]:`{${k}}`)); }
  async function loadDict(lang){ if(cache[lang]) return cache[lang]; const res=await fetch(`${DICT_PATH}/${lang}.json`,{cache:'no-store'}); if(!res.ok) throw new Error(`i18n: cannot load ${lang}.json`); const json=await res.json(); cache[lang]=json; return json; }
  function detectInitial(){ const ls=localStorage.getItem(LS_KEY); if(ls&&SUPPORTED.includes(ls)) return ls; const nav=(navigator.language||'').slice(0,2).toLowerCase(); if(nav==='ru') return 'ru'; if(nav==='uk'||nav==='ua') return 'uk'; return FALLBACK; }
  function setActiveButtons(lang){ document.querySelectorAll('[data-lang]').forEach(btn=>{ const is=btn.getAttribute('data-lang')===lang; btn.classList.toggle('is-active',is); btn.setAttribute('aria-pressed', String(is)); }); }
  function get(dict, path){ return path.split('.').reduce((o,k)=> (o&&k in o)?o[k]:null, dict) ?? null; }
  function apply(dict){
    document.querySelectorAll('[data-i18n]').forEach(el=>{ const key=el.getAttribute('data-i18n'); const val=get(dict,key); if(!val){ console.warn('i18n: missing key',key); el.textContent=key; } else { el.textContent=val; }});
    [['data-i18n-placeholder','placeholder'],['data-i18n-title','title'],['data-i18n-aria-label','aria-label'],['data-i18n-alt','alt']]
    .forEach(([dataAttr,domAttr])=>{ document.querySelectorAll(`[${dataAttr}]`).forEach(el=>{ const key=el.getAttribute(dataAttr); const val=get(dict,key); if(!val){ console.warn('i18n: missing key',key); } else { el.setAttribute(domAttr,val); } }); });
  }
  async function setLang(lang,{silent=false}={}){ if(!SUPPORTED.includes(lang)) lang=FALLBACK; const dict=await loadDict(lang); apply(dict); currentLang=lang; localStorage.setItem(LS_KEY,lang); setActiveButtons(lang); if(!silent && window.dispatchEvent){ window.dispatchEvent(new CustomEvent('i18n:changed',{detail:{lang}})); } return lang; }
  async function init({allowSwitcher=true}={}){ const initLang=detectInitial(); await setLang(initLang,{silent:true}); if(allowSwitcher){ document.querySelectorAll('[data-lang]').forEach(btn=>btn.addEventListener('click',()=>setLang(btn.getAttribute('data-lang')))); setActiveButtons(initLang); } }
  async function syncWithSupabase(mode='read'){ if(!global.Supa) return; try{ if(mode==='read'){ const lang=await global.Supa.getPreferredLang?.(); if(lang && lang!==localStorage.getItem(LS_KEY)) await setLang(lang); } else if(mode==='write'){ await global.Supa.setPreferredLang?.(localStorage.getItem(LS_KEY)); } } catch(e){ console.warn('i18n: supabase sync fail',e); } }
  global.I18N={ init, setLang, t:(k,p)=> (cache[localStorage.getItem(LS_KEY)]||{})[k] || k, syncWithSupabase, LS_KEY, SUPPORTED };
})(window);
