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