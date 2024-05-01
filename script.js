// Use JSON for NATO phonetic alphabet
const natoAlphabet = {
    "A": "Alpha", "B": "Bravo", "C": "Charlie", "D": "Delta", "E": "Echo",
    "F": "Foxtrot", "G": "Golf", "H": "Hotel", "I": "India", "J": "Juliett",
    "K": "Kilo", "L": "Lima", "M": "Mike", "N": "November", "O": "Oscar",
    "P": "Papa", "Q": "Quebec", "R": "Romeo", "S": "Sierra", "T": "Tango",
    "U": "Uniform", "V": "Victor", "W": "Whiskey", "X": "X-ray", "Y": "Yankee", "Z": "Zulu"
};

$(document).ready(function() {
    // Toggle options: output in kebob-case, civilian & NATO
    $('#outputKebabCase').change(function() {
        generatePhonetic();
    });

    // Usability: ability to clear the list, text box state (keep or clear?)
    $('#clearListButton').click(function() {
        $('#outputList').empty();
    });

    $('#clearAfterGenerate').change(function() {
        const clearAfterGenerate = $(this).prop('checked');
        if (clearAfterGenerate) {
            $('#textInput').val('');
        }
    });

    // Use Bootstrap 5 cards for your content
    $('.card').fadeIn(1000);
});

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
