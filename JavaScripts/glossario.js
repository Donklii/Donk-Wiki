function toggleGlossario() {
    const lista = document.getElementById('glossario-list');
    const botao = document.querySelector('.toggle-button');
    
    if (lista.style.display === 'none') {
        lista.style.display = 'block';
        botao.textContent = '−';
    } else {
        lista.style.display = 'none';
        botao.textContent = '+';
    }
}

function carouselNav(btn, dir) {
    var carousel = btn.closest('.carousel');
    var images = JSON.parse(carousel.dataset.images);
    var idx = (parseInt(carousel.dataset.index) + dir + images.length) % images.length;
    carousel.dataset.index = idx;
    carousel.querySelector('.carousel-img').src = images[idx];
    carousel.querySelectorAll('.carousel-dot').forEach(function(dot, i) {
        dot.classList.toggle('active', i === idx);
    });
}

function toggleSidebar() {
    document.getElementById('mw-panel').classList.toggle('open');
    document.getElementById('sidebar-overlay').classList.toggle('visible');
}

function closeSidebar() {
    document.getElementById('mw-panel').classList.remove('open');
    document.getElementById('sidebar-overlay').classList.remove('visible');
}

// Close sidebar on mobile when a nav link is clicked
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('#mw-panel a').forEach(function (link) {
        link.addEventListener('click', closeSidebar);
    });
});

function mudarAba(id, botaoClicado) {
    document.querySelectorAll('.conteudo-aba').forEach(div => {
        div.style.display = 'none';
    });

    document.querySelectorAll('.aba').forEach(btn => {
        btn.classList.remove('ativa');
    });

    document.getElementById(id).style.display = 'block';

    botaoClicado.classList.add('ativa');
}