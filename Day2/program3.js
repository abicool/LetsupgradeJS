console.log("Program to search for a element in a array of strings"); 
var array = [-10, -0.20, 0.30, -40, -50]; 


var found = array.find(function (element) { 
    return element > 0; 
}); 

console.log(found); 