let lastOperand = 0;
let operation = null;

const inputWindow = document.getElementById('inputWindow');


document.getElementById('btn_clr').addEventListener('click', function () {
    lastOperand = 0;
    operation = null;
    inputWindow.value = '';
})

document.getElementById('btn_1').addEventListener('click', function () {
    inputWindow.value += '1';
})
document.getElementById('btn_2').addEventListener('click', function () {
    inputWindow.value += '2';
})
document.getElementById('btn_3').addEventListener('click', function () {
    inputWindow.value += '3';
})
document.getElementById('btn_4').addEventListener('click', function () {
    inputWindow.value += '4';
})
document.getElementById('btn_5').addEventListener('click', function () {
    inputWindow.value += '5';
})
document.getElementById('btn_6').addEventListener('click', function () {
    inputWindow.value += '6';
})
document.getElementById('btn_7').addEventListener('click', function () {
    inputWindow.value += '7';
})
document.getElementById('btn_8').addEventListener('click', function () {
    inputWindow.value += '8';
})
document.getElementById('btn_9').addEventListener('click', function () {
    inputWindow.value += '9';
})
document.getElementById('btn_toch').addEventListener('click', function () {
    inputWindow.value += '.';
})
document.getElementById('btn_0').addEventListener('click', function () {
    inputWindow.value += '0';
})


document.getElementById('btn_plus').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'plus';
    inputWindow.value = '';
})
document.getElementById('btn_min').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'min';
    inputWindow.value = '';
})
document.getElementById('btn_um').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'um';
    inputWindow.value = '';
})
document.getElementById('btn_del').addEventListener('click', function () {
    lastOperand = parseInt(inputWindow.value);
    operation = 'del';
    inputWindow.value = '';
})

document.getElementById('btn_rav').addEventListener('click', function () {
    if (operation === 'plus') {
        const result = lastOperand + parseInt(inputWindow.value)
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }
    if (operation === 'min') {
      const result = lastOperand - parseInt(inputWindow.value)
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;  
    }
    if (operation === 'um') {
        const result = lastOperand * parseInt(inputWindow.value)
        lastOperand = 0;
        operation = null;
        inputWindow.value = result; 
    }
    if (operation === 'del') {
        const result = lastOperand / parseInt(inputWindow.value)
        lastOperand = 0;
        operation = null;
        inputWindow.value = result;
    }
})