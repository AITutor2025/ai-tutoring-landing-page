function getStarted() {
    alert("Redirecting to sign-up page...");
}

function watchDemo() {
    alert("Playing demo video...");
}

function toggleAnswer(element) {
    const answer = element.nextElementSibling;
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
