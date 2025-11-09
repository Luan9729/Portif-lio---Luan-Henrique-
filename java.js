
function Muda() {
  var botao = document.body;
  botao.classList.toggle("dark");
}

function Muda2() {
  var botao = document.body;
  botao.classList.toggle("dark");
}



function mascara_telefone() {
  //limitador
  var tel = document.getElementById("telefone").value
  console.log(tel)
  tel = tel.slice(0, 14) //(pode limitar a quantidade de char na entrada pelo java script)
  console.log(tel)
  document.getElementById("telefone").value = tel
  tel = document.getElementById("telefone").value.slice(0, 10)
  console.log(tel)

  //máscara
  var tel_formatado = document.getElementById("telefone").value
  if (tel_formatado[0] != "(") {
    if (tel_formatado[0] != undefined) {
      document.getElementById("telefone").value = "(" + tel_formatado[0];
    }
  }

  if (tel_formatado[3] != ")") {
    if (tel_formatado[3] != undefined) {
      document.getElementById("telefone").value = tel_formatado.slice(0, 3) + ")" + tel_formatado[3]
    }
  }

  if (tel_formatado[9] != "-") {
    if (tel_formatado[9] != undefined) {
      document.getElementById("telefone").value = tel_formatado.slice(0, 9) + "-" + tel_formatado[9]
    }
  }
}




document.addEventListener("DOMContentLoaded", function () {
  const texto = "Estudante de TI";
  const elemento = document.getElementById("texto");
  let i = 0;

  function typeWriter() {
    if (i < texto.length) {
      elemento.textContent += texto.charAt(i);
      i++;
      setTimeout(typeWriter, 100); // velocidade (100ms por letra)
    }
  }

  typeWriter();
});



// Efeito de revelar por partes com repetição
const elementosRevela = document.querySelectorAll('.revela');

function revelarAoRolar() {
  const alturaJanela = window.innerHeight * 0.85;

  elementosRevela.forEach((el, i) => {
    const topoElemento = el.getBoundingClientRect().top;
    const fundoElemento = el.getBoundingClientRect().bottom;

    // Quando o elemento estiver visível na tela
    if (topoElemento < alturaJanela && fundoElemento > 0) {
      setTimeout(() => el.classList.add('visivel'), i * 150);
    }
    // Quando o elemento sair da tela
    else {
      el.classList.remove('visivel');
    }
  });
}

window.addEventListener('scroll', revelarAoRolar);
revelarAoRolar(); // executa na carga inicial


const modal = document.getElementById("modal-msg");
const btn = document.getElementById("btnEnviar");
const close = document.getElementById("closeModal");


btn.addEventListener("click", (e) => {
e.preventDefault();
modal.style.display = "flex";
});


close.addEventListener("click", () => {
modal.style.display = "none";
});


window.addEventListener("click", (e) => {
if (e.target === modal) modal.style.display = "none";
});