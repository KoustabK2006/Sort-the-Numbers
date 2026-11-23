let order = ["block", "1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15"];

let pattern = [["1", "2", "3", "4"],
            ["5", "6", "7", "8"],
            ["9", "10", "12", "11"],
            ["13", "14", "block", "15"]];

let temp = ["", "", "", ""];

let state = ["active", "active", "active", "active"];
let activeSliders = ["", "", "", ""];

let x = 0, y = 0;
let moves = 0;
let time = 0;
let cells = 0;
let game = false;
let win = false;

setInterval(
    function() {
        if(game == true) time++;
    },
    1000
);

function shuffle(array) {
    let currentIndex = array.length;
    let randomIndex;

    while (currentIndex > 0) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex--;
        [array[currentIndex], array[randomIndex]] = [array[randomIndex], array[currentIndex]];
    }

    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            pattern[i][j] = array[(i*4)+j];
        }
    }
}


function checkForSpace() {
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(pattern[i][j] == "block") {
                x = i; y = j;
            }
        }
    }
    if(x == 0) {
        state[2] = "inactive";
    } else {
        state[2] = "active";
    }
    if(x == 3) {
        state[1] = "inactive";
    } else {
        state[1] = "active";
    }
    if(y == 0) {
        state[3] = "inactive";
    } else {
        state[3] = "active";
    } 
    if(y == 3) {
        state[0] = "inactive";
    } else {
        state[0] = "active";
    }
}

function changeState() {
    for(let i = 0; i < 4; i++) {
        if(state[i] == "inactive") {
            document.querySelector(".arrow"+(i+1)+" a").style.color = "#00000055";
            document.querySelector(".arrow"+(i+1)).style.cursor = "not-allowed";
        } else {
            document.querySelector(".arrow"+(i+1)+" a").style.color = "#000000AA";
            document.querySelector(".arrow"+(i+1)).style.cursor = "pointer";
        }
    }
}

function arrangeBlocks() {
    let p = 0, q = 0;
    document.querySelectorAll(".number").forEach(element => {
        let classes = element.className.substring(17, element.className.length);
        if(pattern[p][q] != "block") {
            if(pattern[p][q] == undefined) {
                pattern[p][q] == "block";
            }
            element.className = "number slider num"+classes;
            element.innerHTML = pattern[p][q];
        } else {
            element.className = "number numblock";
            element.innerHTML = "";
        }

        
        q++;
        if(q == 4) {
            q = 0, p++;
        }
    });
    p = 1;
    document.querySelectorAll(".slider").forEach(element => {
        element.className = "number slider num"+p;
        p++;
    });
}

function moveBlocks(button) {
    game = true;
    switch(button) {
        case "1" : {
            pattern[x][y] = pattern[x][y+1];
            pattern[x][y+1] = "block";
        }
        break;
        case "2" : {
            pattern[x][y] = pattern[x+1][y];
            pattern[x+1][y] = "block";
        }
        break;
        case "3" : {
            pattern[x][y] = pattern[x-1][y];
            pattern[x-1][y] = "block";
        }
        break;
        case "4" : {
            pattern[x][y] = pattern[x][y-1];
            pattern[x][y-1] = "block";
        }
        break;
    }
    
    moves++;
    checkForSpace();
    changeState();
    arrangeBlocks();
    slideBlocks();
    checkForWins();
    matchedBoxes();

}

function slideBlocks() {
    if(state[0] == "active") {
        activeSliders[0] = "num"+(x*4+y+1).toString();
    } else {
        activeSliders[0] = "";
    }
    if(state[1] == "active") {
        activeSliders[1] = "num"+(x*4+y+4).toString();
    } else {
        activeSliders[1] = "";
    }
    if(state[2] == "active") {
        activeSliders[2] = "num"+(x*4+y-3).toString();
    } else {
        activeSliders[2] = "";
    }
    if(state[3] == "active") {
        activeSliders[3] = "num"+(x*4+y).toString();
    } else {
        activeSliders[3] = "";
    }
}

function checkForWins() {
    let flag = [true, true];

    let array1 = [["1", "2", "3", "4"],
            ["5", "6", "7", "8"],
            ["9", "10", "11", "12"],
            ["13", "14", "15", "block"]];
    let array2 = [["1", "2", "3", "4"],
            ["5", "6", "7", "8"],
            ["9", "10", "12", "11"],
            ["13", "14", "15", "block"]];
    
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(array1[i][j] != pattern[i][j]) {
                flag[0] = false;
            }
        }
    }
    for(let i = 0; i < 4; i++) {
        for(let j = 0; j < 4; j++) {
            if(array2[i][j] != pattern[i][j]) {
                flag[1] = false;
            }
        }
    }
    
    if(flag[0] == true || flag[1] == true) {
        console.log("User Won!\nMoves: "+moves+"\nTime : "+time);
        win = true;
        game = false;
        puzzleWin();
    }
}

