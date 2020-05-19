/*
Requirements:
1. Do not use any global variables.
2. Create a Javascript function called generateNum that takes no parameters and
generates and returns a random number between 1 and 20.
*/

function generateNum () {
    return Math.floor((Math.random() * 20) + 1);
}

generateNum();

/*
3. Create a JavaScript function called generateColor that uses a random number generator
to produce a number from 1 to 6. Inside this function, each value should map to a different 
color. For example, 1 = yellow, 2 = red, etc. The function takes no parameters and returns 
a color string.
*/

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
generateColor();

/*
4. Create a function that creates and returns car objects. Car objects should have a field that 
holds a string for their color. This function should utilize generateColor to assign a random 
color to each car that is created. This function should also take an input parameter for the 
productionRun, which is added as a field to the returned car.
*/ 

var car = {
    name: "Volvo",
    makeYear: '2012',
    color: 'Red'
};

function createCarObj (carName, prodRunNum) = {
        var name = carName;
        color = generateColor();
        productionRun: "a",
    };

function carInventory (prodRunNum) = [     // array filled with objects, each with their own properties
    {
        name: "test",
        color: "b",
        productionRun: "a"
    },
];

var carObject = {
    name: "Volvo",
    color: generateColor(),

};
/*
        var car = {
            make: "Ford",
            model: "Fiesta",
            year: 2015
            }
        for ( var property in car ) {
            console.log( property );
        }

 var students = [
   {
    name: 'Eric',
    track: 'Python', 
    achievements:'3', 
    points: '406'
   },
   {
    name: 'Sara',
    Track: 'CSS', 
    achievements: '11', 
    points: '623'
   },
   {
    name: 'Kevin',
    track: 'HTML', 
    achievements: '7', 
    points: '165'
   },
    {
    name: 'May',
    track: 'Java', 
    achievements:'3', 
    points: '890'
   },
    {
    name: 'John',
    Track: 'JSON', 
    achievements: '4', 
    points: '1239'
   }
 ];
  var i;
  for(i=0; i<students.length; i++) {
     document.write (`Student: ${students[i].name} <br>`);
     document.write (`Track: ${students[i].track} <br>`);
     document.write (`Achievements: ${students[i].achievements} <br>`); 
     document.write (`Points: ${students[i].points} <br><br>`);
};


https://teamtreehouse.com/library/the-student-record-search-challenge-solution

*/



/*
5. Create a JavaScript function called constructCars. This function should take in two parameters: 
a number, and a string production number. This function should use the number input and the car 
creating function from requirement #4 to build that many car objects and store them in an array. 
Each car built with this function should be assigned the same production run from the input parameter. 
This function should return an array of car objects.
*/
 function constructCars (number, productionNum) {



 };
/*
6. Create a JavaScript function called displayAllCars that takes an array as input and does not return
 anything. This function should iterate through the array and display each element on the console.
 */

 /*
￼7. Create a JavaScript function called colorCount that takes an array as input. The function should 
search through that array looking for car objects and counting how many cars of each color there are. 
The function then runs one console log for each color, showing the count for it. For example: 
yellow: 1, red: 4, etc.
*/
