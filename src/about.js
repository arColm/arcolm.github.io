const body = document.querySelector("#content");

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
    p.innerHTML = `Welcome to my page! I am a recent graduate from McGill University with a Bachelor of Software Engineering.
    I enjoy playing all sorts of video games, which brought about my passion for programming. <br>
    Outside of playing video games, I also really enjoy making them.
    Some parts of game dev I particularly enjoy are game design and engine programming, especially learning about the internals of how games work.
    I hope to be able to transfer this passion to not only the games industry, but also the software industry in general.`
    textDiv.appendChild(p);

    about.appendChild(textDiv);

    body.appendChild(about);
}

export {loadAbout};