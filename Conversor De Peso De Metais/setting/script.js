
function calcularPeso() {
  // Obter valores de entrada
  const tipoForma = document.getElementById("tipoForma").value;
  const tipoMetal = document.getElementById("tipoMetal").value;

  // Densidade do material
  let densidade;
  switch (tipoMetal) {
      case "aco-carbono":
          densidade = 7850;
          break;
      case "aco-inox":
          densidade = 8050;
          break;
      case "aluminio":
          densidade = 2700;
          break;
      default:
          densidade = 7850;
  }

  let peso;

  if (tipoForma === "retangular") {
      const comprimento = document.getElementById("comprimento").value;
      const largura = document.getElementById("largura").value;
      const espessura = document.getElementById("espessura").value;

      // Converter mm para metros
      const comprimentoM = comprimento / 1000;
      const larguraM = largura / 1000;
      const espessuraM = espessura / 1000;

      // Calcular volume
      const volume = comprimentoM * larguraM * espessuraM;

      // Calcular peso
      peso = volume * densidade; 

  } else if (tipoForma === "redonda") {
      const diametro = document.getElementById("diametro").value;
      const comprimento = document.getElementById("comprimentoRedondo").value; 

      // Converter mm para metros
      const diametroM = diametro / 1000;
      const comprimentoM = comprimento / 1000;

      // Calcular área da seção transversal
      const area = Math.PI * (diametroM/2)**2;

      // Calcular volume
      const volume = area * comprimentoM;

      // Calcular peso
      peso = volume * densidade;
  }

  // Exibir resultado
  document.getElementById("resultado").textContent = 
      "Peso aproximado: " + peso.toFixed(2) + " kg";
}

// Função para mostrar/ocultar campos de entrada (mesmo do exemplo anterior) 
function alternarCamposEntrada() { 
  const tipoForma = document.getElementById("tipoForma").value;
  const entradasRetangulares = document.getElementById("entradasRetangulares");
  const entradasRedondas = document.getElementById("entradasRedondas");

  if (tipoForma === "retangular") {
      entradasRetangulares.style.display = "block";
      entradasRedondas.style.display = "none";
  } else if (tipoForma === "redonda") {
      entradasRetangulares.style.display = "none";
      entradasRedondas.style.display = "block";
  } }