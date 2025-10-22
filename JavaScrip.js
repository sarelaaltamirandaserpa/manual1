function calcular() {
  const nota1 = document.getElementById("nota1").value;
  const nota2 = document.getElementById("nota2").value;
  const resultado = document.getElementById("resultado");
  const mensajeError = document.getElementById("mensajeError");

  resultado.textContent = "";
  mensajeError.textContent = "";

  const n1 = nota1 === "" ? null : parseFloat(nota1);
  const n2 = nota2 === "" ? null : parseFloat(nota2);

  // Solo una nota ingresada (positiva)
  if ((n1 !== null && n1 >= 0 && (nota2 === "")) || (n2 !== null && n2 >= 0 && (nota1 === ""))) {
    mensajeError.textContent = "⚠️ Debes ingresar las dos notas para poder calcular.";
    return;
  }

  // Solo una nota negativa
  if ((n1 !== null && n1 < 0 && (nota2 === "")) || (n2 !== null && n2 < 0 && (nota1 === ""))) {
    mensajeError.textContent = "⚠️ Debes ingresar las dos notas y los valores no pueden ser negativos.";
    return;
  }

  // Una positiva y una negativa
  if ((n1 < 0 && n2 >= 0) || (n2 < 0 && n1 >= 0)) {
    mensajeError.textContent = "⚠️ Los valores no pueden ser negativos.";
    return;
  }

  // Ambas negativas
  if ((n1 < 0 && n2 < 0)) {
    mensajeError.textContent = "⚠️ Los valores no pueden ser negativos.";
    return;
  }

  // Falta una nota
  if (nota1 === "" || nota2 === "") {
    mensajeError.textContent = "⚠️ Debes ingresar las dos notas para poder calcular.";
    return;
  }

  // Fuera de rango
  if ((n1 > 5 || n2 > 5)) {
    mensajeError.textContent = "⚠️ Las notas deben estar entre 0.0 y 5.0.";
    return;
  }

  // Cálculo
  const notaLlevas = (n1 * 0.33) + (n2 * 0.33);
  const notaNecesaria = (3.0 - notaLlevas) / 0.34;

  if (notaNecesaria > 5) {
    resultado.textContent = `Llevas una nota de ${notaLlevas.toFixed(2)}. Necesitas ${notaNecesaria.toFixed(2)} en el tercer corte, lo cual no es posible (máximo es 5).`;
  } else if (notaNecesaria < 0) {
    resultado.textContent = `Llevas una nota de ${notaLlevas.toFixed(2)}. Ya tienes asegurado el 3.0. ¡Bien hecho!`;
  } else {
    resultado.textContent = `Llevas una nota de ${notaLlevas.toFixed(2)}. Necesitas ${notaNecesaria.toFixed(2)} en el tercer corte para ganar.`;
  }
}