function puzzleWin() {
    document.querySelectorAll(".arrows").forEach(element => {
        element.style.display = "none";
    });
    let mins = Math.floor(time/60);
    let secs = time%60;
    if(secs < 10) secs = "0" + secs;

    let perc = 0;

    if(moves >= 0 && moves <= 100) {
        perc = moves / 70;
    } else if(moves > 100 && moves <= 200) {
        perc = moves / 60;
    } else if(moves > 200 && moves <= 300) {
        perc = moves / 50;
    } else if(moves > 300 && moves <= 400) {
        perc = moves / 40;
    } else if(moves > 400 && moves <= 500) {
        perc = moves / 30;
    } else if(moves > 500 && moves <= 750) {
        perc = moves / 20;
    } else {
        perc = moves / 12;
    }
    perc = perc.toFixed(2);
    if(perc <= 0) perc = "0.01"
    if(perc > 100) perc = "100"

    document.querySelector(".holder-arrow").innerHTML = "Moves : "+moves+"<br> Time : "+time+"s";
    document.querySelector(".moves-count").innerHTML = moves;
    document.querySelector(".time-count").innerHTML = mins+":"+secs;
    document.querySelector(".top-perc").innerHTML = perc+"%";
    document.querySelector(".pop-up").style.display = "flex";

}

function matchedBoxes() {
    if(win == true) {
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                let index = (i*4)+j+1;
                try {
                    document.querySelector("#index"+index).style.color = "#22FF22CC";
                    document.querySelector("#index"+index).style.boxShadow = "inset 0px 0px 20px 0px #00FF00AA";
                    document.querySelector(".numblock").style.boxShadow = "0px 0px 0px #000";
                    document.querySelector(".fill").style.width = "32rem";
                } catch(exception) {}
            }
        }
    } else {
        let array = [["1", "2", "3", "4"],
                ["5", "6", "7", "8"],
                ["9", "10", "11", "12"],
                ["13", "14", "15", "block"]];
        cells = 0;
        for(let i = 0; i < 4; i++) {
            for(let j = 0; j < 4; j++) {
                let index = (i*4)+j+1;
                try {
                    if(pattern[i][j] == array[i][j]) {
                        document.querySelector("#index"+index).style.color = "#22FF22CC";
                        document.querySelector("#index"+index).style.boxShadow = "inset 0px 0px 20px 0px #00FF00AA";
                        cells++;
                    } else {
                        document.querySelector("#index"+index).style.color = "#000000CC";
                        document.querySelector("#index"+index).style.boxShadow = "inset 0px 0px 20px 0px #000000AA";
                        document.querySelector(".numblock").style.boxShadow = "0px 0px 0px #000";
                    }
                } catch(exception) {}
            }
        }
        document.querySelector(".fill").style.width = ((cells/15)*32)+"rem";
    }
}

document.querySelectorAll(".arrows").forEach(element => {
    element.addEventListener(
        "click",
        function() {
            let arrow = element.className.substring(12, element.className.length);
            if(state[(arrow-1)] == "active") {

                moveBlocks(arrow);

            }
        }
    );
});

document.querySelectorAll(".number").forEach(element => {
    element.addEventListener(
        "click",
        function() {
            let classes = element.className.substring(14, element.className.length);
            if(activeSliders[0] == classes) {
                moveBlocks("1");
            }
            else if(activeSliders[1] == classes) {
                moveBlocks("2");
            }
            else if(activeSliders[2] == classes) {
                moveBlocks("3");
            }
            else if(activeSliders[3] == classes) {
                moveBlocks("4");
            } else {}
        }
    );
});

window.addEventListener(
    "keypress",
    function(entries) {
        if(win == true) return;
        let btn = entries.key.toLowerCase();
        let button = "";
        
        button = (btn == "w" || btn == "8") ? ("2") : ((btn == "a" || btn == "4") ? ("1") : ((btn == "s" || btn == "2") ? ("3") : ((btn == "d" || btn == "6") ? ("4") : (""))));
        
        if(button == "1" || button == "2" || button == "3" || button == "4") {
            if(state[(button-1)] == "active") {

                moveBlocks(button);
                
            }
        }
    }
);

document.querySelector(".continue").addEventListener(
    "click",
    function() {
        document.querySelector(".pop-up").style.display = "none";
    }
);

document.querySelector(".cross").addEventListener(
    "click",
    function() {
        document.querySelector(".pop-up").style.display = "none";
    }
);

document.querySelector(".play-again").addEventListener(
    "click",
    function() {
        document.querySelector(".pop-up").style.display = "none";
        location.reload();
    }
);

document.querySelector(".loader").addEventListener(
    "click",
    function() {
        location.reload();
    }
);

shuffle(order);  
checkForSpace();
changeState();
arrangeBlocks();
slideBlocks();
checkForWins();
matchedBoxes();