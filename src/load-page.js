import {loadAbout} from "./about.js";
import {loadProjects} from "./projects.js";

const body = document.querySelector("#content");

/**
 * This function clears the body of the page.
 */
function clearBody() {
    body.replaceChildren();
}

/**
 * This function loads the content for the Skills and Interests section
 */
function loadSkillsAndInterests() {

}

/**
 * This function places a cover on a button and removes other covers.
 * These covers prevent the buttons from being hovered, i.e. they are selected.
 * @param {*String} button - label of the button to place the cover over.
 */
function coverButton(button) {
    //Verify correct input



    let buttons = document.querySelectorAll(".header button");
    //Remove the selected attribute from all buttons
    buttons.forEach(button => {
        button.removeAttribute("class");
    })
    let coveredButton = document.querySelector(`.header button#${button}`);
    coveredButton.setAttribute("class","selected");
}


/**
 * This function loads a requested page's content.
 */
function loadPage(page) {
    //Clear the page
    clearBody();
    //Load content
    if(page==="about") {
        loadAbout();
        coverButton("about-button");
    } else if(page==="projects") {
        loadProjects();
        coverButton("projects-button");
    } else if(page==="skills-and-interests") {
        loadSkillsAndInterests();
        coverButton("skills-and-interests-button");
    }

}

export { loadPage };