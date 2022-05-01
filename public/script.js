//Import db functions

function div(name) { // set active div on click
    var active = Array.from(document.getElementsByClassName("active")) // get collection of active divs
    active.forEach(function (currentdiv) {
        currentdiv.setAttribute("class", "hidden");
    })

    document.getElementById(name).setAttribute("class", "active") // show clicked div
}

function showAccountEdit() {
    accountPage = document.getElementById("account")
    accountPage.setAttribute("class", "hidden")
    accountEdit = document.getElementById("accountEdit")
    accountEdit.setAttribute("class","active")
}