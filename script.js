/*const Gameboard = {
    let gameyboard = 
    ['x','x','x',
     'x','x','x',
     'x','x','x',
    ]
};*/

const ticGrid = document.querySelector('.ticGrid');

function fillGrid(){
    let i=0
    do{
        let square = document.createElement('DIV')
        square.classList.add('square');
        ticGrid.appendChild(square);
        //square.innerHTML = "X";
        i++;
        square.setAttribute('value',i);
    }while(i<9)
};

window.onload = fillGrid();