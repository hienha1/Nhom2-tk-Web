document.getElementById("name").addEventListener("input",function(){
    let nameField = this.value;
    this.value = nameField.replace(/\b\w/g, function(char){
        return char.toUpperCase();
    });
});

document.getElementById("reservationForm").addEventListener("submit",function(event){
    event.preventDefault();

    let name = document.getElementById("name").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let date = document.getElementById("date").value;
    let time = document.getElementById("time").value;
    let guests = document.getElementById("guests").value;

    if(!name || !phone ||!date||!time||!guests){
        alert("Vui long dien du thong tin.");
        return;
    }

    let phonePattern = /^0\d{9}$/;
    if(!phonePattern.test(phone)){
        alert("Vui long nhap so dien thoai hop le.");
        return;
    }

    let selectedDate = new Date(date);
    let currentDate = new Date();
    currentDate.setHours(0, 0, 0, 0); 

    if (selectedDate < currentDate) {
        alert("Không thể đặt bàn cho ngày trước ngày hôm nay.");
        return;
    }

    let maxReservationDate = new Date();
    maxReservationDate.setMonth(maxReservationDate.getMonth() + 3);

    if (selectedDate > maxReservationDate) {
        alert("Không thể đặt bàn quá 3 tháng kể từ hôm nay.");
        return;
    }
    let selectedDay = selectedDate.getDay();
    let [hour, minute] = time.split(":").map(Number);

    
    if (
        (selectedDay >= 1 && selectedDay <= 5 && (hour < 9 || hour > 22 || (hour === 22 && minute > 0))) || 
        ((selectedDay === 0 || selectedDay === 6) && (hour < 8 || hour > 23 || (hour === 23 && minute > 30))) 
    ) {
        alert("Thời gian đặt bàn không hợp lệ. Vui lòng đặt trong khung giờ hoạt động.");
        return;
    }

    alert("Dat ban thanh cong!");
});