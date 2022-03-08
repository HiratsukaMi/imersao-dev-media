document.getElementById("bnt").onclick = function (e) {
    const primeiraNota = parseFloat(document.getElementById("number-1").value);
    const segundaNota = parseFloat(document.getElementById("number-2").value);
    const terceiraNota = parseFloat(document.getElementById("number-3").value);
    const quartaNota = parseFloat(document.getElementById("number-4").value);
  
    const notaFinal = ((primeiraNota + segundaNota + terceiraNota + quartaNota) / 4).toFixed(1);
  
    let resultado;
  
    if (notaFinal >= 6){
        resultado = "Aprovado";
    } else {
        resultado = "Reprovado"
    }
    
    document.getElementById("resultado").innerHTML = `Sua nota foi <em>${notaFinal}</em> - <em>${resultado}</em>`
  }
