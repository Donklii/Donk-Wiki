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