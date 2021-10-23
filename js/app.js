const color = document.querySelector('#color');
const valSalida = document.querySelector("#salida")
color.addEventListener("input", () => { 
    valSalida.innerHTML = color.value;
    valSalida.style.backgroundColor = color.value;
    valSalida.style.color = "#ffffff";
});
