
var profileName = document.getElementById('profile-name')
var request = document.getElementById('request')
var requestCounter = 2


function changeName(){
    if(profileName.innerText == "Bob Ross"){
        profileName.innerText = "Jane Doe"
        document.getElementById('jane-doe').src = "./images/jane-m.jpg"
    } else {
        profileName.innerText = "Bob Ross"
        document.getElementById('jane-doe').src = "./images/bob-ross.jpg"
    }    
}

function hide(element){
    element.classList.add('hide')
    requestCounter--
    request.innerText = requestCounter 
}

