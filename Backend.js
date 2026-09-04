
function myFunction() {
    document.getElementById("myButton").innerHTML ="Clicked!";
    socket.send("beep");
}
setTimeout(function() {
    document.getElementById("myButton").innerHTML = "Press Me";
}, 2000);

const socket = new WebSocket('ws://localhost:9002');

socket.onopen = function()
{
    console.log("Connected to C++ server!");
};