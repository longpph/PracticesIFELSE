// Bài 1
function chuyenDoi() {
    let celsius = document.getElementById("doC").value;
    if (celsius === "") {
        alert("Vui lòng nhập vào một số!");
        return;
    }
    celsius = parseFloat(celsius);
    let fahrenheit = (celsius * 1.8) + 32;
    document.getElementById("ketQua1").innerHTML = celsius + "°C bằng " + fahrenheit + "°F <br>";
}

// Bài 2
function doiSangFeet() {
    let met = document.getElementById("soMet").value;
    if (met === "") {
        alert("Vui lòng nhập số mét!");
        return;
    }
    met = parseFloat(met);
    let feet = met * 3.28084;
    feet = feet.toFixed(2);
        document.getElementById("ketQua2").innerHTML = met + " mét = " + feet + " feet";
}

// Bài 3
function tinhDienTich() {
    let a = document.getElementById("canhA3").value;
    if (a === "") {
        alert("Vui lòng nhập độ dài cạnh a!");
        return;
    }
    a = parseFloat(a);
    if (a <= 0) {
        alert("Độ dài cạnh phải lớn hơn 0!");
        return;
    }
    let dienTich = a * a;
    document.getElementById("ketQua3").innerHTML = "Diện tích hình vuông có cạnh bằng " + a + " là: " + dienTich + "cm2";
}

// Bài 4
function tinhDienTichHCN() {
    let a = document.getElementById("canhA4").value;
    let b = document.getElementById("canhB4").value;
    if (a === "" || b === "") {
        alert("Vui lòng nhập đầy đủ cả 2 cạnh a và b!");
        return;
    }
        a = parseFloat(a);
        b = parseFloat(b);
    if (a <= 0 || b <= 0) {
        alert("Độ dài các cạnh phải lớn hơn 0!");
        return;
    }
    let dienTich = a * b;
    document.getElementById("ketQua4").innerHTML = "Diện tích hình chữ nhật (" + a + " x " + b + ") là: " + dienTich + "cm2";
}

// Bài 5
function tinhDienTichTamGiac() {
    let a = document.getElementById("canhA5").value;
    let b = document.getElementById("canhB5").value;
    if (a === "" || b === "") {
        alert("Vui lòng nhập đầy đủ cả 2 cạnh a và b!");
        return;
    }
    a = parseFloat(a);
    b = parseFloat(b);
    if (a <= 0 || b <= 0) {
        alert("Độ dài các cạnh phải lớn hơn 0!");
        return;
    }
    let dienTich = (a * b) / 2;
    document.getElementById("ketQua5").innerHTML = "Diện tích tam giác vuông có 2 cạnh kề " + a + " và " + b + " là: " + dienTich + "cm2";
}

// Bài 6
function giaiPhuongTrinhBac1() {
    let a = parseFloat(document.getElementById("heSoA6").value);
    let b = parseFloat(document.getElementById("heSoB6").value);
    let vungKetQua = document.getElementById("ketQua6");
    if (isNaN(a) || !isNaN(b) === false) {
        vungKetQua.innerHTML = "<span style='color: red;'>Vui lòng nhập đầy đủ cả a và b!</span>";
        return;
    }
    if (a === 0) {
        if (b === 0) {
            vungKetQua.innerHTML = "Phương trình có vô số nghiệm.";
        } else {
            vungKetQua.innerHTML = "Phương trình vô nghiệm.";
        }
    } else {
        let x = -b / a;
        vungKetQua.innerHTML = "Phương trình có nghiệm duy nhất: x = " + x;
    }
}

// Bài 7
function giaiPhuongTrinhBac2() {
    let a = parseFloat(document.getElementById("heSoA7").value);
    let b = parseFloat(document.getElementById("heSoB7").value);
    let c = parseFloat(document.getElementById("heSoC7").value);
    let ketQua = document.getElementById("ketQua7");
    if (isNaN(a) || isNaN(b) || isNaN(c)) {
        ketQua.innerHTML = "<span style='color:red;'>Vui lòng nhập đầy đủ cả 3 hệ số a, b và c!</span>";
        return; 
    }
    if (a === 0) {
        if (b === 0) {
            ketQua.innerHTML = (c === 0) ? "Hệ số a = 0, phương trình có vô số nghiệm." : "Hệ số a = 0, phương trình vô nghiệm.";
            return;
        }
        let x = -c / b;
        ketQua.innerHTML = "Hệ số a = 0, phương trình có 1 nghiệm duy nhất: x = " + x;
        return; 
    }
    let delta = b * b - 4 * a * c;
    if (delta < 0) {
        ketQua.innerHTML = "Phương trình vô nghiệm (Delta < 0).";
        return;
    }
    if (delta === 0) {
        let x = -b / (2 * a);
        ketQua.innerHTML = "Phương trình có nghiệm kép: x₁ = x₂ = " + x;
        return;
    }
    let x1 = (-b + Math.sqrt(delta)) / (2 * a);
    let x2 = (-b - Math.sqrt(delta)) / (2 * a);
    ketQua.innerHTML = "Phương trình có 2 nghiệm phân biệt:<br>" + 
                       "x₁ = " + x1 + "<br>" + 
                       "x₂ = " + x2;
}

// Bài 8
function kiemTraTuoi() {
    let tuoi = parseFloat(document.getElementById("nhapTuoi8").value);
    let ketQua = document.getElementById("ketQua8");
    if (isNaN(tuoi)) {
        ketQua.innerHTML = "<span style='color: red;'>Vui lòng nhập vào một số!</span>";
        return;
    }
    if (!Number.isInteger(tuoi)) {
        ketQua.innerHTML = "Tuổi của một người phải là một số nguyên!";
        return;
    }
    if (tuoi <= 0 || tuoi >= 120) {
        ketQua.innerHTML = "Số " + tuoi + " KHÔNG PHẢI là tuổi của một người (Tuổi phải lớn hơn 0 và nhỏ hơn 120).";
        return;
    }
    ketQua.innerHTML = "Số " + tuoi + " là tuổi hợp lệ của một người.";
}

// Bài 12
function tinhLaiNganHang() {
    let P = parseFloat(document.getElementById("soTienGoc12").value);
    let n = parseFloat(document.getElementById("soThang12").value);
    let phanTramLai = parseFloat(document.getElementById("laiSuat12").value);
    let ketQua = document.getElementById("ketQua12");
    if (isNaN(P) || isNaN(n) || isNaN(phanTramLai)) {
        ketQua.innerHTML = "<span style='color: red;'>Vui lòng nhập đầy đủ các thông tin!</span>";
        return;
    }
    if (P <= 0 || n <= 0 || phanTramLai <= 0) {
        ketQua.innerHTML = "Số tiền, số tháng và lãi suất phải lớn hơn 0!";
        return;
    }
    if (!Number.isInteger(n)) {
        ketQua.innerHTML = "Số tháng gửi/vay phải là một số nguyên!";
        return;
    }
    let r = phanTramLai / 100; 
    let tongTien = P * ((1 + r) ** n);
    let tienLai = tongTien - P;
    ketQua.innerHTML = "Sau " + n + " tháng, kết quả là:<br>" +
                       "- Tổng tiền lãi nhận được: " + Math.round(tienLai).toLocaleString('vi-VN') + " VNĐ<br>" +
                       "- Tổng số tiền cả gốc lẫn lãi: " + Math.round(tongTien).toLocaleString('vi-VN') + " VNĐ";
}