function getInput(message) {
    const input = prompt(message);
    if (input === null) {
    throw new Error("User canceled the prompt.");
    }
    return input;
}

function getYesNoInput(message) {
    let input;
    while (true) {
    input = getInput(message).toLowerCase();
    if (input === "si" || input === "no") {
        break;
    }
    alert("por favor introducir 'si' o 'no'.");
    }
    return input === "si";
}
async function getPackingConditions() {
    const weather = await getInput("Ingrese el pronóstico del tiempo (por ejemplo, soleado, lluvioso):");
    const bagSpace = getYesNoInput("¿Tienes espacio extra en tu equipaje?");
    const weightLimit = getYesNoInput("¿Está por debajo del límite de peso de su equipaje?");

    return { weather, bagSpace, weightLimit };
}
function suggestItemsToPack(conditions) {
    const { weather, bagSpace, weightLimit } = conditions;

    const items = [
    { name: "sombrilla", weight: 1, importance: 4, essential: true },
    { name: "camara", weight: 3, importance: 3, essential: false },
    { name: "sueter", weight: 2, importance: 1, essential: true },
    { name: "libro", weight: 1.5, importance: 2, essential: false },
    ];

    const suggestions = [];

    for (const item of items) {
    if (item.essential || (!item.essential && bagSpace && weightLimit)) {
        if (weather.toLowerCase().includes(item.name) || item.importance > 1) {
        suggestions.push(item.name);
        }
    }
    }

    return suggestions;
}
async function main() {
    try {
    const conditions = await getPackingConditions();
    const itemsToPack = suggestItemsToPack(conditions);

    if (itemsToPack.length === 0) {
        alert("No es necesario empacar nada extra.");
    } else {
        let suggestionMessage = "Deberías considerar empacar:\n";
        for (const item of itemsToPack) {
        suggestionMessage += `- ${item}\n`;
        }
        alert(suggestionMessage);
    }
    } catch (error) {
    console.error(error);
    alert("Se ha producido un error. Por favor, inténtelo de nuevo más tarde.");
    }
}
main();