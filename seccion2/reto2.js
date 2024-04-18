const presupuestoDiario = parseFloat(prompt("Ingresa tu presupuesto diario:"));
const costoComerFuera = parseFloat(prompt("Ingresa el costo de comer fuera:"));
const costoComprarLibro = parseFloat(prompt("Ingresa el costo de comprar un libro:"));
const ahorroDiarioMinimo = parseFloat(prompt("Ingresa tu ahorro diario mínimo deseado:"));

if (presupuestoDiario >= costoComerFuera + costoComprarLibro + ahorroDiarioMinimo) {
    alert("Puedes comer fuera, comprar un libro y ahorrar diariamente.");
} else if (presupuestoDiario >= costoComerFuera + costoComprarLibro) {
    alert("Puedes comer fuera y comprar un libro, pero no ahorrar diariamente.");
} else if (presupuestoDiario >= costoComerFuera + ahorroDiarioMinimo) {
    alert("Puedes comer fuera y ahorrar diariamente, pero no comprar un libro.");
} else if (presupuestoDiario >= costoComprarLibro + ahorroDiarioMinimo) {
    alert("Puedes comprar un libro y ahorrar diariamente, pero no comer fuera.");
} else if (presupuestoDiario >= costoComerFuera || presupuestoDiario >= costoComprarLibro) {
    alert("Puedes elegir entre comer fuera o comprar un libro hoy, pero no los dos.");
} else {
    alert("No puedes comer fuera, comprar un libro ni ahorrar diariamente.");
}