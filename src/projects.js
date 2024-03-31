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
 * This function adds a project button to a list.
 * @param {*HTMLDivElement} list 
 * @param {*String} project 
 * @param {*String} projectID 
 */
function addGameProjectToList(list,project,projectID,imageSrc) {
    let projectButton = document.createElement("button");
    projectButton.setAttribute("type","button");
    projectButton.setAttribute("id",`${projectID}`);
    projectButton.innerHTML=`${project}`;

    projectButton.setAttribute("style",`background: no-repeat center/100%
                                        linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)),
                                        url(${imageSrc});
                                        background-size: 100% 100%;
                                        width: 100%;
                                        `);

    
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
                case "offshore":
                    popupBoxHeader.innerHTML = "Offshore";
                    popupBoxText.innerHTML = `A 2D Platforming game made in Unity and C# for
                                                <a href="https://itch.io/jam/mini-jam-153-fishing"> Mini Jam 153 </a>.
                                                Worked with artist
                                                <a href="https://linktr.ee/gisellepe"> @elsidraws </a>.
                                                It achieved rank 17 out of 234 entries, and a significant reason for why the game did not rank
                                                higher was because the learning curve was too sharp, making players either move on to another game in the
                                                jam and quit, or struggle in the first 2 screens for around 30 minutes. This was a great learning experience
                                                for level design, as well as everything else I was responsible for as a programmer, especially as it was
                                                my first time working with someone else on a game.
                                                The game can be found
                                                <a href="https://pokerdf.itch.io/offshore"> here </a>.`;
                    break;
                case "otterdive":
                    popupBoxHeader.innerHTML = "Otter Dive";
                    popupBoxText.innerHTML = `A 2D Platforming game made in Unity and C# for
                                                an intra-university GameDev club game jam.
                                                For this game I focused on utilizing newer techniques such as deferred rendering and
                                                more complicated raycast techniques to detect collision.
                                                The game can be found
                                                <a href="https://pokerdf.itch.io/otter-dive"> here </a>.`;
                    break;
                case "greed":
                    popupBoxHeader.innerHTML = "Greed";
                    popupBoxText.innerHTML = `A boss rush game made in Unity and C# for
                                                <a href="https://itch.io/jam/boss-rush-jam-2024"> Boss Rush Game Jam </a>.
                                                This game had a relatively large scale to my previous game Octopus Quest
                                                and was my first game jam experience. It ranked 136 out of 398 entries, which
                                                was actually very high, given that I did not have any audio or music which gave me a 
                                                default 0 for that category, and that all the art was done by me - not an artist.
                                                Other than those categories, I was quite happy with how the game ended up.
                                                The game can be found
                                                <a href="https://pokerdf.itch.io/greed"> here </a>.`;
                    break;
                case "octopusquest":
                    popupBoxHeader.innerHTML = "Octopus Quest";
                    popupBoxText.innerHTML = `A short game made in Unity and C#.
                                                This was the first game I had ever created in Unity. I decided to finish it to experience how
                                                finishing a game project would feel like. The overall polish of this game was quite low, because
                                                I wanted to participate in the Boss Rush Game Jam 2024 to create "Greed" as soon as possible to give myself
                                                more time. One of the biggest lessons I had learned from my friends playing the game was that the gap in
                                                knowledge between myself as a developer and a player playing for the first time was much more significant
                                                than I had anticipated. So, in my next few games I had attempted to reduce the starting difficulty curve
                                                and added more tutorials. This took a while to get right because personally I enjoy difficult games, but
                                                I would like to think that I eventually got it to work.
                                                The game can be found
                                                <a href="https://pokerdf.itch.io/octopus-quest"> here </a>`;
                    break;
                case "jsminiprojects":
                    popupBoxHeader.innerHTML = "JavaScript Mini Projects";
                    popupBoxText.innerHTML = `A collection of small javascript projects,
                    many of which were designed for learning during the Odin Project.
                    They can be found on my github <a href="https://github.com/arColm/javascript-miniprojects">
                    here</a>`;
                    break;

                case "todo-list":
                    popupBoxHeader.innerHTML = "Todo List";
                    popupBoxText.innerHTML = `A simple todo list web app created using JavaScript. 
                    The primary purpose was to practice webpack and file organization, as well as OOP.
                    However, I was quite happy with the result, which is why it is not considered a "mini project".
                    It can be found <a href="./JSProjects/todo-list/index.html">here</a>.`;
                    break;

                case "battleship":
                    popupBoxHeader.innerHTML = "Battleship";
                    popupBoxText.innerHTML = `A simple implementation of the game battleship,
                    except the player cannot choose where their ships go. The player plays against
                    a computer making random moves. Mainly used to practice Test Driven Development
                    principles. It can be found <a href="./JSProjects/battleship/index.html">here</a>.
                    `;
                    break;

                case "memory-game":
                    popupBoxHeader.innerHTML = "Memory Game";
                    popupBoxText.innerHTML = `A memory game inspired by the visual memory test in
                    humanbenchmark.com . Utilizes React, particularly focusing on practicing React
                    hooks and functional components. The source code can be found 
                    <a href="https://github.com/arColm/javascript-miniprojects/tree/main/memory-game/src">here</a>.
                    `;
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
    let container = document.createElement("div");
    container.setAttribute("class","popup-container");

    let projectsDiv = document.createElement("div");
    projectsDiv.setAttribute("class","projects text");

    let gamesDiv = document.createElement("div");
    gamesDiv.setAttribute("class","projects text");

    //////////////
    // GAMES SECTION
    //////////////

    //Header
    let gamesHeader = document.createElement("h2");
    gamesHeader.innerHTML = "Games";
    gamesDiv.appendChild(gamesHeader);

    //Description of section
    let gamesText = document.createElement("p");
    gamesText.innerHTML=`
                    Any games I have worked on can be found on <a href="https://pokerdf.itch.io/">itch.io</a>.
                    `;
    gamesDiv.appendChild(gamesText);
                    

    //List of games
    let gamesListDiv = document.createElement("div");
    gamesListDiv.setAttribute("class","projects-list");
    addGameProjectToList(gamesListDiv,"Otter Dive","otterdive", "images/otterdive.png");
    addGameProjectToList(gamesListDiv,"Offshore","offshore", "images/offshore.png");
    addGameProjectToList(gamesListDiv,"Greed","greed", "images/greed.png");
    addGameProjectToList(gamesListDiv,"Octopus Quest","octopusquest", "images/octopusquest.png");

    gamesDiv.appendChild(gamesListDiv);

    //Header
    let projectsHeader = document.createElement("h2");
    projectsHeader.innerHTML="Projects";
    projectsDiv.appendChild(projectsHeader);

    //Description of section
    let projectsText = document.createElement("p");
    projectsText.innerHTML=`
    <br>Any front-end based projects I work on can be found here, but most of my back-end work can be found on 
    <a href="https://github.com/arColm">github</a>.`;
    projectsDiv.appendChild(projectsText);


    //List of projects
    let projectsListDiv = document.createElement("div");
    projectsListDiv.setAttribute("class","projects-list");
    //Add all projects to the list
    addProjectToList(projectsListDiv,"JavaScript Mini Projects","jsminiprojects","images/profile-picture.jpg");
    addProjectToList(projectsListDiv,"Todo List","todo-list");
    addProjectToList(projectsListDiv,"Battleship","battleship");
    addProjectToList(projectsListDiv,"Memory Game","memory-game");
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



    container.appendChild(gamesDiv);
    container.appendChild(popupBox);
    container.appendChild(projectsDiv);
    body.appendChild(container);
    //Add function to buttons
    addClickEventToButtons();
}

export {loadProjects};