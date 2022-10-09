var button = document.getElementsByClassName("btn");
button[0].addEventListener("click", ()=>{
    var player1 = Math.floor(Math.random()*5)+1;
    var player2 = Math.floor(Math.random()*5)+1;
    document.querySelector(".player-1").innerHTML = '<img src="/images/dice'+player1+'.png">';
    document.querySelector(".player-2").innerHTML = '<img src="/images/dice'+player2+'.png">';

    if (player1 > player2){
        document.getElementsByTagName("h1")[0].innerText = "Player 1 wins";
    }
    else if (player2 > player1){
        document.getElementsByTagName("h1")[0].innerText = " Player 2 wins";
    }
    else{
        document.getElementsByTagName("h1")[0].innerText = "Draw";
    }
})