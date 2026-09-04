function myFunction() {
    document.getElementById("myButton").innerHTML ="Clicked!";
}
setTimeout(function() {
    document.getElementById("myButton").innerHTML = "Press Me";
}, 2000);