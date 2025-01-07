const body = document.querySelector("#content");

function loadSkillsAndInterests() {
    let skillsAndInterestsDiv = document.createElement("div");
    skillsAndInterestsDiv.setAttribute("class","skills-and-interests");

    //Skills
    let skillsDiv = document.createElement("div");
    skillsDiv.setAttribute("class","skills text");

    let skillsHeader = document.createElement("h2");
    skillsHeader.innerHTML = "Skills";

    let skillsContent = document.createElement("div");
    skillsContent.setAttribute("id","skills-content");

    let programmingLanguagesDiv = document.createElement("div");
    programmingLanguagesDiv.setAttribute("id","programming-languages");
    programmingLanguagesDiv.innerHTML=`
    <h3>Programming Languages</h3>
    <p>Over 5000 lines of code</p>
    <ul>
        <li>Java</li>
        <li>C#</li>
        <li>C++23</li>
        <li>Python</li>
    </ul>

    <p>Over 1000 lines of code</p>
    <ul>
        <li>GLSL</li>
        <li>Typescript</li>
        <li>C</li>
        <li>Bash</li>
    </ul>`;

    skillsContent.appendChild(programmingLanguagesDiv);

    let developmentSkillsDiv = document.createElement("div");
    developmentSkillsDiv.setAttribute("id","development-skills");
    developmentSkillsDiv.innerHTML = `
    <h3>Development Skills</h3>
    <ul>
        <li>Unity</li>
        <li>Vulkan</li>
        <li>OpenGL</li>
        <li>Data Structures and Algorithms</li>
        <li>Model-Based Programming</li>
        <li>Test Driven Development</li>
    </ul>`;

    skillsContent.appendChild(developmentSkillsDiv);

    skillsDiv.appendChild(skillsHeader);
    skillsDiv.appendChild(skillsContent);

    skillsAndInterestsDiv.appendChild(skillsDiv);

    let interestsDiv = document.createElement("div");
    interestsDiv.setAttribute("class","interests text");
    interestsDiv.innerHTML = `
    <h2>Interests</h2>
    <p>My greatest passion lies in video games, namely first person shooters, but I enjoy all genres.
        I have played in 2 collegiate esports teams, for Counter Strike: Global Offensive and Valorant.
        I do fps aim training frequently, improving myself until I get competitive high scores.
        <br> <br>
        Aside from video games, I also enjoy playing table tennis and badminton occasionally.
    </p>`;

    skillsAndInterestsDiv.appendChild(interestsDiv);





    body.appendChild(skillsAndInterestsDiv);
}

export {loadSkillsAndInterests};