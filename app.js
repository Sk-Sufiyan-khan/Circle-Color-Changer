var circleBar = document.getElementById("circle")
var btnBar = document.getElementById("btn")
circle.style.backgroundColor = "red"
btnBar.style.backgroundColor = "green"

function clickBtn() {
    if (circle.style.backgroundColor == "red",btnBar.style.backgroundColor == "green") {
        circle.style.backgroundColor = "green"
        btnBar.style.backgroundColor = "red"
    } else if (circle.style.backgroundColor == "green") {
        circle.style.backgroundColor = "blue"
        btnBar.style.backgroundColor = "yellow"

    } else if (circle.style.backgroundColor == "blue") {
        circle.style.backgroundColor = "yellow"
        btnBar.style.backgroundColor = "pink"
    } else if (circle.style.backgroundColor == "yellow") {
        circle.style.backgroundColor = "pink"
        btnBar.style.backgroundColor = "grey"
    } else if (circle.style.backgroundColor == "pink") {
        circle.style.backgroundColor = "grey"
        btnBar.style.backgroundColor = "orange"
    } else if (circle.style.backgroundColor == "grey") {
        circle.style.backgroundColor = "orange"
        btnBar.style.backgroundColor = "black"
        
    }
}