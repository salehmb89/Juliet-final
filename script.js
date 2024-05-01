$(document).ready(function() {
    // Event listener for Generate button
    $('#generateButton').click(function() {
        generatePhonetic();
    });

    // Event listener for Clear List button
    $('#clearListButton').click(function() {
        $('#outputList').empty();
    });

    // Use Bootstrap 5 cards for your content
    $('.card').fadeIn(1000);
});

// Use JSON for NATO phonetic alphabet
const natoAlphabet = {
    "A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Echo",
    "F": "Foxtrot", "G": "Golf", "H": "Hotel", "I": "India", "J": "Juliett",
    "K": "Kilo", "L": "Lima", "M": "Mike", "N": "November", "O": "Oscar",
    "P": "Papa", "Q": "Quebec", "R": "Romeo", "S": "Sierra", "T": "Tango",
    "U": "Uniform", "V": "Victor", "W": "Whiskey", "X": "X-ray", "Y": "Yankee", "Z": "Zulu"
};

function generatePhonetic() {
    const inputText = $('#textInput').val().toUpperCase();
    const outputList = $('#outputList');
    const outputKebabCase = $('#outputKebabCase').prop('checked');

    let phoneticList = '';

    for (let i = 0; i < inputText.length; i++) {
        const letter = inputText[i];
        const phoneticEquivalent = natoAlphabet[letter] ? natoAlphabet[letter] : 'Not Available';
        phoneticList += `<li>${outputKebabCase ? '-' : ''}${phoneticEquivalent}${outputKebabCase ? '-' : ''}</li>`;
    }

    outputList.html(phoneticList);
}
