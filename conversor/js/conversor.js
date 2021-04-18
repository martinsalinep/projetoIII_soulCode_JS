 // Aumentar Fonte
 function aumentarFonte(n) {
     console.log("clicou")
     if (n == 1) {
         document.getElementById('body').className = 'fonteGrande'
     } else
         document.getElementById('body').className = 'fontePadrao'
 }

 //Validador Numeros com Alert
 var valorInput;
 var escolha01;
 var input2 = document.getElementById('input2')


 function validador() {
     valorInput = document.getElementById('input');
     if (isNaN(valorInput.value))
         alert("Digite apenas números!")
     else if (valorInput < 0)
         alert("Digite apenas números maiores que 0!")
 }

 //Função Para Mudar Estilo da Página

 function mudarEstilo(n) {
     if (n == 1) {
         document.getElementById('item1').className = 'item2';
         document.getElementById('item2').className = 'item2';
         document.getElementById('item3').className = 'item2';
         document.getElementById('item4').className = 'item2';
         document.getElementById('botao').className = 'botaoConvert2';

     } else if (n == 2) {
         document.getElementById('item1').className = 'item1';
         document.getElementById('item2').className = 'item1';
         document.getElementById('item3').className = 'item1';
         document.getElementById('item4').className = 'item1';
         document.getElementById('botao').className = 'botaoConvert';
         document.getElementById('button2').className = 'button_conf';
     }
 }

 var option1;
 var option2;

 function update() {
     var select1 = document.getElementById('opcoes1');
     option1 = select1.options[select1.selectedIndex];
     return option1.value;
 }

 function update2() {
     var select2 = document.getElementById('opcoes2');
     option2 = select2.options[select2.selectedIndex];
     return option2.value;
 }

 function calcular(option1, option2) {
     if (option1 == 'dolarAmericano' && option2 == 'dolarAmericano') {
         input2.value = ((valorInput.value) * 1).toFixed(2);
     } else if (option1 == 'dolarAmericano' && option2 == 'dolarCanadense') {
         input2.value = ((valorInput.value) * 1.24).toFixed(2);
     } else if (option1 == 'dolarAmericano' && option2 == 'euro') {
         input2.value = ((valorInput.value) * 0.84).toFixed(2);
     } else if (option1 == 'dolarAmericano' && option2 == 'libra') {
         input2.value = ((valorInput.value) * 0.72).toFixed(2);
     } else if (option1 == 'dolarAmericano' && option2 == 'pesoAr') {
         input2.value = ((valorInput.value) * 91.13).toFixed(2);
     } else if (option1 == 'dolarAmericano' && option2 == 'realBr') {
         input2.value = ((valorInput.value) * 5.62).toFixed(2);

     } else if (option1 == 'dolarCanadense' && option2 == 'dolarAmericano') {
         input2.value = ((valorInput.value) * 0.80).toFixed(2);
     } else if (option1 == 'dolarCanadense' && option2 == 'dolarCanadense') {
         input2.value = ((valorInput.value) * 1).toFixed(2);
     } else if (option1 == 'dolarCanadense' && option2 == 'euro') {
         input2.value = ((valorInput.value) * 0.68).toFixed(2);
     } else if (option1 == 'dolarCanadense' && option2 == 'libra') {
         input2.value = ((valorInput.value) * 0.58).toFixed(2);
     } else if (option1 == 'dolarCanadense' && option2 == 'pesoAr') {
         input2.value = ((valorInput.value) * 73.23).toFixed(2);
     } else if (option1 == 'dolarCanadense' && option2 == 'realBr') {
         input2.value = ((valorInput.value) * 4.52).toFixed(2);

     } else if (option1 == 'euro' && option2 == 'dolarAmericano') {
         input2.value = ((valorInput.value) * 1.19).toFixed(2);
     } else if (option1 == 'euro' && option2 == 'dolarCanadense') {
         input2.value = ((valorInput.value) * 1.48).toFixed(2);
     } else if (option1 == 'euro' && option2 == 'euro') {
         input2.value = ((valorInput.value) * 1).toFixed(2);
     } else if (option1 == 'euro' && option2 == 'libra') {
         input2.value = ((valorInput.value) * 0.86).toFixed(2);
     } else if (option1 == 'euro' && option2 == 'pesoAr') {
         input2.value = ((valorInput.value) * 108.81).toFixed(2);
     } else if (option1 == 'euro' && option2 == 'realBr') {
         input2.value = ((valorInput.value) * 6.65).toFixed(2);

     } else if (option1 == 'libra' && option2 == 'dolarAmericano') {
         input2.value = ((valorInput.value) * 1.39).toFixed(2);
     } else if (option1 == 'libra' && option2 == 'dolarCanadense') {
         input2.value = ((valorInput.value) * 1.74).toFixed(2);
     } else if (option1 == 'libra' && option2 == 'euro') {
         input2.value = ((valorInput.value) * 1.17).toFixed(2);
     } else if (option1 == 'libra' && option2 == 'libra') {
         input2.value = ((valorInput.value) * 1).toFixed(2);
     } else if (option1 == 'libra' && option2 == 'pesoAr') {
         input2.value = ((valorInput.value) * 127.18).toFixed(2);
     } else if (option1 == 'libra' && option2 == 'realBr') {
         input2.value = ((valorInput.value) * 7.77).toFixed(2);

     } else if (option1 == 'pesoAr' && option2 == 'dolarAmericano') {
         input2.value = ((valorInput.value) * 0.011).toFixed(2);
     } else if (option1 == 'pesoAr' && option2 == 'dolarCanadense') {
         input2.value = ((valorInput.value) * 0.014).toFixed(2);
     } else if (option1 == 'pesoAr' && option2 == 'euro') {
         input2.value = ((valorInput.value) * 0.0092).toFixed(2);
     } else if (option1 == 'pesoAr' && option2 == 'libra') {
         input2.value = ((valorInput.value) * 0.0079).toFixed(2);
     } else if (option1 == 'pesoAr' && option2 == 'pesoAr') {
         input2.value = ((valorInput.value) * 1).toFixed(2);
     } else if (option1 == 'pesoAr' && option2 == 'realBr') {
         input2.value = ((valorInput.value) * 0.061).toFixed(2);

     } else if (option1 == 'realBr' && option2 == 'dolarAmericano') {
         input2.value = ((valorInput.value) * 0.18).toFixed(2);
     } else if (option1 == 'realBr' && option2 == 'dolarCanadense') {
         input2.value = ((valorInput.value) * 0.22).toFixed(2);
     } else if (option1 == 'realBr' && option2 == 'euro') {
         input2.value = ((valorInput.value) * 0.15).toFixed(2);
     } else if (option1 == 'realBr' && option2 == 'libra') {
         input2.value = ((valorInput.value) * 0.13).toFixed(2);
     } else if (option1 == 'realBr' && option2 == 'pesoAr') {
         input2.value = ((valorInput.value) * 16.41).toFixed(2);
     } else if (option1 == 'realBr' && option2 == 'realBr') {
         input2.value = ((valorInput.value) * 1).toFixed(2);
     }

 }