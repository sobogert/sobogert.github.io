
// Close all boxes
function closeAll() {
    abtNorm();
    projNorm();
    funNorm();
    contactNorm();
}
// Expand the about section
function abtExp() {

    projNorm();
    funNorm();
    contactNorm();
    
    var bod = document.body;
    bod.style.height = "100vh";
    bod.style.overflow = "hidden";

    var about = document.getElementById("about");
    about.style.position = "absolute";
    about.style.height = "80vh";
    about.style.top = "10vh";
    about.style.fontSize = "40px";
    about.style.lineHeight = "50px";
    about.innerHTML = "Hello, my name is Sophia Bogert." + 
        " I'm a student at the University of Southern California studying Computer Science. "
        + "I'm interested in UX/UI design and software development. This website is how I'm"
        + " learning web design. Please bear with me while it's under construction.";
}

// Idle about section
function abtNorm() {
    var bod = document.body;
    bod.style.height = "auto";
    bod.style.overflow = "auto";
    bod.style.overflowX = "hidden";

    var about = document.getElementById("about");
    about.style.position = "relative";
    about.style.height = "30vh";
    about.style.fontSize = "80px";
    about.style.lineHeight = "30vh";
    about.innerHTML = "About";
}

// Expand the project section
function projExp() {
    abtNorm();
    funNorm();
    contactNorm();

    var project = document.getElementById("projects");
    project.style.height = "100px";
    project.style.fontSize = "40px";
    project.style.lineHeight = "50px";
    project.style.paddingTop = "50px";
    project.innerHTML = "Here are some projects I've done";
}

// Idle project section
function projNorm() {
    var project = document.getElementById("projects");
    project.style.height = "30vh";
    project.style.fontSize = "80px";
    project.style.lineHeight = "30vh";
    project.style.paddingTop = "0px";
    project.innerHTML = "Projects";
}

// Expand the fun section
function funExp() {
    projNorm();
    abtNorm();
    contactNorm(); 

    var fun = document.getElementById("fun");
    fun.style.height = "150px";
    fun.style.fontSize = "40px";
    fun.style.lineHeight = "50px";
    fun.style.paddingTop = "50px";
    fun.innerHTML = "Here's what I do for fun <br>(hint: build this website) ";
}

// Idle fun section
function funNorm() {
    var fun = document.getElementById("fun");
    fun.style.height = "30vh";
    fun.style.fontSize = "80px";
    fun.style.lineHeight = "30vh";
    fun.style.paddingTop = "0px";
    fun.innerHTML = "Fun";
}

// Expand the contact section
function contactExp() {
    projNorm();
    funNorm();
    abtNorm();

    var contact = document.getElementById("contact");
    contact.style.height = "100px";
    contact.style.fontSize = "40px";
    contact.style.lineHeight = "50px";
    contact.style.paddingTop = "50px";
    contact.innerHTML = "My email is bogertsophia@gmail.com";
}

// Idle contact section
function contactNorm() {
    var contact = document.getElementById("contact");
    contact.style.height = "30vh";
    contact.style.fontSize = "80px";
    contact.style.lineHeight = "30vh";
    contact.style.paddingTop = "0px";
    contact.innerHTML = "Contact";
}
