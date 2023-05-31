const text = `¡Bienvenidos a Seba Software! Somos una compañía especializada en el \ncontrol de calidad de aplicaciones y software.\n
\nExcelencia garantizada: Cumplimos con los más altos estándares de \ncalidad en cada producto.
\nExperiencia confiable: Contamos con una amplia trayectoria en \npruebas de calidad.
\nTecnología avanzada: Utilizamos tecnología de vanguardia para \nobtener resultados precisos.
\nCumplimiento normativo: Nos aseguramos de que tus productos cumplan con \nlas regulaciones aplicables.
\nAhorro de tiempo y recursos: Delega las pruebas de calidad en expertos y \nenfócate en tu negocio.`;
const highlightedWords = ["Bienvenidos a Seba Software", "Excelencia garantizada", "Experiencia confiable", "Tecnología avanzada", "Cumplimiento", "Ahorro"];
const outputElement = document.getElementById("terminal-output");
let index = 0;
const speed = 0;

function typeWriter() {
    if (index < text.length) {
        outputElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeWriter, speed);
    }  
}

typeWriter();
let isDragging = false;
let cursorOffsetX = 0;
let cursorOffsetY = 0;

const terminalElement = document.querySelector('.terminal');
const cursorElement = document.querySelector('.terminal-cursor');

terminalElement.addEventListener('mousedown', startDrag);
document.addEventListener('mousemove', dragTerminal);
document.addEventListener('mouseup', stopDrag);

//terminalElement.addEventListener('mousedown', startDrag);
//document.addEventListener('mousemove', dragTerminal);
//document.addEventListener('mouseup', stopDrag);

function startDrag(event) {
  isDragging = true;
  cursorOffsetX = event.offsetX;
  cursorOffsetY = event.offsetY;
}

function dragTerminal(event) {
  if (isDragging) {
    const x = event.clientX - cursorOffsetX;
    const y = event.clientY - cursorOffsetY;
    terminalElement.style.left = x + 'px';
    terminalElement.style.top = y + 'px';
  }
}

function stopDrag() {
  isDragging = false;
}

