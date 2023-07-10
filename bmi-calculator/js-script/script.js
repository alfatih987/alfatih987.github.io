function CountBMI() {
    let tinggi = document.getElementById("tinggi")
    let berat = document.getElementById("berat")

    let result = document.getElementById("result")
    let type = document.getElementById("type")

    let BMI = berat.value / (tinggi.value * tinggi.value)

    
    if(berat.value == "" || tinggi.value == ""){
        result.innerHTML = ""
        type.innerHTML = "mohon isi tinggi dan berat terlebih dahulu"
    } else{
        if (BMI < 18.5) {
            result.innerHTML = BMI.toFixed(1)
            type.innerHTML = "under weight";
            result.style.color= "orange"
            type.style.color = "orange"
        } else if (BMI >= 18.5 && BMI < 25) {
            result.innerHTML = BMI.toFixed(1)
            type.innerHTML = "normal";
            result.style.color= "green"
            type.style.color = "green"
        } else if (BMI >= 25 && BMI < 30) {
            result.innerHTML = BMI.toFixed(1)
            type.innerHTML = "overweight";
            result.style.color= "orange"
            type.style.color = "orange"
        } else if(BMI >= 30) {
            result.innerHTML = BMI.toFixed(1)
            type.innerHTML = "obecity";
            result.style.color= "red"
            type.style.color = "red"
        }
    }
    
}