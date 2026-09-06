
function myFunction() {
    document.getElementById("myButton").innerHTML ="Clicked!";
    socket.send('Alert');
    setTimeout(function() {
        document.getElementById("myButton").innerHTML = "Press Me";
    }, 1000);
}

document.getElementById("myButton").addEventListener("click", myFunction);
const socket = new WebSocket('ws://localhost:9002');
socket.onopen = function() {
    console.log('WebSocket connection established');
}

