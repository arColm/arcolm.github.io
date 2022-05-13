const buttons = document.querySelectorAll(".projects-list button");
const popup = document.querySelector(".popup")
const popupBox = document.querySelector(".popup-box");
const popupBoxHeader = document.querySelector(".popup-box h2");
const popupBoxText = document.querySelector(".popup-box p");
const closePopupBox = document.querySelector("#close-popup");


buttons.forEach(button => {
    button.addEventListener("click", e => {
        popup.style.zIndex="5";
        popup.style.opacity="0.5";
        popupBox.style.zIndex="6";
        popupBox.style.visibility="visible";

        let id = button.getAttribute("id");
        switch(id) {
            case "jsminiprojects":
                popupBoxHeader.innerHTML = "JavaScript Mini Projects";
                popupBoxText.innerHTML = `A collection of small javascript projects,
                many of which were designed for learning during the Odin Project.
                They can be found on my github <a href="https://github.com/arColm/javascript-miniprojects">
                here<a>`;
                break;
            default:
                popupBoxHeader.innerHTML = "PLACEHOLDER";
                popupBoxText.innerHTML = "";
        }
    })
})

let a = [closePopupBox,popup];
a.forEach(element => {
    element.addEventListener("click", e=> {
        popup.style.zIndex="-2";
        popup.style.opacity="0";
        
        popupBox.style.zIndex="-2";
        popupBox.style.visibility="hidden";
    })
})


