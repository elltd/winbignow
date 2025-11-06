
//sequence
function tb8_makeArray(n) {
    this.length = n;
    return this.length;
}
tb8_messages = new tb8_makeArray(4);
tb8_messages[0] = "WIN";
tb8_messages[1] = "BIG";
tb8_messages[2] = "NOW!!!!!!!!!!!";
tb8_messages[3] = "✧～(ゝᴗ ∂ )";
tb8_rptType = 'infinite';
tb8_rptNbr = 5;
tb8_speed = 500;
tb8_delay = 400;
var tb8_counter = 1;
var tb8_currMsg = 0;
var tb8_tekst = "";
var tb8_i = 0;
var tb8_TID = null;
function tb8_pisi() {
    tb8_tekst = tb8_tekst + tb8_messages[tb8_currMsg].substring(tb8_i, tb8_i + 1);
    document.title = tb8_tekst;
    tb8_sp = tb8_speed;
    tb8_i++;
    if (tb8_i == tb8_messages[tb8_currMsg].length) {
        tb8_currMsg++; tb8_i = 0; tb8_tekst = ""; tb8_sp = tb8_delay;
    }
    if (tb8_currMsg == tb8_messages.length) {
        if ((tb8_rptType == 'finite') && (tb8_counter == tb8_rptNbr)) {
            clearTimeout(tb8_TID);
            return;
        }
        tb8_counter++;
        tb8_currMsg = 0;
    }
    tb8_TID = setTimeout("tb8_pisi()", tb8_sp);
}
tb8_pisi()


//bling sound effect

function play() {
    var snd = new Audio("audio/bling.mp3");
    snd.play();
    snd.currentTime = 0;
}


// Make the DIV element draggable:
dragElement(document.getElementsByClassName("float-link"));

function dragElement(elmnt) {
    var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
    if (document.getElementsByClassName(elmnt.class + "body")) {
        // if present, the header is where you move the DIV from:
        document.getElementsByClassName(elmnt.class + "body").onmousedown = dragMouseDown;
    } else {
        // otherwise, move the DIV from anywhere inside the DIV:
        elmnt.onmousedown = dragMouseDown;
    }

    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        // get the mouse cursor position at startup:
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        // call a function whenever the cursor moves:
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        // calculate the new cursor position:
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        // set the element's new position:
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        // stop moving when mouse button is released:
        document.onmouseup = null;
        document.onmousemove = null;
    }
}

//role change
function changeRole() {
    var x = document.getElementById("role-change");
    if (x.innerHTML == "WIN BIG NOW!!!") {
        x.innerHTML = "WIN BIG LATER!!!";
    }
    else if (x.innerHTML == "WIN BIG LATER!!!") {
        x.innerHTML = "WIN BIG NEVER!!!";
    }
    else if (x.innerHTML == "WIN BIG NEVER!!!") {
        x.innerHTML = "WIN BIG SOON!!!";
    }
    else if (x.innerHTML == "WIN BIG SOON!!!") {
        x.innerHTML = "WIN BIG NOW!!!";
    }
}

//popup scrollbox

function changeContent() {
    console.log(document.getElementsByClassName('scroll-info'));

    document.getElementsByClassName('scroll-info')[0].style.backgroundColor = "#00f"
    document.getElementsByClassName('scroll-info')[1].style.backgroundColor = "rgba(0, 255, 174, 1)"
    document.getElementsByClassName('scroll-info')[2].style.backgroundColor = "rgba(255, 81, 0, 1)"
}



// get a random number between 0 and 6
//
function redirectToPage() {
    // Source - https://stackoverflow.com/questions/40456048/random-html-page-redirect
    // Posted by Umair Khan
    // Retrieved 2025-11-06, License - CC BY-SA 3.0

    var redirect = ["loser.html", "loser.html", "history.html", "loser.html", "thoughts.html", "thoughts.html", "loser.html"]

    window.location.href = redirect[Math.floor(Math.random() * 7)]
}

//poop up
function showWarning() {
    // Display a confirmation dialog
    var userConfirmed = confirm("↑↑↑ for best experience, allow audio autoplay on your browser! ✧～(ゝᴗ ∂ ) 🍀🍀🍀");

    // If the user clicks "Cancel", close the window
    if (!userConfirmed) {
        window.close(); // This may not work in all browsers due to security restrictions
        // Alternatively, you could redirect to a different page or display a message
        // window.location.href = "about:blank"; // Redirect to a blank page
    }
}

