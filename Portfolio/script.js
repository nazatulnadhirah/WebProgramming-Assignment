
//pop up message at home
if (window.location.pathname.includes("index.html")) {
  alert("Welcome to naza portfolio website!");
}

//button show and hide
function toggleProjectDetails() {
    var details = document.getElementById("project-details");
    if (details.style.display === "none") {
        details.style.display = "block"; // Shows full content (including link)
    } else {
        details.style.display = "none"; // Hides everything
    }
}

function toggleProjectDetails2() {
    var details = document.getElementById("project-details-2");
    details.style.display = (details.style.display === "none") ? "block" : "none";
}

function toggleProjectDetails3() {
    var details = document.getElementById("project-details-3");
    details.style.display = (details.style.display === "none") ? "block" : "none";
}

function toggleProjectDetails4() {
    var details = document.getElementById("project-details-4");
    details.style.display = (details.style.display === "none") ? "block" : "none";
}

