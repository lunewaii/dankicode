var p = document.getElementsByTagName('p');

console.log(p[0]); //diz o código daquela linha

console.log(p[1].innerHTML); //diz o que está escrito

p[2].innerHTML = 'manipulado pelo js';

//muda o nome e coloca o número i
for(var i = 0; i < p.length; i++){
    p[i].innerHTML = 'oi - ' + i;
}

for(var i = 0; i < 5; i++){
    p[0].innerHTML += i;
}