// importeren van de functies uit het index.js bestand.
const { add, makePersonObject } = require('../index');

// test nummer 1

test('the add() function takes two numbers and sums them together',function (){
   //schrijf hier de eerste test.

    //Arrange
    const number1 = 5;
    const number2 = 10;
    // Act
    const outcome= add(5,10);

    // Asserts
    expect(outcome).toEqual(15);

});


// test nummer 2



test('de makePersonObject() functie maakt een persoon object met de waardes die hij meekrijgt',function (){
    // zet alle data klaar
    const personName = "piet";
    const personAge = 23;

    // sla de uitkomst van de functiaanroep op in de variabele personObject.
    const personObject = makePersonObject(personName,personAge);

    // we verwachten dat er "name" property op het personObjet staat.
    expect(personObject).toHaveProperty('name');
    // we verwachten dat er een 'age' propert op het PersonObjevt staat, met de waarde die we hebben meegegeven aan de functie.
    expect(personObject).toHaveProperty('age',personAge);
    // we verwachten dat er geen andere property op staat , zoals bijvoorbeeld 'profession'
    expect(personObject).not.toHaveProperty('profession');
})


