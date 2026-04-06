/* ==============================================
   Translation engine
   Depends on: lang/en.js, lang/pt.js, lang/zh.js
   ============================================== */

var TRANSLATIONS = window.TRANSLATIONS || {};

var LANG_CYCLE  = ['en', 'pt', 'zh'];
var LANG_LABELS = { en: 'PT', pt: '中文', zh: 'EN' };
var LANG_HTML   = { en: 'en', pt: 'pt-BR', zh: 'zh-Hans' };

function detectLang() {
  var saved = typeof localStorage !== 'undefined' && localStorage.getItem('lang');
  if (saved && TRANSLATIONS[saved]) return saved;
  var browser = (navigator.languages ? navigator.languages[0] : navigator.language) || 'en';
  var b = browser.toLowerCase();
  if (b.startsWith('pt')) return 'pt';
  if (b.startsWith('zh')) return 'zh';
  return 'en';
}

var currentLang = detectLang();

function applyTranslations(lang) {
  var t = TRANSLATIONS[lang];
  if (!t) return;

  document.querySelectorAll('[data-i18n]').forEach(function (el) {
    var key = el.getAttribute('data-i18n');
    if (t[key] !== undefined) el.innerHTML = t[key];
  });

  document.querySelectorAll('[data-i18n-placeholder]').forEach(function (el) {
    var key = el.getAttribute('data-i18n-placeholder');
    if (t[key] !== undefined) {
      el.placeholder = t[key];
      el.setAttribute('aria-label', t[key]);
    }
  });

  var btn = document.getElementById('lang-toggle');
  if (btn) btn.textContent = LANG_LABELS[lang] || 'EN';

  currentLang = lang;
  if (typeof localStorage !== 'undefined') localStorage.setItem('lang', lang);
  document.documentElement.lang = LANG_HTML[lang] || 'en';
}

function toggleLanguage() {
  var idx  = LANG_CYCLE.indexOf(currentLang);
  var next = LANG_CYCLE[(idx + 1) % LANG_CYCLE.length];
  applyTranslations(next);
}

document.addEventListener('DOMContentLoaded', function () {
  applyTranslations(currentLang);
});
