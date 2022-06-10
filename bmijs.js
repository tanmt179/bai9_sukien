function a() {
    let a = +document.getElementById('a').value;
    let b = +document.getElementById('b').value;
    b=b/100;
    let c = a / Math.pow(b, 2);
    c=c.toFixed(2);
    if (c < 18.5) {
        document.getElementById('in').innerHTML = "Chỉ số BMI của bạn là:" + c + "<br>Underweight: Bạn đang suy dinh dưỡng,cố gắng ăn và tập luyện thể thao";
    } else if (c < 25) {
        document.getElementById('in').innerHTML = "Chỉ số BMI của bạn là:" + c + "<br>Normal: Cơ thể bạn bình thường,cố gắng duy trì nhé";
    } else if (c < 30) {
        document.getElementById('in').innerHTML = "Chỉ số BMI của bạn là:" + c + "<br>Overweight: Bạn có nguy cơ béo phì,cố gắng luyện tập thể thao đê cơ thể cân đối nào";
    } else {
        document.getElementById('in').innerHTML = "Chỉ số BMI của bạn là:" + c + "<br>Obese: Bạn đang béo phì";
    }
}