const color = document.querySelector('#color');
const valSalida = document.querySelector("#salida")
const colorStorage = localStorage.getItem('localColor') || "#ffffff";
color.value = colorStorage;

const setColor = () => {
    const valColor = color.value;
    valSalida.innerHTML = valColor;
    valSalida.style.backgroundColor = valColor;
}

const saveColor = (valColor) => {
    localStorage.setItem("localColor",valColor);
}

setColor();
color.addEventListener("input", setColor);
color.addEventListener ("change",()=>saveColor(color.value));
