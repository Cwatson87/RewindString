// displays a message to the user
function getString() {
    //Get the user's input
    let userString = document.getElementById("userString").value
    //Version 2 - Test the user's input for length

    //Reverse the user's input - this is a separate function
    let revString = reverseString(userString)

    //Display the result
    displayString(revString);
}

function reverseString(userString) {
    let startValue = userString.length - 1;
    let endValue = 0;

    let revString = "";

    //In a decremented for loop the startValue must be higher than the endValue
    for (let i = startValue; i >= endValue; i--) {
        revString += userString[i];
    };

    return revString

}

function displayString(revString) {
    let output = document.getElementById("results")

    output.innerHTML = revString;

}
