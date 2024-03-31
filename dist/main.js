(()=>{"use strict";const e=document.querySelector("#content"),t=document.querySelector("#content");function n(e,t,n){let i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("id",`${n}`),i.innerHTML=`${t}`,e.appendChild(i)}function i(e,t,n,i){let a=document.createElement("button");a.setAttribute("type","button"),a.setAttribute("id",`${n}`),a.innerHTML=`${t}`,a.setAttribute("style",`background: no-repeat center/100%\n                                        linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)),\n                                        url(${i});\n                                        background-size: 100% 100%;\n                                        width: 100%;\n                                        `),e.appendChild(a)}const a=document.querySelector("#content"),o=document.querySelector("#content");function r(e){document.querySelectorAll(".header button").forEach((e=>{e.removeAttribute("class")})),document.querySelector(`.header button#${e}`).setAttribute("class","selected")}function s(s){o.replaceChildren(),"about"===s?(function(){let t=document.createElement("div");t.setAttribute("class","about");let n=document.createElement("div");n.setAttribute("class","image");let i=document.createElement("img");i.setAttribute("class","profile-picture"),i.setAttribute("src","./images/profile-picture.jpg"),i.setAttribute("alt","Profile Picture"),n.appendChild(i),t.appendChild(n);let a=document.createElement("div");a.setAttribute("class","text");let o=document.createElement("h2");o.innerHTML="About Me",a.appendChild(o);let r=document.createElement("p");r.innerHTML="Welcome to my page! I am a student enrolled in McGill University studying Software Engineering.\n    I enjoy playing all sorts of video games, which brought about my passion for programming.\n    I hope to be able to transfer this passion to the industry.",a.appendChild(r),t.appendChild(a),e.appendChild(t)}(),r("about-button")):"projects"===s?(function(){let e=document.createElement("div");e.setAttribute("class","popup-container");let a=document.createElement("div");a.setAttribute("class","projects text");let o=document.createElement("div");o.setAttribute("class","projects text");let r=document.createElement("h2");r.innerHTML="Games",o.appendChild(r);let s=document.createElement("p");s.innerHTML='\n                    Any games I have worked on can be found on <a href="https://pokerdf.itch.io/">itch.io</a>.\n                    ',o.appendChild(s);let l=document.createElement("div");l.setAttribute("class","projects-list"),i(l,"Otter Dive","otterdive","images/otterdive.png"),i(l,"Offshore","offshore","images/offshore.png"),i(l,"Greed","greed","images/greed.png"),i(l,"Octopus Quest","octopusquest","images/octopusquest.png"),o.appendChild(l);let c=document.createElement("h2");c.innerHTML="Projects",a.appendChild(c);let d=document.createElement("p");d.innerHTML='\n    <br>Any front-end based projects I work on can be found here, but most of my back-end work can be found on \n    <a href="https://github.com/arColm">github</a>.',a.appendChild(d);let p=document.createElement("div");p.setAttribute("class","projects-list"),n(p,"JavaScript Mini Projects","jsminiprojects"),n(p,"Todo List","todo-list"),n(p,"Battleship","battleship"),n(p,"Memory Game","memory-game"),a.appendChild(p);let u=document.createElement("div");u.setAttribute("class","popup"),a.appendChild(u);let m=document.createElement("div");m.setAttribute("class","popup-box");let h=document.createElement("button");h.innerHTML="X",h.setAttribute("type","button"),h.setAttribute("id","close-popup"),m.appendChild(h);let g=document.createElement("h2");m.appendChild(g);let b=document.createElement("p");m.appendChild(b),e.appendChild(o),e.appendChild(m),e.appendChild(a),t.appendChild(e),function(){let e=document.querySelectorAll("#content button"),t=document.querySelector(".popup"),n=document.querySelector(".popup-box"),i=document.querySelector(".popup-box h2"),a=document.querySelector(".popup-box p"),o=document.querySelector("#close-popup");console.log(e),e.forEach((e=>{e.addEventListener("click",(o=>{switch(t.style.zIndex="5",t.style.opacity="0.5",n.style.zIndex="6",n.style.visibility="visible",e.getAttribute("id")){case"offshore":i.innerHTML="Offshore",a.innerHTML='A 2D Platforming game made in Unity and C# for\n                                                <a href="https://itch.io/jam/mini-jam-153-fishing"> Mini Jam 153 </a>.\n                                                Worked with artist\n                                                <a href="https://linktr.ee/gisellepe"> @elsidraws </a>.\n                                                It achieved rank 17 out of 234 entries, and a significant reason for why the game did not rank\n                                                higher was because the learning curve was too sharp, making players either move on to another game in the\n                                                jam and quit, or struggle in the first 2 screens for around 30 minutes. This was a great learning experience\n                                                for level design, as well as everything else I was responsible for as a programmer, especially as it was\n                                                my first time working with someone else on a game.\n                                                The game can be found\n                                                <a href="https://pokerdf.itch.io/offshore"> here </a>.';break;case"otterdive":i.innerHTML="Otter Dive",a.innerHTML='A 2D Platforming game made in Unity and C# for\n                                                an intra-university GameDev club game jam.\n                                                For this game I focused on utilizing newer techniques such as deferred rendering and\n                                                more complicated raycast techniques to detect collision.\n                                                The game can be found\n                                                <a href="https://pokerdf.itch.io/otter-dive"> here </a>.';break;case"greed":i.innerHTML="Greed",a.innerHTML='A boss rush game made in Unity and C# for\n                                                <a href="https://itch.io/jam/boss-rush-jam-2024"> Boss Rush Game Jam </a>.\n                                                This game had a relatively large scale to my previous game Octopus Quest\n                                                and was my first game jam experience. It ranked 136 out of 398 entries, which\n                                                was actually very high, given that I did not have any audio or music which gave me a \n                                                default 0 for that category, and that all the art was done by me - not an artist.\n                                                Other than those categories, I was quite happy with how the game ended up.\n                                                The game can be found\n                                                <a href="https://pokerdf.itch.io/greed"> here </a>.';break;case"octopusquest":i.innerHTML="Octopus Quest",a.innerHTML='A short game made in Unity and C#.\n                                                This was the first game I had ever created in Unity. I decided to finish it to experience how\n                                                finishing a game project would feel like. The overall polish of this game was quite low, because\n                                                I wanted to participate in the Boss Rush Game Jam 2024 to create "Greed" as soon as possible to give myself\n                                                more time. One of the biggest lessons I had learned from my friends playing the game was that the gap in\n                                                knowledge between myself as a developer and a player playing for the first time was much more significant\n                                                than I had anticipated. So, in my next few games I had attempted to reduce the starting difficulty curve\n                                                and added more tutorials. This took a while to get right because personally I enjoy difficult games, but\n                                                I would like to think that I eventually got it to work.\n                                                The game can be found\n                                                <a href="https://pokerdf.itch.io/octopus-quest"> here </a>';break;case"jsminiprojects":i.innerHTML="JavaScript Mini Projects",a.innerHTML='A collection of small javascript projects,\n                    many of which were designed for learning during the Odin Project.\n                    They can be found on my github <a href="https://github.com/arColm/javascript-miniprojects">\n                    here</a>';break;case"todo-list":i.innerHTML="Todo List",a.innerHTML='A simple todo list web app created using JavaScript. \n                    The primary purpose was to practice webpack and file organization, as well as OOP.\n                    However, I was quite happy with the result, which is why it is not considered a "mini project".\n                    It can be found <a href="./JSProjects/todo-list/index.html">here</a>.';break;case"battleship":i.innerHTML="Battleship",a.innerHTML='A simple implementation of the game battleship,\n                    except the player cannot choose where their ships go. The player plays against\n                    a computer making random moves. Mainly used to practice Test Driven Development\n                    principles. It can be found <a href="./JSProjects/battleship/index.html">here</a>.\n                    ';break;case"memory-game":i.innerHTML="Memory Game",a.innerHTML='A memory game inspired by the visual memory test in\n                    humanbenchmark.com . Utilizes React, particularly focusing on practicing React\n                    hooks and functional components. The source code can be found \n                    <a href="https://github.com/arColm/javascript-miniprojects/tree/main/memory-game/src">here</a>.\n                    ';break;default:i.innerHTML="PLACEHOLDER",a.innerHTML=""}}))})),[o,t].forEach((e=>{e.addEventListener("click",(e=>{t.style.zIndex="-2",t.style.opacity="0",n.style.zIndex="-2",n.style.visibility="hidden"}))}))}()}(),r("projects-button")):"skills-and-interests"===s&&(function(){let e=document.createElement("div");e.setAttribute("class","skills-and-interests");let t=document.createElement("div");t.setAttribute("class","skills text");let n=document.createElement("h2");n.innerHTML="Skills";let i=document.createElement("div");i.setAttribute("id","skills-content");let o=document.createElement("div");o.setAttribute("id","programming-languages"),o.innerHTML="\n    <h3>Programming Languages</h3>\n    <p>Over 5000 lines of code</p>\n    <ul>\n        <li>Java</li>\n        <li>C#</li>\n        <li>Python</li>\n    </ul>\n\n    <p>Over 1000 lines of code</p>\n    <ul>\n        <li>C</li>\n        <li>HTML & CSS</li>\n        <li>JavaScript</li>\n        <li>Bash</li>\n    </ul>",i.appendChild(o);let r=document.createElement("div");r.setAttribute("id","development-skills"),r.innerHTML="\n    <h3>Development Skills</h3>\n    <ul>\n        <li>Data Structures and Algorithms</li>\n        <li>Model-Based Programming</li>\n        <li>Unity</li>\n    </ul>",i.appendChild(r),t.appendChild(n),t.appendChild(i),e.appendChild(t);let s=document.createElement("div");s.setAttribute("class","interests text"),s.innerHTML="\n    <h2>Interests</h2>\n    <p>My greatest passion lies in video games, namely first person shooters, but I enjoy all genres.\n        I have played in 2 collegiate esports teams, for Counter Strike: Global Offensive and Valorant.\n        I do fps aim training frequently, improving myself until I get competitive high scores.\n        <br> <br>\n        Aside from video games, I also enjoy playing table tennis and badminton occasionally.\n    </p>",e.appendChild(s),a.appendChild(e)}(),r("skills-and-interests-button"))}document.querySelectorAll(".header button").forEach((e=>{e.addEventListener("click",(t=>{let n=e.getAttribute("id");switch(console.log("clicked a button"),n){case"about-button":s("about");break;case"projects-button":s("projects"),console.log("projects");break;case"skills-and-interests-button":s("skills-and-interests")}}))})),s("projects")})();