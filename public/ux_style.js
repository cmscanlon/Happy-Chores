const modal = document.getElementById("overlay");
const btn = document.getElementById("add-chore");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
}

span.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target === modal) {
        modual.style.display = "none";
    }
}