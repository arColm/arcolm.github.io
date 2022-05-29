import {loadPage} from "./load-page.js";

const buttons = document.querySelectorAll(".header button");

buttons.forEach(button => {
    button.addEventListener("click", e => {
        let buttonID = button.getAttribute("id");
        console.log("clicked a button");
        switch(buttonID) {
            case "about-button":
                loadPage("about");
                break;
            case "projects-button":
                loadPage("projects");
                console.log("projects");
                break;
            case "skills-and-interests-button":
                loadPage("skills-and-interests");
                break;
        }
    })
})





loadPage("about");