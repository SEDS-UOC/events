// The data/time we want to countdown to
var countDownDate = new Date("Oct 10, 2021 23:59:59").getTime();

// Run myfunc every second
var myfunc = setInterval(function () {

    var now = new Date().getTime();
    var timeleft = countDownDate - now;

    // Calculating the days, hours, minutes and seconds left
    var days = Math.floor(timeleft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeleft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeleft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeleft % (1000 * 60)) / 1000);

    // Result is output to the specific element
    document.getElementById("survey-days").innerHTML = days + "d :"
    document.getElementById("survey-hours").innerHTML = hours + "h :"
    document.getElementById("survey-mins").innerHTML = minutes + "m :"
    document.getElementById("survey-secs").innerHTML = seconds + "s "

    document.getElementById("poster-days").innerHTML = days + "d :"
    document.getElementById("poster-hours").innerHTML = hours + "h :"
    document.getElementById("poster-mins").innerHTML = minutes + "m :"
    document.getElementById("poster-secs").innerHTML = seconds + "s "

    // Display the message when countdown is over
    if (timeleft < 0) {
        clearInterval(myfunc);
        document.getElementById("survey-days").innerHTML = ""
        document.getElementById("survey-hours").innerHTML = ""
        document.getElementById("survey-mins").innerHTML = ""
        document.getElementById("survey-secs").innerHTML = ""
        document.getElementById("survey-end").innerHTML = "TIME IS UP!!";

        document.getElementById("poster-days").innerHTML = ""
        document.getElementById("poster-hours").innerHTML = ""
        document.getElementById("poster-mins").innerHTML = ""
        document.getElementById("poster-secs").innerHTML = ""
        document.getElementById("poster-end").innerHTML = "TIME IS UP!!";
    }
}, 1000);