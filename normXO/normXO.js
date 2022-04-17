function again(){
    for(let i = 1; i<10; i++){
        document.getElementById(i).innerHTML = ' ';
    }
    vin='';
    document.getElementById('text').innerHTML = 'Ходит: X';
    aktivhod=0;
    draw=0;
}
var aktivhod=0,vin='',draw=0;

function hod(num){
    if(document.getElementById(num).innerHTML == ' '){
        if(aktivhod%2==0){
            document.getElementById(num).innerHTML = 'X';
            document.getElementById('text').innerHTML = 'Ходит: O';
            aktivhod++;
        } else {
            document.getElementById(num).innerHTML = 'O';
            document.getElementById('text').innerHTML = 'Ходит: X';
            aktivhod++;
        }
    }
    let one = document.getElementById('1').innerHTML, 
    two = document.getElementById('2').innerHTML, 
    three = document.getElementById('3').innerHTML, 
    four = document.getElementById('4').innerHTML, 
    five = document.getElementById('5').innerHTML,
    six = document.getElementById('6').innerHTML, 
    seven = document.getElementById('7').innerHTML,
    eigth = document.getElementById('8').innerHTML, 
    nine = document.getElementById('9').innerHTML,
    kolvoVinX = document.getElementById('kolvoVinX').innerHTML,
    kolvoVinO = document.getElementById('kolvoVinO').innerHTML,
    kolvoDraw = document.getElementById('kolvoDraw').innerHTML;
    

    if(one == two && two == three && three!=' '){ // 1 2 3
        if(three=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    if(four == five && five == six && six!=' '){ // 4 5 6
        if(six=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    if(seven == eigth && eigth == nine && nine!=' '){ // 7 8 9
        if(nine=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    if(one == four && four == seven && seven!=' '){ // 1 4 7
        if(seven=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    if(two == five && five == eigth &&  eigth!=' '){ // 2 5 8
        if(eigth=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    if(three == six && six == nine &&  nine!=' '){ // 3 6 9
        if(nine=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    if(one == five && five == nine &&  nine!=' '){ // 1 5 9
        if(nine=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    if(three == five && five == seven &&  seven!=' '){ // 3 5 7
        if(seven=='X'){
            vin='X';
            kolvoVinX++;
        } else {
            vin='O';
            kolvoVinO++;
        }
        document.getElementById('text').innerHTML='Выйграл: '+ vin;
    }
    draw=0;
    for(let i = 1; i<10; i++){
        if(document.getElementById(i).innerHTML!=' '){
            draw++;
        }
        if(draw == 9){
            document.getElementById('text').innerHTML='Ничья';
            vin='draw';
            kolvoDraw++;
        }
    }
    document.getElementById('kolvoVinX').innerHTML = kolvoVinX;
    localStorage.setItem('kolvoVinX', kolvoVinX);

    document.getElementById('kolvoVinO').innerHTML = kolvoVinO;
    localStorage.setItem('kolvoVinO', kolvoVinO);

    document.getElementById('kolvoDraw').innerHTML = kolvoDraw;
    localStorage.setItem('kolvoDraw', kolvoDraw);
}
function del(){
    localStorage.setItem('kolvoDraw', 0);
    localStorage.setItem('kolvoVinO', 0);
    localStorage.setItem('kolvoVinX', 0);
}
setInterval(function(){
    if(localStorage.getItem('kolvoVinX')==null){
        document.getElementById('kolvoVinX').innerHTML = '0';
    } else {
        document.getElementById('kolvoVinX').innerHTML = localStorage.getItem('kolvoVinX');
    }
    if(localStorage.getItem('kolvoVinO')==null){
        document.getElementById('kolvoVinO').innerHTML = '0';
    } else {
        document.getElementById('kolvoVinO').innerHTML = localStorage.getItem('kolvoVinO');
    }
    if(localStorage.getItem('kolvoDraw')==null){
        document.getElementById('kolvoDraw').innerHTML = '0';
    } else {
        document.getElementById('kolvoDraw').innerHTML = localStorage.getItem('kolvoDraw');
    }
},100)