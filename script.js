function sim() {
    alert("você volta hoje! :)");
    // redireciona para um URL após clicar no SIM
    location.href = "https://youtu.be/vcQ7NeR4BrM?si=fqc2-lt0Wt0QQ_pt";
}

function desvia(btn) {
    // btn declarado na função
    btn.style.position = 'absolute';
    btn.style.bottom = geraPosicao(10, 90);
    btn.style.left = geraPosicao(10, 90);
    console.log('opa, desviei...');
}

function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%";
}
