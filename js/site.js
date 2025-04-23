// get message that was entered
function getValues() {
    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.add('invisible');
    //find the input id="msgInput" Element
    let inputElement = document.getElementById('msgInput');

    //get what the user typed out of the <input />
    let userString = inputElement.value;


    // palindrome check the message
    let palString = checkForPalindrome(userString);


    displayResults(palString);


}

//check the message
function checkForPalindrome(message) {
    message = message.replace(/[ \p{P}]/gu, '').toLowerCase();
    let palWord = '';

    for (let i = message.length - 1; i >= 0; i -= 1) {

        let char = message[i];

        palWord = palWord + char;
    }

    if (message == palWord) {
        return true;
    } else {
        return false;

    }



}

function displayResults(checkedMessage) {
    let paragraphTag = document.getElementById('alertMsg');
    paragraphTag.innerHTML = `Your Palindrome is: <b>${checkedMessage}`;

    let alertDiv = document.getElementById('alertDiv');
    alertDiv.classList.remove('invisible');

}