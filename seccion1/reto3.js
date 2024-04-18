let initialBudget = prompt("Ingresa tu presupuesto inicial:");
let travelCosts = prompt("Ingresa tus costos de viaje estimados (incluyendo alojamiento, transporte y comida)):");
let threshold = prompt("Ingresa la cantidad mínima que deseas guardar para emergencias:");
let extraItemCost = prompt("Ingresa el costo del artículo adicional:");

initialBudget = parseFloat(initialBudget);
travelCosts = parseFloat(travelCosts);
threshold = parseFloat(threshold);
extraItemCost = parseFloat(extraItemCost);

let remainingBudget = initialBudget - travelCosts - threshold;

if (remainingBudget > extraItemCost) {
    alert("¡Puedes permitirte el artículo extra!");
} else {
    alert("Trate de evitar gastos adicionales para mantenerse dentro de su presupuesto.");
}