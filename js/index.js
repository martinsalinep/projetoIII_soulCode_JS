//função para aumentar Fonte:
function aumentarFonte(n) {
  if (n == 1) {
    document.getElementById('body').className = 'fonteGrande';
  } else {
    document.getElementById('body').className = 'fontePadrao';
  }
}
//função para mudar Estilo:
function mudarEstilo(n) {
  if (n == 1) {
    document.getElementById('idlogoProjetos').className = 'divLogoProjetos2';
    document.getElementById('idMaiorAruhan').className = 'divMaiorEstilo2';
    document.getElementById('idMaiorWeele').className = 'divMaiorEstilo2';
    document.getElementById('idMaiorAline').className = 'divMaiorEstilo2';
    document.getElementById('calculadora').className = 'button2';
    document.getElementById('cadastro').className = 'button2';
    document.getElementById('conversor').className = 'button2';
    document.getElementById('item1').className = 'item2';
    document.getElementById('item2').className = 'item2';
    document.getElementById('item3').className = 'item2';
    document.getElementById('item4').className = 'item2';
  } else if (n == 2) {
    document.getElementById('idlogoProjetos').className = 'divLogoProjetos1';
    document.getElementById('idMaiorAruhan').className = 'divMaiorEstilo1';
    document.getElementById('idMaiorWeele').className = 'divMaiorEstilo1';
    document.getElementById('idMaiorAline').className = 'divMaiorEstilo1';
    document.getElementById('calculadora').className = 'button1';
    document.getElementById('cadastro').className = 'button1';
    document.getElementById('conversor').className = 'button1';
    document.getElementById('item1').className = 'item1';
    document.getElementById('item2').className = 'item1';
    document.getElementById('item3').className = 'item1';
    document.getElementById('item4').className = 'item1';
  }
}