const socket = new WebSocket(
    "wss://trigger-bush-intelligent-walker.trycloudflare.com"
);

socket.onopen = function()
{
    console.log("WebSocket connection established");
};

socket.onerror = function(error)
{
    console.log("WebSocket error:", error);
};

function myFunction()
{
    document.getElementById("myButton").innerHTML = "Clicked!";

    socket.send("Alert");

    setTimeout(function()
    {
        document.getElementById("myButton").innerHTML = "Press Me";
    }, 1000);
}

document.getElementById("myButton").addEventListener("click", myFunction);