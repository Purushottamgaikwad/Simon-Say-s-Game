let btncontainer = document.querySelector(".btn-container");
let btn = document.querySelectorAll(".btn");

let startbtn = document.querySelector(".startbtn");
let red = document.querySelector(".red");
let yellow = document.querySelector(".yellow");
let green = document.querySelector(".green");
let blue = document.querySelector(".blue");
let level = document.querySelector("h2");
let seq = [];
let userseq = [];
let start = false;

function btnflash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250)
}


startbtn.addEventListener("click", function (event) {
    if (start == false) {   
        console.log("game started");
        start = true;
        startbtn.innerText="Started"
        level.innerText="level 1";
        seq = [];
        userseq = [];
        logic();
        btncontainer.addEventListener("click", clickhandaler);
    }

})


function clickhandaler(event) {
    
    if (event.target.innerText == 1 || event.target.innerText == 2 || event.target.innerText == 3 || event.target.innerText == 4) {
        userseq.push(parseInt(event.target.innerText));
        btnflash(event.target);
        fun();
        // console.log("game sequence ", seq);
        // console.log("user sequence ", userseq);
    }
}




function fun() {
    // if(userseq.length === seq.length){

    for (let i = 0; i < userseq.length; i++) {
        if (seq[i] !== userseq[i]) {
            console.log("Game Ended");
            start = false;
            level.innerText=`your score = ${seq.length -1} \n `;
            startbtn.innerText=`restart`;
            btncontainer.removeEventListener("click", clickhandaler);
            document.querySelector("body").style.backgroundColor = "red";
            setTimeout(function(){            
                document.querySelector("body").style.backgroundColor = "antiquewhite";
            },150);
            
            return;

            
        } 
    }

    if(userseq.length === seq.length){
        userseq = [];
        level.innerText=`level ${seq.length +1}`;
        setTimeout(logic ,1000);
    }

}

function logic() {
    let randomNumber = Math.floor(Math.random() * 4) + 1;
    seq.push(randomNumber);
    console.log(seq);
    //  console.log(randomNumber);

    if (randomNumber == 1) {

        btnflash(red);
    } else if (randomNumber == 2) {

        btnflash(green);

    } else if (randomNumber == 3) {

        btnflash(blue);
    }
    else if (randomNumber == 4) {

        btnflash(yellow);
    }
}
