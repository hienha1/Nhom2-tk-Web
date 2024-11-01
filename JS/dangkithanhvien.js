const ho_ten = document.getElementById("name");
const dia_chi_email = document.getElementById("email");
const so_dien_thoai = document.getElementById("phone");

function dangki(event) {
    event.preventDefault();
    if (validateTen(ho_ten.value.trim()) === false) {
        alert("Vui lòng nhập tên hợp lệ!");
        return;
    }
    if (validateEmail(dia_chi_email.value.trim()) === false) {
        alert("Vui lòng nhập email hợp lệ!");
        return;
    }
    if (validateSDT(so_dien_thoai.value.trim()) === false) {
        alert("Vui lòng nhập số điện thoại hợp lệ!");
        return;
    }
    alert("Đăng ký thành công!");
}

function validateEmail(value) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(value);
}

function validateTen(value) {
    const regex = /^[a-zA-ZÀÁÂÃÈÉÊÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẰẮẲẴẸẺẼỀỀỂƯơăâđêêíọôơủứừữỳỵỷỹỶỸĐƠƠƯỚỞỜỢỚƯỚưỜỢưõÁẮÂĨŨÊéếáằâắẵãđêếĩũơứạảấầậầẤẤệểĩễỆềấếảửỴỤÝỢỰ ]+$/;
    return regex.test(value);
}


function validateSDT(value) {
    const regex = /(84|0[3|5|7|8|9])+([0-9]{8})\b/g;
    return regex.test(value);
}

const side = document.querySelector(".sidebar");

function toggleMenu() {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar.style.display === 'block') {
        hideSideBar(); 
    } else {
        showSideBar(); 
    }
}

function showSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'block'; 
}

function hideSideBar() {
    const sidebar = document.querySelector('.sidebar');
    sidebar.style.display = 'none'; 
}
