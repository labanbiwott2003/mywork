function checkPassword() {
    let password = prompt("Please enter your password:");
    if (password === "NewKenya") {
        document.getElementById("result").innerText = "VALID PASSWORD";
    } else {
        document.getElementById("result").innerText = "INVALID PASSWORD";
    }
}
