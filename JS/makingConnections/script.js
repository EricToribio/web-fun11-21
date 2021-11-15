console.log("page loaded...");
var profileName = document.getElementById('profile-name')
var contact1 = document.getElementById('contactRequest1')
var request = document.getElementById('request')
var contact2 = document.getElementById('contactRequest2')
var requestCounter = 2
var connectReq
document.getElementById('jane-doe')

function changeName(){
    if(profileName.innerText == "Bob Ross"){
        profileName.innerText = "Jane Doe"
        document.getElementById('jane-doe').src = "./images/jane-m.jpg"
    } else {
        profileName.innerText = "Bob Ross"
        document.getElementById('jane-doe').src = "./images/bob-ross.jpg"

    }
    

}

function hide(){
    connectReq.classList.add('hide')
    requestCounter--
    request.innerText = requestCounter 
}

function todd(){
    connectReq = contact1
    hide()
}
function phil(){
    connectReq = contact2
    hide()

}