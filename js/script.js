// Function to Get Number Information (including Invalid Input)
function getNumberInfo() {
    // Set Up Variable
    let txt = "";
    // Get the Value of the Input Field
    let num = document.getElementById("mynumber").value;
    // Check if number is valid
    if (isNaN(num) || num.toString().length == 0 || num<1 || num>200 || !Number.isInteger(Number(num))) {
        txt += `Invalid Input.  Please enter a whole number between 1 and 200.`;
    } else {
        txt += `You have entered the number ${num}. <p>`;
        txt += `The difference between the sum of the squares <p>`;
        txt += `of the first ${num} natural numbers and the <p>`;
        txt += `square of the sum is ${sumSquareDifference(num)}.`;
    }

    // Display Information in the Browser
    document.getElementById("numinfo").innerHTML = txt;
}

/*
    Function to return the difference between the sum of the squares of
    the first n natural numbers and the square of the sum
    sumSquareDifference(10) returns 2640
    sumSquareDifference(20) returns 41230
*/
function sumSquareDifference(n) {
    let sumSquares = Array(n).fill(0).map((e,i) => (i+1) ** 2).reduce((p,c) => p+c, 0);
    let sumInts = Array(n).fill(0).map((e,i) => (i+1)).reduce((p,c) => p+c, 0);
    return (sumInts**2) - sumSquares;
}