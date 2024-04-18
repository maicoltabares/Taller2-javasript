class Souvenir {
    constructor(name, cost, available) {
    this.name = name;
    this.cost = cost;
    this.available = available;
    }
}
function validateSouvenirData(name, cost, available) {
    if (typeof name !== 'string') {
    return 'El nombre del souvenir debe ser una cadena de texto.';
    }

    if (typeof cost !== 'number' || !isFinite(cost)) {
    return 'El costo del souvenir debe ser un número válido.';
    }

    if (typeof available !== 'boolean') {
    return 'La disponibilidad del souvenir debe ser un valor booleano.';
    }

    return true;
}
function createSouvenir(name, cost, available) {
    const validationResult = validateSouvenirData(name, cost, available);
    if (validationResult !== true) {
    console.error(validationResult);
    return null;
    }

    return new Souvenir(name, cost, available);
}
const souvenirs = [];

function addSouvenir() {
    const name = prompt('Ingrese el nombre del souvenir:');
    const cost = parseFloat(prompt('Ingrese el costo del souvenir:'));
    const available = confirm('¿Está disponible el souvenir?');

    const souvenir = createSouvenir(name, cost, available);
    if (souvenir) {
    souvenirs.push(souvenir);
    }
}
function reviewAndBuySouvenirs() {
    let totalBudget = parseFloat(prompt('Ingrese su presupuesto total para comprar souvenirs:'));
    let remainingBudget = totalBudget;

    for (const souvenir of souvenirs) {
    if (souvenir.available) {
        console.log(`Nombre: ${souvenir.name}, Costo: ${souvenir.cost}, Disponible: ${souvenir.available}`);

        if (remainingBudget >= souvenir.cost) {
        remainingBudget -= souvenir.cost;
        console.log(`Ha comprado el souvenir "${souvenir.name}" por un costo de ${souvenir.cost}. Su presupuesto restante es de ${remainingBudget}.`);
        } else {
        console.log(`Su presupuesto restante no alcanza para comprar el souvenir "${souvenir.name}".`);
        }
    } else {
        console.log(`Nombre: ${souvenir.name}, Costo: ${souvenir.cost}, Disponible: ${souvenir.available}`);
        console.log('Lo sentimos, este souvenir no está disponible en este momento.');
    }
    }
}
while (true) {
    const addMore = confirm('¿Desea agregar más souvenirs?');
    if (!addMore) break;
    addSouvenir();
}
reviewAndBuySouvenirs();

