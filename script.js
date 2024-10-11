
let scr = document.querySelector(".movie-list");
let leftbtn = document.getElementById("leftBtn");
let rightbtn = document.getElementById("rightBtn");

scr.addEventListener("wheel", (e) => {
    e.preventDefault();

    if (e.deltaY !== 0) {
        scr.scrollLeft -= e.deltaY * 4
    } else if (e.deltaX !== 0) {
        scr.scrollLeft -= e.deltaX * 4;
    }
});

leftbtn.addEventListener("click", () => {
    scr.scrollLeft -= 1000;
    leftbtn.style.visibility = "hidden"
    rightbtn.style.visibility = "visible"
    leftbtn.style.transition = "400ms ease"
});


rightbtn.addEventListener("click", () => {
    scr.scrollLeft += 1000;
    rightbtn.style.visibility = "hidden"
    leftbtn.style.visibility = "visible"
    rightbtn.style.transition = "400ms ease"
    
});

document.querySelector(".exp1").addEventListener("click", () => {
    

    if (document.querySelector(".expand").style.display == "none") {
        document.querySelector(".expand").style.display = "block";
        document.querySelector(".faq").style.height = "962px"
        document.querySelector(".plus-svg").style.transform = "rotate(135deg)"
        document.querySelector(".plus-svg").style.transition = "400ms ease"
        
    } else if (document.querySelector(".expand").style.display = "block") {
        document.querySelector(".faq").style.height = "690px"
        document.querySelector(".expand").style.display = "none"; 
        document.querySelector(".plus-svg").style.transform = "rotate(-90deg)"
        document.querySelector(".plus-svg").style.transition = "400ms ease"
        
    }

});
