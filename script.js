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
        console.log("Clicked")
        emptyChecker();
        if (allFilled) {
            console.log("All inputs have been filled.")
        }
    })
}

signChecker();
