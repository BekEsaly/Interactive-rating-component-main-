const ratingState=document.querySelector(".rating__state");
const thankYou=document.querySelector(".thank-you");
const subBtn=document.getElementById("submit");
const item=document.querySelectorAll(".rating__item");
let span= document.getElementById("span");

item.forEach((btn, i=0) => {
    btn.addEventListener("click", function(e){
        e.preventDefault();
        span.textContent = i+1;
    })
});

subBtn.addEventListener("click", function(e) {
    e.preventDefault();
    ratingState.style.display="none";
    thankYou.style.display="flex"
})