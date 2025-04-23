// get message that was entered
function getValues() {

    //find the input id="msgInput" Element
    let inputElement = document.getElementById('msgInput');
    //get what the user typed out of the <input />
    let userString = inputElement.value;


    // palindrome check the message
    let resultObj = checkForPalindrome(userString);

    //send to display
    displayResults(resultObj);
}

//check the message
function checkForPalindrome(message) {

    normMessage = message.replace(/[ \p{P}]/gu, '').toLowerCase();

    let palWord = '';

    for (let i = normMessage.length - 1; i >= 0; i -= 1) {

        let char = normMessage[i];

        palWord = palWord + char;
    }

    let result = {
        isPalindrome: normMessage == palWord,
        reversedMessage: palWord
    };

    return result;

    /*

Types of data in functions:

    array, e.g. [1 ,2 ,3]
    strings, e.g. 'hello world'
    boolean, e.g. true or false
    number, e.g. 10
    object, e.g. 

    */
}


// display the message
function displayResults(checkedMessage) {

    let alertDiv = document.getElementById('alertDiv');

    alertDiv.classList.remove('invisible', 'alert-success', 'alert-danger');


    let heading = document.getElementById('alertHeading');

    let body = document.getElementById('alertMsg')

    if (checkedMessage.isPalindrome == true) {
        // set alertHeading text to "success"
        heading.innerHTML = 'Well Done! That <b>is</b> a Palindrome';

        // set alertMsg text to "thats a palindrome"
        body.innerHTML = `Your message reversed is: <b>${checkedMessage.reversedMessage}</b>`;

        // add the class 'alert-success' to alertDiv
        alertDiv.classList.add('alert-success');


    } else {
        // set alertHeading text to "uh oh"
        heading.innerHTML = 'Ohh No, That is <b>not</b> a Palindrome';

        // set alertMsg text to 'thats not a palindrome'
        body.innerHTML = `Your message reversed is: <b>${checkedMessage.reversedMessage}</b>`;

        // add the class 'alert-danger' to alertDiv
        alertDiv.classList.add('alert-danger');
    }
}