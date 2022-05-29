const body = document.querySelector("#content");

/**
 * This function adds a project button to a list.
 * @param {*HTMLDivElement} list 
 * @param {*String} project 
 * @param {*String} projectID 
 */
function addProjectToList(list,project,projectID) {
    let projectButton = document.createElement("button");
    projectButton.setAttribute("type","button");
    projectButton.setAttribute("id",`${projectID}`);
    projectButton.innerHTML=`${project}`;
    
    list.appendChild(projectButton);
}

/**
 * This function adds an event listener to all buttons.
 */
function addClickEventToButtons() {
    let buttons = document.querySelectorAll("#content button");
    let popup = document.querySelector(".popup")
    let popupBox = document.querySelector(".popup-box");
    let popupBoxHeader = document.querySelector(".popup-box h2");
    let popupBoxText = document.querySelector(".popup-box p");
    let closePopupBox = document.querySelector("#close-popup");

    console.log(buttons);

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
}

/**
 * This function loads the projects section.
 */
function loadProjects() {
    let projectsDiv = document.createElement("div");
    projectsDiv.setAttribute("class","projects text");

    //Header
    let projectsHeader = document.createElement("h2");
    projectsHeader.innerHTML="Projects";
    projectsDiv.appendChild(projectsHeader);

    //Description of section
    let projectsText = document.createElement("p");
    projectsText.innerHTML=`Any large scale projects I work on will be here, but most of my work can be found on 
    <a href="https://github.com/arColm">github</a>.`;
    projectsDiv.appendChild(projectsText);

    //List of projects
    let projectsListDiv = document.createElement("div");
    projectsListDiv.setAttribute("class","projects-list");
    //Add all projects to the list
    addProjectToList(projectsListDiv,"JavaScript Mini Projects","jsminiprojects");
    for(let i=0;i<7;i++){
        addProjectToList(projectsListDiv,"PLACEHOLDER","");
    }
    projectsDiv.appendChild(projectsListDiv);

    //Popup Background
    let popupBackground = document.createElement("div");
    popupBackground.setAttribute("class","popup");
    projectsDiv.appendChild(popupBackground);

    //Popup Window
    let popupBox = document.createElement("div");
    popupBox.setAttribute("class","popup-box");
    //Popup Window Close Button
    let closePopupButton = document.createElement("button");
    closePopupButton.innerHTML="X";
    closePopupButton.setAttribute("type","button");
    closePopupButton.setAttribute("id","close-popup");
    popupBox.appendChild(closePopupButton);
    let popupBoxHeader = document.createElement("h2");
    popupBox.appendChild(popupBoxHeader);
    let popupBoxText = document.createElement("p");
    popupBox.appendChild(popupBoxText);

    projectsDiv.appendChild(popupBox);


    body.appendChild(projectsDiv);
    //Add function to buttons
    addClickEventToButtons();
}

export {loadProjects};