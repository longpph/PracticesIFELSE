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