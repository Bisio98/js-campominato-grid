document.getElementById('start').addEventListener('click', start);

function start() {
    const gameBox = document.getElementById('game_box');
    document.getElementById('box_game').innerHTML = "";

    let difficulty = document.getElementById("difficulty").value;
    let numOfBoxes;

    if(difficulty === 'Easy'){
        numOfBoxes = 49;
    }else if( difficulty === 'Medium'){
        numOfBoxes = 81;
    }else{
        numOfBoxes = 100;
    }

    for(let i = 1; i <= numOfBoxes; i++) {
        let divBox = document.createElement("div");

        divBox.className = "single_box";

        document.getElementById('box_game').appendChild(divBox);
        divBox.innerHTML = `<span>${i}</span>`;

        if(numOfBoxes === 49){
            divBox.classList.add('easy');
        }else if( numOfBoxes === 81){
            divBox.classList.add('medium');
        }else{
            divBox.classList.add('hard');
        }
        divBox.addEventListener('click', clickedBox);
    }
}


function clickedBox() {
    this.classList.add('active');
}
