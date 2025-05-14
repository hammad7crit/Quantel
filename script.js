let signBtn = document.querySelector(".signin");
let inputBoxes = document.querySelectorAll(".input-details");

let allFilled = true;

emptyChecker = () => {
    for (let i  = 0; i < inputBoxes.length; i++) {
        if (inputBoxes[i].value.trim() === ""){
            allFilled = false;
        } else {
            allFilled = true;
        }
    }
}

const signChecker = () => {
    signBtn.addEventListener("click", () => {
        emptyChecker();
        if (allFilled) {
            location.href = "project.html";
        }
    })
}

signChecker();
