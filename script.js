window.onload = function(){
    var seconds = 00;
    var tens = 00;
    var mins = 00;
    var Outputmins = document.getElementById("mins");
    var OutputSeconds = document.getElementById("second");
    var OutputTens = document.getElementById("tens");
    var buttonStart = document.getElementById("btn-start");
    var buttonStop = document.getElementById("btn-stop");
    var buttonReset = document.getElementById("btn-reset");
    var Interval;

    buttonStart.addEventListener('click', () => {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);  // millisecond 10 = 0.01 second
    });

    buttonStop.addEventListener('click', () => {
        clearInterval(Interval);
    });

    buttonReset.addEventListener('click', () => {
        clearInterval(Interval);
        tens = "00";
        seconds = "00";
        mins = "00";
        Outputmins.innerHTML = mins;
        OutputSeconds.innerHTML = seconds;
        OutputTens.innerHTML = tens;
    });

    function startTimer(){
        tens++;
        if(tens <= 9){  //1
            OutputTens.innerHTML = "0" + tens;
        }

        if(tens > 9){  //2
            OutputTens.innerHTML = tens;
        }

        if(tens > 99){  //3
            seconds++;
            OutputSeconds.innerHTML = "0" + seconds;
            tens = 0;
            OutputTens.innerHTML = "0" + 0;
        }

        if(seconds > 9){  //4
            OutputSeconds.innerHTML = seconds;
        }
        // code is perfect upto here change below--
        // seconds++;
        if(second <= 99){  //1
            OutputSeconds.innerHTML = "0" + seconds;
        }
        if(seconds > 59){  //2
            OutputSeconds.innerHTML = seconds;
        }
        if(seconds > 59){  //3  --add 59 of 9
            mins++;
            Outputmins.innerHTML = "0" + mins;
            seconds = 0;
            OutputSeconds.innerHTML = "0" + 0;
        }
        if(mins > 9){  //4
            Outputmins.innerHTML = mins;
        }


    }
}
