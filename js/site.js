// get message that was entered
function getValues() {

    //find the input id="msgInput" Element
    let inputElement = document.getElementById('msgInput');
    //get what the user typed out of the <input />
    let userString = inputElement.value;


    // palindrome check the message
    let palString = checkForPalindrome(userString);

    //send to display
    displayResults(palString);
}

//check the message
function checkForPalindrome(message) {

    normMessage = message.replace(/[ \p{P}]/gu, '').toLowerCase();

    let palWord = '';

    for (let i = normMessage.length - 1; i >= 0; i -= 1) {

        let char = message[i];

        palWord = palWord + char;
    }

    if (normMessage == palWord) {
        return true;

    } else {
        return false;
    }
}
// display the message
function displayResults(checkedMessage) {
    // find alertDiv
    let alertDiv = document.getElementById('alertDiv');
    // remove "invisible" class
    alertDiv.classList.remove('invisible');

    // find alertHeading
    let heading = document.getElementById('alertHeading');
    // find alertmsg
    let body = document.getElementById('alertMsg')

    if (checkedMessage == true) {
        // set alertHeading text to "success"
        heading.innerText = 'Well Done!';
        // set alertMsg text to "thats a palindrome"
        body.innerHTML = 'That <b>is</b> a Palindrome!';
    } else {
        // set alertHeading text to "uh oh"
        heading.innerText = 'Ohh No';
        // set alertMsg text to 'thats not a palindrome'
        body.innerHTML = 'That is <b>not</b> a Palindrome';
    }



}