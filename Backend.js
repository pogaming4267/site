const socket = new WebSocket(
    "wss://explain-lucia-flavor-indicates.trycloudflare.com"
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