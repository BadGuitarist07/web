// Frases de respuestas correctas
const correctPhrases = [
    {id: 'input1', pattern: /^watashi wa.* desu$/},
    {id: 'input2', pattern: /^anata wa.* desu$/},
    {id: 'input3', pattern: /^watashi wa.* dewa arimasen$/},
    {id: 'input4', pattern: /^watashi wa nihonjin.* desu$/},
    {id: 'input5', pattern: /^watashi wa supeinjin.* desu$/},
    {id: 'input6', pattern: /^anata wa furansujin.* dewa arimasen$/},
    {id: 'input7', pattern: /^sore wa anata no tokei.* desu ka$/},
    {id: 'input8', pattern: /^are wa watashi no terebi.* desu$/},
    {id: 'input9', pattern: /^watashi wa nihongo no gakusei.* desu$/},
    {id: 'input10', pattern: /^kore wa watashi no hon.* desu$/},
];

function validateAll () {
    correctPhrases.forEach(item => {
        validateInput(item.id, item.pattern);
    });
}

function validateInput(inputId, pattern) {
    const input = document.getElementById(inputId).value;
    const result = document.getElementById(`result${inputId.substring(5)}`);

    if (pattern.test(input.toLowerCase())) {
        result.textContent = "Correcto";
        result.style.color = "#fff";
        result.style.background = "#6bbe5a"

    } else {
        result.textContent = "Incorrecto";
        result.style.color = "#fff";
        result.style.background = "#db455e"
    }
}

