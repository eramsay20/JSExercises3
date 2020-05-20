/* Requirements:
1. Do not use any global variables.
2. Create a Javascript function called generateNum that takes no parameters and
generates and returns a random number between 1 and 20. */

function generateNum () {
    return Math.floor((Math.random() * 20) + 1);
}
console.log(`
P2. The generateNum function returns: ${generateNum()}`); // test functionality

/* 3. Create a JavaScript function called generateColor that uses a random number generator
to produce a number from 1 to 6. Inside this function, each value should map to a different 
color. For example, 1 = yellow, 2 = red, etc. The function takes no parameters and returns 
a color string.*/


function generateColor() {
    colorSelect = Math.floor((Math.random() * 6) + 1); // generate a num assigned to a color
    switch (colorSelect) {
        case 1:
            return "Red";
            break;
        case 2:
            return "Orange";
            break;
        case 3:
            return "Yellow";
            break;
        case 4:
            return "Green";
            break;
        case 5:
            return "Blue";
            break;
        case 6:
            return "Purple";
            break;
    }
}
console.log(`
P3. The generateColor function returns: ${generateColor()}`); //test functionality

/* 4. Create a function that creates and returns car objects. Car objects should have a field that 
holds a string for their color. This function should utilize generateColor to assign a random 
color to each car that is created. This function should also take an input parameter for the 
productionRun, which is added as a field to the returned car. */ 

function createCarObj (prodRunNum) {
    var carObject = {};
        carObject.color = generateColor();
        carObject.productionRun = prodRunNum;
        return carObject;
    };

console.log(`
P4. createCarObj function creates car objects but doesn't return anything`);


/* 5. Create a JavaScript function called constructCars. This function should take in two parameters: 
a number, and a string production number. This function should use the number input and the car 
creating function from requirement #4 toat ma build thny car objects and store them in an array. 
Each car built with this function should be assigned the same production run from the input parameter. 
This function should return an array of car objects. */

 function constructCars (numToBuild,prodRunNum) {
        var carInventory = [];
        var i;
        for(i=0; i<numToBuild; i++) {
            let newCar = {};
            newCar = createCarObj(prodRunNum);
            newCar.name = `Car# ${i+1}`;
            carInventory.push(newCar);
       };
       return carInventory;
 };

 // adding some global variables to test functionality of 5, 6, & 7 // 
 console.log(`
P5. constructCars function returns:`);
 var newArrayTest = constructCars(5,5);
 console.log(newArrayTest);

 /*6. Create a JavaScript function called displayAllCars that takes an array as input and does not return
 anything. This function should iterate through the array and display each element on the console.*/

function displayAllCars (array) {
    for (var i=0; i<array.length; i++) {    
        console.log(array[i]);
    };
};
console.log(`
P6. displayAllCars function returns:`);
displayAllCars(newArrayTest); // test functionality // 


/* 7. Create a JavaScript function called colorCount that takes an array as input. The function should 
search through that array looking for car objects and counting how many cars of each color there are. 
The function then runs one console log for each color, showing the count for it. For example: 
yellow: 1, red: 4, etc. */

function colorCount(array) {
    var red = 0;
    var orange = 0;
    var yellow = 0;
    var green = 0;
    var blue = 0;
    var purple = 0;
    for (var i = 0; i<array.length; i++) {
        switch (array[i].color){
            case "Red":
            red++;
            break;
            case "Orange":
            orange++;
            break;
            case "Yellow":
            yellow++;
            break;
            case "Green":
            green++;
            break;
            case "Blue":
            blue++;
            break;
            case "Purple":
            purple++;
            break;
        }
    };
    console.log(`There are ${red} red cars`);
    console.log(`There are ${orange} orange cars`);
    console.log(`There are ${yellow} yellow cars`);
    console.log(`There are ${green} green cars`);
    console.log(`There are ${blue} blue cars`);
    console.log(`There are ${purple} purple cars`);
};
console.log(`
P7. colorCount function returns:`);
colorCount(newArrayTest);

