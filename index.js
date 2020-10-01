// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log(Array.isArray(a)); // Returns False
console.log(Array.isArray(b)); // Returns True



// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
// Create a function that will multiply array a values by 2 
function multiplyArrayByTwo(inputArray){
    // Create new array that will store product values
    var productArray = new Array();
    for(i=0; i < inputArray.length; i ++) {
        // Each inputArray[i] values is multiply by 2 and store in the productArray.
        productArray.push(inputArray[i] * 2);
    }
    // Return the product array with values.
    return productArray;
}
// Expected Output - [2,4,6,8,10]
console.log(multiplyArrayByTwo(a));



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'

// Create a function that converts array of string to a string and match the output from the requirements
function converColorArrayToString(inputArray){
    // Initialize variables that will hold the output string for the different case
    var addSpaceColorString = new String;
    var addSignColorString = new String;
    var addCommaColorString = new String;
    // Loop within the String Array (colors)
    for(i=0; i < inputArray.length; i ++) {
        // Add each array values (inputArray[i]) to the String Variable (addSpaceColorString) and add " " --- CASE 1
        addSpaceColorString = addSpaceColorString+inputArray[i]+" ";
        // Add each array values (inputArray[i]) to the String Variable (addSignColorString) and add "+" --- CASE 2
        addSignColorString = addSignColorString+inputArray[i]+"+";
        // Add each array values (inputArray[i]) to the String Variable (addCommaColorString) and add "," --- CASE 3
        addCommaColorString = addCommaColorString+inputArray[i]+",";
    }
    // Since need to return 3 string variables , I store it in an array
    return [addSpaceColorString.slice(0,-1), addSignColorString.slice(0,-1), addCommaColorString.slice(0,-1)];
}
// Case 1 - 'Red Green White Black'
console.log(converColorArrayToString(colors)[0]);

// Case 2 - 'Red+Green+White+Black'
console.log(converColorArrayToString(colors)[1]);

// Case 3 - 'Red,Green,White,Black'
console.log(converColorArrayToString(colors)[2]);



// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]

// Create a function that ort the Numbers in the following array from largest to smallest. (Descending Order)
function sortArrayDescendingOrder(){
    return a.sort(
        function(a, b) {
            return b-a 
        }
        );
}
// Expected Output - [10,8,5,4,1]
console.log(sortArrayDescendingOrder(a));



// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3]; // Array Length -- 13
//TODO should output: 'a'
var maximumFrequency = 1; // Variable for maximum frequency
var counter = 0;  // Variable that store counter (number of occurency)
var item;  // Variable that store item with maximum frequency

// Create a function that will get the most frequent element in an array
function getMostFrequentElement(){
    // Select element (current element) of the array
    for (var i=0; i<a.length; i++)    
    {
            //Loop through next elements in array to compare calculate frequency/number of occurences of current element
            for (var j = i; j < a.length; j++)   
            {
                    if (a[i] == a[j])    // Compare if element occurs again in the array
                        counter++;   // Increment counter if it is TRUE
                    if (maximumFrequency < counter) // Compare counter with maximum frequency
                    {
                        maximumFrequency = counter; // if counter > maximumFrequency, store counter in maximumFrequency for upcoming elements
                        item = a[i];   // Store the current element with the most number of occurences.
                    }
            }
            counter=0;   // For the next element need to check, make counter = 0 again to startover on the second for loop.    
    }
    return item; // Return the most frequent element in the array
}
console.log(getMostFrequentElement());