
function myFunction() {
    document.getElementById("myButton").innerHTML ="Clicked!";
    socket.send('Alert');
    setTimeout(function() {
        document.getElementById("myButton").innerHTML = "Press Me";
    }, 1000);
}

document.getElementById("myButton").addEventListener("click", myFunction);
const socket = new WebSocket(
    "wss://trigger-bush-intelligent-walker.trycloudflare.com"
);

socket.onopen = function()
{
    console.log("Connected to C++!");
};

socket.onerror = function(error)
{
    console.log("WebSocket error:", error);
};

document.getElementById("myButton").onclick = function()
{
    socket.send("beep");
};
socket.onopen = function() {
    console.log('WebSocket connection established');
}

