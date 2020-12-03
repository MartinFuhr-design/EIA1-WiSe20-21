// Array Drumpad

var sound = [];
sound[0] = new Audio('A.mp3');
sound[1] = new Audio('C.mp3');
sound[2] = new Audio('F.mp3');
sound[3] = new Audio('G.mp3');
sound[4] = new Audio('hihat.mp3');
sound[5] = new Audio('kick.mp3');
sound[6] = new Audio('laugh-1.mp3');
sound[7] = new Audio('laugh-2.mp3');
sound[8] = new Audio('snare.mp3');

//Funktion playSample

function playSample(button:number){
    sound[button].play();
}

//Eventlistener

document.getElementById('button1').addEventListener('click', function() { playSample(0)
});

document.getElementById('button2').addEventListener('click', function() { playSample(1)
});

document.getElementById('button3').addEventListener('click', function() { playSample(2)
});

document.getElementById('button4').addEventListener('click', function() { playSample(3)
});

document.getElementById('button5').addEventListener('click', function() { playSample(4)
});

document.getElementById('button6').addEventListener('click', function() { playSample(5)
});

document.getElementById('button7').addEventListener('click', function() { playSample(6)
});

document.getElementById('button8').addEventListener('click', function() { playSample(7)
});

document.getElementById('button9').addEventListener('click', function() { playSample(8)
});

// Drum Machine 
function PlayButton(hihat: number, kick: number, snare: number){
    setInterval(function(){
        playSample(hihat);
        playSample(kick);
        playSample(snare);
    },500);
}

document.getElementById('playbutton').addEventListener('click', function(){
    PlayButton(4,5,8)
})