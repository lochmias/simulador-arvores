function calcularPorte() {
    const rua = document.getElementById('rua').value;
    const calcada = document.getElementById('calcada').value;
    const casa = document.getElementById('casa').value;
    
    let porte = "";
    let espacamento = "";

    if (rua === "menos7") {
        if (casa === "menos4") {
            porte = "Não use árvores";
            espacamento = "Neste espaço, o plantio não é recomendado para evitar danos estruturais.";
        } else {
            porte = "Pequeno porte";
            espacamento = "Espaçamento recomendado: 6 a 7 metros entre mudas.";
        }
    } else {
        if (calcada === "menos3") {
            if (casa === "menos4") {
                porte = "Pequeno porte";
                espacamento = "Espaçamento recomendado: 6 a 7 metros.";
            } else {
                porte = "Pequeno-médio porte";
                espacamento = "Espaçamento recomendado: 7 a 8 metros.";
            }
        } else {
            if (casa === "menos4") {
                porte = "Porte Médio";
                espacamento = "Espaçamento recomendado: 7 a 10 metros.";
            } else {
                porte = "Pequeno-grande porte";
                espacamento = "Espaçamento recomendado: 10 a 15 metros.";
            }
        }
    }

    // Troca o placeholder pelo resultado
    document.getElementById('placeholder').style.display = "none";
    document.getElementById('result-content').style.display = "block";
    
    document.getElementById('res-porte').innerText = porte;
    document.getElementById('res-espaco').innerText = espacamento;
    
    // Altera o estilo da box de resultado para destaque
    document.getElementById('display-area').style.borderStyle = "solid";
    document.getElementById('display-area').style.borderColor = "#41723D";
    document.getElementById('display-area').style.backgroundColor = "#fff";
}