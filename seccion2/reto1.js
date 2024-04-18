let name = prompt("Por favor, introduzca su nombre:");
let energy = prompt("Introduzca su nivel de energía (0-10):");

while (isNaN(energy) || energy < 0 || energy > 10) {
energy = prompt("Nivel de energía no válido. Introduzca un número entre 0 y 10:");
}
let weather = prompt("¿Hace buen tiempo hoy? (verdadero/falso):");
while (weather !== "verdadero" && weather !== "falso") {
weather = prompt("Entrada meteorológica no válida. Por favor, introduzca 'verdadero' para el buen tiempo o 'falso' para el mal tiempo:");
}
weather = weather === "verdadero";
let workload = prompt("Introduzca su carga de trabajo actual (pesada, moderada, ligera):");

while (workload !== "pesada" && workload !== "moderada" && workload !== "ligera") {
workload = prompt("Entrada de carga de trabajo no válida. Por favor, introduzca 'pesada', 'moderada', or 'ligera':");
}
if (energy === 0) {
alert("Tomarse un día libre.");
} else if (!weather) {
if (workload === "ligera") {
    alert("Trabajar en proyectos personales en casa.");
} else {
    alert("Relajarse en casa.");
}
} else {
if (energy >= 8) {
    alert("Salir a correr.");
} else if (workload !== "pesada") {
    alert("Trabajar en proyectos personales en un parque o cafetería.");
} else {
    alert("Relajarse en un parque o en una cafetería.");
}
}