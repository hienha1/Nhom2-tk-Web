const side = document.getElementsByClassName("sidebar")[0];
side.style.display = 'none';
function showSideBar(){
    side.style.display = 'flex';
}

function hideSideBar(){
    side.style.display = 'none';
}

const trang = document.getElementById("trang-chu");
const thuc_don = document.getElementsByClassName("menu section-padding")[0];
const lien_he = document.getElementsByClassName("footers section-padding")[0];
function den1(){
    trang.scrollIntoView({ behavior: "smooth" });
}
function den2(){
    thuc_don.scrollIntoView({ behavior: "smooth" });
}
function den3(){
    lien_he.scrollIntoView({ behavior: "smooth" });
}
// function scroll() {
//     const x = window.scrollY;
//     if (x > 80) {
//         toTop.classList.add("active");
//     } else {
//         toTop.classList.remove("active");
//     }
// }

// window.addEventListener("scroll", scroll);


const menus = [
    document.getElementById("combo"),
    document.getElementById("ga-ran"),
    document.getElementById("ga-nuong"),
    document.getElementById("an-kem"),
    document.getElementById("trang-mieng"),
    document.getElementById("do-uong")
];

function showMenu(index){
    for(let i = 0; i < menus.length; i++){
        menus[i].classList.remove("active");
        menus[i].style.display = 'none';
    }
    menus[index].style.removeProperty("display");
    menus[index].classList.add("active");
}

function show(){
    showMenu(0); 
}
function show1(){ 
    showMenu(1); 
}
function show2(){ 
    showMenu(2); 
}
function show3(){ 
    showMenu(3); 
}
function show4(){ 
    showMenu(4);
}
function show5(){ 
    showMenu(5); 
}


