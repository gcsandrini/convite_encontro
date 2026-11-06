console.log("ta funcionando o java")
const btn_aceitar = document.getElementById("btn_aceitar")
const btn_recusar = document.getElementById("btn_recusar")
const urlFormspree = 'https://formspree.io/f/myeevodb';
btn_aceitar.onclick = function () {
    window.location.href = "aceitou/aceitou.html";
};
btn_recusar.onclick = function () {
    fetch(urlFormspree, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: 'Its over' })
    })
        .then(() => {
            window.location.href = "recusou/recusou.html";
        })
        .catch(() => {
            window.location.href = "recusou/recusou.html";
        });
};