const body = document.querySelector("#content");

/**
 * This function clears the body of the page.
 */
function clearBody() {
    body.replaceChildren();
}

/**
 * This function loads the content for the About section
 */
function loadAbout() {
    //About div
    let about = document.createElement("div");
    about.setAttribute("class","about");

    //Image div
    let imageDiv = document.createElement("div");
    imageDiv.setAttribute("class","image");

    //Image
    let image = document.createElement("img");
    image.setAttribute("class","profile-picture");
    image.setAttribute("src","./images/profile-picture.jpg");
    image.setAttribute("alt","Profile Picture");

    imageDiv.appendChild(image);
    about.appendChild(imageDiv);

    //Text
    let textDiv = document.createElement("div");
    textDiv.setAttribute("class","text");

    let header = document.createElement("h2");
    header.innerHTML="About Me";
    textDiv.appendChild(header);

    let p = document.createElement("p");
    p.innerHTML = `I am Jacob, also known as arColm, a student enrolled in McGill University studying Software Engineering.
    I enjoy playing all sorts of video games, which brought about my passion for programming.
    I hope to be able to transfer this passion to the industry.`
    textDiv.appendChild(p);

    about.appendChild(textDiv);

    body.appendChild(about);
}

/**
 * This function loads the content for the Projects section
 */
function loadProjects() {

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