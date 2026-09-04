
function myFunction() {
    document.getElementById("myButton").innerHTML ="Clicked!";
    setTimeout(function() {
        document.getElementById("myButton").innerHTML = "Press Me";
    }, 1000);
}

document.getElementById("myButton").addEventListener("click", myFunction);

