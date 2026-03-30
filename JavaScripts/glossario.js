/* ==============================================
   glossario.js — UI logic
   ============================================== */

/* ---- Sidebar (mobile) ---- */
function toggleSidebar() {
    document.getElementById('mw-panel').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('visible');
}

function closeSidebar() {
    document.getElementById('mw-panel').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('visible');
}

/* ---- Table of Contents ---- */
function toggleGlossario() {
    const lista  = document.getElementById('glossario-list');
    const botao  = document.querySelector('.toggle-button');
    const hidden = lista.style.display === 'none';
    lista.style.display  = hidden ? 'block' : 'none';
    botao.textContent    = hidden ? '−' : '+';
}

/* ---- Carousel ---- */
function carouselNav(btn, dir) {
    const carousel = btn.closest('.carousel');
    const images   = JSON.parse(carousel.dataset.images);
    const idx      = (parseInt(carousel.dataset.index) + dir + images.length) % images.length;
    carousel.dataset.index = idx;
    carousel.querySelector('.carousel-img').src = images[idx];
    carousel.querySelectorAll('.carousel-dot').forEach((dot, i) => {
        dot.classList.toggle('active', i === idx);
    });
}

/* ---- Partial loader ---- */
const PARTIAL_MAP = {
    aba1: 'partials/tab-roblox.html',
    aba2: 'partials/tab-godot.html',
    aba3: 'partials/tab-github.html',
    aba4: 'partials/tab-unreal.html',
};

const loadedPartials = new Set();

function loadPartial(id) {
    const url = PARTIAL_MAP[id];
    if (!url || loadedPartials.has(id)) return;

    fetch(url)
        .then(r => {
            if (!r.ok) throw new Error(`HTTP ${r.status}`);
            return r.text();
        })
        .then(html => {
            document.getElementById(id).innerHTML = html;
            loadedPartials.add(id);

            // Load Vimeo SDK on demand (innerHTML blocks <script> tags)
            if (html.includes('vimeo') && !document.querySelector('script[src*="vimeo"]')) {
                const s  = document.createElement('script');
                s.src    = 'https://player.vimeo.com/api/player.js';
                document.body.appendChild(s);
            }

            // Re-apply active language to the freshly injected content
            if (typeof applyTranslations === 'function') {
                applyTranslations(currentLang);
            }
        })
        .catch(err => console.warn('Could not load partial:', url, err));
}

/* ---- Tab switching ---- */
function switchTab(id, btn) {
    document.querySelectorAll('.conteudo-aba').forEach(el => (el.style.display = 'none'));
    document.querySelectorAll('.aba').forEach(el => el.classList.remove('ativa'));
    document.getElementById(id).style.display = 'block';
    btn.classList.add('ativa');
    loadPartial(id);
}

/* ---- Init ---- */
document.addEventListener('DOMContentLoaded', () => {
    // Load the initially visible tab
    loadPartial('aba4');

    // Tab buttons — event delegation (no inline onclick needed)
    document.querySelector('.abas').addEventListener('click', e => {
        const btn = e.target.closest('[data-tab]');
        if (btn) switchTab(btn.dataset.tab, btn);
    });

    // Carousel nav — event delegation on portfolio (works for lazy-loaded content)
    document.getElementById('portfolio').addEventListener('click', e => {
        const prev = e.target.closest('.carousel-prev');
        const next = e.target.closest('.carousel-next');
        if (prev) carouselNav(prev, -1);
        else if (next) carouselNav(next, 1);
    });

    // Sidebar nav links close the drawer on mobile
    document.querySelectorAll('#mw-panel a').forEach(link => {
        link.addEventListener('click', closeSidebar);
    });
});
