// Nave and nave box container class shude be all
// sequences and the same class is active or deactivate by clicking and indexing

let nav = document.querySelectorAll(".tool");
let navBox = document.querySelectorAll(".edit-box");
let rotatArrow = document.querySelectorAll(".C-rotate");

nav.forEach((el, i) => {
    el.addEventListener("click", function () {
        if(rotatArrow[i].classList.contains("active")){
            rotatArrow[i].classList.remove("active");
            navBox[i].classList.remove("active");
        }else {
            rotatArrow[i].classList.add("active");
            navBox[i].classList.add("active")
        }
    })
})

// Color picker
let pickColor = document.getElementById("pickColor");
let colorHex = document.getElementById("colorHex");

pickColor.oninput = (e)=> {
    colorHex.value = e.target.value;
}

colorHex.oninput = (e)=> {
    pickColor.value = e.target.value;
}