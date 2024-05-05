async function fetchAlphabet(alphabetType) {
    try {
        const response = await fetch('nc.json'); // Fetch the combined JSON file
        if (!response.ok) {
            throw new Error(`Failed to fetch nc.json: ${response.status} ${response.statusText}`);
        }
        const data = await response.json();
        return data[alphabetType]; // Access the desired alphabet object based on the type
    } catch (error) {
        console.error('Error fetching alphabet:', error);
        return {};
    }
}

$(document).ready(function() {
    // Event listener for Generate button
    $('#generateButton').click(function() {
        generatePhonetic();
    });

    // Event listener for Clear List button
    $('#clearListButton').click(function() {
        $('#outputList').empty();
    });
});

async function generatePhonetic() {
    const inputText = $('#textInput').val().toUpperCase();
    const outputList = $('#outputList');
    const outputKebabCase = $('#outputKebabCase').prop('checked');
    const useNatoAlphabet = $('#useNatoAlphabet').prop('checked');

    const alphabetType = useNatoAlphabet ? 'nato' : 'civilian';
    const phoneticAlphabet = await fetchAlphabet(alphabetType); // Fetch the desired alphabet object

    let phoneticList = '';

    for (let i = 0; i < inputText.length; i++) {
        const letter = inputText[i];
        const phoneticEquivalent = phoneticAlphabet[letter] ? phoneticAlphabet[letter] : `Not Available (${letter})`;
        phoneticList += `<li>${outputKebabCase ? '-' : ''}${phoneticEquivalent}${outputKebabCase ? '-' : ''}</li>`;
    }

    outputList.html(phoneticList);
}
