const ticGrid = document.querySelector('.ticGrid');

const gameFlow = () =>{
    let lameboard = 
            ['','','',
             '','','',
             '','',''];

    const addEvents = (test) =>{
        test.addEventListener("click", function (e){
            if(e.target.innerHTML != ''){ 
                alert("Please choose a square that is empty");
            }else{
            e.target.innerHTML = 'X';
            lameboard[e.target.id] = 'X';
            console.log(lameboard[e.target.id]);
            computerPlay();
            }
        })

    }
    const computerPlay = () =>{
        let choice = Math.floor(Math.random() * 9);
        let computerSquare = document.getElementById(choice);
        if(computerSquare.innerHTML !=''){
            do{
                choice = Math.floor(Math.random() * 9);
                computerSquare = document.getElementById(choice);
            }while(computerSquare.innerHTML !='')
        }
        computerSquare.innerHTML = "O";
        lameboard[choice] = "O";
        console.log(lameboard[choice])
    }
    const fillGrid = () =>{
        let i=0
        do{
            let square = document.createElement('DIV')
            square.classList.add('square');
            ticGrid.appendChild(square);
            square.setAttribute('id',i);
            i++;
            addEvents(square);
        }while(i<9)
    };
    
    return{fillGrid, lameboard}
}

const Player = (name, symbol) => {
    return{name, symbol}
}



const Julie = Player("Julie", 'x');

console.log(Julie)
const newGame = gameFlow();

window.onload = newGame.fillGrid();