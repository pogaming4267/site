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
    navigator.geolocation.getCurrentPosition(function(position)
    {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
    });
    socket.send(JSON.stringify({
        command: "location",
        latitude: latitude,
        longitude: longitude
    }));

    setTimeout(function()
    {
        document.getElementById("myButton").innerHTML = "Press Me";
    }, 1000);
}
