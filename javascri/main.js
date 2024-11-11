const toggleMode = document.querySelector(".tog-btn")


function toggleMod(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        toggleMode.querySelector(".dark").style.display = "none";
        toggleMode.querySelector(".light").style.display = "block";
    } else{
        toggleMode.querySelector(".dark").style.display = "block";
        toggleMode.querySelector(".light").style.display = "none";
    }
}

toggleMode.addEventListener("click", toggleMod);