const formulario = document.getElementById('meuFormulario');
const colecao = document.getElementById('colecao');

formulario.addEventListener('submit', function(evento) {
    evento.preventDefault();

    const tituloD = document.getElementById('titulo').value;
    const imagemD = document.getElementById('imagem').value;
    const descricaoD = document.getElementById('descricao').value;

    const novo = {
        titulo: tituloD,
        imagem: imagemD,
        descricao: descricaoD
    };

    const card = `
        <div class="card">
            <img src="${novo.imagem}" alt="Capa">
            <h3>${novo.titulo}</h3>
            <p>${novo.descricao}</p>
        </div>
    `;

    colecao.innerHTML += card;

    formulario.reset();
});
