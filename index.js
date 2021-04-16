function add(a, b) {
    return a + b;
}

function makePersonObject(firstname, age) {
    return{
        name: firstname,
        age: age,
    }
}

// hier ga je de functie expoteren naar het test bestand.

module.exports = {
    add: add,
    makePersonObject: makePersonObject,
}