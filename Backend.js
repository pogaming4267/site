function test(){
    console.log("hello?")
}
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

    // Send Alert to C++
    socket.send("Alert");

    // Get the user's location
    navigator.geolocation.getCurrentPosition(
        function(position)
        {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Send location to C++
            socket.send(JSON.stringify({
                command: "location",
                latitude: latitude,
                longitude: longitude
            }));
        },

        // Location error handler
        function(error)
        {
            console.log("Could not get location:", error.message);
        }
    );

    // Change button back after 1 second
    setTimeout(function()
    {
        document.getElementById("myButton").innerHTML = "Press Me";
    }, 1000);
}
