document.getElementById("menu").addEventListener("click", function () {
    if (document.getElementById("nav-list").style.display === "block") {
        document.getElementById("nav-list").style.display = "none";
    } else {
        document.getElementById("nav-list").style.display = "block";
    }
})