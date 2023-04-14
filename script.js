let cell = [];
let count = 0;
let container = document.getElementById("container");
let start = document.querySelector(".button1");
let restart = document.querySelector(".button2");
let resu = document.getElementById('h1');
let player1;
let player2;
let f=0;
start.addEventListener("click", () => {
    player1 = document.getElementById("player1").value;
    player2 = document.getElementById("player2").value;
    // console.log(player1);
    if (player1 != '' && player2 != '') {
        while (container.firstChild)
            container.removeChild(container.firstChild);
        Gameboard();
    }
    else
        alert("Please Enter Your Names!!");
});
restart.addEventListener("click", () => {
    while (container.firstChild)
        container.removeChild(container.firstChild);
    count = 0;
    for (let i = 1; i <= 9; i++)
        cell[i] = undefined;
    gameOver = false;
    resu.textContent = '';
    f=0;
    Gameboard();
});
gameOver = false;
function Gameboard() {
    for (let i = 1; i <= 9; i++) {
        cell = document.createElement("div");
        cell.style.cssText = `width:150px;height:150px;border:2px solid black;background-color: bisque`;
        cell.setAttribute("id", i);
        cell.setAttribute("class", "contain");
        console.log(cell.id);
        cell.addEventListener("click", () => {
            // console.log(player1);
            if (count % 2 == 0) {
                check(i, "X");
                //   display(i, "X");
            } else {
                check(i, "O");
                //   display(i, "O");
            }
            console.log(i);
        });
        container.appendChild(cell);
    }
}
Gameboard();
function player(name, marker) {
    this.name = name;
    this.marker = marker;
}
//   let player1 = new player("John", "O");
//   let player2 = new player("Tim", "X");
//   console.log(player1.name + " " + player1.marker);
//   console.log(player2.name + " " + player2.marker);
// cell.addEventListener("click", () => {
//   console.log(cell);
// });
function check(i, marker) {
    if (gameOver == true) {
        console.log("Its true");
        return;
    } else {
        if (cell[i] == undefined || cell[i] == "") {
            console.log("Success");
            cell[i] = marker;
            display(i, marker);
            count++;
        } else if(cell[i]!=undefined || cell[i]!='') {
            console.log(cell[i]);
            console.log("Already taken");
            return;
            console.log("1234");
        }
        if (
            cell[1] == cell[2] &&
            cell[2] == cell[3] &&
            cell[1] != undefined
        ) {
            console.log("Winner is :" + cell[1]);
            gameOver = true;
            f=1;
            result(cell[1]);
            return;
        }
        if (
            cell[4] == cell[5] &&
            cell[5] == cell[6] &&
            cell[4] != undefined
        ) {
            console.log("Winner is :" + cell[4]);
            gameOver = true;
            f=1;
            result(cell[4]);
            return;
        }
        if (
            cell[7] == cell[8] &&
            cell[8] == cell[9] &&
            cell[7] != undefined
        ) {
            console.log("Winner is :" + cell[7]);
            gameOver = true;
            f=1;
            result(cell[7]);
            return;
        }
        if (
            cell[1] == cell[4] &&
            cell[4] == cell[7] &&
            cell[1] != undefined
        ) {
            console.log("Winner is :" + cell[1]);
            gameOver = true;
            f=1;
            result(cell[1]);
            return;
        }
        if (
            cell[2] == cell[5] &&
            cell[5] == cell[8] &&
            cell[2] != undefined
        ) {
            console.log("Winner is :" + cell[2]);
            gameOver = true;
            f=1;
            result(cell[2]);
            return;
        }
        if (
            cell[3] == cell[6] &&
            cell[6] == cell[9] &&
            cell[3] != undefined
        ) {
            console.log("Winner is :" + cell[3]);
            gameOver = true;
            f=1;
            result(cell[3]);
            return;
        }
        if (
            cell[1] == cell[5] &&
            cell[5] == cell[9] &&
            cell[1] != undefined
        ) {
            console.log("Winner is :" + cell[1]);
            gameOver = true;
            f=1;
            result(cell[1]);
            return;
        }
        if (
            cell[3] == cell[5] &&
            cell[5] == cell[7] &&
            cell[3] != undefined
        ) {
            console.log("Winner is :" + cell[3]);
            gameOver = true;
            f=1;
            result(cell[3]);
            return;
        }
        if(count==9 && f==0)
        draw();
    }
}
function display(i, marker) {
    console.log(i, marker);
    let mark = document.createElement("p");
    mark.textContent = marker;
    let contain = document.getElementById(i);
    contain.appendChild(mark);
}
function result(winner) {
    if (winner == "X") {
        console.log(player1 + " " + "won the game");
        resu.textContent = `${player1}` + " " + "won the game";
    } else resu.textContent = `${player2}` + " " + "won the game";
}
function draw()
{
    resu.textContent="The game is draw!!";
}