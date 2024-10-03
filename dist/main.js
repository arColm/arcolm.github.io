(()=>{"use strict";const e=document.querySelector("#content"),t=document.querySelector("#content");function n(e,t,n,a=""){let i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("id",`${n}`),i.innerHTML=`${t}`,""!=a&&i.setAttribute("style",`background: no-repeat center/100%\n            linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)),\n            url(${a});\n            \n            background-size: cover;  \n            background-position: center;\n            width: 100%;\n            `),e.appendChild(i)}function a(e,t,n,a){let i=document.createElement("button");i.setAttribute("type","button"),i.setAttribute("id",`${n}`),i.innerHTML=`${t}`,i.setAttribute("style",`background: no-repeat center/100%\n                                        linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.5)),\n                                        url(${a});\n                                        \n                                        background-size: cover;  \n                                        background-position: center;\n                                        width: 100%;\n                                        `),e.appendChild(i)}const i=document.querySelector("#content"),r=document.querySelector("#content");function o(e){document.querySelectorAll(".header button").forEach((e=>{e.removeAttribute("class")})),document.querySelector(`.header button#${e}`).setAttribute("class","selected")}function s(s){r.replaceChildren(),"about"===s?(function(){let t=document.createElement("div");t.setAttribute("class","about");let n=document.createElement("div");n.setAttribute("class","image");let a=document.createElement("img");a.setAttribute("class","profile-picture"),a.setAttribute("src","./images/profile-picture.jpg"),a.setAttribute("alt","Profile Picture"),n.appendChild(a),t.appendChild(n);let i=document.createElement("div");i.setAttribute("class","text");let r=document.createElement("h2");r.innerHTML="About Me",i.appendChild(r);let o=document.createElement("p");o.innerHTML="Welcome to my page! I am a recent graduate from McGill University with a Bachelor of Software Engineering.\n    I enjoy playing all sorts of video games, which brought about my passion for programming. <br>\n    Outside of playing video games, I also really enjoy making them.\n    Some parts of game dev I particularly enjoy are game design and engine programming, especially learning about the internals of how games work.\n    I hope to be able to transfer this passion to not only the games industry, but also the software industry in general.",i.appendChild(o),t.appendChild(i),e.appendChild(t)}(),o("about-button")):"projects"===s?(function(){let e=document.createElement("div");e.setAttribute("class","popup-container");let i=document.createElement("div");i.setAttribute("class","projects text");let r=document.createElement("div");r.setAttribute("class","projects text");let o=document.createElement("h2");o.innerHTML="Games",r.appendChild(o);let s=document.createElement("p");s.innerHTML='\n                    Any games I have worked on can be found on <a href="https://pokerdf.itch.io/">itch.io</a>.\n                    ',r.appendChild(s);let l=document.createElement("div");l.setAttribute("class","projects-list"),a(l,"abyss","abyss","images/abyss.png"),a(l,"CARDINAL","cardinal","images/cardinal.png"),a(l,"PIED PIPER","piedpiper","images/piedpiper.png"),a(l,"Otter Dive","otterdive","images/otterdive.png"),a(l,"Offshore","offshore","images/offshore.png"),a(l,"Greed","greed","images/greed.png"),a(l,"Octopus Quest","octopusquest","images/octopusquest.png"),r.appendChild(l);let d=document.createElement("h2");d.innerHTML="Projects",i.appendChild(d);let c=document.createElement("p");c.innerHTML='\n    <br>Any other projects I work on can be found here, but most of my back-end work is private or can be found on \n    <a href="https://github.com/arColm">github</a>.',i.appendChild(c);let h=document.createElement("div");h.setAttribute("class","projects-list"),n(h,"Fluid Simulation","fluid-simulation","images/fluid-simulation.png"),n(h,"Voxel Engine","voxel-engine","images/voxel-engine.png"),i.appendChild(h);let m=document.createElement("div");m.setAttribute("class","popup"),i.appendChild(m);let p=document.createElement("div");p.setAttribute("class","popup-box");let u=document.createElement("button");u.innerHTML="X",u.setAttribute("type","button"),u.setAttribute("id","close-popup");let f=document.createElement("h2");p.appendChild(f);let g=document.createElement("p");p.appendChild(g),e.appendChild(r),e.appendChild(p),e.appendChild(i),t.appendChild(e),function(){let e=document.querySelectorAll("#content button"),t=document.querySelector(".popup"),n=document.querySelector(".popup-box"),a=document.querySelector(".popup-box h2"),i=document.querySelector(".popup-box p");document.querySelector("#close-popup"),console.log(e),e.forEach((e=>{e.addEventListener("click",(r=>{switch(t.style.zIndex="5",t.style.opacity="0.5",n.style.zIndex="6",n.style.visibility="visible",e.getAttribute("id")){case"abyss":a.innerHTML='<iframe frameborder="0" src="https://itch.io/embed/2760795?bg_color=070918&amp;fg_color=ffffff&amp;link_color=3afffb&amp;border_color=353438" width="552" height="167"><a href="https://pokerdf.itch.io/abyss">abyss by arColm, elsidraws</a></iframe>',i.innerHTML='<a href="https://pokerdf.itch.io/abyss"> PLAY FOR FREE HERE </a><br>\n                    Platforming game made in 3 days using Unity and C# for\n                    <a href="https://itch.io/jam/mini-jam-160-light"> MiniJam 160 - Light </a>, with the limitation being "Speed is Key".\n                    Worked with artist <a href="https://linktr.ee/gisellepe"> @elsidraws </a>.<br><br>\n                    The game achieved rank 1 in Presentation, and rank 6 Overall. We were quite happy with the placement for presentation, and\n                    although much of it was because of the artist who drew all of the textures, I was quite happy with the particle effects and other\n                    visual effects that I contributed. The overall score was not as high as I had hoped, especially since this is one of my favorite games that I have\n                    made - but by looking at the criticisms we received, I believe it was more of a misunderstanding of the target audience in the game jam. I had\n                    attempted to make this game fairly easy, and everyone who had the chance to playtest it gave feedback that it was indeed easy. However,\n                    many people thought it was difficult, so while I hate to blame my audience, I think this is the best compromise between me wanting to\n                    make a challenging game, and a game that is easy to beat for a jam. Another significant reason for our downfall is likely due to\n                    poor tutorialization of the game, and we realized this after having some of our friends play after release, that the tutorial\n                    did not illustrate all of the mechanics very clearly.<br>\n                    My goal for this jam was to continue improving the organization and architecture of my games. In particular, I wanted to reduce the coupling between my scripts,\n                    and especially to stop myself from using a Singleton for the player, despite its convenience. To this extent I largely used events with the\n                    Observer pattern. On top of this, I wanted to continue practicing visual effects, which is can be shown in the lightning effect of the game.\n                    In the future I would have liked to experiment with implementing the lightning effect with shaders or compute shaders if possible, instead of\n                    a set of line renderers, but given the time constraint of the jam I did not have time to learn for the game. Finally, I also just\n                    wanted to improve my ability to work with someone else on a game, and I think we worked together much better this time around, finishing\n                    most of the game within 48 hours of the 72 hours alloted.<br>\n                    Overall I consider this a fairly successful game.\n                    ';break;case"cardinal":a.innerHTML='<iframe frameborder="0" src="https://itch.io/embed/2730814?border_width=0&amp;bg_color=00303b&amp;fg_color=f1f2da&amp;link_color=8c8d79&amp;border_color=333333" width="550" height="165"><a href="https://pokerdf.itch.io/cardinal">CARDINAL by arColm</a></iframe>',i.innerHTML='<a href="https://pokerdf.itch.io/cardinal"> PLAY FOR FREE HERE </a><br>\n                    Platforming game made in 3 days using Unity and C# for \n                    <a href="https://itch.io/jam/speedjam5"> SpeedJam 5</a>, with the theme being "ascend".<br>\n                    This game reached 7th place overall out of 208 entries, which was a little lower than I had wanted, but it was still a good ranking nonetheless.\n                    In this game you play as a bird trying to find its parents, while learning to fly. <br>\n                    I worked alone on this project and created all scripts, sprites and music. I used open source CC0 sound effects.\n                    The main goal of this game was to further elaborate my design process, as well as improve my visual effect skillset, which included using\n                    tweening libraries instead of Coroutines and Animations. I am quite happy with how the game looks and feels, but the difficulty remained slightly too\n                    much for some players. Additionally, some of the game design did not fit the overarching theme of the jam which was to make a speedrun game. Forcing\n                    the player to go slow at times was certainly a poor decision in this regard. Other than that, I think it was received well, and I can learn alot from\n                    the games that did better than mine.<br>\n                    ';break;case"piedpiper":a.innerHTML='<iframe frameborder="0" src="https://itch.io/embed/2643601?bg_color=15060a&amp;fg_color=ffffff&amp;link_color=5b8c7c&amp;border_color=45363a" width="552" height="167"><a href="https://pokerdf.itch.io/pied-piper">PIED PIPER by arColm</a></iframe>',i.innerHTML='\n                                            <a href="https://pokerdf.itch.io/pied-piper"> PLAY FOR FREE HERE </a>.<br>\n                                            A short puzzle game made in Unity and C#, for \n                                                <a href="https://ldjam.com/events/ludum-dare/55/pied-piper"> Ludum Dare 55</a>, with the theme being "summoning".<br>\n                                                This game achieved 3rd place overall out of around 450 entries, and 3rd place in theme. This placement was well beyond my expectations,\n                                                and I was very happy with how it turned out. <br>\n                                                In this game you play as the Pied Piper and attempt to escape a dungeon by solving puzzles using rats that you\n                                                summon with your flute.<br>\n                                                I worked alone on this project and created it over 48 hours, including all of the sprites,\n                                                sounds, music and scripts. I am quite happy with how the game performed, as it was my first\n                                                Ludum Dare submission, and was the shortest amount of time I had for a game. <br>\n                                                Additionally, the source code can be found <a href="https://github.com/arColm/ldjam-55"> here </a>.\n                                                ';break;case"offshore":a.innerHTML='<iframe frameborder="0" src="https://itch.io/embed/2559909?bg_color=242129&amp;fg_color=ffffff&amp;link_color=b6b1e6&amp;border_color=333333" width="552" height="167"><a href="https://pokerdf.itch.io/offshore">OFFSHORE by arColm, elsidraws</a></iframe>',i.innerHTML='<a href="https://pokerdf.itch.io/offshore"> PLAY FOR FREE HERE </a>.<br>\n                                                A 2D Platforming game made in Unity and C# for\n                                                <a href="https://itch.io/jam/mini-jam-153-fishing"> Mini Jam 153 </a>.\n                                                Worked with artist\n                                                <a href="https://linktr.ee/gisellepe"> @elsidraws </a>.<br>\n                                                It achieved rank 17 out of 234 entries, and a significant reason for why the game did not rank\n                                                higher was because the learning curve was too sharp, making players either move on to another game in the\n                                                jam and quit, or struggle in the first 2 screens for around 30 minutes. This was a great learning experience\n                                                for level design, as well as everything else I was responsible for as a programmer, especially as it was\n                                                my first time working with someone else on a game.<br>\n                                                ';break;case"otterdive":a.innerHTML='<iframe frameborder="0" src="https://itch.io/embed/2604578?border_width=0&amp;bg_color=000000&amp;fg_color=fcc76f&amp;link_color=fa5c5c&amp;border_color=333333" width="550" height="165"><a href="https://pokerdf.itch.io/otter-dive">Otter Dive by arColm</a></iframe>',i.innerHTML='<a href="https://pokerdf.itch.io/otter-dive"> PLAY FOR FREE HERE </a><br>\n                                                A 2D Platforming game made in Unity and C# which won 1st place in an intra-university GameDev club game jam. <br>\n                                                For this game I focused on utilizing newer techniques such as deferred rendering and\n                                                more complicated raycast techniques to detect collision.<br>\n                                                \n                                                ';break;case"greed":a.innerHTML='<iframe frameborder="0" src="https://itch.io/embed/2500208?bg_color=0f0000&amp;fg_color=f8b9b9&amp;link_color=cf9c9c&amp;border_color=3e3a3a" width="552" height="167"><a href="https://pokerdf.itch.io/greed">Greed by arColm</a></iframe>',i.innerHTML='<a href="https://pokerdf.itch.io/greed"> PLAY FOR FREE HERE </a>.<br>\n                                                A boss rush game made in Unity and C# for\n                                                <a href="https://itch.io/jam/boss-rush-jam-2024"> Boss Rush Game Jam </a>.<br>\n                                                This game had a relatively large scale to my previous game Octopus Quest\n                                                and was my first game jam experience. It ranked 136 out of 398 entries, which\n                                                was actually very high, given that I did not have any audio or music which gave me a \n                                                default 0 for that category, and that all the art was done by me - not an artist.\n                                                Other than those categories, I was quite happy with how the game ended up.<br>\n                                                ';break;case"octopusquest":a.innerHTML='<iframe frameborder="0" src="https://itch.io/embed/2476315?bg_color=0a0937&amp;fg_color=ecc0c0&amp;link_color=fa5c5c&amp;border_color=333333" width="552" height="167"><a href="https://pokerdf.itch.io/octopus-quest">Octopus Quest by arColm</a></iframe>',i.innerHTML='<a href="https://pokerdf.itch.io/octopus-quest"> PLAY FOR FREE HERE </a><br>\n                                                A short game made in Unity and C#.<br>\n                                                This was the first game I had ever created in Unity. I decided to finish it to experience how\n                                                finishing a game project would feel like. The overall polish of this game was quite low, because\n                                                I wanted to participate in the Boss Rush Game Jam 2024 to create "Greed" as soon as possible to give myself\n                                                more time. One of the biggest lessons I had learned from my friends playing the game was that the gap in\n                                                knowledge between myself as a developer and a player playing for the first time was much more significant\n                                                than I had anticipated. So, in my next few games I had attempted to reduce the starting difficulty curve\n                                                and added more tutorials. This took a while to get right because personally I enjoy difficult games, but\n                                                I would like to think that I eventually got it to work.<br>\n                                                ';break;case"jsminiprojects":a.innerHTML="JavaScript Mini Projects",i.innerHTML='A collection of small javascript projects,\n                    many of which were designed for learning during the Odin Project.\n                    They can be found on my github <a href="https://github.com/arColm/javascript-miniprojects">\n                    here</a>';break;case"todo-list":a.innerHTML="Todo List",i.innerHTML='A simple todo list web app created using JavaScript. \n                    The primary purpose was to practice webpack and file organization, as well as OOP.\n                    It can be found <a href="./JSProjects/todo-list/index.html">here</a>.';break;case"battleship":a.innerHTML="Battleship",i.innerHTML='A simple implementation of the game battleship,\n                    except the player cannot choose where their ships go. The player plays against\n                    a computer making random moves. Mainly used to practice Test Driven Development\n                    principles. It can be found <a href="./JSProjects/battleship/index.html">here</a>.\n                    ';break;case"memory-game":a.innerHTML="Memory Game",i.innerHTML='A memory game inspired by the visual memory test in\n                    humanbenchmark.com . Utilizes React, particularly focusing on practicing React\n                    hooks and functional components. The source code can be found \n                    <a href="https://github.com/arColm/javascript-miniprojects/tree/main/memory-game/src">here</a>.\n                    ';break;case"fluid-simulation":a.innerHTML="SPH Fluid Simulation",i.innerHTML='\n                    A Lagrangian fluid simulation based on SPH principles written in Unity, C# and HLSL to configure the compute shaders\n                    used to calculate the particle interactions. Features 2D and 3D simulations, with both particle and \n                    marching squares/cubes display. It also includes configurable fish, which behave as boids when submerged and\n                    can interact with the water, causing displacement. There are many parameters to alter and change, however\n                    due to the nature of SPH simulations, the particles are very sensitive to parameter change.\n\n                    A video can be found <a href="https://www.youtube.com/watch?v=NSXLsK7drIE"> here</a>.\n                    ';break;case"voxel-engine":a.innerHTML="Voxel Engine",i.innerHTML='\n                    A voxel engine written in C++ with OpenGL. It features a procedural terrain generation with details such as trees \n                    and bodies of water. <b>Multithreaded rendering</b> is also used in the project to maintain good framerates as the \n                    player generates new chunks. It also includes a day/night cycle, with transparent bodies of water. Finally, there is\n                    a lighting model involving diffuse and ambient lighting, as well as shadowmapping.\n\n                    A video can be found <a href="https://www.youtube.com/watch?v=CAGlL6t1jOQ"> here</a>.\n                    ';break;default:a.innerHTML="PLACEHOLDER",i.innerHTML=""}}))})),[t].forEach((e=>{e.addEventListener("click",(e=>{t.style.zIndex="-2",t.style.opacity="0",n.style.zIndex="-2",n.style.visibility="hidden"}))}))}()}(),o("projects-button")):"skills-and-interests"===s&&(function(){let e=document.createElement("div");e.setAttribute("class","skills-and-interests");let t=document.createElement("div");t.setAttribute("class","skills text");let n=document.createElement("h2");n.innerHTML="Skills";let a=document.createElement("div");a.setAttribute("id","skills-content");let r=document.createElement("div");r.setAttribute("id","programming-languages"),r.innerHTML="\n    <h3>Programming Languages</h3>\n    <p>Over 5000 lines of code</p>\n    <ul>\n        <li>Java</li>\n        <li>C#</li>\n        <li>C++23</li>\n        <li>Python</li>\n    </ul>\n\n    <p>Over 1000 lines of code</p>\n    <ul>\n        <li>C</li>\n        <li>HTML & CSS</li>\n        <li>JavaScript</li>\n        <li>Bash</li>\n    </ul>",a.appendChild(r);let o=document.createElement("div");o.setAttribute("id","development-skills"),o.innerHTML="\n    <h3>Development Skills</h3>\n    <ul>\n        <li>Unity</li>\n        <li>Data Structures and Algorithms</li>\n        <li>Model-Based Programming</li>\n        <li>Test Driven Development</li>\n    </ul>",a.appendChild(o),t.appendChild(n),t.appendChild(a),e.appendChild(t);let s=document.createElement("div");s.setAttribute("class","interests text"),s.innerHTML="\n    <h2>Interests</h2>\n    <p>My greatest passion lies in video games, namely first person shooters, but I enjoy all genres.\n        I have played in 2 collegiate esports teams, for Counter Strike: Global Offensive and Valorant.\n        I do fps aim training frequently, improving myself until I get competitive high scores.\n        <br> <br>\n        Aside from video games, I also enjoy playing table tennis and badminton occasionally.\n    </p>",e.appendChild(s),i.appendChild(e)}(),o("skills-and-interests-button"))}document.querySelectorAll(".header button").forEach((e=>{e.addEventListener("click",(t=>{let n=e.getAttribute("id");switch(console.log("clicked a button"),n){case"about-button":s("about");break;case"projects-button":s("projects"),console.log("projects");break;case"skills-and-interests-button":s("skills-and-interests")}}))})),s("projects")})();