console.log("ta funcionando o java do aceitou")

const locaisPorIdeia = {
    cinema: ["Jockey", "Mueller", "Palladium", "Jardim das americas", "Curitiba", "Estação"],
    parque: ["Parque Barigui", "Jardim Botânico", "Parque Tanguá", "Parque Bacacheri", "Centro", "Largo da Ordem"],
    cafeteria: ["Cafezinho, Dona Helena", "Cafe do Canto", "Jardim do bosque", "Piegel", "Prestinaria"]
};

const selectIdeia = document.getElementById('ideia');
const selectLocal = document.getElementById('local');

selectIdeia.onchange = function () {
    const ideiaSelecionada = selectIdeia.value;

    selectLocal.innerHTML = '<option value="">Selecione o local</option>';

    if (ideiaSelecionada && locaisPorIdeia[ideiaSelecionada]) {

        selectLocal.disabled = false;

        locaisPorIdeia[ideiaSelecionada].forEach(local => {
            const option = document.createElement('option');
            option.value = local;
            option.textContent = local;
            selectLocal.appendChild(option);
        });

    } else {
        selectLocal.disabled = true;
    }
};

const formulario = document.getElementById('container');
const btnEnviar = document.querySelector('button[type="submit"]');

btnEnviar.onclick = function (evento) {
    evento.preventDefault();

    const ideia = selectIdeia.value;
    const local = selectLocal.value;
    const data = document.querySelector('input[type="date"]').value;

    if (!ideia || !local || !data) {
        alert("Precisa preencher td antes de enviarr");
        return;
    }

    btnEnviar.textContent = "Enviando... ⏳";
    btnEnviar.disabled = true;

    const dadosFormulario = new FormData(formulario);

    fetch(formulario.action, {
        method: 'POST',
        body: dadosFormulario,
        headers: { 'Accept': 'application/json' }
    })
        .then(() => {
            window.location.href = "felicidade.html";
        })
        .catch(() => {
            window.location.href = "felicidade.html";
        });
};