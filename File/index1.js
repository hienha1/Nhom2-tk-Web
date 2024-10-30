const menu = document.getElementsByClassName("bars")[0]; // Lấy phần tử đầu tiên có class "bars"
const navbar = document.getElementsByClassName("navbar")[0]; // Lấy phần tử đầu tiên có class "navbar"

function show() {
    menu.classList.toggle('fa-times'); // Chuyển đổi class 'fa-times'
    menu.classList.toggle('active'); // Chuyển đổi class 'active'
}

window.onscroll = () => {
    menu.classList.remove('fa-times'); // Loại bỏ class 'fa-times' khi cuộn
    menu.classList.remove('active'); // Loại bỏ class 'active' khi cuộn
}

document.querySelector('.search-icon').onclick = () => {
    document.querySelector('#search-form').classList.toggle('active'); // Chuyển đổi trạng thái form tìm kiếm
}

function showclose() {
    document.querySelector('#search-form').classList.remove('active'); // Loại bỏ class 'active' khỏi form tìm kiếm
}
