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