var L08;
(function (L08) {
    // Array Drumpad
    var sound = [];
    sound[0] = new Audio("A.mp3");
    sound[1] = new Audio("C.mp3");
    sound[2] = new Audio("F.mp3");
    sound[3] = new Audio("G.mp3");
    sound[4] = new Audio("hihat.mp3");
    sound[5] = new Audio("kick.mp3");
    sound[6] = new Audio("laugh-1.mp3");
    sound[7] = new Audio("laugh-2.mp3");
    sound[8] = new Audio("snare.mp3");
    //Funktion playSample
    function playSample(button) {
        sound[button].play();
    }
    //Eventlistener
    document.getElementById("button1").addEventListener("click", function () {
        playSample(0);
        recordsample(0);
    });
    document.getElementById("button2").addEventListener("click", function () {
        playSample(1);
        recordsample(1);
    });
    document.getElementById("button3").addEventListener("click", function () {
        playSample(2);
        recordsample(2);
    });
    document.getElementById("button4").addEventListener("click", function () {
        playSample(3);
        recordsample(3);
    });
    document.getElementById("button5").addEventListener("click", function () {
        playSample(4);
        recordsample(4);
    });
    document.getElementById("button6").addEventListener("click", function () {
        playSample(5);
        recordsample(5);
    });
    document.getElementById("button7").addEventListener("click", function () {
        playSample(6);
        recordsample(6);
    });
    document.getElementById("button8").addEventListener("click", function () {
        playSample(7);
        recordsample(7);
    });
    document.getElementById("button9").addEventListener("click", function () {
        playSample(8);
        recordsample(8);
    });
    //Buttons
    var playButton = document.querySelector(".fa-play");
    var stopButton = document.querySelector(".fa-stop");
    var trashButton = document.querySelector(".fa-trash-alt");
    var recordButton = document.querySelector(".fa-microphone");
    var i = 0;
    //Play to Stop Button
    playButton.addEventListener("click", function () {
        toggleClasses(this, stopButton);
        playSchleife(true);
    });
    stopButton.addEventListener("click", function () {
        toggleClasses(this, playButton);
        playSchleife(false);
    });
    function toggleClasses(firstHTMLElement, secondHTMLElement) {
        firstHTMLElement.classList.add("playbuttonhidden");
        secondHTMLElement.classList.remove("playbuttonhidden");
    }
    //Array and Function
    var beatArray = [];
    beatArray[0] = 4;
    beatArray[1] = 5;
    beatArray[2] = 8;
    var myInterval;
    function playSchleife(b) {
        if (b == true) {
            myInterval = setInterval(function () {
                if (i < beatArray.length) {
                    playSample(beatArray[i]);
                    i++;
                }
                else {
                    i = 0;
                }
            }, 500);
        }
        else {
            clearInterval(myInterval);
        }
    }
    //Record Beat
    var booleanREc;
    function recordsample(i) {
        if (booleanREc == true) {
            beatArray.push(i);
        }
    }
    //Delete Beat
    trashButton.addEventListener("click", function () {
        beatArray.length = 0;
    });
    // Switch NotRecord to Record
    recordButton.addEventListener("click", function () {
        if (recordButton.classList.contains("inactive")) {
            recordButton.classList.remove("inactive");
            recordButton.classList.add("active");
            booleanREc = true;
        }
        else {
            recordButton.classList.remove("active");
            recordButton.classList.add("inactive");
            booleanREc = false;
        }
    });
})(L08 || (L08 = {}));
//# sourceMappingURL=script_08.js.map