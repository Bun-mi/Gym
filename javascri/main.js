const toggleMode = document.querySelector(".tog-btn")


function toggleMod(){
    document.body.classList.toggle("darkmode");
    if(document.body.classList.contains("darkmode")){
        toggleMode.src = "/images/sun.jpg";
    } else{
        toggleMode.src = "/images/moon.jpg";
    }
}

toggleMode.addEventListener("click", toggleMod);