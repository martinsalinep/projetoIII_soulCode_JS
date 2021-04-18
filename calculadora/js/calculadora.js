// Aumentar Fonte 

function aumentarFonte(n) {
    console.log("clicou")
    if (n == 1) {
        document.getElementById('body').className = 'fonteGrande'
    } else
        document.getElementById('body').className = 'fontePadrao'
}
var displaySimples = document.getElementById('displaySimples')
var subDisplaySimples = document.getElementById('subDisplaySimples')
var displayCientifica = document.getElementById('displayCientifica')
var subDisplayCientifica = document.getElementById('subDisplayCientifica')
var operador = 0
var num = 0
var num1 = 0
var num2 = 0

/* Calculadora Simples */

function limpaDisplaySimples() {
    displaySimples.value = ''
    subDisplaySimples.value = ''
}

function mostraDisplaySimples(tipo, input) {

    if (tipo == num) {
        displaySimples.value += input
    } else if (tipo == operador) {
        var operador = document.getElementById('displaySimples').value
        displaySimples.value += input.value
    }
    num2 = parseFloat(displaySimples.value)
}

function operacaoSimples(input) {
    num1 = parseFloat(displaySimples.value)
    operador = input.value

    subDisplaySimples.value = num1 + operador

    displaySimples.value = ''
}

function igualSimples() {

    switch (operador) {
        case '+':
            subDisplaySimples.value = num1 + "+" + num2;
            return displaySimples.value = num1 + num2
            break;
        case '-':
            subDisplaySimples.value = num1 + "-" + num2;
            return displaySimples.value = num1 - num2
            break;
        case '*':
            subDisplaySimples.value = num1 + "*" + num2;
            return displaySimples.value = num1 * num2
            break;
        case '/':
            subDisplaySimples.value = num1 + "/" + num2;
            return displaySimples.value = num1 / num2
            break;
        case '%':
            subDisplaySimples.value = num1 + "*" + (num2 / 100);
            return displaySimples.value = num1 * (num2 / 100)
            break;
    }
}

/* Calculadora científica */

var displayCientifica = document.getElementById('displayCientifica')
var subDisplayCientifica = document.getElementById('subDisplayCientifica')

function limpaDisplayCientifica() {
    displayCientifica.value = ''
    subDisplayCientifica.value = ''
}

function mostraDisplayCientifica(tipo, input) {

    if (tipo == num) {
        displayCientifica.value += input
    } else if (tipo == operador) {
        var operador = document.getElementById('displayCientifica').value
        displayCientifica.value += input.value
    }
    num2 = parseFloat(displayCientifica.value)
}

function operacaoCientifica(input) {
    num1 = parseFloat(displayCientifica.value)
    operador = input.value

    subDisplayCientifica.value = num1 + operador

    displayCientifica.value = ''
}

function igualCientifica() {

    switch (operador) {
        case '+':
            subDisplayCientifica.value = num1 + "+" + num2;
            return displayCientifica.value = num1 + num2
            break;
        case '-':
            subDisplayCientifica.value = num1 + "-" + num2;
            return displayCientifica.value = num1 - num2
            break;
        case '*':
            subDisplayCientifica.value = num1 + "*" + num2;
            return displayCientifica.value = num1 * num2
            break;
        case '/':
            subDisplayCientifica.value = num1 + "/" + num2;
            return displayCientifica.value = num1 / num2
            break;
        case '%':
            subDisplayCientifica.value = num1 + "*" + (num2 / 100);
            return displayCientifica.value = num1 * (num2 / 100)
            break;
        case 'x²':
            subDisplayCientifica.value = num1 + '**' + 2;
            return displayCientifica.value = num1 ** 2
            break;
        case 'x³':
            subDisplayCientifica.value = num1 + '**' + 3;
            return displayCientifica.value = num1 ** 3
            break;
        case '√':
            subDisplayCientifica.value = "√" + num1;
            return displayCientifica.value = Math.sqrt(num1);
            break;
    }
}

/* Função invisível */

var esconde1 = document.getElementById('calcSimples');
var esconde2 = document.getElementById('calcCientifica');

function habilitarCalcSimples() {

    esconde1.style.pointerEvents = '';
    esconde2.style.pointerEvents = 'none';
    displayCientifica.value = "Desabilitada"
    displaySimples.value = ""
}

function habilitarCalcCientifica() {

    esconde2.style.pointerEvents = '';
    esconde1.style.pointerEvents = 'none';
    displayCientifica.value = ""
    displaySimples.value = "Desabilitada"

}
// Mudar Estilo da Página
function mudarEstilo(n) {
    if (n == 1) {
        document.getElementById('item1').className = 'item2';
        document.getElementById('item2').className = 'item2';
        document.getElementById('item3').className = 'item2';
        document.getElementById('item4').className = 'item2';
        document.getElementById('botaoS').className = 'botaoConvert2';
        document.getElementById('botaoC').className = 'botaoConvert2';

    } else if (n == 2) {
        document.getElementById('item1').className = 'item1';
        document.getElementById('item2').className = 'item1';
        document.getElementById('item3').className = 'item1';
        document.getElementById('item4').className = 'item1';
        document.getElementById('botaoS').className = 'botaoSelecionar';
        document.getElementById('botaoC').className = 'botaoSelecionar';
    }
}