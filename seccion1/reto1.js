const destination = prompt(`destino del viaje?`);
let days = prompt(`¿cuantos dias vas a viajar a ${destination}?`);
let money = prompt(`¿dinero inicial para ir a ${destination}?`);
let dailyCosts = prompt(`¿cual es tu costo diario para alimentos y actividades?`);

if (money >= days * dailyCosts){
    alert(`tienes suficiente dinero para tu vieje a ${destination}`);
} else{
    alert(`podrias ajustar el presupuesto o la duracion de viaje`);
}