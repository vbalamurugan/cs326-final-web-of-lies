import * as crud from "./crud.js";

document.getElementById("submit").addEventListener("click", async (e) => {
    const email = document.getElementById("email").value;
    const passcode = document.getElementById("passcode").value;
    const loginthing = await crud.readLogin(email, passcode);

    if (loginthing.error) {
        console.log("error");
    }
    else {
        console.log("no error");
        location.href = "https://localhost:3000/client/reporterFinder.html"
    }
});