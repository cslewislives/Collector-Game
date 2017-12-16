$(document).ready(function () {

    initializeGame();

    var target;
    var counter;
    var wins = 0;
    var losses = 0;
    
    function Horcrux(src, name){
        this.value = getRndInteger(1, 12);
        this.src = src;
        this.nam = name;
    }

    function createHorcrux(div){
        diadem = new Horcrux("assets/images/diadem.jpg", "Ravenclaw's Diadem");
        locket = new Horcrux("assets/images/locket.jpg", "Slytherin's Locket");
        cup = new Horcrux("assets/images/cup.jpg");
        ring = new Horcrux("assets/images/ring.png");

        display = [diadem, locket, cup, ring];
        for (let i of display) {
            $(div).append("<div class='col-xs-3 col-sm-3 col-md-2 horcrux-con'><div class='img-wrapper'><img class='horcrux-img' src='" + i.src + "' data-value='" + i.value + "'></div></div>")
        }
    }

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    
    console.log(target);
    
    function initializeGame(){
        
        counter = 0;
        $(".score").html(counter);
        $(".horcruxes").empty();
        createHorcrux(".horcruxes");
        clickImg();
        target = getRndInteger(19, 120);
        $(".target").html(target);
        
    }
    
    function clickImg() {
        
        $(".horcrux-img").on("click", function() {
            $(".win-screen").html("");
            $(".lose-screen").removeClass("lose-screen").addClass("win-screen");
            var horcruxVal = $(this).attr("data-value");
            horcruxVal = parseInt(horcruxVal);
            counter += horcruxVal;
            $(".score").html(counter);
            console.log("click");
            
            if (counter === target) {
                wins++;
                $(".wins").html(wins);
                $(".win-screen").html("YOU WON!");
                initializeGame();
            } else if (counter >= target) {
                losses++;
                $(".losses").html(losses);
                $(".win-screen").removeClass("win-screen").addClass("lose-screen");
                $(".lose-screen").html("Try Again...");
                initializeGame();
            }
        })
    }

})