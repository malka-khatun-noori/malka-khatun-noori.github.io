var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname){
    for(tablink of tablinks){
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}


function sendEmail(){
    Email.send({
        SecureToken : "69bd73cf-8c4a-4189-9d32-8265d235b8c4",
        To : "malka.noori.01@gmail.com",
        From : "malka.noori.01@gmail.com",
        Subject : "from "+document.getElementById("email").value,
        Body : document.getElementById("message").value,
    }).then(
      message => alert(message)
    );
}




