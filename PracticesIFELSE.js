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

function tinhDienTich() {
    let a = document.getElementById("canhA").value;
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

function tinhDienTichHCN() {
    let a = document.getElementById("canhA").value;
    let b = document.getElementById("canhB").value;
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
    document.getElementById("ketQua").innerHTML = "Diện tích hình chữ nhật (" + a + " x " + b + ") là: " + dienTich + "cm2";
}

function tinhDienTichTamGiac() {
    let a = document.getElementById("canhA").value;
    let b = document.getElementById("canhB").value;
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
    document.getElementById("ketQua").innerHTML = "Diện tích tam giác vuông có 2 cạnh kề " + a + " và " + b + " là: " + dienTich + "cm2";
}